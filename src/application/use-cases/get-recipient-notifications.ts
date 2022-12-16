import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface GetRecipientNotifcationsRequest {
  recipientId: string;
}

interface GetRecipientNotifcationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifcations {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotifcationsRequest,
  ): Promise<GetRecipientNotifcationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
