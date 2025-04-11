<script lang="ts">
  import ChattingMessage from "./ChattingMessage.svelte";
  import CreateRoom from "./CreateRoom.svelte";
  import Registration from "./Registration.svelte";

    const formList = $state({
        registration: 'Create Account', 
        createroom: 'Create Game Room', 
        chatting: 'Chatting Message'
    })
    let selectedForm = $state<'registration'|'createroom'|'chatting'>()

    function getSelectedForm(ev: MouseEvent & {currentTarget: EventTarget & HTMLButtonElement}) {
        selectedForm = ev.currentTarget.id as any
    }
</script>

<div class="m-4 flex gap-8">
    <!-- left side  -->
    <section class="border">
        <h1 class="font-bold my-4"> Form List </h1>
        
        <ol>
            {#each Object.entries(formList) as [key, value]}
                <li class="mb-1 text-white">
                    <button type="button" id={key} class="bg-blue-400 p-1 rounded-md cursor-pointer active:bg-blue-600 
                    hover:animate-jump hover:animate-once" 
                    onclick={getSelectedForm}> 
                        {value} 
                    </button>
                </li>
            {/each}
        </ol>
    </section>
    <!-- right side -->
     <section class="w-2xl">
        {#if selectedForm == 'registration'}
            <Registration />
        {:else if selectedForm == 'createroom'}
            <CreateRoom />
        {:else if selectedForm == 'chatting'}
            <ChattingMessage />
        {/if}
     </section>
</div>