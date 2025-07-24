import "./Underline.css";

export default function Underline({heading , color}) {
    return (
        <div>
            <h1 className={"fw-bolder text-center fs-1 pt-4 mb-3 text"+color}>{heading}</h1>
            <div className="underline text-light d-flex align-items-center justify-content-evenly mb-3 mx-auto">
                <div className={"line bg"+color}></div>
                <i className={"fa fa-star text"+color}></i>
                <div className={"line bg"+color}></div>
            </div>
        </div>
    );
}
