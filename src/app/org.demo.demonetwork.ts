import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.demo.demonetwork{
   export class ProductAsset extends Asset {
      assetId: string;
      owner: NetworkParticipant;
      value: string;
      price: number;
   }
   export class ConfidenceAsset extends Asset {
      assetId: string;
      owner: NetworkParticipant;
      value: number;
   }
   export class CredibilityAsset extends Asset {
      assetId: string;
      owner: NetworkParticipant;
      value: number;
   }
   export class NetworkParticipant extends Participant {
      participantId: string;
      name: string;
   }
   export class SampleTransaction extends Transaction {
      asset: ProductAsset;
      newValue: string;
   }
   export class ProductTransaction extends Transaction {
      asset: ProductAsset;
      seller: NetworkParticipant;
      buyer: NetworkParticipant;
      quantity: number;
   }
   export class SampleEvent extends Event {
      asset: ProductAsset;
      oldValue: string;
      newValue: string;
   }
   export class ProductBuyingEvent extends Event {
      asset: ProductAsset;
      seller: NetworkParticipant;
      buyer: NetworkParticipant;
      quantity: number;
   }
   export class ConficenceUpdateEvent extends Event {
      asset: ConfidenceAsset;
      oldValue: number;
      newValue: number;
   }
// }
