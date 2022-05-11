import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText'
})
export class HighlightTextPipe implements PipeTransform {

  transform(value: string, args: string[]): string {
    if (!args) {return value;}
        for(const text of args) {
            var reText = new RegExp(text, 'gi');
            value = value.split(' ').map(word => {
              return word.toLowerCase() == text ? word.replace(reText, "<mark>" + word + "</mark>"
            ) : word}).join(' ')
        }
        return value;
  }

}
