import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-footer',
  template: `
    <footer class="bg-gray-100 text-gray-700 border-t-2 border-gray-100">
      <div class="max-w-screen-lg mx-auto px-5 py-3 flex items-center sm:flex-row flex-col">
        <a class="flex items-center md:justify-start justify-center text-gray-900">
          <span class="mr-2 text-lg font-medium">{{appName}}</span>
          <span class="text-xs text-gray-500">{{copyright}}</span>
        </a>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a [href]="facebookUrl" class="text-gray-500 hover:text-indigo-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a [href]="twitterUrl" class="ml-3 text-gray-500 hover:text-indigo-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a [href]="instagramUrl" class="ml-3 text-gray-500 hover:text-indigo-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a [href]="linkedinUrl" class="ml-3 text-gray-500 hover:text-indigo-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  @Input() appName = 'ngTail';
  @Input() copyright = '© 2020 by ngAnu';
  @Input() facebookUrl = 'https://facebook.com';
  @Input() twitterUrl = 'https://twitter.com';
  @Input() instagramUrl = 'https://instagram.com';
  @Input() linkedinUrl = 'https://linkedin.com';
}