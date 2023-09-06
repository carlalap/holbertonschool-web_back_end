function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  export default function getBudgetForCurrentYear(income, gdp, capita) {
    // Get the current year once to avoid multiple function calls
    const currentYear = getCurrentYear();

    // Use ES6 computed property names to create property keys dynamically
    const budget = {
      [`income-${currentYear}`]: income,
      [`gdp-${currentYear}`]: gdp,
      [`capita-${currentYear}`]: capita,
    };

    return budget;
  }