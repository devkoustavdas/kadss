import { Button } from "@nextui-org/react";
import { getUrl } from '../../utils';

export default function TopNavbar() {
    return (
        <div className="px-3 py-2 z-20 fixed m-0 top-0 left-0 w-full h-fit backdrop-blur-md inline-flex flex-row justify-between">
            <div className="text-lg font-bold">
                <img
                    className='w-14'
                    src={getUrl("KADSS-logo.png")}
                    alt="KADSS Logo"
                    title="KADSS Logo"
                />
            </div>
            <a href="mailto:kadssofficial@gmail.com" target="_blank" rel="noopener noreferrer" title="Email Us in our Official Email ID"><Button color="primary" variant="solid">
                Email Us
            </Button></a>
        </div>
    );
}
