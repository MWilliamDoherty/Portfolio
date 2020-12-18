using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioExample.Objects
{
    public class Recipe
    {
        public int id { get; set; }
        public List<Step>? steps { get; set; }

    }
    public class Step
    {
        public int id { get; set; }
        public List<Measurement>? measurement { get; set; }
        public Action? action { get; set; }
        public int? numberInList { get; set; }
        public string? notes { get; set; }
    }
    public class Measurement
    {
        public int id { get; set; }
        public Ingredient? ingredient { get; set; }
        public MeasurementType? measurementType { get; set; }
        public decimal? quantity { get; set; }

    }
    public class Action
    {
        public int id { get; set; }
        public string? name { get; set; }
    }
    public class Ingredient
    {
        public int id { get; set; }
        public string? name { get; set; }
    }
    public class MeasurementType
    {
        public int id { get; set; }
        public string? name { get; set; }
        public bool? unitOfMeasure { get; set; }
    }


}
