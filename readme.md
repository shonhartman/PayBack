# Pay Back

This is a simple react app to track payments on a debt

## htaccess

Here is the .htaccess file for apache deployment

```
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```
# PayBack
