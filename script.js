// const character = {
//     name: "Justynian",
//     role: "Wizard",
//     level: 1,
//     skills: ["Fireball", "Healing field"],
//     equipment: {
//         weapon: "dagger",
//         armor: "wooden armor",
//         items: ["Healing potion", "Compass"]
//     }
// }

function characterDescription(mojaPostac) {
    console.log("=== KARTA POSTACI ===")
    console.log(`Imie: ${mojaPostac.name}`)
    console.log(`Klasa: ${mojaPostac.role}`)
    console.log(`Poziom: ${mojaPostac.level}`)

    console.log('')

    console.log("Umiejętności:")
    mojaPostac.skills.forEach((skill) => {
        console.log(`- ${skill}`)
    })


    console.log('')

    console.log("Ekwipunek:")
    console.log(`Broń: ${mojaPostac.equipment.items.armor}`)
    console.log(`Zbroja: ${mojaPostac.equipment.items.weapon}`)

    console.log(`Przedmioty:`)
    mojaPostac.equipment.items.forEach((item) => {
        console.log(`- ${item}`)
    })

    console.log('')
}
function levelUp(mojaPostac) {
    mojaPostac.level++
    characterDescription(mojaPostac)
}
function learnSkill(mojaPostac, newSkill) {
    if (!newSkill) {
        alert("Wprowadż poprawny skill")
        return;
    }
    if (mojaPostac .skills.length === 5) {
        alert("Nie może mieć więcej niż 5 umiejętności")
        return
    }
    mojaPostac .skills.push(newSkill)
}
function createCharacter(name, role) {
    if (name.length === 3) {
        alert("Musi mieć minimum 3 znaki")
        return
    }

    return {
        name: name,
        role: role
    }
}

function addItem(mojaPostac, item) {
    mojaPostac.equipment.items.push(item)
}

function wearArmor(mojaPostac, armor) {
    mojaPostac.equipment.items.armor = armor
}

function wearWeapon(mojaPostac, armor) {
    mojaPostac.equipment.items.armor = armor
}


const mojaPostac = {
    name: "",
    role: "",
    level: 0,
    skills: [],
    equipment: {
        weapon: "",
        armor: "",
        items: []
    }
}

createCharacter("Adam", "pomocniczy")

addItem(mojaPostac, "Kompas", "Kostur", "Szata")





learnSkill(mojaPostac, "Support")

function addSkill() {
    learnSkill(mojaPostac, prompt("Umiejętniść"))
    characterDescription(mojaPostac)
}

function addItemBtn(mojaPostac) {
    mojaPostac.equipment.items.push(prompt("Dodaj przedmiot"))
    characterDescription(mojaPostac)
}

characterDescription(mojaPostac)