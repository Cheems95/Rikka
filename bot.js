const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on('message', message => {
    if (message.content === '?about') {
    	message.channel.send('Dự án **MMOBot** đang được thực hiện bởi Startear\nMong mọi người ủng hộ :hear_no_evil:');
  	}
// Pokedex : 001
    if (message.content === '?bulbasaur') {
    	message.channel.send('```md\nBulbasaur\n> PokeDex Number : 001\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 5             Kanto   Grass   M/D/N   Rare        10      -\n```');
  	}
// Pokedex : 002
    if (message.content === '?ivysaur') {
    	message.channel.send('```md\nIvysaur\n> PokeDex Number : 002\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\nNo wild locations found.\n```');
  	}
// Pokedex : 003
    if (message.content === '?venusaur') {
    	message.channel.send('```md\nVenusaur\n> PokeDex Number : 003\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\nNo wild locations found.\n```');
  	}
// Pokedex : 004
    if (message.content === '?charmander') {
    	message.channel.send('```md\nCharmander\n> PokeDex Number : 004\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nRock Tunnel         Kanto   Cave    M/D/N   Rare        15      -\n```');
  	}
// Pokedex : 005
    if (message.content === '?charmeleon') {
    	message.channel.send('```md\nCharmeleon\n> PokeDex Number : 005\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\nNo wild locations found.\n```');
  	}
// Pokedex : 006
    if (message.content === '?charizard') {
    	message.channel.send('```md\nCharizard\n> PokeDex Number : 006\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\nNo wild locations found.\n```');
  	}
// Pokedex : 007
    if (message.content === '?squirtle') {
    	message.channel.send('```md\nSquirtle\n> PokeDex Number : 007\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nSeafoam Islands     Kanto   Cave    M/D/N   Rare        25      -\n```');
  	}
// Pokedex : 008
    if (message.content === '?wartortle') {
    	message.channel.send('```md\nWartortle\n> PokeDex Number : 008\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\nNo wild locations found.\n```');
  	}
// Pokedex : 009
    if (message.content === '?blastoise') {
    	message.channel.send('```md\nBlastoise\n> PokeDex Number : 009\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\nNo wild locations found.\n```');
  	}
// Pokedex : 010
    if (message.content === '?caterpie') {
    	message.channel.send('```md\nCaterpie\n> PokeDex Number : 010\n> Egg Group : Bug\n> Evolution : Caterpie → Metapod (Lv.7) → Butterfree (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nRoute 2             Kanto   Grass   M/D/N   Rare        3-5     -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    11-12   -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    11-12   -\nVirdian Forest      Kanto   Grass   M/D/N   Common      5-7     -\n```');
  	}
// Pokedex : 011
    if (message.content === '?metapod') {
    	message.channel.send('```md\nMetapod\n> PokeDex Number : 011\n> Egg Group : Bug\n> Evolution : Caterpie → Metapod (Lv.7) → Butterfree (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nPattern Bush        Kanto   Grass   M/D/N   Horde       48-50   -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    12      -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    12      -\nVirdian Forest      Kanto   Grass   M/D/N   Uncommon    7       -\nRoute 12            Unova   Grass   M/D/N   Uncommon    48-49   -\n```');
  	}
// Pokedex : 012
    if (message.content === '?butterfree') {
    	message.channel.send('```md\nButterfree\n> PokeDex Number : 012\n> Egg Group : Bug\n> Evolution : Caterpie → Metapod (Lv.7) → Butterfree (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Rare        50-52   -\nRoute 24            Kanto   Grass   M       Uncommon    12      -\nRoute 25            Kanto   Grass   M/D     Uncommon    12      -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\nRoute 12            Unova   D.Grass M/D/N   Uncommon    53-54   -\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 013
    if (message.content === '?weedle') {
    	message.channel.send('```md\nWeedle\n> PokeDex Number : 013\n> Egg Group : Bug\n> Evolution : Weedle → Kakuna (Lv.7) → Beedrill (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nRoute 2             Kanto   Grass   M/D/N   Rare        3-5     -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    11-12   -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    11-12   -\nVirdian Forest      Kanto   Grass   M/D/N   Common      5-7     -\n```');
  	}
// Pokedex : 014
    if (message.content === '?kakuna') {
    	message.channel.send('```md\nKakuna\n> PokeDex Number : 014\n> Egg Group : Bug\n> Evolution : Weedle → Kakuna (Lv.7) → Beedrill (Lv.10)\n#Map            Region  Type    Time    Rarity      Level   Item\nPattern Bush    Kanto   Grass   M/D/N   Uncommon    50-52   -\nPattern Bush    Kanto   Grass   M/D/N   Horde       48-50   -\nRoute 24        Kanto   Grass   M/D/N   Uncommon    12      -\nRoute 25        Kanto   Grass   M/D/N   Uncommon    12      -\nVirdian Forest  Kanto   Grass   M/D/N   Uncommon    7       -\nRoute 12        Unova   Grass   M/D/N   Uncommon    48-49   -\n```');
  	}
// Pokedex : 015
    if (message.content === '?beedrill') {
    	message.channel.send('```md\nBeedrill\n> PokeDex Number : 015\n> Egg Group : Bug\n> Evolution : Weedle → Kakuna (Lv.7) → Beedrill (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\nRoute 12            Unova   D.Grass M/D/N   Uncommon    53-54   -\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 016
    if (message.content === '?pidgey') {
    	message.channel.send('```md\nPidgey\n> PokeDex Number : 016\n> Egg Group : Flying\n> Evolution : Pidgey → Pidgeotto (Lv.18) → Pidgeot (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    41-43   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    40-42   -\nFile Isle Meadow    Kanto   Grass   M/D/N   Uncommon    48-50   -\nRoute 1             Kanto   Grass   M/D/N   V.Common    2-5     -\nRoute 2             Kanto   Grass   M/D/N   Common      4-6     -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-7     -\nRoute 5             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 6             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 8             Kanto   Grass   D       Horde       15-17   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    13-17   -\nRoute 12            Kanto   Grass   M/D/N   Uncommon    23-27   -\nRoute 12            Kanto   Grass   M/D     Horde       20-22   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    25-27   -\nRoute 14            Kanto   Grass   M/D     Rare        27      -\nRoute 15            Kanto   Grass   M/D/N   Rare        27      -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    27-29   -\nRoute 24            Kanto   Grass   M/D     Horde       8-9     -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    12-14   -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    12-14   -\nViridian Forest     Kanto   Grass   M/D/N   Uncommon    5-7     -\nRoute 229           Kanto   Grass   M/D/N   Rare        47-50   -\n```');
  	}
// Pokedex : 016
    if (message.content === '?pidgeotto') {
    	message.channel.send('```md\nPidgeotto\n> PokeDex Number : 017\n> Egg Group : Flying\n> Evolution : Pidgey → Pidgeotto (Lv.18) → Pidgeot (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    43-45   -\nBond Bridge         Kanto   Grass   M/D     Uncommon    42-44   -\nFile Isle Meadow    Kanto   Grass   M/D/N   Horde       46-48   -\nFile Isle Meadow    Kanto   Grass   M/D/N   Uncommon    48-50   -\nRoute 12            Kanto   Grass   M/D     Rare        26-28   -\nRoute 13            Kanto   Grass   M/D     Rare        29      -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    29      -\nRoute 15            Kanto   Grass   M/D/N   Rare        29      -\nRoute 21            Kanto   Grass   M/D/N   Rare        30-32   -\n```');
  	}
// Pokedex : 017
    if (message.content === '?pidgeotto') {
    	message.channel.send('```md\nPidgeot\n> PokeDex Number : 018\n> Egg Group : Flying\n> Evolution : Pidgey → Pidgeotto (Lv.18) → Pidgeot (Lv.36)\nNo wild locations found.\n```');
  	}
// Pokedex : 018
    if (message.content === '?rattata') {
    	message.channel.send('```md\nRattata\n> PokeDex Number : 019\n> Egg Group : Field\n> Evolution : Rattata → Raticate (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nPokemon Mansion     Kanto   Inside  M/D/N   Uncommon    28-30   -\nPokemon Mansion     Kanto   Inside  M/D/N   Horde       28-29   -\nRoute 1             Kanto   Grass   M/D/N   V.Common    2-4     -\nRoute 2             Kanto   Grass   M/D/N   Common      3-5     -\nRoute 3             Kanto   Grass   M/D/N   Common      5-8     -\nRoute 4             Kanto   Grass   M/D/N   Common      8-12    -\nRoute 4             Kanto   Grass   M/D/N   Horde       7-8     -\nRoute 5             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 6             Kanto   Grass   M/D/N   Rare        12-15   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 7             Kanto   Grass   M/D/N   Horde       15-17   -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 9             Kanto   Grass   M/D/N   Horde       12-13   -\nRoute 10            Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    12-16   -\nRoute 16            Kanto   Grass   M/D/N   Uncommon    20-22   -\nRoute 17            Kanto   Grass   M/D/N   Rare        22-25   -\nRoute 18            Kanto   Grass   M/D/N   Uncommon    24-26   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    27-29   -\nRoute 22            Kanto   Grass   M/D/N   V.Common    3-5     -\nRoute 225           Sinnoh  Grass   M/D/N   Rare        47      -\nRoute 226           Sinnoh  Grass   M/D/N   Rare        47      -\n```');
  	}
// Pokedex : 019
    if (message.content === '?raticate') {
    	message.channel.send('```md\nRaticate\n> PokeDex Number : 020\n> Egg Group : Field\n> Evolution : Rattata → Raticate (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nPokemon Mansion     Kanto   Inside  M/D/N   Uncommon    32-38   -\nPokemon Mansion     Kanto   Inside  M/D/N   Horde       28-30   -\nRoute 7             Kanto   Grass   N       Rare        20-22   -\nRoute 8             Kanto   Grass   N       Rare        20-22   -\nRoute 9             Kanto   Grass   M/D/N   Rare        20      -\nRoute 10            Kanto   Grass   M/D/N   Rare        20      -\nRoute 16            Kanto   Grass   M/D/N   Uncommon    22-26   -\nRoute 16            Kanto   Grass   M/D/N   Horde       20      -\nRoute 17            Kanto   Grass   M/D/N   Uncommon    25-29   -\nRoute 17            Kanto   Grass   M/D/N   Horde       20-22   -\nRoute 18            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 18            Kanto   Grass   M/D/N   Horde       23-24   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    30-32   -\nDreamyard           Unova   D.Grass M/D/N   V.Common    47-50   -\nDreamyard           Unova   D.Grass M/D/N   Horde       46-47   -\nRoute 225           Sinnoh  Grass   M/D/N   Uncommon    50-52   -\nRoute 225           Sinnoh  Grass   M/D/N   Horde       48-50   -\nRoute 226           Sinnoh  Grass   M/D/N   Common      51-52   -\nRoute 226           Sinnoh  Grass   M/D     Horde       48-50   -\n```');
  	}
// Pokedex : 020
    if (message.content === '?spearow') {
    	message.channel.send('```md\nSpearow\n> PokeDex Number : 021\n> Egg Group : Flying\n> Evolution : Spearow → Fearow (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nCanyon Entrance     Kanto   Grass   M/D/N   Uncommon    48-50   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    39-41   -\nKindle Road         Kanto   Grass   M/D/N   Rare        36-38   -\nMt.Ember            Kanto   Grass   M/D/N   Uncommon    38-40   -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-8     -\nRoute 4             Kanto   Grass   M/D     Horde       7-8     -\nRoute 4             Kanto   Grass   M/D/N   Uncommon    8-12    -\nRoute 9             Kanto   Grass   M/D     Horde       12-13   -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    13-17   -\nRoute 16            Kanto   Grass   M/D/N   Rare        20-22   -\nRoute 17            Kanto   Grass   M/D/N   Rare        22-25   -\nRoute 18            Kanto   Grass   M/D/N   Rare        24-26   -\nRoute 22            Kanto   Grass   M/D/N   Uncommon    3-5     -\nRoute 23            Kanto   Grass   M/D/N   Rare        38-42   -\nRuin Valley         Kanto   Grass   M/D/N   Uncommon    50-52   -\nTreasure Beach      Kanto   Grass   M/D/N   Uncommon    36-38   -\nWater Path          Kanto   Grass   M/D/N   Rare        48-50   -\nPinwheel Forest     Unova   Shadow  M/D/N   Special     13-15   -\nRoute 2             Unova   Shadow  M/D/N   Special     6-7     -\nRoute 18            Unova   Shadow  M/D/N   Special     36-38   -\nRoute 225           Sinnoh  Grass   M/D/N   Rare        47      -\nRoute 226           Sinnoh  Grass   M/D     Rare        47      -\n```');
  	}
// Pokedex : 021
    if (message.content === '?fearow') {
    	message.channel.send('```md\nFearow\n> PokeDex Number : 022\n> Egg Group : Flying\n> Evolution : Spearow → Fearow (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nCanyon Entrance     Kanto   Grass   M/D     Horde       46-48   -\nCanyon Entrance     Kanto   Grass   M/D/N   Uncommon    48-50   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    41-43   -\nKindle Road         Kanto   Grass   M/D/N   Rare        37-39   -\nMt.Ember            Kanto   Grass   M/D/N   Uncommon    40-42   -\nRoute 9             Kanto   Grass   M/D     Rare        20      -\nRoute 10            Kanto   Grass   M/D     Rare        20      -\nRoute 16            Kanto   Grass   M/D/N   Uncommon    22-25   -\nRoute 17            Kanto   Grass   M/D     Horde       20-22   -\nRoute 17            Kanto   Grass   M/D/N   Rare        26-28   -\nRoute 18            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 23            Kanto   Grass   M/D/N   Rare        40-44   -\nRuin Valley         Kanto   Grass   M/D/N   Horde       48-50   -\nRuin Valley         Kanto   Grass   M/D/N   Uncommon    50-52   -\nSevault Canyon      Kanto   Grass   M/D/N   Uncommon    50-52   -\nTreasure Beach      Kanto   Grass   M/D/N   Uncommon    37-39   -\nWater Path          Kanto   Grass   M/D/N   Uncommon    48-50   -\nRoute 1             Unova   Shadow  M/D/N   Special     34-38   -\nRoute 10            Unova   Shadow  M/D/N   Special     43-44   -\nRoute 11            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 15            Unova   D.Grass M/D/N   Horde       50-52   -\nRoute 15            Unova   Grass   M/D/N   Uncommon    48-50   -\nRoute 15            Unova   D.Grass M/D/N   Uncommon    53-55   -\nVictory Road        Unova   Shadow  M/D/N   Special     45-48   -\nRoute 225           Sinnoh  Grass   M/D     Horde       49-50   -\nRoute 225           Sinnoh  Grass   M/D/N   Uncommon    50-52   -\nRoute 226           Sinnoh  Grass   M/D     Uncommon    51-53   -\nRoute 227           Sinnoh  Grass   M/D     Horde       50-51   -\nRoute 227           Sinnoh  Grass   M/D/N   Uncommon    51-53   -\nStark Mountain      Sinnoh  Grass   M/D/N   Uncommon    54-55   -\n```');
  	}
// Pokedex : 022
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 023
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 024
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 025
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 026
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
});


client.login(process.env.BOT_TOKEN);
