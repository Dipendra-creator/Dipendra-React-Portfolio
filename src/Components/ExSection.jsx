import Experience_card from "./experience";

export const name = [
    "Face Detection Attendance",
    "AI-Full-Body-Detection"
]

export const image = [
    "./assets/Face.jpg",
    "./assets/AI.jpg"
]

export const introduction = [
    "A Project of the Time of Quarantine it was a Attendance Marking System in Python, it can mark attendance with time in Excel Sheet. Just need to register once by giving a single image which is more than enough for it.",
    "A Project of the Time of Quarantine it was a AI Full Body Detection, it can be used in AI Automatic Cars and can be used as a Security."
]

export function CreateExperience(name, image, introduction) {
    return <Experience_card img={image} name={name} intro={introduction}/>
}

