const {exec} = require('child_process')

const wcs = require('../src/wc-componets')

const next = (array, fn, index = 0) => {
    if (!(index < array.length)) {
        return
    }
    fn(array[index]).then(() => {
        next(array, fn, ++index)
    })
}

next(wcs, ({name, path}) => {
    return new Promise(((resolve, reject) => {

        exec(`vue-cli-service build --no-clean --target wc --name upc-${name} ${path}`,
            (error) => {
            if (error) {
                reject(error)
            } else {
                console.log(` upc-${name} builded`)
                resolve()
            }
        })

    }))
})
