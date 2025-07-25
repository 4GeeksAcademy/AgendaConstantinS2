import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { AddDiaryWindow } from "./AddDiaryWindow";

export const ShowDiaryAll = () => {
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        setNewIn(dispatch)
    }, []);


return (


    <div className="container d-flex align-items-center justify-content-center " style={{ width: "60%", height: "600px" }}>
        <div className="border rounded">
            <div className="imagen cover d-flex">
                <div className="rounded-circle p-3 mr-4">
                    <img
                        className="rounded-circle border border-3"
                        src="src/assets/img/rigo-baby.jpg"
                        alt=""
                        style={{ width: "190px", height: "190px" }}
                    />
                </div>
                <div>
                    <form className="">
                        <p className="text">
                            "{p.nombre}"
                        </p>
                    </form>
                </div>


            </div>
        </div>
    </div>

)}