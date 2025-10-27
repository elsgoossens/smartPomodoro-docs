find . \( -type d -o -name "*.php" -o -name "*.pem" \) \
    -not -path "./node_modules/*" \
    -not -path "./vendor/*" \
    -not -path "./build/*" \
    -not -path "./.git/*" \
    -not -path "./.wordpress-deploy/*" \
    | sed -e 's;[^/]*/;|   ;g'
