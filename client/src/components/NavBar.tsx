import { useContext } from "react";
import { Context } from "..";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer( () => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>STORE</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: "white"}}>
                            <Button variant={"outline-light"} className="ml-2">Админ панель</Button>
                            <Button variant={"outline-light"}>Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: "white"}}>
                            <Button variant={"outline-light"}>Авторизация</Button>
                        </Nav>
                    }  
            </Container> 
        </Navbar>
    );
});

export default NavBar;
