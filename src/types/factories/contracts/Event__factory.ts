/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../common";
import type { Event, EventInterface } from "../../contracts/Event";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "address_",
        type: "address",
      },
    ],
    name: "approveEventManager",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "location_",
        type: "string",
      },
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
      {
        internalType: "string",
        name: "image_",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "priceUnit_",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "startDate_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endDate_",
        type: "uint256",
      },
    ],
    name: "createEvent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "address_",
        type: "address",
      },
    ],
    name: "getApprovedEventManager",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "eventID_",
        type: "uint64",
      },
    ],
    name: "viewEventDetails",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6115498061010d6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100f1578063e26429e01461010f578063f2fde38b1461013f578063f95b33091461015b5761007d565b806324555147146100825780633a08a06d146100b7578063715018a6146100e7575b600080fd5b61009c60048036038101906100979190610f6c565b61018b565b6040516100ae969594939291906110cc565b60405180910390f35b6100d160048036038101906100cc9190610e45565b610527565b6040516100de91906110b1565b60405180910390f35b6100ef61057d565b005b6100f9610591565b6040516101069190611096565b60405180910390f35b61012960048036038101906101249190610e6e565b6105ba565b60405161013691906111bb565b60405180910390f35b61015960048036038101906101549190610e45565b610a2f565b005b61017560048036038101906101709190610e45565b610ab3565b60405161018291906110b1565b60405180910390f35b606080600080600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008867ffffffffffffffff168152602001908152602001600020600001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008967ffffffffffffffff168152602001908152602001600020600201600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a67ffffffffffffffff16815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008b67ffffffffffffffff16815260200190815260200160002060040160149054906101000a900467ffffffffffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008c67ffffffffffffffff16815260200190815260200160002060050154600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008d67ffffffffffffffff16815260200190815260200160002060060154858054610406906112e6565b80601f0160208091040260200160405190810160405280929190818152602001828054610432906112e6565b801561047f5780601f106104545761010080835404028352916020019161047f565b820191906000526020600020905b81548152906001019060200180831161046257829003601f168201915b50505050509550848054610492906112e6565b80601f01602080910402602001604051908101604052809291908181526020018280546104be906112e6565b801561050b5780601f106104e05761010080835404028352916020019161050b565b820191906000526020600020905b8154815290600101906020018083116104ee57829003601f168201915b5050505050945095509550955095509550955091939550919395565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b610585610bb1565b61058f6000610c2f565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461064f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106469061119b565b60405180910390fd5b87600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006001815260200190815260200160002060000190805190602001906106b7929190610cfb565b5086600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600181526020019081526020016000206001019080519060200190610720929190610cfb565b5085600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600181526020019081526020016000206002019080519060200190610789929190610cfb565b5084600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006001815260200190815260200160002060030190805190602001906107f2929190610cfb565b5033600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006001815260200190815260200160002060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006001815260200190815260200160002060040160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555082600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600181526020019081526020016000206005018190555081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060018152602001908152602001600020600601819055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006001815260200190815260200160002060070160006101000a81548160ff02191690831515021790555060019050979650505050505050565b610a37610bb1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610aa7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9e9061113b565b60405180910390fd5b610ab081610c2f565b50565b6000610abd610bb1565b60001515600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610b50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b479061115b565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060019050919050565b610bb9610cf3565b73ffffffffffffffffffffffffffffffffffffffff16610bd7610591565b73ffffffffffffffffffffffffffffffffffffffff1614610c2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c249061117b565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b828054610d07906112e6565b90600052602060002090601f016020900481019282610d295760008555610d70565b82601f10610d4257805160ff1916838001178555610d70565b82800160010185558215610d70579182015b82811115610d6f578251825591602001919060010190610d54565b5b509050610d7d9190610d81565b5090565b5b80821115610d9a576000816000905550600101610d82565b5090565b6000610db1610dac846111fb565b6111d6565b905082815260208101848484011115610dc957600080fd5b610dd48482856112a4565b509392505050565b600081359050610deb816114ce565b92915050565b600082601f830112610e0257600080fd5b8135610e12848260208601610d9e565b91505092915050565b600081359050610e2a816114e5565b92915050565b600081359050610e3f816114fc565b92915050565b600060208284031215610e5757600080fd5b6000610e6584828501610ddc565b91505092915050565b600080600080600080600060e0888a031215610e8957600080fd5b600088013567ffffffffffffffff811115610ea357600080fd5b610eaf8a828b01610df1565b975050602088013567ffffffffffffffff811115610ecc57600080fd5b610ed88a828b01610df1565b965050604088013567ffffffffffffffff811115610ef557600080fd5b610f018a828b01610df1565b955050606088013567ffffffffffffffff811115610f1e57600080fd5b610f2a8a828b01610df1565b9450506080610f3b8a828b01610e30565b93505060a0610f4c8a828b01610e1b565b92505060c0610f5d8a828b01610e1b565b91505092959891949750929550565b600060208284031215610f7e57600080fd5b6000610f8c84828501610e30565b91505092915050565b610f9e81611248565b82525050565b610fad8161125a565b82525050565b6000610fbe8261122c565b610fc88185611237565b9350610fd88185602086016112b3565b610fe1816113a7565b840191505092915050565b6000610ff9602683611237565b9150611004826113b8565b604082019050919050565b600061101c602583611237565b915061102782611407565b604082019050919050565b600061103f602083611237565b915061104a82611456565b602082019050919050565b6000611062603183611237565b915061106d8261147f565b604082019050919050565b61108181611286565b82525050565b61109081611290565b82525050565b60006020820190506110ab6000830184610f95565b92915050565b60006020820190506110c66000830184610fa4565b92915050565b600060c08201905081810360008301526110e68189610fb3565b905081810360208301526110fa8188610fb3565b90506111096040830187610f95565b6111166060830186611087565b6111236080830185611078565b61113060a0830184611078565b979650505050505050565b6000602082019050818103600083015261115481610fec565b9050919050565b600060208201905081810360008301526111748161100f565b9050919050565b6000602082019050818103600083015261119481611032565b9050919050565b600060208201905081810360008301526111b481611055565b9050919050565b60006020820190506111d06000830184611078565b92915050565b60006111e06111f1565b90506111ec8282611318565b919050565b6000604051905090565b600067ffffffffffffffff82111561121657611215611378565b5b61121f826113a7565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061125382611266565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b82818337600083830152505050565b60005b838110156112d15780820151818401526020810190506112b6565b838111156112e0576000848401525b50505050565b600060028204905060018216806112fe57607f821691505b6020821081141561131257611311611349565b5b50919050565b611321826113a7565b810181811067ffffffffffffffff821117156113405761133f611378565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4576656e74206d616e6167657220616c726561647920617070726f766564206260008201527f65666f7265000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4f6e6c79204576656e74204d616e61676572732061726520616c6c6f7765642060008201527f746f20646f207468697320616374696f6e000000000000000000000000000000602082015250565b6114d781611248565b81146114e257600080fd5b50565b6114ee81611286565b81146114f957600080fd5b50565b61150581611290565b811461151057600080fd5b5056fea2646970667358221220ff4d76579a9075f8823ee78032bafebafedf4c15e5917378257b435f4a759e0e64736f6c63430008040033";

type EventConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EventConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Event__factory extends ContractFactory {
  constructor(...args: EventConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Event> {
    return super.deploy(overrides || {}) as Promise<Event>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Event {
    return super.attach(address) as Event;
  }
  override connect(signer: Signer): Event__factory {
    return super.connect(signer) as Event__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EventInterface {
    return new utils.Interface(_abi) as EventInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Event {
    return new Contract(address, _abi, signerOrProvider) as Event;
  }
}
