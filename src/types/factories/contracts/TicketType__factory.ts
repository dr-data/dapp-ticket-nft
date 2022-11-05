/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../common";
import type {
  TicketType,
  TicketTypeInterface,
} from "../../contracts/TicketType";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "eventContractAddress_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "eventId_",
        type: "uint64",
      },
      {
        internalType: "string",
        name: "name_",
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
        name: "maxTicketCount_",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "priceFactor_",
        type: "uint64",
      },
    ],
    name: "createTicketClass",
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
        internalType: "uint64",
        name: "eventID_",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "ticketClassID_",
        type: "uint64",
      },
    ],
    name: "viewTicketClass",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610cc4380380610cc48339818101604052810190610032919061008e565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610100565b600081519050610088816100e9565b92915050565b6000602082840312156100a057600080fd5b60006100ae84828501610079565b91505092915050565b60006100c2826100c9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f2816100b7565b81146100fd57600080fd5b50565b610bb58061010f6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632708b4ff1461003b57806370cb9cdf1461006b575b600080fd5b610055600480360381019061005091906106e8565b61009e565b6040516100629190610905565b60405180910390f35b610085600480360381019061008091906107b9565b610397565b6040516100959493929190610899565b60405180910390f35b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600115158173ffffffffffffffffffffffffffffffffffffffff16633a08a06d336040518263ffffffff1660e01b8152600401610103919061087e565b60206040518083038186803b15801561011b57600080fd5b505afa15801561012f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015391906106bf565b151514610195576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018c906108e5565b60405180910390fd5b60006101a16000610566565b905087600260008b67ffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060000190805190602001906101e892919061058a565b5086600260008b67ffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020600101908051906020019061022e92919061058a565b5085600260008b67ffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020600201908051906020019061027492919061058a565b5084600260008b67ffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060030160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600260008b67ffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060030160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083600260008b67ffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060030160106101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506103886000610574565b80925050509695505050505050565b60606000806000600260008767ffffffffffffffff16815260200190815260200160002060008667ffffffffffffffff168152602001908152602001600020600001600260008867ffffffffffffffff16815260200190815260200160002060008767ffffffffffffffff16815260200190815260200160002060030160009054906101000a900467ffffffffffffffff16600260008967ffffffffffffffff16815260200190815260200160002060008867ffffffffffffffff16815260200190815260200160002060030160089054906101000a900467ffffffffffffffff16600260008a67ffffffffffffffff16815260200190815260200160002060008967ffffffffffffffff16815260200190815260200160002060030160109054906101000a900467ffffffffffffffff168380546104d590610a30565b80601f016020809104026020016040519081016040528092919081815260200182805461050190610a30565b801561054e5780601f106105235761010080835404028352916020019161054e565b820191906000526020600020905b81548152906001019060200180831161053157829003601f168201915b50505050509350935093509350935092959194509250565b600081600001549050919050565b6001816000016000828254019250508190555050565b82805461059690610a30565b90600052602060002090601f0160209004810192826105b857600085556105ff565b82601f106105d157805160ff19168380011785556105ff565b828001600101855582156105ff579182015b828111156105fe5782518255916020019190600101906105e3565b5b50905061060c9190610610565b5090565b5b80821115610629576000816000905550600101610611565b5090565b600061064061063b84610945565b610920565b90508281526020810184848401111561065857600080fd5b6106638482856109ee565b509392505050565b60008151905061067a81610b51565b92915050565b600082601f83011261069157600080fd5b81356106a184826020860161062d565b91505092915050565b6000813590506106b981610b68565b92915050565b6000602082840312156106d157600080fd5b60006106df8482850161066b565b91505092915050565b60008060008060008060c0878903121561070157600080fd5b600061070f89828a016106aa565b965050602087013567ffffffffffffffff81111561072c57600080fd5b61073889828a01610680565b955050604087013567ffffffffffffffff81111561075557600080fd5b61076189828a01610680565b945050606087013567ffffffffffffffff81111561077e57600080fd5b61078a89828a01610680565b935050608061079b89828a016106aa565b92505060a06107ac89828a016106aa565b9150509295509295509295565b600080604083850312156107cc57600080fd5b60006107da858286016106aa565b92505060206107eb858286016106aa565b9150509250929050565b6107fe81610992565b82525050565b600061080f82610976565b6108198185610981565b93506108298185602086016109fd565b61083281610af1565b840191505092915050565b600061084a603183610981565b915061085582610b02565b604082019050919050565b610869816109d0565b82525050565b610878816109da565b82525050565b600060208201905061089360008301846107f5565b92915050565b600060808201905081810360008301526108b38187610804565b90506108c2602083018661086f565b6108cf604083018561086f565b6108dc606083018461086f565b95945050505050565b600060208201905081810360008301526108fe8161083d565b9050919050565b600060208201905061091a6000830184610860565b92915050565b600061092a61093b565b90506109368282610a62565b919050565b6000604051905090565b600067ffffffffffffffff8211156109605761095f610ac2565b5b61096982610af1565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061099d826109b0565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015610a1b578082015181840152602081019050610a00565b83811115610a2a576000848401525b50505050565b60006002820490506001821680610a4857607f821691505b60208210811415610a5c57610a5b610a93565b5b50919050565b610a6b82610af1565b810181811067ffffffffffffffff82111715610a8a57610a89610ac2565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f6e6c79204576656e74204d616e61676572732061726520616c6c6f7765642060008201527f746f20646f207468697320616374696f6e000000000000000000000000000000602082015250565b610b5a816109a4565b8114610b6557600080fd5b50565b610b71816109da565b8114610b7c57600080fd5b5056fea2646970667358221220e42d743e90e57bc2d81fbb9efe73dde5fd01449cdff097905df1bd756500f1bd64736f6c63430008040033";

type TicketTypeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TicketTypeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TicketType__factory extends ContractFactory {
  constructor(...args: TicketTypeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    eventContractAddress_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TicketType> {
    return super.deploy(
      eventContractAddress_,
      overrides || {}
    ) as Promise<TicketType>;
  }
  override getDeployTransaction(
    eventContractAddress_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(eventContractAddress_, overrides || {});
  }
  override attach(address: string): TicketType {
    return super.attach(address) as TicketType;
  }
  override connect(signer: Signer): TicketType__factory {
    return super.connect(signer) as TicketType__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TicketTypeInterface {
    return new utils.Interface(_abi) as TicketTypeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TicketType {
    return new Contract(address, _abi, signerOrProvider) as TicketType;
  }
}
