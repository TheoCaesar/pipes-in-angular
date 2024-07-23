import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "temp", //comme selector
    standalone: true
})
export class TemperaturePipe implements PipeTransform{
    transform(value: string | number , ...args: any[]){
        let val = (typeof value=== "string") ? parseFloat(value) :  value;

        const outputTemp = val * (9/5) + 32; //convert value to F
        return `${outputTemp.toFixed(2)} °F`
    }
}       