import Experience_card from "./experience";

export const name = [
    "Face Detection Attendance",
    "AI-Full-Body-Detection"
]

export const image = [
    "https://media-exp1.licdn.com/dms/image/C4E22AQFaVJnOH4USUQ/feedshare-shrink_2048_1536/0/1621313433386?e=1625097600&v=beta&t=KCygGBUHh0lMRESTrR3qUL-WzmE04CaqMMy6Q6xnC2E",
    "https://media-exp1.licdn.com/dms/image/C4E22AQEED8t8krsTKw/feedshare-shrink_800/0/1621175279339?e=1625097600&v=beta&t=RB8hogj-nh4G16xnKmn-Y15vENwBfhYPmmF1dkJ5R4s"

]

export const introduction = [
    "A Project of the Time of Quarantine it was a Attendance Marking System in Python, it car mark attendance with time in Excel Sheet. Just need to register once by giving a single image which is more than enough for it.",
    "A Project of the Time of Quarantine it was a Attendance Marking System in Python, it car mark attendance with time in Excel Sheet. Just need to register once by giving a single image which is more than enough for it."
]

export function CreateExperience(name, image, introduction) {
    return <Experience_card img={image} name={name} intro={introduction}/>
}

