const jwtDecode=require('jwt-decode');

let a ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJBbGV4IiwiX2lkIjoiNWIxMDQ0MmZkMjliMDUxYWQ4ZjM2ZjYzIiwidXNlcm5hbWUiOiJhamwiLCJwYXNzd29yZCI6IiQyYSQwOCQ0WjFXei5yQm5ERExjMkZiWlRmNzMubzJYSlhpMndGUzh0bi5lSFBQektJaUEyZ2JUVmhnaSIsInRvbWF0cyI6W3sidmFyaWV0eSI6ImNoZXJyeSIsIl9pZCI6IjViMTZhYmQ0ODJhMDE2NGVlOGNkOWM2YSIsInR5cGUiOiJ0b21hdG8ifSx7InZhcmlldHkiOiJjaGVycnkiLCJfaWQiOiI1YjE2YWJkYzgyYTAxNjRlZThjZDljNmIiLCJ0eXBlIjoidG9tYXRvIn0seyJ2YXJpZXR5IjoiY2hlcnJ5IiwiX2lkIjoiNWIxNmIzMmI4MmEwMTY0ZWU4Y2Q5YzZjIiwidHlwZSI6InRvbWF0byJ9LHsidmFyaWV0eSI6ImNoZXJyeSIsIl9pZCI6IjViMTZiODMwODJhMDE2NGVlOGNkOWM2ZCIsInR5cGUiOiJ0b21hdG8ifSx7InZhcmlldHkiOiJjaGVycnkiLCJfaWQiOiI1YjE2Yjg2MjgyYTAxNjRlZThjZDljNmUiLCJ0eXBlIjoidG9tYXRvIn0seyJ2YXJpZXR5IjoiY2hlcnJ5IiwiX2lkIjoiNWIxNmI5ODQ4MmEwMTY0ZWU4Y2Q5YzZmIiwidHlwZSI6InRvbWF0byJ9LHsidmFyaWV0eSI6ImNoZXJyeSIsIl9pZCI6IjViMTZiYThmODJhMDE2NGVlOGNkOWM3MCIsInR5cGUiOiJ0b21hdG8ifSx7InZhcmlldHkiOiJjaGVycnkiLCJfaWQiOiI1YjE2YmIwNDgyYTAxNjRlZThjZDljNzEiLCJ0eXBlIjoidG9tYXRvIn0seyJ2YXJpZXR5IjoiY2hlcnJ5IiwiX2lkIjoiNWIxNmJiNGQ4MmEwMTY0ZWU4Y2Q5YzcyIiwidHlwZSI6InRvbWF0byJ9LHsidmFyaWV0eSI6ImNoZXJyeSIsIl9pZCI6IjViMTZiYjkzODJhMDE2NGVlOGNkOWM3MyIsInR5cGUiOiJ0b21hdG8ifV0sIl9fdiI6MH0sImlhdCI6MTUyODIxNjcyNSwiZXhwIjoxNTI5NDI2MzI1LCJzdWIiOiJhamwifQ.A95LZDY7mrQck7DjyD9i2WJ_E986kNWoeL0c2bxzDRM';
a = jwtDecode(a);
console.log(a);