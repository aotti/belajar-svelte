<script>
  import { validateCreateRoom } from "./validation";
</script>

<div class="border animate-fade-right animate-once">
    <h1> Create Room Form </h1>

    <form class="w-1/2 flex flex-col gap-2 my-1" onsubmit={ev => validateCreateRoom(ev)}>
        <div class="flex justify-between">
            <label for="name"> Name </label>
            <input type="text" id="name" class="border rounded-md" placeholder="gaming room">
        </div>
        <div class="flex justify-between">
            <label for="password"> Password </label>
            <input type="password" id="password" class="border rounded-md" placeholder="max. 8 letters">
        </div>
        <div class="flex justify-between">
            <label for="mode"> Mode </label>
            <select id="mode" class="border rounded-md w-1/2">
                <option value="normal"> Normal </option>
                <option value="hard"> Hard </option>
            </select>
        </div>
        <div class="flex justify-between">
            <p id="error"></p>
            <button type="submit" class="bg-green-400 p-1 rounded-md cursor-pointer active:bg-green-600"> Create </button>
        </div>
    </form>
</div>