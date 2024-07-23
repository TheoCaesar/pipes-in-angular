import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "temp", //comme selector
    standalone: true
})
export class TemperaturePipe implements PipeTransform{
    transform(value: any , ...args: any[]){
        return `temp ${value} - ${args}`
    }
}       