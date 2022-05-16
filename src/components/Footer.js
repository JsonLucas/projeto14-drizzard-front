import { FooterPage, FooterIcons } from "../assets/styled/ListGames/StyledListGames";
export default function Footer(){
    return (
        <FooterPage>
            <FooterIcons><ion-icon name="bag-outline"></ion-icon></FooterIcons>
            <FooterIcons><ion-icon name="cart-outline"></ion-icon></FooterIcons>
            <FooterIcons><ion-icon name="enter-outline"></ion-icon></FooterIcons>
            {/*<ion-icon name="exit-outline"></ion-icon>*/}
        </FooterPage>
    );
}