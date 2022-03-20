

let score = "65"
if (score >= 85 && score <= 100) {
    console.log(`A`)
} else if (score >= 75 && score <= 84) {
    consolog.log(`B`)
} else if (score >= 60 && score <= 74) {
    console.log(`C`)
} else if (score >= 0 && score <= 59) {
    console.log(`D`)
} else {
    console.log(`F`)
}


switch (true) {
    case (score >= 85 && score <= 100) :
    console.log(`A`)
    break
    case (score >= 75 && score <= 84) :
    console.log(`B`)
    break
    case (score >= 60 && score <= 74) :
    console.log(`C`)
    break
    case (score >= 0 && score <= 59) :
    console.log(`D`)
    break
    default:
    console.log(`F`)
}