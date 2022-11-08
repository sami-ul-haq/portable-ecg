import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const GraphScreen = () => {
    // const [ecgError, setEcgError] = useState("");
    const [ecgData, setEcgData] = useState([]);
    console.log("ECG data ", ecgData[0]);


    const { state } = useLocation();
    console.log("Id is ", state.id);

    const dbRef = ref(db, `ECG/${state.id}`);


    useEffect(() => {
        const getFirebaseData = async () => {
            try {
                onValue(dbRef, (snapshot) => {
                    const data = snapshot.val();
                    // console.log(data);

                    let newData = [];
                    Object.keys(data).forEach(function (key, index) {
                        if (key !== 'docCount') {
                            newData = [...newData, ...data[key]];
                        }
                    });

                    newData = newData.map((item, index) => {
                        return {
                            x: index,
                            y: item,
                        }
                    })
                    // console.log(newData, 'newData');
                    // for (const element of data) {
                    //     console.log(element, 'element');
                    // }
                    // console.log(snapshot.val(),'ecgDataSnapshot');
                    // const data = snapshot.val()
                    setEcgData([...newData]);
                });
            } catch (error) {

            }
        }
        getFirebaseData();
        // eslint-disable-next-line
    }, []);

    const _renderGraphScreen = () => {
        console.log(ecgData,'ecgDAta');
        return (
            <div className="third-screen">

                {/* <div>
                    {
                        ecgData[0] ?
                            ecgData[0].map((item, index) => <h6 key={index}>{item}</h6>) : <p>No Data</p>
                    }

                </div> */}
                {/* <div>
                    {
                        ecgData?.length !== 0
                            ?
                            ecgData.map((item, index) => <h6 key={index}>{item}</h6>)
                            :
                            <p>No Data</p>
                    }

                </div> */}

                <ResponsiveContainer width="100%" height="100%" aspect={3}>
                    <LineChart
                        width={500}
                        height={300}
                        data={ecgData}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="y" interval="preserveStart" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="y" stroke="blue" strokeWidth={1} />
                    </LineChart>
                </ResponsiveContainer>

                <div className="third-footer">
                    <button className="btn-back">
                        <Link to={`/`}>
                            Back
                        </Link>
                    </button>
                </div>

            </div>
        );
    };

    return (
        _renderGraphScreen()
    );
};

export default GraphScreen;
