<script>
  import Inpu from "./inputtext.svelte";

  let Visible = false;
  let accountVisible = true;

  function Visibility() {
    accountVisible = false;

    setTimeout(() => {
      Visible = true;
    }, 2000);
  }
</script>

<main>
  <img src="/img/logo.png" alt="loggo" class="logo">
  {#if Visible}
    <button class="topics">◷</button>
    <button class="upgrade">Upgrade to Pro</button>
    <button class="logged">logged in as</button>
    <a href="as" class="feed"><p>Send Feedback 💡</a>
    <p class="words"><b>14,842 </b>words left</p>
    <Inpu/>
  {/if}

  {#if accountVisible}
    <div class="account">
      <div class="center">
        <h2>Continue with</h2>
        <button on:click={Visibility} class="google">Google</button>
        <button on:click={Visibility} class="gitHub">GitHub</button>
        <p>Need help? Contact <a href="as">support@kal.chat</a></p>
      </div>
    </div>
  {/if}
</main>

<style>
  .account {
    display: grid;
    place-items: center;
    margin-top: 310px;
  }
  .logo{
        width: 65px;
		position: fixed;
		margin: -5px 5px;
        
    }
    
	h2{
		text-transform: uppercase;
	}
	.topics{
		position: fixed;
		color: white;
		background-color: #1853c1;
		font-size: 30px;
		font-weight: 10px;
		height: 55px;
		padding: 1px 1px;
		margin-top: 60px;
		left: 0px;
		border-top-right-radius: 40px;
		border-bottom-right-radius: 40px;
		border: none;
		width: 72px;
	}
	.upgrade{
		position: fixed;
		right: 208px;
		width: 169px;
		border-radius: 25px;
		height: 44px;
		background-color: #1853c1;
		color: white;
		border: none;
		
	}
	.logged{
		position: fixed;
		right: 24px;
		width: 169px;
		border-radius: 25px;
		height: 44px;
		background-color: #0e2249;
		text-transform: uppercase;
		font-size: 14px;
		color: rgb(199, 199, 199);
		border: none;
	}.feed p{
		position: fixed;
		bottom: 9px;
		left: 25px;
		color: #4581c9;
		text-decoration: none;
		font-size: 14px;
	}.words{
		position: fixed;
		bottom: 9px;
		right: 25px;
		color: #808286;
		text-decoration: none;
		font-size: 14px;
	}.words b{color: rgb(28, 170, 28);}
	.center {
		width: 380px;
		margin: 10px;
	  }
	  .center h2 {
		color: white;
		font-weight: 400;
		font-size: 26px;
		text-transform: none;
	  }
	  .center p{
		color: rgb(193, 193, 193);
		font-size: 15px;
		margin: 35px 1px;
	  }
	  .center button {
		width: 100%;
		margin: 10px 1px;
		border: none;
		height: 50px;
	  }
	  .google{
		color: black;
		font-size: 18px;
		font-weight: 500;
		border-radius: 20px;
	  }
	  .gitHub{
		color: #ffffff;
		font-size: 18px;
		background-color: rgb(56, 56, 56);
		font-weight: 500;
		border-radius: 20px;
	  }
    @media (max-width: 640px) {
      .upgrade{
			position: fixed;
			right: 20px;
			font-size: 15px;
			width: 160px;
			border-radius: 25px;
			height: 42px;
		}
		.logged{
			display: none;
		}
		.logo{
			width: 55px;
		}
		.topics{
		font-size: 25px;
		font-weight: 8px;
		height: 50px;
		margin-top: 55px;
		width: 55px;
		}
		
    }
</style>