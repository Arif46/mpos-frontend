<template>
  <div>
    <form class="form-signin" @submit.prevent="send">
		<div class="form-group">
			<label for="inputUsername">Username</label>
			<input
			class="form-control"
			v-model="username"
			type="text"
			id="inputUsername"
			placeholder="Username"
			required
			autofocus
			/>
		</div>
		<div class="form-group">
			<label for="message">Message</label>
			<textarea 
				class="form-control"
				v-model="newmessage"
				type="text"
				id="message"
				placeholder="Message"
				required
				autofocus
			/>
			</textarea>  
		</div>
		<div class="form-group">
        	<button type="submit" class="btn btn-success">Save</button>
		</div>
    </form>
  </div>
</template>


<script>
import iziToast from 'izitoast';
export default {
  name: "vue",
  components: {},
  data() {
    return {
      username: "",
      newmessage: "",
      allMessage: [],
    };
  },
  sockets: {
    chatMessage: function (data) {
      this.allMessage.push(data)
	  	let src = 'http://localhost:8080/audio/sms1.mp3';
		let audio = new Audio(src);
		audio.play();
	  iziToast.show({
		title: 'Hey',
		message: data
		})
    }
  },
   methods: {
    send() {
      this.$socket.emit('chat-message',this.newmessage)
      this.allMessage.push(this.newmessage)
    }
  }
}
</script>