import './Store.css'
import {Component} from "react";
import {IconSwitch} from "../IconSwitch/IconSwitch.jsx";
import {ListView} from "../ListView/ListView.jsx";
import {CardsView} from "../CardsView/CardsView.jsx";

const DATA = [
    {
        id: 1,
        name: 'NIKE METCON 2',
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/refs/heads/ra-new/events-state/layouts/img/1.jpg',
        color: 'red',
        price: 130,
        currency: '$',
    },
    {
        id: 2,
        name: 'NIKE METCON 2',
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/refs/heads/ra-new/events-state/layouts/img/2.jpg',
        color: 'green',
        price: 130,
        currency: '$',
    },
    {
        id: 3,
        name: 'NIKE METCON 2',
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/refs/heads/ra-new/events-state/layouts/img/3.jpg',
        color: 'blue',
        price: 130,
        currency: '$',
    },
    {
        id: 4,
        name: 'NIKE METCON 2',
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/refs/heads/ra-new/events-state/layouts/img/4.jpg',
        color: 'black',
        price: 130,
        currency: '$',
    },
    {
        id: 5,
        name: 'NIKE FREE RUN',
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/refs/heads/ra-new/events-state/layouts/img/5.jpg',
        color: 'black',
        price: 170,
        currency: '$',
    },
    {
        id: 7,
        name: 'NIKE METCON 3',
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/refs/heads/ra-new/events-state/layouts/img/7.jpg',
        color: 'green',
        price: 150,
        currency: '$',
    }
];

const LIST_ICON_NAME = 'view_list';
const CARDS_ICON_NAME = 'view_module';

export class Store extends Component {

    handleSwitch = () => this.setState((prevState) => ({isList: !prevState.isList}));

    constructor(props) {
        super(props);

        this.state = {
            isList: false,
        };
    }

    render() {
        const icon = this.state.isList ? CARDS_ICON_NAME : LIST_ICON_NAME;

        return (
            <>
                <IconSwitch icon={icon} onSwitch={this.handleSwitch}/>
                {this.state.isList ? <ListView items={DATA}/> : <CardsView cards={DATA}/>}
            </>
        );
    }
}
