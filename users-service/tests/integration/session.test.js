const app = require('../../src/index');
const supertest = require('supertest');
const { Role, User } = require('../../src/models');
const request = supertest(app);

beforeAll(async () => {
  await User.destroy({ where: {} });
  await Role.destroy({ where: {} });
});

describe('Role', () => {
  it('Should insert a new Role', async () => {
    const role = { name: 'Test' };
    const response = await request.post('/roles').send(role);
    expect(response.body.name).toBe('Test');
  });
});

describe('User', () => {
  it('Should insert a new User', async () => {
    const role = await Role.findOne({ raw: true });
    const user = {
      name: 'Lucas',
      email: 'lucas.carvalho569@gmail.com',
      password: '123',
      roleId: role.id
    };
    const response = await request.post('/users').send(user);
    const isEqual =
      response.body.name === user.name &&
      response.body.email === user.email &&
      response.body.roleId === user.roleId;
    expect(isEqual).toBe(true);
  });
});
