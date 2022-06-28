// Implment a class for the Plot model
// This class should be able to be built from a JSON object
export class Plot {
    id: string;
    plot_name: string;
    plot: string;
    user_id: string;

    // Make a constructor that takes a JSON Object as an {} = any type
    constructor(data: undefined | any = {}) {
        this.id = data.id;
        this.plot_name = data.plot_name;
        this.plot = data.plot;
        this.user_id = data.user_id;
    }
}

// Implment an API Response Class called PlotDetailedResponse
// It will take a JSON object as an argument in the constructor
// It will have a property called data that is a Plot object
// It will have a property called successful that is a boolean
// It will have a property called message that is a string
export class PlotDetailedResponse {
    data: Plot;
    successful: boolean;
    message: string;

    // Make a constructor that takes a JSON Object that can be undefined or any type JSON object
    constructor(data: undefined | any = {}) {
        this.data = new Plot(data.data);
        this.successful = data.successful;
        this.message = data.message;
    }
}

// Implment an API Response Class called PlotsDetailedResponse
// It will take a JSON object as an argument in the constructor
// It will have a property called data that is an array of Plot objects
// It will have a property called successful that is a boolean
// It will have a property called message that is a string
export class PlotsDetailedResponse {
    data: Plot[];
    successful: boolean;
    message: string;

    // Make a constructor that takes a JSON Object that can be undefined or any type JSON object
    constructor(data: undefined | any = {}) {
        this.data = data.data.map((plot: any = {}) => new Plot(plot));
        this.successful = data.successful;
        this.message = data.message;
    }
}
