/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ISuperTokenFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createERC20Wrapper(address,uint8,string,string)": FunctionFragment;
    "getHost()": FunctionFragment;
    "getSuperTokenLogic()": FunctionFragment;
    "initialize()": FunctionFragment;
    "initializeCustomSuperToken(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createERC20Wrapper",
    values: [string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "getHost", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSuperTokenLogic",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeCustomSuperToken",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createERC20Wrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHost", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSuperTokenLogic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeCustomSuperToken",
    data: BytesLike
  ): Result;

  events: {
    "CustomSuperTokenCreated(address)": EventFragment;
    "SuperTokenCreated(address)": EventFragment;
    "SuperTokenLogicCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CustomSuperTokenCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SuperTokenCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SuperTokenLogicCreated"): EventFragment;
}

export class ISuperTokenFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ISuperTokenFactoryInterface;

  functions: {
    "createERC20Wrapper(address,uint8,string,string)"(
      underlyingToken: string,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createERC20Wrapper(address,uint8,uint8,string,string)"(
      underlyingToken: string,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getHost(overrides?: CallOverrides): Promise<[string] & { host: string }>;

    getSuperTokenLogic(
      overrides?: CallOverrides
    ): Promise<[string] & { superToken: string }>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeCustomSuperToken(
      customSuperTokenProxy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  "createERC20Wrapper(address,uint8,string,string)"(
    underlyingToken: string,
    upgradability: BigNumberish,
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createERC20Wrapper(address,uint8,uint8,string,string)"(
    underlyingToken: string,
    underlyingDecimals: BigNumberish,
    upgradability: BigNumberish,
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getHost(overrides?: CallOverrides): Promise<string>;

  getSuperTokenLogic(overrides?: CallOverrides): Promise<string>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeCustomSuperToken(
    customSuperTokenProxy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "createERC20Wrapper(address,uint8,string,string)"(
      underlyingToken: string,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createERC20Wrapper(address,uint8,uint8,string,string)"(
      underlyingToken: string,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getHost(overrides?: CallOverrides): Promise<string>;

    getSuperTokenLogic(overrides?: CallOverrides): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    initializeCustomSuperToken(
      customSuperTokenProxy: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CustomSuperTokenCreated(
      token?: string | null
    ): TypedEventFilter<[string], { token: string }>;

    SuperTokenCreated(
      token?: string | null
    ): TypedEventFilter<[string], { token: string }>;

    SuperTokenLogicCreated(
      tokenLogic?: string | null
    ): TypedEventFilter<[string], { tokenLogic: string }>;
  };

  estimateGas: {
    "createERC20Wrapper(address,uint8,string,string)"(
      underlyingToken: string,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createERC20Wrapper(address,uint8,uint8,string,string)"(
      underlyingToken: string,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getHost(overrides?: CallOverrides): Promise<BigNumber>;

    getSuperTokenLogic(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeCustomSuperToken(
      customSuperTokenProxy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "createERC20Wrapper(address,uint8,string,string)"(
      underlyingToken: string,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createERC20Wrapper(address,uint8,uint8,string,string)"(
      underlyingToken: string,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getHost(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSuperTokenLogic(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeCustomSuperToken(
      customSuperTokenProxy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
