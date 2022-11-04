import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import React from "react";

import EventArtifacts from "./artifacts/contracts/Event.sol/Event.json";
import TicketTypeArtifacts from "./artifacts/contracts/TicketType.sol/TicketType.json";
import logger from "./logger";
import { Event, TicketType } from "./types";

interface Props {
  contractAddress: string;
}

declare global {
  interface Window {
    ethereum: ethers.providers.ExternalProvider;
  }
}

const SimpleStoreApp = ({ contractAddress }: Props) => {
  const { library, account } = useWeb3React();

  // get store value form smart contract
  // const fetchValue = () => {
  //   logger.warn("fetchValue");
  //   const provider = library || new ethers.providers.Web3Provider(window.ethereum);
  //   const contract = new ethers.Contract(contractAddress, BoxArtifacts.abi, provider) as Box;
  //   contract.retrieve().then(logger.warn).catch(logger.error);
  // };

  // set random number for store
  const setValue = async (val: number) => {
    logger.warn("setValue", val);
    const provider = library || new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, EventArtifacts.abi, signer) as Event;

    try {
      const transaction = await contract.createEvent("1", "1", "1", "1", "1", "1", "1");
      await transaction.wait();
    } catch (error) {
      logger.error(error);
    }
  };

  // React.useEffect(() => {
  //   const provider = library || new ethers.providers.Web3Provider(window.ethereum);
  //   // Khi user authorized thi listen event ValueChanged
  //   if (account) {
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(contractAddress, EventArtifacts.abi, signer) as Event;
  //     const listener = (newValue: BigNumber) => {
  //       logger.warn("ValueChanged", newValue);
  //     };

  //     // lang nghe su kien khi thay doi event ValueChanged trong contract
  //     contract.on("ValueChanged", listener);

  //     // remove listener when component unmount
  //     return () => {
  //       contract.removeListener("ValueChanged", listener);
  //     };
  //   }
  // }, [library, account]);

  return (
    <div>
      SimpleStoreApp
      <h3>Contract Address: {contractAddress}</h3>
      <div>
        {/* <button type="button" className="btn" onClick={fetchValue}>
          Fetch value
        </button> */}
        <button disabled={!account} type="button" className="btn" onClick={() => setValue(Date.now())}>
          Set value
        </button>
      </div>
    </div>
  );
};

export default SimpleStoreApp;
