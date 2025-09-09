const toggles = document.querySelectorAll('.toggle')
const limit = 2 // aynı anda en fazla 2 seçilebilir

toggles.forEach(toggle =>
  toggle.addEventListener('change', handleChange)
)

function handleChange(e) {
  const checkedToggles = [...toggles].filter(t => t.checked)

  if (checkedToggles.length > limit) {
    // Eğer limit aşıldıysa, en son tıklanan hariç ilkini kapat
    checkedToggles
      .find(t => t !== e.target)
      .checked = false
  }
}
