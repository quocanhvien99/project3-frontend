const submit = document.getElementById('submit-btn');
const email = document.getElementById('email');
const password = document.getElementById('password');
submit.addEventListener('click', async (event) => {
	event.preventDefault();
	const data = { email: email.value, password: password.value };
	if (!data.email || !data.password) return;
	const res = await fetch('http://localhost:3000/user/login', {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
	if (res.status === 200) {
		localStorage.setItem('isLoggedIn', true);
		location.replace('/importantPage.html');
		return;
	}
	const resData = await res.text();
	alert(resData);
});
