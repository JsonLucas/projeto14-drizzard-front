export default function calcTotal(selectedGames){
    let total=0;
    selectedGames.map(game => {
        let value = parseFloat(game.cartData.price.replace(' R$','').replace(',','.'));
        total += value;
    });
    return total.toFixed(2).replace('.',',')+' R$';
}