import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(v: string) {
    this.props.recipientId = v;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set content(v: Content) {
    this.props.content = v;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(v: string) {
    this.props.category = v;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public set readAt(v: Date | null | undefined) {
    this.props.readAt = v;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
