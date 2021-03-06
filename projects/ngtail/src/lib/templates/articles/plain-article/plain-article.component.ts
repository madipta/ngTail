import { Component, Input } from '@angular/core';
import { DataArticle } from '../data-article';

@Component({
  selector: 'anu-plain-article',
  template: `
    <section class="text-gray-700">
      <div class="max-w-screen-lg px-5 py-24 mx-auto">
        <div class="flex flex-wrap md:justify-center -m-4">
          <div class="p-4 md:w-1/{{cols}} w-full" *ngFor="let article of articles">
            <anu-plain-article-item [article]="article"></anu-plain-article-item>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PlainArticleComponent {
  cols = 2;

  @Input() articles: DataArticle[] = [];

  @Input()
  get columns(): number {
    return this.cols;
  }
  set columns(val: number) {
    if (val > 6) {
      this.cols = 6;
    } else if (val < 2) {
      this.cols = 2;
    } else {
      this.cols = val;
    }
  }
}
