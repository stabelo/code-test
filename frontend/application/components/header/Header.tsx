import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Location } from 'history';

import * as css from "./Header.module.scss";

interface IProperties {
    location: Location;
}

class Header extends React.Component<IProperties> {

    public render() {
        const {
            location
        } = this.props;

        return (
            <header className="header">
                <nav>
                    <ul>

                        <a href="https://stabelo.se" ><img src="https://s3.eu-central-1.amazonaws.com/static.stabelo.net.eu-central-1/Stabelo_logo_RGB.png"  alt="Stabelo" /></a>

                        <li>
                            <Link className={location.pathname === "/about" ? "active" : ""} to="/about">Om uppgiften</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === "/implementation" ? "active" : ""} to="/implementation">Implementation</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter((props: RouteComponentProps) => <Header {...props} />);