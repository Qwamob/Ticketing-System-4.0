document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitTicket');

    submitButton.addEventListener('click', async function (e) {
        e.preventDefault();

        const form = document.getElementById('createTicketForm');
        const formData = new FormData(form);
        const data = {
            Title: formData.get('Title'),
            Description: formData.get('Description'),
            Priority: Number(formData.get('Priority')),
            Category: formData.get('Category'),
            __RequestVerificationToken: formData.get('__RequestVerificationToken')
        };

        try {
            const response = await fetch('/Tickets/Create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'RequestVerificationToken': data.__RequestVerificationToken
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();

            if (responseData.success) {
                window.location.reload();
            } else {
                alert('Error creating ticket: ' + responseData.errors.join('\n'));
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating ticket');
        }
    });
});