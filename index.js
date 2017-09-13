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
            let date = day.date
            if (day.month() == 9 && day.date()  ==  10){
                date= chalk.red(date)
            }

            return _.padEnd(date, 2, ' ')

              })
              console.log(paddedDays)
/*
    if (firstDay === 0 && i === 0){

        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")
        console.log("29   30   31")
    }
    else if (firstDay === 1 && i === 0){
        
        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28   29   30   31")
    }
    else if (firstDay === 2 && i === 0){
        
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28   29   30   31")
    }
    else if (firstDay === 3 && i === 0){
                
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28   29   30   31")
    }
    else if (firstDay === 4 && i === 0){
                        
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28   29   30   31")
    }
    else if (firstDay === 5 && i === 0){
                                
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28   29   30")
        console.log("31")
    }
    else if (firstDay === 6 && i === 0){
                                        
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28   29")
        console.log("30   31")
    }

    if (firstDay === 0 && i === 1){
    
        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")

    }
    else if (firstDay === 1 && i === 1){

        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28")
    }
    else if (firstDay === 2 && i === 1){
            
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28")
    }
    else if (firstDay === 3 && i === 1){
                    
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28")
    }
    else if (firstDay === 4 && i === 1){
                            
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28")
    }
    else if (firstDay === 5 && i === 1){
                                    
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28")

    }
    else if (firstDay === 6 && i === 1){
                                            
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28")

    }   
    else if (firstDay === 0 && i === 2){
        
        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")
        console.log("29   30   31")
    }
    else if (firstDay === 1 && i === 2){
                
        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28   29   30   31")
    }
    else if (firstDay === 2 && i === 2){
                
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28   29   30   31")
    }
    else if (firstDay === 3 && i === 2){
                        
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28   29   30   31")
    }
    else if (firstDay === 4 && i === 2){
                                
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28   29   30   31")
    }
    else if (firstDay === 5 && i === 2){
                                        
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28   29   30")
        console.log("31")
    }
    else if (firstDay === 6 && i === 2){
                                                
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28   29")
        console.log("30   31")
    }
    else if (firstDay === 0 && i === 3){
        
        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")
        console.log("29   30")
    }
    else if (firstDay === 1 && i === 3){
                
        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28   29   30")
    }
    else if (firstDay === 2 && i === 3){
                
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28   29   30")
    }
    else if (firstDay === 3 && i === 3){
                        
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28   29   30")
    }
    else if (firstDay === 4 && i === 3){
                                
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28   29   30")
    }
    else if (firstDay === 5 && i === 3){
                                        
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28   29   30")

    }
    else if (firstDay === 6 && i === 3){
                                                
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28   29")
        console.log("30")
    }       

    else if (firstDay === 0 && i === 4){
        
        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")
        console.log("29   30   31")
    }
    else if (firstDay === 1 && i === 4){
                
        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28   29   30   31")
    }
    else if (firstDay === 2 && i === 4){
                
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28   29   30   31")
    }
    else if (firstDay === 3 && i === 4){
                        
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28   29   30   31")
    }
    else if (firstDay === 4 && i === 4){
                                
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28   29   30   31")
    }
    else if (firstDay === 5 && i === 4){
                                        
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28   29   30")
        console.log("31")
    }
    else if (firstDay === 6 && i === 4){
                                                
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28   29")
        console.log("30   31")

    }

    else if (firstDay === 0 && i === 5){
        
        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")
        console.log("29   30")
    }
    else if (firstDay === 1 && i === 5){
                
        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28   29   30")
    }
    else if (firstDay === 2 && i === 5){
                
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28   29   30")
    }
    else if (firstDay === 3 && i === 5){
                        
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28   29   30")
    }
    else if (firstDay === 4 && i === 5){
                                
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28   29   30")
    }
    else if (firstDay === 5 && i === 5){
                                        
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28   29   30")

    }
    else if (firstDay === 6 && i === 5){
                                                
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28   29")
        console.log("30")
    } 

    else if (firstDay === 0 && i === 6){
        
        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")
        console.log("29   30   31")
    }
    else if (firstDay === 1 && i === 6){
                
        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28   29   30   31")
    }
    else if (firstDay === 2 && i === 6){
                
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28   29   30   31")
    }
    else if (firstDay === 3 && i === 6){
                        
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28   29   30   31")
    }
    else if (firstDay === 4 && i === 6){
                                
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28   29   30   31")
    }
    else if (firstDay === 5 && i === 6){
                                        
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28   29   30")
        console.log("31")
    }
    else if (firstDay === 6 && i === 6){
                                                
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28   29")
        console.log("30   31")

    }

    else if (firstDay === 0 && i === 7){
        
        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")
        console.log("29   30   31")
    }
    else if (firstDay === 1 && i === 7){
                
        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28   29   30   31")
    }
    else if (firstDay === 2 && i === 7){
                
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28   29   30   31")
    }
    else if (firstDay === 3 && i === 7){
                        
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28   29   30   31")
    }
    else if (firstDay === 4 && i === 7){
                                
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28   29   30   31")
    }
    else if (firstDay === 5 && i === 7){
                                        
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28   29   30")
        console.log("31")
    }
    else if (firstDay === 6 && i === 7){
                                                
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28   29")
        console.log("30   31")

    }

    else if (firstDay === 0 && i === 8){
        
        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")
        console.log("29   30")
    }
    else if (firstDay === 1 && i === 8){
                
        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28   29   30")
    }
    else if (firstDay === 2 && i === 8){
                
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28   29   30")
    }
    else if (firstDay === 3 && i === 8){
                        
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28   29   30")
    }
    else if (firstDay === 4 && i === 8){
                                
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28   29   30")
    }
    else if (firstDay === 5 && i === 8){
                                        
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28   29   30")

    }
    else if (firstDay === 6 && i === 8){
                                                
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28   29")
        console.log("30")
    }

    else if (firstDay === 0 && i === 9){
        
        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")
        console.log("29   30   31")
    }
    else if (firstDay === 1 && i === 9){
                
        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28   29   30   31")
    }
    else if (firstDay === 2 && i === 9){
                
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28   29   30   31")
    }
    else if (firstDay === 3 && i === 9){
                        
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28   29   30   31")
    }
    else if (firstDay === 4 && i === 9){
                                
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28   29   30   31")
    }
    else if (firstDay === 5 && i === 9){
                                        
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28   29   30")
        console.log("31")
    }
    else if (firstDay === 6 && i === 9){
                                                
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28   29")
        console.log("30   31")

    }

    else if (firstDay === 0 && i === 10){
        
        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")
        console.log("29   30")
    }
    else if (firstDay === 1 && i === 10){
                
        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28   29   30")
    }
    else if (firstDay === 2 && i === 10){
                
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28   29   30")
    }
    else if (firstDay === 3 && i === 10){
                        
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28   29   30")
    }
    else if (firstDay === 4 && i === 10){
                                
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28   29   30")
    }
    else if (firstDay === 5 && i === 10){
                                        
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28   29   30")

    }
    else if (firstDay === 6 && i === 10){
                                                
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28   29")
        console.log("30")
    }


    else if (firstDay === 0 && i === 11){
        
        console.log(" 1    2    3    4    5    6    7")
        console.log(" 8    9   10   11   12   13   14")
        console.log("15   16   17   18   19   20   21")
        console.log("22   23   24   25   26   27   28")
        console.log("29   30   31")
    }
    else if (firstDay === 1 && i === 11){
                
        console.log("      1    2    3    4    5    6")
        console.log(" 7    8    9   10   11   12   13")
        console.log("14   15   16   17   18   19   20")
        console.log("21   22   23   24   25   26   27")
        console.log("28   29   30   31")
    }
    else if (firstDay === 2 && i === 11){
                
        console.log("           1    2    3    4    5")
        console.log(" 6    7    8    9   10   11   12")
        console.log("13   14   15   16   17   18   19")
        console.log("20   21   22   23   24   25   26")
        console.log("27   28   29   30   31")
    }
    else if (firstDay === 3 && i === 11){
                        
        console.log("                1    2    3    4")
        console.log(" 5    6    7    8    9   10   11")
        console.log("12   13   14   15   16   17   18")
        console.log("19   20   21   22   23   24   25")
        console.log("26   27   28   29   30   31")
    }
    else if (firstDay === 4 && i === 11){
                                
        console.log("                     1    2    3")
        console.log(" 4    5    6    7    8    9   10")
        console.log("11   12   13   14   15   16   17")
        console.log("18   19   20   21   22   23   24")
        console.log("25   26   27   28   29   30   31")
    }
    else if (firstDay === 5 && i === 11){
                                        
        console.log("                          1    2")
        console.log(" 3    4    5    6    7    8    9")
        console.log("10   11   12   13   14   15   16")
        console.log("17   18   19   20   21   22   23")
        console.log("24   25   26   27   28   29   30")
        console.log("31")
    }
    else if (firstDay === 6 && i === 11){
                                                
        console.log("                               1")
        console.log(" 2    3    4    5    6    7    8")
        console.log(" 9   10   11   12   13   14   15")
        console.log("16   17   18   19   20   21   22")
        console.log("23   24   25   26   27   28   29")
        console.log("30   31")

    }



    i++

    console.log(firstDay)
    console.log(lastDay)
*/
    






  