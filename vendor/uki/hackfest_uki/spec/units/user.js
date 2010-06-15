describe 'users'
  before
    user = new hackfest_uki.model.User( json_fixture('user') )
    mock_request().and_return('{ id: 100, username: "Bob" }', 'application/json', 200, { Accept: 'users' })
    
  end

  after
    // ...
  end

  it 'should have an id'
    user.id().should.equal 1
  end

  it 'should have a username'
    user.username().should.equal 'Bruce Lee'
  end

  it 'should NOT have a password'
    -{ user.password() }.should.throw_error
  end

  it 'should be able to be registered'
    hackfest_uki.model.User.should.respond_to 'register'
  end

  it 'should be able to register users successfully'
    result = hackfest_uki.model.User.register( 'Bob', 123, 123 )
    
    result.username.should.be 'Bob'
  end
end
