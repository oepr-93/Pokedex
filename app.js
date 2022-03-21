const app = Vue.createApp({
    data() {
        return {
            pokeNamee: 'Pokeball',
            picture: './images/pokeball.png',
            hp: '-',
            tipo:'-',
            altura:'-',
            peso:'-',
            theme:'',
            modal:'hidden',
            ataque:'-',
            defensa:'-',
            velocidad:'-',
            habilidad:'-',
            habilidad2:'-',
            id:'-',
            mov1:'-',
            mov2:'-',
            mov3:'-',
            mov4:'-'
        }
    },
    methods: {
        async getPokemon() {
          const pokeName = document.getElementById("name");
          let pokeInput = pokeName.value.toLowerCase();

          const url = 'https://pokeapi.co/api/v2/pokemon/'+pokeInput;
          //const res = await fetch ('https://pokeapi.co/api/v2/pokemon/'+pokeInput);
          //const { results } = await res.json();
          //console.log(results[0].sprites);
          //this.pokeNamee = results[0].

          fetch(url).then((res) => {
            //console.log(res);
            status = res.status;
            if(res.status != "200"){
              //pokeImage("./error");
              this.pokeNamee = 'No encontrado';
              this.picture = './images/pokeball.png';
              this.hp = '-';
              this.tipo ='-';
              this.altura ='-';
              this.peso = '-';
              this.theme = '';
              this.modal = 'hidden';
              this.ataque = '-';
              this.defensa = '-';
              this.velocidad = '-';
              this.habilidad = '-';
              this.habilidad2 = '-';
              this.id = '-';
              this.mov1 = '-';
              this.mov2 = '-';
              this.mov3 = '-';
              this.mov4 = '-';
            }
            else{
              return res.json();
            }
          }).then((data) =>{
            console.log(data.abilities[0].ability.name);
            if(status == "200"){
              this.modal = 'show';
              this.pokeNamee = data.forms[0].name;
              this.altura = parseFloat(data.height)/10 +" m";
              this.peso = parseFloat(data.weight)/10 + " kg";
              this.tipo = data.types[0].type.name;
              this.theme = data.types[0].type.name;
              this.hp = data.stats[0].base_stat+" hp";
              this.ataque = data.stats[1].base_stat;
              this.defensa = data.stats[2].base_stat;
              this.velocidad = data.stats[5].base_stat;
              const pokeImg = document.getElementById("pokeImg");
              this.picture = data.sprites.other.dream_world.front_default;
              this.id = data.id;
              this.habilidad = data.abilities[0].ability.name;
              this.habilidad2 = data.abilities[1].ability.name;
              this.mov1 = data.moves[0].move.name;
              this.mov2 = data.moves[1].move.name;
              this.mov3 = data.moves[2].move.name;
              this.mov4 = data.moves[3].move.name;
            }
            //console.log(data.sprites.other.dream_world.front_default);
          //  let pokeImageg = data.sprites;
          //  const pokeImg = document.getElementById("pokeImg");
          //  pokeImg.src = url;
           })
        },
    }
})

app.mount('#app');
