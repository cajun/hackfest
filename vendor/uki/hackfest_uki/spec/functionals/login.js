describe 'login controller'
  before
    login = hackfest_uki.controller.login
  end

  after
    // ...
  end

  it 'should be able to register a user'
  login().should.respond_to 'register'
  end
end
