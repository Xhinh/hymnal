import React from "react";
import { MainContext } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Card, Button } from "antd";
import songs from "../../img/songs.svg";
import favourites from "../../img/favourites.svg";
import "./Home.scss";

function HomeScreen() {
    const ctx = useContext(MainContext);

    const meta = {
        title: "Hymns for All Times",
        subtitle: "Song Book",
        page: "Home"
    };

    return (
        <div style={{ width: "90%", margin: "0 auto" }}>
            <Helmet>
                <title>{`Hymns | ${meta.page}`}</title>
            </Helmet>
            <div className="grid">
                <Card
                    hoverable={window.innerWidth > 960}
                    className="card"
                    title="Songs"
                    cover={<img alt="Placeholder for Songs" src={songs} style={{ height: "100%", width: "100%" }} />}
                    extra={<p style={{ margin: 0 }}>View a listing of all songs</p>}
                >
                    <Button type="primary" size="large" block>
                        <Link to={ctx.pages.INDEX}>View Songs</Link>
                    </Button>
                </Card>
                <Card
                    hoverable={window.innerWidth > 960}
                    className="card"
                    title="Favourites"
                    cover={
                        <img
                            alt="Placeholder for Favourites"
                            src={favourites}
                            style={{ height: "100%", width: "100%" }}
                        />
                    }
                    extra={<p style={{ margin: 0 }}>View your favourite songs</p>}
                >
                    <Button size="large" block>
                        <Link to={ctx.pages.FAVOURITES}>View Favourites</Link>
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default HomeScreen;
