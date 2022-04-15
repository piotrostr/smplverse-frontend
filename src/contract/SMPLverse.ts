/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common'

export declare namespace ERC721A {
  export type TokenOwnershipStruct = {
    addr: string
    startTimestamp: BigNumberish
    burned: boolean
  }

  export type TokenOwnershipStructOutput = [string, BigNumber, boolean] & {
    addr: string
    startTimestamp: BigNumber
    burned: boolean
  }
}

export interface SMPLverseInterface extends utils.Interface {
  functions: {
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'baseTokenURI()': FunctionFragment
    'collectionSize()': FunctionFragment
    'devAddress()': FunctionFragment
    'explicitOwnershipOf(uint256)': FunctionFragment
    'explicitOwnershipsOf(uint256[])': FunctionFragment
    'getApproved(uint256)': FunctionFragment
    'getSMPL(bytes32,bytes32)': FunctionFragment
    'imageHash()': FunctionFragment
    'isApprovedForAll(address,address)': FunctionFragment
    'maxMint()': FunctionFragment
    'mint(uint256)': FunctionFragment
    'mintPrice()': FunctionFragment
    'name()': FunctionFragment
    'owner()': FunctionFragment
    'ownerOf(uint256)': FunctionFragment
    'pause()': FunctionFragment
    'paused()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'safeTransferFrom(address,address,uint256)': FunctionFragment
    'safeTransferFrom(address,address,uint256,bytes)': FunctionFragment
    'setApprovalForAll(address,bool)': FunctionFragment
    'setBaseTokenURI(string)': FunctionFragment
    'smpls(uint256)': FunctionFragment
    'supportsInterface(bytes4)': FunctionFragment
    'symbol()': FunctionFragment
    'tokenURI(uint256)': FunctionFragment
    'tokensOfOwner(address)': FunctionFragment
    'tokensOfOwnerIn(address,uint256,uint256)': FunctionFragment
    'totalSupply()': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'unpause()': FunctionFragment
    'withdraw()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'approve'
      | 'balanceOf'
      | 'baseTokenURI'
      | 'collectionSize'
      | 'devAddress'
      | 'explicitOwnershipOf'
      | 'explicitOwnershipsOf'
      | 'getApproved'
      | 'getSMPL'
      | 'imageHash'
      | 'isApprovedForAll'
      | 'maxMint'
      | 'mint'
      | 'mintPrice'
      | 'name'
      | 'owner'
      | 'ownerOf'
      | 'pause'
      | 'paused'
      | 'renounceOwnership'
      | 'safeTransferFrom(address,address,uint256)'
      | 'safeTransferFrom(address,address,uint256,bytes)'
      | 'setApprovalForAll'
      | 'setBaseTokenURI'
      | 'smpls'
      | 'supportsInterface'
      | 'symbol'
      | 'tokenURI'
      | 'tokensOfOwner'
      | 'tokensOfOwnerIn'
      | 'totalSupply'
      | 'transferFrom'
      | 'transferOwnership'
      | 'unpause'
      | 'withdraw'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(
    functionFragment: 'baseTokenURI',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'collectionSize',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'devAddress',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'explicitOwnershipOf',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'explicitOwnershipsOf',
    values: [BigNumberish[]]
  ): string
  encodeFunctionData(
    functionFragment: 'getApproved',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'getSMPL',
    values: [BytesLike, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'imageHash', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'isApprovedForAll',
    values: [string, string]
  ): string
  encodeFunctionData(functionFragment: 'maxMint', values?: undefined): string
  encodeFunctionData(functionFragment: 'mint', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'mintPrice', values?: undefined): string
  encodeFunctionData(functionFragment: 'name', values?: undefined): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'ownerOf',
    values: [BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    values: [string, string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    values: [string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'setApprovalForAll',
    values: [string, boolean]
  ): string
  encodeFunctionData(
    functionFragment: 'setBaseTokenURI',
    values: [string]
  ): string
  encodeFunctionData(functionFragment: 'smpls', values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'tokenURI',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'tokensOfOwner',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'tokensOfOwnerIn',
    values: [string, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string]
  ): string
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string
  encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string

  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'baseTokenURI',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'collectionSize',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'devAddress', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'explicitOwnershipOf',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'explicitOwnershipsOf',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getApproved',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getSMPL', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'imageHash', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'isApprovedForAll',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'maxMint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mintPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'setApprovalForAll',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'setBaseTokenURI',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'smpls', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'tokensOfOwner',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'tokensOfOwnerIn',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'totalSupply',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'ApprovalForAll(address,address,bool)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'Paused(address)': EventFragment
    'SMPLAssigned(address,uint256,bytes32,bytes32)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
    'Unpaused(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'SMPLAssigned'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment
}

export interface ApprovalEventObject {
  owner: string
  approved: string
  tokenId: BigNumber
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>

export interface ApprovalForAllEventObject {
  owner: string
  operator: string
  approved: boolean
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>

export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>

export interface PausedEventObject {
  account: string
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>

export type PausedEventFilter = TypedEventFilter<PausedEvent>

export interface SMPLAssignedEventObject {
  user: string
  tokenId: BigNumber
  uploadedImageHash: string
  smplHash: string
}
export type SMPLAssignedEvent = TypedEvent<
  [string, BigNumber, string, string],
  SMPLAssignedEventObject
>

export type SMPLAssignedEventFilter = TypedEventFilter<SMPLAssignedEvent>

export interface TransferEventObject {
  from: string
  to: string
  tokenId: BigNumber
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>

export type TransferEventFilter = TypedEventFilter<TransferEvent>

export interface UnpausedEventObject {
  account: string
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>

export interface SMPLverse extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: SMPLverseInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>

    baseTokenURI(overrides?: CallOverrides): Promise<[string]>

    collectionSize(overrides?: CallOverrides): Promise<[BigNumber]>

    devAddress(overrides?: CallOverrides): Promise<[string]>

    explicitOwnershipOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[ERC721A.TokenOwnershipStructOutput]>

    explicitOwnershipsOf(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[ERC721A.TokenOwnershipStructOutput[]]>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    getSMPL(
      userImageHash: BytesLike,
      smplHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    imageHash(overrides?: CallOverrides): Promise<[string]>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    maxMint(overrides?: CallOverrides): Promise<[BigNumber]>

    mint(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    mintPrice(overrides?: CallOverrides): Promise<[BigNumber]>

    name(overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    paused(overrides?: CallOverrides): Promise<[boolean]>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setBaseTokenURI(
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    smpls(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string
        userImageHash: string
        smplHash: string
      }
    >

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    symbol(overrides?: CallOverrides): Promise<[string]>

    tokenURI(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>

    tokensOfOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>

    tokensOfOwnerIn(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

  baseTokenURI(overrides?: CallOverrides): Promise<string>

  collectionSize(overrides?: CallOverrides): Promise<BigNumber>

  devAddress(overrides?: CallOverrides): Promise<string>

  explicitOwnershipOf(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ERC721A.TokenOwnershipStructOutput>

  explicitOwnershipsOf(
    tokenIds: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<ERC721A.TokenOwnershipStructOutput[]>

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  getSMPL(
    userImageHash: BytesLike,
    smplHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  imageHash(overrides?: CallOverrides): Promise<string>

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>

  maxMint(overrides?: CallOverrides): Promise<BigNumber>

  mint(
    quantity: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  mintPrice(overrides?: CallOverrides): Promise<BigNumber>

  name(overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  paused(overrides?: CallOverrides): Promise<boolean>

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'safeTransferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'safeTransferFrom(address,address,uint256,bytes)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setBaseTokenURI(
    _uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  smpls(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      owner: string
      userImageHash: string
      smplHash: string
    }
  >

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>

  symbol(overrides?: CallOverrides): Promise<string>

  tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

  tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber[]>

  tokensOfOwnerIn(
    owner: string,
    start: BigNumberish,
    stop: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

    baseTokenURI(overrides?: CallOverrides): Promise<string>

    collectionSize(overrides?: CallOverrides): Promise<BigNumber>

    devAddress(overrides?: CallOverrides): Promise<string>

    explicitOwnershipOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ERC721A.TokenOwnershipStructOutput>

    explicitOwnershipsOf(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<ERC721A.TokenOwnershipStructOutput[]>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    getSMPL(
      userImageHash: BytesLike,
      smplHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    imageHash(overrides?: CallOverrides): Promise<string>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    maxMint(overrides?: CallOverrides): Promise<BigNumber>

    mint(quantity: BigNumberish, overrides?: CallOverrides): Promise<void>

    mintPrice(overrides?: CallOverrides): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>

    pause(overrides?: CallOverrides): Promise<void>

    paused(overrides?: CallOverrides): Promise<boolean>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>

    setBaseTokenURI(_uri: string, overrides?: CallOverrides): Promise<void>

    smpls(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string
        userImageHash: string
        smplHash: string
      }
    >

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>

    symbol(overrides?: CallOverrides): Promise<string>

    tokenURI(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    tokensOfOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>

    tokensOfOwnerIn(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>

    unpause(overrides?: CallOverrides): Promise<void>

    withdraw(overrides?: CallOverrides): Promise<void>
  }

  filters: {
    'Approval(address,address,uint256)'(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter

    'ApprovalForAll(address,address,bool)'(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter

    'Paused(address)'(account?: null): PausedEventFilter
    Paused(account?: null): PausedEventFilter

    'SMPLAssigned(address,uint256,bytes32,bytes32)'(
      user?: string | null,
      tokenId?: null,
      uploadedImageHash?: null,
      smplHash?: null
    ): SMPLAssignedEventFilter
    SMPLAssigned(
      user?: string | null,
      tokenId?: null,
      uploadedImageHash?: null,
      smplHash?: null
    ): SMPLAssignedEventFilter

    'Transfer(address,address,uint256)'(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter

    'Unpaused(address)'(account?: null): UnpausedEventFilter
    Unpaused(account?: null): UnpausedEventFilter
  }

  estimateGas: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>

    baseTokenURI(overrides?: CallOverrides): Promise<BigNumber>

    collectionSize(overrides?: CallOverrides): Promise<BigNumber>

    devAddress(overrides?: CallOverrides): Promise<BigNumber>

    explicitOwnershipOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    explicitOwnershipsOf(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getSMPL(
      userImageHash: BytesLike,
      smplHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    imageHash(overrides?: CallOverrides): Promise<BigNumber>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    maxMint(overrides?: CallOverrides): Promise<BigNumber>

    mint(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    mintPrice(overrides?: CallOverrides): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    paused(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setBaseTokenURI(
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    smpls(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<BigNumber>

    tokenURI(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber>

    tokensOfOwnerIn(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    baseTokenURI(overrides?: CallOverrides): Promise<PopulatedTransaction>

    collectionSize(overrides?: CallOverrides): Promise<PopulatedTransaction>

    devAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    explicitOwnershipOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    explicitOwnershipsOf(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getSMPL(
      userImageHash: BytesLike,
      smplHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    imageHash(overrides?: CallOverrides): Promise<PopulatedTransaction>

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    maxMint(overrides?: CallOverrides): Promise<PopulatedTransaction>

    mint(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    mintPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setBaseTokenURI(
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    smpls(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

    tokenURI(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    tokensOfOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    tokensOfOwnerIn(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
