import { Link } from 'react-router-dom';
import dest from '../../../assets/images/dest-board.png';
import headcodes from '../../../assets/images/headcode.png';
import routes from '../../../assets/images/routes.png';
import status from '../../../assets/images/status.png';
import guides from '../../../assets/images/guides.png';
import './HomeGrid.css';

function HomeGrid() {
    const items = [
        { id: 1, title: 'Destination Codes', to: '/destinations', imgSrc: dest, colour: '#FFD166' },
        { id: 2, title: 'Headcode Generator', to: '/headcodes', imgSrc: headcodes, colour: '#06D6A0' },
        { id: 3, title: 'Routes', to: '/lines', imgSrc: routes, colour: '#EF476F' },
        { id: 4, title: 'Live Status Updates', to: '/status', imgSrc: status, colour: '#118AB2' },
        { id: 5, title: 'Guides', to: '/guides', imgSrc: guides, colour: '#8c66ff' }
    ];

    return (
        <div className="grid-container">
            {items.map((item) => (
                <div key={item.id} className="card" style={{borderColor: item.colour}}>
                    <Link to={item.to}>
                        <img src={item.imgSrc} alt={item.title} className="card-image" />
                        <div className="card-text no-text-decoration" style={{ backgroundColor: item.colour }}>{item.title}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default HomeGrid;