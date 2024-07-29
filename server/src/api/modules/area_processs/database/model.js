// model

// // ComboDetailModel
// comboId : objectId
// areaOfWork : string (enum calculation)

// // MaterialDetailModel 
// id : objectId
// quantity: int
// unit : string
// description : [string]

// // VariableCost
// name : string
// description
// cost : float
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
// price : float
// cost : float
// createdAt : datetime, default Date(), immutable
// updatedAt : datetime, default Date()