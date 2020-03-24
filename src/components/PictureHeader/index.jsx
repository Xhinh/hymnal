import React, { useContext } from "react";
import { MainContext } from "../../App";
import { Typography } from "antd";
import "./PictureHeader.scss";

const { Title } = Typography;
const imgPath = process.env.PUBLIC_URL + "/rainbow/";

function PictureHeader() {
    const { meta } = useContext(MainContext);

    let img = null,
        src = "";

    function update(e) {
        img = e;
        let thisSrc = img.getAttribute("src");
        if (src !== thisSrc) {
            src = thisSrc;
            img.parentElement.style.backgroundImage = `url("${src}")`;
        }
    }

    return (
        <div className="picture-header">
            <div className="bgImgCont">
                <img
                    sizes="(max-width: 1400px) 100vw, 1400px"
                    srcSet={`
                        ${imgPath}rainbow_rg388g_c_scale,w_200.jpg 200w,
                        ${imgPath}rainbow_rg388g_c_scale,w_554.jpg 554w,
                        ${imgPath}rainbow_rg388g_c_scale,w_807.jpg 807w,
                        ${imgPath}rainbow_rg388g_c_scale,w_999.jpg 999w,
                        ${imgPath}rainbow_rg388g_c_scale,w_1177.jpg 1177w,
                        ${imgPath}rainbow_rg388g_c_scale,w_1324.jpg 1324w,
                        ${imgPath}rainbow_rg388g_c_scale,w_1400.jpg 1400w
                    `}
                    src={`${imgPath}rainbow_rg388g_c_scale,w_1400.jpg`}
                    alt="Rainbow Background"
                    className="bgImg"
                    onLoad={e => update(e.target)}
                />
                <div className="hCont">
                    {meta.title && (
                        <Title level={2} className="heading">
                            {meta.title}
                        </Title>
                    )}
                    {meta.subtitle && (
                        <Title level={3} className="heading">
                            {meta.subtitle}
                        </Title>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PictureHeader;
