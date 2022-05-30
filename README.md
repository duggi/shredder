```
        _____ _             _   _
  ~~~~ |   __| |_ ___ ___ _| |_| |___ ___  ~~~~
  ~~~~ |__   |   |  _| -_| . | . | -_|  _| ~~~~
   ~~~ |_____|_|_|_| |___|___|___|___|_|   ~~~
    ~~                                     ~~
    ~~          Console shredding          ~~

-----------------------------------------------
👉 Shredder runs in the console
👉 Sample output is provided in HTML markup
-----------------------------------------------

#
# compares two arbitrary collections and splits
# them into matches and diffs across specified
# \`matchProp\` of each collection

#
# grp \`fleet\` constants
#   fa = faa     = faa-grp.js
#   at = atlas   = atlas-grp.js
#   av = avianis = avianis-grp.js

#
# each collection must be structured as a json
#   {
#     collection: array of json objects,
#     matchProp:  key name that must be present
#                 in each json object in
#                 \`collection\`
#   }

#
# split(fleet, xFleet)
#   splits \`fleet\` into matches and diffs
#   comparing each tail in \`fleet\` against
#   each tail number in \`xFleet\`

#
# match(fleet, xFleet)
#   returns matches only

#
# wrap(aircraft, fleet)
#   wraps a returned collection of match() with
#   \`matchProp\` of \`fleet\`
```
