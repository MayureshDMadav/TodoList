function toggleStrikeThrough(checkbox) {
    const textSpan = checkbox.nextElementSibling.querySelector('#todo-text');
    if (checkbox.checked) {
      textSpan.classList.add('checked');
    } else {
      textSpan.classList.remove('checked');
    }
  }