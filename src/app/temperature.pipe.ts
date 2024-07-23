import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "temp", //comme selector
    standalone: true
})
export class TemperaturePipe implements PipeTransform{
    transform(value: string | number | null , 
        inputType: 'cel' | 'fah', outputType ?: 'cel' | 'fah'){
        if (!value) return value;  //if null return null
        
        let val = (typeof value=== "string") ? parseFloat(value) :  value;
        
        let outputTemp;
        let symbol: '°F' | '°C';
        if (inputType === 'cel' && outputType === 'fah'){
            outputTemp = val * (9/5) + 32; 
            symbol = '°F'
        } else if (inputType === 'fah' && outputType === 'cel') {
            outputTemp = (5/9)* (val - 32);
            symbol = '°C'
        } else { //just one param - input
            outputTemp = val;
            symbol = (inputType === 'cel') ? '°C' : '°F'
        }
        return `${outputTemp.toFixed(2)} ${symbol}`
    }
}       