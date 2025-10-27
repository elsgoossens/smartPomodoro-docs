find . \
  -type d -lname "*" -prune -o \
  -type d \( -name vendor -o -name node_modules -o -name build -o -name dist -o -name .git \) -prune -o \
  -type f \( -iname "*.php" -o -iname "*.js" -o -iname "*.ts" -o -iname "*.jsx" -o -iname "*.css" -o -iname "*.scss" \) \
  -print0 |
xargs -0 wc -l |
awk '
  NF >= 2 {
    total += $1
    fname = $NF
    if (fname ~ /\.php$/)  php  += $1
    else if (fname ~ /\.js$/)   js   += $1
    else if (fname ~ /\.ts$/)   ts   += $1
    else if (fname ~ /\.jsx$/)  jsx  += $1
    else if (fname ~ /\.css$/)  css  += $1
    else if (fname ~ /\.scss$/) scss += $1
  }
  END {
    print "PHP:   " php " lines"
    print "JS:    " js  " lines"
    print "TS:    " ts  " lines"
    print "JSX:   " jsx " lines"
    print "CSS:   " css " lines"
    print "SCSS:  " scss " lines"
    print "----------------------"
    print "TOTAL: " total " lines"
  }
'
