import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png';
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

interface DeviceItemTypes {
    id: string
    title: string
    description: string
    name: string;
    price: number;
    rating: number;
    img: string;
}

const DeviceItem = (props: {device: DeviceItemTypes}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + props.device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + props.device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{props.device.name}</div>
                    <div className="d-flex align-items-center">
                        <div>{props.device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{props.device.price} р.</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
