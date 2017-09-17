const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')

//i = to month length? set array with the months dates to call 1 at a time with for eachvia index
const moment = MomentRange.extendMoment(M)

let year = moment().range('year')

_.forEach(Array.from(year.by('months')), month => {
    console.log(_.pad(month.format('MMMM'), 26, ' '))
    console.log(' S    M    T    W    Th   F    S')

    let monthRange = month.range('month')
    let firstDay = monthRange.start.day()
    let lastDay = monthRange.end.day()
    let i = 0

    let now = moment()


console.log(now.year())
let year = now.range('year')
for( let month of year.by('month'))
    {
        console.log(month)
    }
    let days = Array.from(month.range ('month').by('days'))
    let paddedDays=_.map(days,day =>{
            let date = day.date()
            
            if (day.month() == 9 && day.date()  ==  10){
                date= chalk.red(date)
            }

            return _.padEnd(date, 2, ' ')

              })
              
              console.log(paddedDays)
              
            })