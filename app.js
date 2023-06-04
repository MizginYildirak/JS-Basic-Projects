const btn = document.querySelector(".btn")
const inputValue = document.getElementById("amount")
const loremText = document.querySelector(".lorem-text")

let texts = [
    "“wandering in the summer in the woods of Neldoreth [Beren] came upon Lúthien, daughter of Thingol and Melian, at a time of evening under moonrise, as she danced upon the unfading grass in the glades beside Esgalduin. Then all memory of his pain departed from him, and he fell into an enchantment; for Lúthien was the most beautiful of all the Children of Ilúvatar. Blue was her raiment as the unclouded heaven, but her eyes were grey as the starlit evening; her mantle was sewn with golden flowers, but her hair was dark as the shadows of twilight. As the light upon the leaves of trees, as the voice of clear waters, as the stars above the mists of the world, such was her glory and her loveliness; and in her face was a shining light.”",
    "“Take now this Ring,' he said; 'for thy labours and thy cares will be heavy, but in all it will support thee and defend thee from weariness. For this is the Ring of Fire, and herewith, maybe, thou shalt rekindle hearts to the valour of old in a world that grows chill.”",
    "“The doom of the Elves is to be immortal, to love the beauty of the world, to bring it to full flower with their gifts of delicacy and perfection, to last while it lasts, never leaving it even when ‘slain’, but returning – and yet, when the Followers come, to teach them, and make way for them, to ‘fade’ as the Followers grow and absorb the life from which both proceed. The Doom (or the Gift) of Men is mortality, freedom from the circles of the world.”",
    "“There was Eru, the One, who in Arda is called Ilúvatar; and he made first the Ainur, the Holy Ones, that were the offspring of his thought, and they were with him before aught else was made. And he spoke to them, propounding to them themes of music; and they sang before him, and he was glad. But for a long while they sang only each alone, or but few together, while the rest hearkened; for each comprehended only that part of the mind of Ilúvatar from which he came, and in the understanding of their brethren they grew but slowly. Yet ever as they listened they came to deeper understanding, and increased in unison and harmony.”",
    "“But Sauron was not of mortal flesh, and though he was robbed now of that shape in which had wrought so great an evil, so that he could never again appear fair to the eyes of Men, yet his spirit arose out of the deep and passed as a shadow and a black wind over the sea, and came back to Middle-earth and to Mordor that was his home. There he took up again his great Ring in Barad-dur, and dwelt there, dark and silent, until he wrought himself a new guise, an image of malice and hatred made visible; and the Eye of Sauron the Terrible few could endure.”",
    "“The song of Lúthien before Mandos was the song most fair that ever in words was woven, and the song most sorrowful that ever the world shall hear. Unchanged, imperishable, it is sung still in Valinor beyond the hearing of the world, and listening the Valar are grieved. For Lúthien wove two themes of words, of the sorrow of the Eldar and the grief of Men, of the Two Kindreds that were made by Ilúvatar to dwell in Arda, the Kingdom of Earth amid the innumerable stars. And as she knelt before him her tears fell upon his feet like rain upon stones; and Mandos was moved to pity, who never before was so moved, nor has been since.”",
    "“Love not too well the work of thy hands and the devices of thy heart; and remember that the true hope of the Noldor lieth in the West, and cometh from the Sea.”",
    "“For if joyful is the fountain that rises in the sun, its springs are in the wells of sorrow unfathomable at the foundations of the Earth.”",
    "“All have their worth and each contributes to the worth of the others.”",
    "“But of bliss and glad life there is little to be said, before it ends; as works fair and wonderful, while they still endure for eyes to see, are ever their own record, and only when they are in peril or broken for ever do they pass into song.”"
]

// counter = 0

btn.addEventListener("click", () => {
    const value = parseInt(inputValue.value)

    const random = texts[Math.floor(Math.random() * texts.length)]

    if (value === "" || isNaN(value) || value < 0 || value > 9 || value === 1) {
       let newText = document.createElement("div")
        loremText.innerHTML = random
    }
})