import {Branch} from "../../types/branch.ts";
import {useEffect, useState} from "react";
import {getAllBranches} from "../../api/services/branch.ts";
import BranchCard from "./BranchCard.tsx";
import BranchModal from "./BranchModal.tsx";

export default function Branches() : JSX.Element {
    const [branches, setBranches] = useState<Branch[]>();

    useEffect(() => {
        getAllBranches().then((response) => {
            setBranches(response.data.payload);
        });
    }, []);

    return (
        <section id="branches" className="container p-5 text-center">
            <div className="col-12 p-5">
                <h2 className="h1 text-info">Our Branches</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 justify-content-center">
                {branches ? branches.map((branch) => {
                    return (
                        <div className="col h-100" key={branch.id}>
                            <BranchCard branch={branch}/>
                            <BranchModal branch={branch}/>
                        </div>
                    );
                }) : <p>No branches yet</p>}
            </div>
        </section>
    )
}