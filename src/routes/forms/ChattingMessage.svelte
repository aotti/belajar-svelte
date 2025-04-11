<script>
  import { validateChatting } from "./validation";
</script>

<div class="border animate-fade-right animate-once">
    <h1> Chatting Message Form </h1>

    <div>
        <!-- message container -->
        <div id="message_container" class="border w-1/2 h-40">
            <p> wawan: lelemao </p>
        </div>
        <!-- message input -->
        <form class="w-1/2 flex flex-col gap-2 my-1" onsubmit={ev => validateChatting(ev)}>
            <div class="flex justify-between gap-2">
                <input type="text" id="message" class="grow border rounded-md" placeholder="message here">
                <button type="submit" class="bg-green-400 p-1 rounded-md cursor-pointer active:bg-green-600"> Send </button>
            </div>
        </form>
    </div>
</div>