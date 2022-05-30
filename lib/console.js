const help = () => {
  const header = `
        _____ _             _   _
  ~~~~ |   __| |_ ___ ___ _| |_| |___ ___  ~~~~
  ~~~~ |__   |   |  _| -_| . | . | -_|  _| ~~~~
   ~~~ |_____|_|_|_| |___|___|___|___|_|   ~~~
    ~~                                     ~~
    ~~          Console shredding          ~~
    ~~    \`help()\` — print this manual     ~~

  `

  const instrs = `
#
# compares two arbitrary collections and splits
# them into matches and diffs across specified
# \`matchProp\` of each collection


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
#   wraps a returned collection of split() or
#   match() with \`matchProp\` of \`fleet\`
  `
  console.log(`%c${header} %c${instrs}`, 
    "color: #f0c;", "color: #000;");
}

help();
