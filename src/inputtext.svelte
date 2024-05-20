<script>
    let name = '';
    let nahom = '';
    let names = [];

    const chnage = () => {
        if (nahom !== '') {
            if (name === '') {
                name = nahom;
            } else {
                names = [...names, nahom];
            }
            nahom = '';
        }
    }
</script>

<main>
    <section class="contener">
        <div class="maincontener">
            <h6>Choose mode:</h6>
            <button class="faster">Faster responses <span>GPT 3.5 Turbo</span></button>
            <button class="better">Better responses <br> ✅ GPT 4  </button>
            <div>
                
            </div>
            {#if name === ''}
            <div>
                <h3>KAL</h3>
                <h4>Hi Nahom, What can I help you with right now, Nahom?</h4>
                
            </div>
            {:else}
            <div>
                <h2>You</h2>
                <p>{name}</p>
                
            </div>
            {#each names as n}
            <div>
                <h2>You</h2>
                <p>{n}</p>
            </div>
            {/each}
            {/if}
        </div>
    </section>
    <div class="inputfiled">
        <div class="topic">
            <h1>+</h1>
        </div>
        <input bind:value={nahom} placeholder="Ask me anything" />
        <button on:click={chnage}>→</button>
    </div>
</main>
<style>
    .contener {
		width: 100%;
		justify-content: center;
		display: flex;
	  }
	  
	  .maincontener {
		justify-content: flex-end;
		width: 850px;
		top: 100px;
		position: relative;
		display: grid;
	  }
      .maincontener div {
		display: grid;
		flex-direction: row-reverse;
		align-items: center;
		margin-bottom: 10px;
	  }
	  
	  .faster{
		width: 165px;
		border: none;
		top: 70px;
		color: white;
		border-radius: 8px;
		cursor: pointer;
		font-size: 17px;
		height: 68px;
		background-color: #1e57c0;
		position: absolute;
	  }.faster span{
		font-size: 13px;
		color: rgb(214, 214, 214);
	  }
	  .better br{
		font-size: 13px;
		color: #5e9de9;
	  }
	  .better{
		position: absolute;
		width: 165px;
		top: 70px;
		left: 180px;
		cursor: pointer;
		border: none;
		color: #97c6ff;
		border-radius: 8px;
		font-size: 17px;
		height: 68px;
		background-color: #203150;
	  }
	  .maincontener h6{
		font-size: 15px;
		font-weight: 450;
		position: absolute;
	  }
	  .maincontener h2 {
		position: relative;
		margin: 7px 1px;
		font-size: 12px;
		top: 200px;
		justify-self: end;
		font-weight: 500;

	  }
	  .maincontener p {
		margin: 2px;
		color: white;
		justify-self: end;
		top: 200px;
		position: relative;
		border-top-left-radius: 15px;
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		padding: 20px 15px;
		font-size: 18px;
		font-weight: 400;
		background-image: linear-gradient( rgb(43, 61, 162) 10px, rgb(23, 32, 87) );
	  }
	  .maincontener h3{
		position: relative;
		margin: 7px 1px;
		font-size: 12px;
		top: 200px;
		right: 380px;
		justify-self: flex-start;
		font-weight: 500;
}
	.maincontener h4{
		margin: 2px;
		right: 380px;
		color: white;
		justify-self: end;
		top: 200px;
		position: relative;
		border-top-right-radius: 15px;
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		padding: 20px 15px;
		font-size: 18px;
		font-weight: 400;
		background-image: linear-gradient( rgb(13, 21, 68) 10px, rgb(13, 18, 52) );
	}
	.inputfiled{
		width: 100%;
		height: auto;
		display: flex;
		text-align: center;
		top: 86.6%;
		right: 1px;
		position: relative;
		justify-content: center;
		position: fixed;
		justify-items: center ;
	}
	input{
		width: 860px;
		position: relative;
		color: white;
		
		font-size: 19px;
		padding: 30px;
		outline: none;
		border-top-left-radius: 525px;
		background-color:  rgba(26, 93, 227, 0.2);
		border-bottom-left-radius: 525px;
		height: 65px;
		border-bottom: 2px solid #377ed5;
		border-left: 2px solid #377ed5;
		border-top: 2px solid #377ed5;
		border-right: none;
		backdrop-filter: blur(5px);
	}
	input::placeholder {
		color: #70a0dc; 
	  }
	.inputfiled button{
		border-top-right-radius: 525px;
		color: white;
		outline: none;
		font-size: 30px;
		font-weight: 200;
		outline-color: none;
		border-bottom-right-radius: 525px;
		height: 65px;
		border-bottom: 2px solid #377ed5;
		border-right: 2px solid #377ed5;
		border-top: 2px solid #377ed5;
		border-left: none;
		backdrop-filter: blur(5px);
		background-color:  rgba(26, 93, 227, 0.2);
	}
    h1{
		font-weight: 230;
		font-size: 33px;
		bottom: 18px;
		position: relative;
	}
	.topic {
		color: white;
		text-transform: uppercase;
		border: 2px solid #377ed5;
		cursor: pointer;
		background-color:  rgba(26, 93, 227, 0.2);
		border-radius: 50%;
		width: 60px;
		height: 60px;
	}
    @media (max-width: 640px) {
		.inputfiled button{
			font-size: 25px;
			font-weight: 150;
			height: 55px;
		}
		input{
			width: 600px;
			font-size: 17px;
			padding: 25px;
			height: 55px;
		}
		.topic {
			width: 60px;
			height: 47px;
		}
		.faster{
			width: 149px;
			top: 70px;
			font-size: 16px;
			height: 60px;
		  }.faster span{
			font-size: 13px;
			color: rgb(214, 214, 214);
		  }
		  .better br{
			font-size: 13px;
			color: #5e9de9;
		  }
		  .better{
			width: 149px;
			top: 70px;
			left: 160px;
			font-size: 16px;
			height: 60px;
		  }
		  .maincontener h6{
			font-size: 14px;
			font-weight: 400;
			position: absolute;
		  }
		  .maincontener {
			width: 100%;
			top: 100px;
		  }
		  .maincontener h3{
			position: relative;
			margin: 7px 1px;
			font-size: 12px;
			top: 200px;
			right: 380px;
			justify-self: flex-start;
			font-weight: 500;
	}
		.maincontener h4{
			margin: 2px;
			right: 380px;
			color: white;
			justify-self: end;
			top: 200px;
			position: relative;
			border-top-right-radius: 15px;
			border-bottom-left-radius: 15px;
			border-bottom-right-radius: 15px;
			padding: 20px 15px;
			font-size: 18px;
			font-weight: 400;
			background-image: linear-gradient( rgb(37, 53, 144) 10px, rgb(19, 27, 80) );
		}
	}
</style>