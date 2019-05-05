import fs from 'fs';

const source = `${__dirname}/../config/database.json`;
let users = (fs.existsSync(source) ? JSON.parse(fs.readFileSync(source, {encoding: 'utf8'})) : []);

function findAll() {
  return users;
}

function find(id) {
  return users.find((user) => { return user.id === Number(id); });
}

function findByUsername(username) {
  return users.find((user) => { return user.username === username; });
}

function insert(data) {
  const index = users.findIndex((user) => {
    return user.id === Number(data.id);
  });

  if (index < 0) {
    users.push(data);
  }

  save(users);
  return find(data.id);
}

function update(data) {
  const index = users.findIndex((user) => { return user.id === Number(data.id) });
  if (index >= 0) {
    users[index] = data;
  }

  save(users);
  return find(data.id);
}

function remove(id) {
  const index = users.findIndex((user) => { return user.id === Number(user.id) });
  if (index >= 0) {
    users.splice(index, 1);
  }

  save(users);

  return (!find(id));
}

function validateData(user) {
  let valid = true;

  if (!user.email || (user.email && user.email.length === 0)) valid = false;

  return valid;
}

function save(data) {
  fs.writeFileSync(source, JSON.stringify(users));
  // users = data;
}

export { findAll, find, findByUsername, validateData, insert, update, remove };
