// or for Moment.js
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import React, { useState } from "react";

import EventArtifacts from "./artifacts/contracts/Event.sol/Event.json";
import TicketTypeArtifacts from "./artifacts/contracts/TicketType.sol/TicketType.json";
import logger from "./logger";
import { Event, TicketType } from "./types";

interface Props {
  contractAddress: string;
}

interface EventObject {
  eName: string;
  eLocation: string;
  eDesc: string;
  eImage: string;
  ePriceUnit: number;
  eStartTime: number;
  eEndTime: number;
}

declare global {
  interface Window {
    ethereum: ethers.providers.ExternalProvider;
  }
}

const TicketNFT = ({ contractAddress }: Props) => {
  const { library, account } = useWeb3React();
  const [showCreateEventModal, setShowCreateEventModal] = useState<boolean>(false);
  const [state, setState] = useState<EventObject>({
    eName: "",
    eLocation: "",
    eDesc: "",
    eImage: "",
    ePriceUnit: 0,
    eStartTime: 0,
    eEndTime: 0,
  });

  // get store value form smart contract
  // const fetchValue = () => {
  //   logger.warn("fetchValue");
  //   const provider = library || new ethers.providers.Web3Provider(window.ethereum);
  //   const contract = new ethers.Contract(contractAddress, BoxArtifacts.abi, provider) as Box;
  //   contract.retrieve().then(logger.warn).catch(logger.error);
  // };

  const approvedEventManager = async (address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266") => {
    logger.warn("approvedEventManager", address);
    const provider = library || new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, EventArtifacts.abi, signer) as Event;

    try {
      const transaction = await contract.approveEventManager(address);
      await transaction.wait();
    } catch (error) {
      logger.error(error);
    }
  };

  // create event
  const createEvent = async (object: EventObject) => {
    logger.warn("createEvent", object);
    const provider = library || new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, EventArtifacts.abi, signer) as Event;

    try {
      const transaction = await contract.createEvent(
        object.eName,
        object.eLocation,
        object.eDesc,
        object.eImage,
        object.ePriceUnit,
        object.eStartTime,
        object.eEndTime
      );
      await transaction.wait();
    } catch (error) {
      logger.error(error);
    }
  };

  const getEventDetails = async (eventId = 0) => {
    logger.warn("getEventDetails", eventId);
    const provider = library || new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, EventArtifacts.abi, signer) as Event;

    try {
      const eventDetails = await contract.viewEventDetails(eventId);
      console.log(eventDetails);
    } catch (error) {
      logger.error(error);
    }
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateEvent = () => {
    setShowCreateEventModal(false);
    createEvent(state);
  };

  React.useEffect(() => {
    const provider = library || new ethers.providers.Web3Provider(window.ethereum);
    // Khi user authorized thi listen event NewEvent
    if (account) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, EventArtifacts.abi, signer) as Event;
      const listener = (newValue: BigNumber) => {
        logger.warn("NewEvent", newValue);
      };

      // lang nghe su kien khi thay doi event NewEvent trong contract
      contract.on("NewEvent", listener);

      // remove listener when component unmount
      return () => {
        contract.removeListener("NewEvent", listener);
      };
    }
  }, [library, account]);

  return (
    <div>
      SimpleStoreApp
      <h3>Contract Address: {contractAddress}</h3>
      <div>
        {/* <button type="button" className="btn" onClick={fetchValue}>
          Fetch value
        </button> */}
        <button disabled={!account} type="button" className="btn" onClick={() => setShowCreateEventModal(true)}>
          Create Event
        </button>
        <button disabled={!account} type="button" className="btn" onClick={() => approvedEventManager()}>
          Approved Event Manager
        </button>
        <button disabled={!account} type="button" className="btn" onClick={() => getEventDetails()}>
          Get Event Details
        </button>
        {showCreateEventModal && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Create Event</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowCreateEventModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Event name</span>
                      </label>
                      <input
                        type="text"
                        name="eName"
                        value={state.eName}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Location</span>
                      </label>
                      <input
                        type="text"
                        name="eLocation"
                        value={state.eLocation}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Description</span>
                      </label>
                      <input
                        type="text"
                        name="eDesc"
                        value={state.eDesc}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Image</span>
                      </label>
                      <input
                        type="text"
                        name="eImage"
                        value={state.eImage}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Choose image</span>
                      </label>
                      <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div> */}
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Price unit</span>
                      </label>
                      <input
                        type="text"
                        name="ePriceUnit"
                        value={state.ePriceUnit}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Event Start Time</span>
                      </label>
                      <input
                        type="text"
                        name="eStartTime"
                        value={state.eStartTime}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Event End Time</span>
                      </label>
                      <input
                        type="text"
                        name="eEndTime"
                        value={state.eEndTime}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowCreateEventModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleCreateEvent()}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default TicketNFT;
