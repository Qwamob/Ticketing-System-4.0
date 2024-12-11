document.addEventListener('DOMContentLoaded', function () {
    const editRolesModal = document.getElementById('editRolesModal');
    
    editRolesModal.addEventListener('show.bs.modal', async function (event) {
        const button = event.relatedTarget;
        const userId = button.getAttribute('data-user-id');
        const userEmail = button.getAttribute('data-user-email');
        
        // Set user info in modal
        document.getElementById('userId').value = userId;
        document.getElementById('userEmail').textContent = userEmail;

        // Get current user roles
        try {
            const response = await fetch(`/UserManagement/GetUserRoles/${userId}`);
            if (response.ok) {
                const roles = await response.json();
                // Reset all checkboxes
                document.querySelectorAll('input[name="roles"]').forEach(checkbox => {
                    checkbox.checked = roles.includes(checkbox.value);
                });
            }
        } catch (error) {
            console.error('Error fetching user roles:', error);
        }
    });

    document.getElementById('saveRoles').addEventListener('click', async function() {
        const userId = document.getElementById('userId').value;
        const selectedRoles = Array.from(document.querySelectorAll('input[name="roles"]:checked'))
            .map(checkbox => checkbox.value);

        try {
            const response = await fetch('/UserManagement/UpdateRoles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'RequestVerificationToken': document.querySelector('input[name="__RequestVerificationToken"]').value
                },
                body: JSON.stringify({
                    userId: userId,
                    roles: selectedRoles
                })
            });

            if (response.ok) {
                window.location.reload();
            } else {
                alert('Error updating roles');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error updating roles');
        }
    });
});