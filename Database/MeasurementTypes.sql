CREATE TABLE [dbo].[MeasurementTypes]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Name] NVARCHAR(50) NULL, 
    [UnitOfMeasurement] BIT NULL, 
    [Type] NVARCHAR(50) NULL
)
