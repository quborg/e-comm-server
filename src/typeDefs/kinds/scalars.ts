import { gql } from 'apollo-server';

const ScalarsTypeDefs = gql`
  enum Role {
    ADMIN
    MODERATOR
    REGULAR
    ANONYM
  }
  enum ProductAvailability {
    IN_STOCK
    OUT_OF_STOCK
    PRE_ORDER
    BACK_ORDER
  }
  enum CategoryType {
    ROOT
    CHILD
  }
  type Image {
    path: String
    svg: String
    filename: String
    mimetype: String
  }
  input ImageInput {
    path: String
    svg: String
    filename: String
  }
  enum OrderStatus {
    CANCELED
    DELIVERED
    INPROGRESS
    PARTIALLY_DELIVERED
    PARTIALLY_RETURNED
    PARTIALLY_SHIPPED
    PENDING_SHIPMENT
    RETURNED
    SHIPPED
  }
  enum PaymentStatus {
    PAYMENT_CAPTURED
    PAYMENT_REJECTED
    PAYMENT_SECURED
    PENDING_AUTHORIZATION
  }
  enum RefundReason {
    ADJUSTMENT
    AUTO_POST_INTERNAL
    AUTO_POST_INVALID_BILLING_ADDRESS
    AUTO_POST_NO_INVENTORY
    AUTO_POST_PRICE_ERROR
    AUTO_POST_UNDELIVERABLE_SHIPPING_ADDRESS
    COUPON_ABUSE
    COURTESY_ADJUSTMENT
    CUSTOMER_CANCELED
    CUSTOMER_DISCRETIONARY_RETURN
    CUSTOMER_INITIATED_MERCHANT_CANCEL
    CUSTOMER_SUPPORT_REQUESTED
    DELIVERED_LATE_BY_CARRIER
    DELIVERED_TOO_LATE
    EXPIRED_ITEM
    FAIL_TO_PUSH_ORDER_SERVER_ERROR
    FAIL_TO_PUSH_ORDER_MERCHANT_ERROR
    FAIL_TO_PUSH_ORDER_MERCHANT_FULFILLMENT_ERROR
    FAIL_TO_PUSH_ORDER_TO_MERCHANT
    FAIL_TO_PUSH_ORDER_TO_MERCHANT_OUT_OF_STOCK
    FEE_ADJUSTMENT
    INVALID_COUPON
    LATE_SHIPMENT_CREDIT
    MALFORMED_SHIPPING_ADDRESS
    MERCHANT_DID_NOT_SHIP_ON_TIME
    NO_INVENTORY
    ORDER_TIMEOUT
    OTHER
    PAYMENT_ABUSE
    PAYMENT_DECLINED
    PRICE_ADJUSTMENT
    PRICE_ERROR
    PRODUCT_ARRIVED_DAMAGED
    PRODUCT_NOT_AS_DESCRIBED
    PROMO_REAL_LOCATION
    QUALITY_NOT_AS_EXPECTED
    RETURN_REFUND_ABUSE
    SHIPPING_COST_ADJUSTMENT
    SHIPPING_PRICE_ERROR
    TAX_ADJUSTMENT
    TAX_ERROR
    UNDELIVERABLE_SHIPPING_ADDRESS
    UNSUPPORTED_PO_BOX_ADDRESS
    WRONG_PRODUCT_SHIPPED
  }
  enum ShipmentStatus {
    DELIVERED
    READY_FOR_PICKUP
    SHIPPED
    UNDELIVERABLE
  }
  enum Carrier {
    SHOP_CARRIER
    UPS
    DHL
    FEDEX
    CHRONOPOST
    ARAMEX
  }
  enum PromotionType {
    PRODUCT
    SHIPPING
  }
  enum PromotionSubType {
    MONEY_OFF
    PERCENT_OFF
    FREE_GIFT
    FREE_SHIPPING
    SALE_PRICE
  }
  enum PromotionApplicableItems {
    PRODUCT
    CATEGORY
    TAG
  }
  enum PickupType {
    STORE
    LOCKER
    THIRD_PARTY
  }
  enum CurrencyType {
    USD
    EUR
    JPY
    GBP
    TRY
    CNY
  }
`;

export default ScalarsTypeDefs;
