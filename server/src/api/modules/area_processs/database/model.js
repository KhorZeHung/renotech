// model

// // ComboDetailModel
// comboId : objectId
// areaOfWork : string (enum calculation)

// // MaterialDetailModel 
// id : objectId
// quantity: int
// unit : string
// description : [string]
// price : float

// // VariableCost
// name : string
// description
// cost : float
// price : flaot
// quantity : int

// // AreaProcessModel
// folderId : objectId
// referenceId : objectId
// areaId : objectId
// process : string
// listOfCombo : [ComboDetailModel]
// listOfProducts : [MaterialDetailModel]
// listOfServices : [MaterialDetailModel]
// variableCost : [VariableCostModel]
// totalCharge : float
// cost : float
// createdAt : datetime, default Date(), immutable
// updatedAt : datetime, default Date()