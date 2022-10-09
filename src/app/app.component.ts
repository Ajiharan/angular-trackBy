import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  users: any[] = [
    {
      id: 1,
      name: 'user1',
    },
  ];

  constructor() {
    // let time = 1;
    // setInterval(() => {
    //   time++;
    //   if (time % 5 === 0) {
    //     const user = this.users.find((r: any) => r.name === `user${time - 1}`);
    //     user.name = `update User${time - 1}`;
    //     console.log('user', user, time);
    //   }
    //   const newUser = {
    //     name: `user${time}`,
    //     id: new Date().getTime(),
    //   };
    //   this.users = [...JSON.parse(JSON.stringify(this.users)), newUser];
    // }, 1000);

    function user() {
      return {
        name: 'check',
        ref: this,
      };
    }

    const u = user();
    console.log('u', u);
  }

  onChange(event: KeyboardEvent): void {
    // if (event.key === 'Enter') {
    //   this.users.push({
    //     name: (event.target as HTMLInputElement).value,
    //     id: new Date().getTime(),
    //   });
    // }
  }

  userTrackBy(index, user): number {
    return user.id;
  }
}
