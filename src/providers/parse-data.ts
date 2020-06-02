import { Injectable } from '@angular/core';

@Injectable()
export class ParseDataProvider {
    constructor() { }

    public ParseToTwoDecimal(value: number): number {
        if (value != null)
            return Number.parseFloat(this.ParseToTwoDecimalForInput(value.toString()));
        else return 0;
    }

    public ParseToTwoDecimalForInput(value: string): string {
        if (value.includes('.')) {
            let spit: string[] = value.split('.', 2);
            if (spit.length > 1) {
                spit[1] = spit[1].substring(0, 2);
                let amount2Decimal = spit[0].concat('.', spit[1]);
                return amount2Decimal;
            } else {
                return value;
            }
        }
        return value;
    }
}
