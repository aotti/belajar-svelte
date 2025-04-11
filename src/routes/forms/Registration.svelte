<script>
  import { validateRegistration } from "./validation";
</script>

<div class="border animate-fade-right animate-once">
    <h1 class="mb-4"> Registration Form </h1>

    <form class="w-1/2 flex flex-col gap-2 my-1" onsubmit={ev => validateRegistration(ev)}>
        <div class="flex justify-between">
            <label for="email"> Email </label>
            <input type="text" id="email" class="border rounded-md" placeholder="example@email.com" required>
        </div>
        <div class="flex justify-between">
            <label for="first_name"> First Name </label>
            <input type="text" id="first_name" class="border rounded-md" placeholder="jojohn" required>
        </div>
        <div class="flex justify-between">
            <label for="last_name"> Last Name </label>
            <input type="text" id="last_name" class="border rounded-md" placeholder="dodoe" required>
        </div>
        <div class="flex justify-between">
            <label for="password"> Password </label>
            <input type="password" id="password" class="border rounded-md" placeholder="min. 8 letters" required>
        </div>
        <div class="flex justify-between">
            <label for="confirm_password"> Confirm Password </label>
            <input type="password" id="confirm_password" class="border rounded-md" placeholder="min. 8 letters" required>
        </div>
        <div class="flex justify-between">
            <p id="error"></p>
            <button type="submit" class="bg-green-400 p-1 rounded-md cursor-pointer active:bg-green-600"> Register </button>
        </div>
    </form>
</div>