CREATE TABLE [dbo].[Measurements]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [IngredientId] INT NOT NULL, 
    [MeasurementTypeId] INT NULL, 
    [Quantity] DECIMAL NULL,
    FOREIGN KEY ([IngredientId]) REFERENCES [dbo].[Ingredients](Id),
    FOREIGN KEY ([MeasurementTypeId]) REFERENCES [dbo].[MeasurementTypes](Id)
)
