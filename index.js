const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')
const moment = MomentRange.extendMoment(M)

let year = moment().range('year')

_.forEach(Array.from(year.by('months')), month => {
    console.log(_.pad(month.format('MMMM'), 60, '*'))
    console.log("\n")
    console.log('Sunday Monday  Tuesday  Wednesday Thursday Friday  Saturday')

    let monthRange = month.range('month')
    let firstDay = monthRange.start.day()
    let lastDay = monthRange.end.day()

    let now = moment()

let year = now.range('year')

    let days = Array.from(month.range ('month').by('days'))
    let paddedDays=_.map(days, day =>{
            let date = day.date()
            if (day.month() == 8 && day.date()  ==  10){
              date= chalk.blue(date);
            }
            else if (day.month() == 10 && day.date()  ==  06){
              date= chalk.red(date);
              console.log(" ")
            }
           //return _.padStart(date, 4, '  ' )
            return _.padEnd(date, 2, ' ' )
        })

        for (i = 0; i < month.day(); i++) {
          paddedDays.unshift('  ');
      }

      paddedDays = _.chunk(paddedDays, 7);
      paddedDays.forEach(week => {console.log(week.join("       "))})

      console.log("\n\n")
})