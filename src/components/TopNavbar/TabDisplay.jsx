import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Design from "./Design";
import Making from "./Making";
import Team from "./Team";

export default function TabDisplay() {
    return (
        <div className="flex flex-col w-11/12" style={{
            margin: "20px auto"
        }}>
            <Tabs aria-label="Options">
                <Tab key="design" title="Design">
                    <Card>
                        <CardBody>
                            <Design />
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="making" title="Making">
                    <Card>
                        <CardBody>
                            <Making />
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="team" title="Team">
                    <Card>
                        <CardBody>
                            <Team />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    );
}