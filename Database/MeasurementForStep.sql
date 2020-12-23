CREATE TABLE [dbo].[MeasurementHasStep]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [StepId] INT NOT NULL, 
    [MeasurementId] INT NOT NULL,
    FOREIGN KEY ([StepId]) REFERENCES [dbo].[Steps](Id),
    FOREIGN KEY ([MeasurementId]) REFERENCES [dbo].[Measurements](Id)
)
