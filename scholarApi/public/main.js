const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Late Syed Abul Hasan Ali Hasani Nadw (Ali Miyan)',
            bornIn: 'Agra, India',
            age: '86',
        }),
    }).then(res => {
        if (res.ok) return res.json()
    }).then(response => {
        window.location.reload(true)
    })
})


deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Late Syed Abul Hasan Ali Hasani Nadw (Ali Miyan)'
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            if (response === 'No information to delete') {
                messageDiv.textContent = 'No information to delete'
            } else {
                window.location.reload(true)
            }
        })
})