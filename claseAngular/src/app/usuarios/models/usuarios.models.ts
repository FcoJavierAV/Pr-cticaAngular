export class Usuarios {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  constructor(data?) {
    this.id = (data && data.id) || null;
    this.email = (data && data.email) || '';
    this.first_name = (data && data.first_name) || '';
    this.last_name = (data && data.last_name) || '';
    this.avatar = (data && data.avatar) || '';
  }
}
