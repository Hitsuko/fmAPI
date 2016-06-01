# Documentation
Documentation for fmAPI.

# The `$fm` object
It was made to call functions inside it. Ex: `$fm.cookie.eat('testing');`

# Cookies
### `$fm.cookie.cook(name,value)`
Declare a new cookie. This function was made using `my_setcookie`.

#### Parameters
`name` to declare the cookie name.
`value` to declare the cookie value.

### `$fm.cookie.take(name)`
Grab the value of the desired cookie. This function was made using `my_getcookie`.

#### Parameters
`name` was the name of the cookie that you want to search for the value.

### `$fm.cookie.eat(name)`
Delete a cookie.

#### Parameters
`name` was the name of the cookie you want to delete.
