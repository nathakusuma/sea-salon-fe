import {Branch} from "../../types/branch.ts";

export default function BranchCard(props: { branch: Branch }): JSX.Element {
    return (
        <article className="card text-bg-dark" data-bs-toggle="modal" data-bs-target={`#${props.branch.id}`}>
            <img src={props.branch.imageUrl} className="card-img" alt={props.branch.name}/>
                <div className="card-img-overlay" style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                }}>
                    <h5 className="card-title text-start">{props.branch.name}</h5>
                    <p className="card-text text-start">{props.branch.address}</p>
                    <p className="card-text position-absolute bottom-0 start-0 m-3"><small>Click for detail</small></p>
            </div>
        </article>
    )
}