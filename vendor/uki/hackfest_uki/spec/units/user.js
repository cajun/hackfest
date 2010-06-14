describe 'users'
  before
    user = new hackfest_uki.model.User( json_fixture('user') );
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
end
