import React, { lazy, Suspense } from "react";
import { getUrl } from '../../utils';
import MathJax from 'react-mathjax2';

const cl = "C_(l) = L/(0.5*\\rho*V^2*A)";
const cd = "C_(d) = D/(0.5*\\rho*V^2*A)";
const ar = "AR = b/c = 50/5.8 = 6.89655";

const Design = () => {
    return (
        <main>
            <React.Suspense fallback={<div>Loading...</div>}>
                <h2 className='font-semibold mb-2 text-lg'>DESIGN ANALYSIS OF OUR RC AIRCRAFT</h2>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-3">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Contents
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1. Wing Selection
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#wing-selection" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2. Airfoil Selection
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#airfoil-selection" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    3. Fuselage Selection
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#fuselage-selection" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    4. Tail Design
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#tail-design" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    5. Control Surface
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#control-surface" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1. Important Terms
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#important-terms" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2. Wings
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#wings" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    3. Airfoil
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#airfoil" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    4. Lift and Drag Coefficient
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#lift-drag-coefficient" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    TAIL CONSTRUCTION
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#tail-construction" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    ELECTRONIC COMPONENTS
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#electronic-components" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    FUSELAGE CONSTRUCTION
                                </th>
                                <td className="px-6 py-4">
                                    <a href="#fuselage-construction" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='not-sr-only md:grid md:grid-cols-2 md:grid-rows-3 md:gap-5 2xl:grid-cols-3 2xl:grid-rows-2'>
                    <div id='wing-selection'>
                        <h3 className='font-semibold text-lg'>1. Wing Selection</h3>
                        <p>Different types of wing could be used in RC aircraft. Tapered leading edge and straight trailing edge, tapered leading edge and trailing edge,  Delta wing, sweepback wings, straight leading edge and trailing edge, straight leading edge and tapered trailing edge. We have used a <em>tapered leading edge and straight trailing edge</em>. Tapered wings have better aerodynamic efficiency than constant-chord wings and are also more structurally efficient. It reduces induced drag and improves lift distribution and we also got better stall and roll characteristics.</p>
                        <img
                            className='w-80 shadow-lg rounded-lg my-4 mx-auto'
                            src={getUrl("wing.png")}
                            alt="Wing Image" loading="lazy"
                        />
                    </div>
                    <div id='airfoil-selection'>
                        <h3 className='font-semibold text-lg'>2. Airfoil Selection</h3>
                        <p>We are using a <em>flat bottom aerofoil</em> as it produces better lift to drag ratio than high camber aerofoils and also being flat bottomed it can produce lift even at zero angle of attack which is great for slow moving aircrafts. Again due its shape it has relatively gentle and predictable stall characteristics. It can be controlled as well as constructed easily. Due to these features we chose flat bottom aerofoil for our aircraft.</p>
                    </div>
                    <div id='fuselage-selection'>
                        <h3 className='font-semibold text-lg'>3. Fuselage Selection</h3>
                        <p>For different types of aircraft designers choose different types of fuselage like Mono-Plane, Bi-Plane, N-Plane etc. We used a <em>Monoplane type</em> of fuselage for our aircraft. Monoplanes often have a higher aspect ratio than biplanes or multi-wing layouts. This larger aspect ratio results in decreased induced drag, which can lead to increased overall aerodynamic efficiency and fuel economy. Monoplanes are less prone to interference drag, which is the additional drag created by the interaction of numerous wings on biplanes or multi-wing layouts.</p>
                        <img
                            className='w-80 mx-auto my-4'
                            src={getUrl("fuselage.png")}
                            alt="fuselage Image" loading="lazy"
                        />
                    </div>
                    <div id='tail-design'>
                        <h3 className='font-semibold text-lg'>4. Tail Design</h3>
                        <p>There are different tail designs in aircrafts. We used the <em>Conventional Tail (Classic Tail Configuration)</em>. In this classic form, there is a vertical tail fin with a separate horizontal stabilizer and elevator.
                            <br /> Traditional tails are extensively utilized and give superior stability and control. Many different types of aircraft, including general aviation, commercial airliners, and military planes, use it. This tail configuration is frequently used in the low speed RC planes.
                        </p>
                    </div>

                    <div id='control-surface'>
                        <h3 className='font-semibold text-lg'>5. Control Surfaces</h3>
                        <h3 className='font-semibold text-md'>a) Ailerons</h3>
                        <p>Ailerons work by increasing lift on one wing while decreasing lift on the other, providing the wing maximum lift to rise and least lift to land. The ailerons control the <em>roll</em> of the airplane around the longitudinal axis (from nose to tail).</p>
                        <h3 className='font-semibold text-md'>b) Rudder</h3>
                        <p>Rudder unites with vertical stabilizer and controls the <em>yaw motion</em> of the aircraft.</p>
                        <h3 className='font-semibold text-md'>c) Elevator</h3>
                        <p>Elevator unites with horizontal stabilizer and controls the <em>pitching motion</em> of the aircraft.</p>
                    </div>
                </div>
                <h2 className='font-semibold mb-2 text-lg'>DETAILS OF DESIGN</h2>
                <div className='not-sr-only md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5'>
                    <div id='important-terms'>
                        <h3 className='font-semibold text-lg'>1. Important Terms</h3>
                        <p>Some important parameters that has to be considered are given below –</p>
                        <h3 className='font-semibold text-md'>a) Fuselage Length</h3>
                        <p>The body of the plane is called the fuselage. We considered the total fuselage length as <em>30’</em>. The total fuselage is divided into 3 parts. The <em>nose</em> of the fuselage is 7.5’, the <em>tail</em> of fuselage is 14.5’ and the <em>middle</em> portion is 8’. These values are considered after proper research.</p>
                        <h3 className='font-semibold text-md'>b) Wing Span (b)</h3>
                        <p>The distance between two ends of the wing is called wingspan. We took wingspan as <em>40’</em> according to the competition guideline and proper research.</p>
                        <h3 className='font-semibold text-md'>c) Chord Length</h3>
                        <p>As our wing is tapered, there are two chord lengths, tip chord length(Ct = 3.6’) and root chord length(Cr = 8’). Mean chord length (C) = (Ct + Cr)/2 = 5.8’</p>
                        <h3 className='font-semibold text-md'>d) Aspect Ratio (AR)</h3>
                        <p>The ratio between wingspan (b) and mean chord length(C) is called aspect ratio(AR). <br />
                            <MathJax.Context input='ascii'>
                                <p>
                                    <MathJax.Node>{ar}</MathJax.Node>
                                </p>
                            </MathJax.Context>
                        </p>
                        <h3 className='font-semibold text-md'>e) Aileron and  Different angles</h3>
                        <p>We take two aileron strip in both wings of 10’ x 1’ dimension 2.25’ from tip of wing. We take the dihedral angle as 5° and angle of attack as 10°.</p>
                        <h3 className='font-semibold text-md'>f) Horizontal Stabilizer</h3>
                        <p>Our H-stabilizer is tapered. H-stabilizer length is 14’. H-stabilizer tip chord is 4’, root chord is 4.57’ and area is 60 in². Elevator length is 14’, width is 0.8567’, area is 12 in².</p>
                    </div>
                    <div id="wings">
                        <h3 className='font-semibold text-lg'>2. Wings</h3>
                        <p>An aircraft&apos;s wing is a crucial component that plays a critical function in its flight, which provides lift, stability and efficient agility. We have selected a <em>monoplane wing</em> (tapered trailing edge and straight leading edge), after proper research from various sources and by consulting with our mentors.</p>
                        <p>The position of the wing on the fuselage is High wing which is attached to the higher position of the fuselage, it gives stable flight, and it is not aerobatic.</p>
                    </div>
                    <div id="airfoil">
                        <h3 className='font-semibold text-lg'>3. Airfoil</h3>
                        <p>After proper research we decided to choose an asymmetrical airfoil (uneven shape on its upper and lower surfaces) because it will provide efficient lift generation, higher lift-to-drag ratio, more forgiving stall characteristics and better maneuver. The asymmetrical airfoil that we have used is <em>NACA N-10</em>.</p>
                    </div>
                    <div id="lift-drag-coefficient">
                        <h3 className='font-semibold text-lg'>4. Lift and Drag Coefficient</h3>
                        <p>The lift coefficient (Cl) is a dimensionless coefficient that characterizes an airfoil or wing design's efficiency in generating lift. It quantifies the link between the lift force produced and the airflow's dynamic pressure.</p>
                        <MathJax.Context input='ascii'>
                            <p>
                                <MathJax.Node>{cl}</MathJax.Node> where, L = Lift Force; p = air density; V = relative velocity of the air above the wing; A = wing's reference area
                            </p>
                        </MathJax.Context>
                        <p>The plot of lift coefficient versus angle of attack over NACA 10 is shown in the figure below.</p>
                        <p>The drag coefficient (Cd) is also a dimensionless coefficient that is used to determine the drag of an object in a fluid environment. The formula for calculating drag coefficient is-</p>
                        <MathJax.Context input='ascii'>
                            <p>
                                <MathJax.Node>{cd}</MathJax.Node> where, D = Lift Force; p = air density; V = relative velocity of the air above the wing; A = wing's reference area
                            </p>
                        </MathJax.Context>
                        <p>The plot of Drag coefficient versus Angle of attack is shown in the figure below.</p>
                    </div>
                </div>
                <div id="tail-construction">
                    <h2 className='font-semibold my-2 text-lg'>TAIL CONSTRUCTION</h2>
                    <p>Tail is one of the most important parts for any aircraft and for RC Planes and it is quite compulsory. It is mainly used for maintaining the stability and controlling pitch and yaw movement of an aircraft while flying. There are 3 types of  tail design available: conventional , H-tail , V-tail. The type of tail we used here is <em>CONVENTIONAL TYPE</em>  as it has the minimum risk to use and is also easy to design and manufacture and also considered as the most efficient design for R-C planes which contains one horizontal stabilizer attached with the fuselage and one vertical stabilizer fixed at the top surface of the fuselage.</p>
                </div>
                <div id="electronic-components">
                    <h2 className='font-semibold my-2 text-lg'>ELECTRONIC COMPONENTS</h2>
                    <p>The electronic equipments we used for our model are registered below-</p>
                    <table className="w-full text-sm shadow-md rounded-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Item
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Range/Rating
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1. Brushless Motor
                                </th>
                                <td className="px-6 py-4">
                                    1
                                </td>
                                <td className="px-6 py-4">
                                    1000 KV
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2. ESC
                                </th>
                                <td className="px-6 py-4">
                                    1
                                </td>
                                <td className="px-6 py-4">
                                    30 amp
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    3. LIPO Battery (3 cell)
                                </th>
                                <td className="px-6 py-4">
                                    1
                                </td>
                                <td className="px-6 py-4">
                                    2200 mAH, 11.1 V
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    4. Transmitter (FSiA6)
                                </th>
                                <td className="px-6 py-4">
                                    1
                                </td>
                                <td className="px-6 py-4">
                                    2.4 GHZ (6 channel)
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    5. Servo
                                </th>
                                <td className="px-6 py-4">
                                    5
                                </td>
                                <td className="px-6 py-4">
                                    180 degree (9 gm)
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    6. Receiver  (FSiA6)
                                </th>
                                <td className="px-6 py-4">
                                    1
                                </td>
                                <td className="px-6 py-4">
                                    2.4 GHZ
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="fuselage-construction">
                    <h2 className='font-semibold mb-1 text-lg mt-4'>FUSELAGE CONSTRUCTION</h2>
                    <p>The construction of the fuselage consists of three sections: Frontal Section, Midth Section and Aft Section.</p>
                    <p><em>Frontal Section:</em> This section is made up separately with the dimensions which follows the basic configuration relation of RC Planes. Additionally here, we gave this part a cylindrical shape to reduce the dragging effect while flying.</p>
                    <p><em>Midth Section:</em> This section is like a cuboid having two divisions or floors for electronic components and payload.</p>
                    <p><em>Aft part:</em> This section is slanted and has a length of 14.5’ and is hollow inside where the servos are placed to control the stabilizers.</p>
                </div>
            </React.Suspense>
        </main>
    )
}

export default Design;
