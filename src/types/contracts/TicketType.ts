/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface TicketTypeInterface extends utils.Interface {
  functions: {
    "createTicketClass(uint64,string,string,string,uint64,uint64)": FunctionFragment;
    "viewTicketClass(uint64,uint64)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createTicketClass" | "viewTicketClass"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createTicketClass",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "viewTicketClass",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createTicketClass",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewTicketClass",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TicketType extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TicketTypeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createTicketClass(
      eventId_: PromiseOrValue<BigNumberish>,
      name_: PromiseOrValue<string>,
      description_: PromiseOrValue<string>,
      image_: PromiseOrValue<string>,
      maxTicketCount_: PromiseOrValue<BigNumberish>,
      priceFactor_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    viewTicketClass(
      eventID_: PromiseOrValue<BigNumberish>,
      ticketClassID_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber, BigNumber]>;
  };

  createTicketClass(
    eventId_: PromiseOrValue<BigNumberish>,
    name_: PromiseOrValue<string>,
    description_: PromiseOrValue<string>,
    image_: PromiseOrValue<string>,
    maxTicketCount_: PromiseOrValue<BigNumberish>,
    priceFactor_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  viewTicketClass(
    eventID_: PromiseOrValue<BigNumberish>,
    ticketClassID_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, BigNumber, BigNumber]>;

  callStatic: {
    createTicketClass(
      eventId_: PromiseOrValue<BigNumberish>,
      name_: PromiseOrValue<string>,
      description_: PromiseOrValue<string>,
      image_: PromiseOrValue<string>,
      maxTicketCount_: PromiseOrValue<BigNumberish>,
      priceFactor_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewTicketClass(
      eventID_: PromiseOrValue<BigNumberish>,
      ticketClassID_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    createTicketClass(
      eventId_: PromiseOrValue<BigNumberish>,
      name_: PromiseOrValue<string>,
      description_: PromiseOrValue<string>,
      image_: PromiseOrValue<string>,
      maxTicketCount_: PromiseOrValue<BigNumberish>,
      priceFactor_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    viewTicketClass(
      eventID_: PromiseOrValue<BigNumberish>,
      ticketClassID_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createTicketClass(
      eventId_: PromiseOrValue<BigNumberish>,
      name_: PromiseOrValue<string>,
      description_: PromiseOrValue<string>,
      image_: PromiseOrValue<string>,
      maxTicketCount_: PromiseOrValue<BigNumberish>,
      priceFactor_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    viewTicketClass(
      eventID_: PromiseOrValue<BigNumberish>,
      ticketClassID_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
