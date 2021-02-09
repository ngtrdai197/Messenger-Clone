import { action, makeAutoObservable, observable } from 'mobx';

import { IMessage } from '@messenger/interfaces';

export class ChatListStore {
  constructor() {
    makeAutoObservable(this, {
      messages: observable,
    });
  }
  public messages: IMessage[] = [
    {
      avatarUrl:
        'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-1/p100x100/131621981_2361487727330471_3750973436228578759_n.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=DeJOQtj3WiEAX_E2GlB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad2-1.fna&tp=6&oh=56fb6b6303c5fe7b16d64b7a740fee77&oe=6038B8E3',
      message: 'Text message',
    },
    {
      avatarUrl:
        'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-1/p100x100/131621981_2361487727330471_3750973436228578759_n.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=DeJOQtj3WiEAX_E2GlB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad2-1.fna&tp=6&oh=56fb6b6303c5fe7b16d64b7a740fee77&oe=6038B8E3',
      message: 'Text message 2',
    },
    {
      avatarUrl:
        'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-1/p100x100/131621981_2361487727330471_3750973436228578759_n.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=DeJOQtj3WiEAX_E2GlB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad2-1.fna&tp=6&oh=56fb6b6303c5fe7b16d64b7a740fee77&oe=6038B8E3',
      message: 'Text message 3',
    },
  ];

  @action
  public pushMessage(messageTxt: string) {
    if(!messageTxt.trim().length) return;
    this.messages.push({
      avatarUrl:
        'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-1/p100x100/131621981_2361487727330471_3750973436228578759_n.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=DeJOQtj3WiEAX_E2GlB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad2-1.fna&tp=6&oh=56fb6b6303c5fe7b16d64b7a740fee77&oe=6038B8E3',
      message: messageTxt,
    });
  }
}
