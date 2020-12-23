CREATE TABLE [dbo].[Steps]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [RecipeId] INT NULL,
	[ActionId] INT NULL, 
    [NumberInList] INT NULL, 
    [Notes] NVARCHAR(MAX) NULL, 
    FOREIGN KEY ([RecipeId]) REFERENCES [dbo].[Recipes](Id)
)
