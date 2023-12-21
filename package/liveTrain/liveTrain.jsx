import { useState } from "react";
import { List, ListItem, Card, Input, Button } from "@material-tailwind/react";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '28fb895146msh6e402304ff3b944p1d27a3jsn2eca3bc39f06',
		'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
	}
};

var trainInfo;

export function LiveTrain() {
    const [trainNo, setTrainNo] = useState('');
    const [startDay, setStartDay] = useState('');
    const [trainNumber , setTrainNumber] = useState('');
    const [trainName , setTrainName] = useState('');
    const [nextStation , setNextStation] = useState('');
    const [trainDay , setTrainDay] = useState('');
    // const [trainInfo , setTrainInfo ] = useState('');
    const handleTrainNoChange = (e) => {
        setTrainNo(e.target.value);
    };

    const handleStartDayChange = (e) => {
        setStartDay(e.target.value);
    };

    const handleStatus = (trainInfo) => {
        setTrainNumber(trainNo);
        setTrainName(trainInfo.ir_train_name);
        setNextStation(trainInfo.upcoming_stations[0].station_name);
        setTrainDay(trainInfo.run_days);
    }

    const showLive = async () => {
        try {
            console.log("object");
            const response = await fetch("https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=" + trainNo + "&startDay=" + startDay, options);
            const result = await response.json();
            console.log(result);
            trainInfo = result.data;
            handleStatus(trainInfo);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div className="bg-black flex items-center h-screen w-screen gap-12 shrink-0">

                <div className="w-1/2 flex flex-row justify-center items-center">
                    <Card className="flex flex-col gap-6 w-full p-20 shrink-0">
                        <Input label="Train No." value={trainNo} onChange={handleTrainNoChange}></Input>
                        <Input label="Start Day" value={startDay} onChange={handleStartDayChange}></Input>
                        <Button variant="gradient" onClick={showLive}>Show status</Button>
                    </Card>
                </div>


                <div className="bg-white h-screen w-full flex flex-col justify-center items-start shrink-0">
                    <Card className="w-56 shrink-0">
                        <List className="flex flex-col gap-6">
                            <ListItem className="font-bold">Train Number: {trainNumber}</ListItem>
                            <ListItem className="font-bold">Train Name: {trainName}</ListItem>
                            <ListItem className="font-bold">Next Station: {nextStation}</ListItem>
                            <ListItem className="font-bold">Days: {trainDay}</ListItem>
                        </List>
                    </Card>
                </div>
            </div>
        </>
    )
}

