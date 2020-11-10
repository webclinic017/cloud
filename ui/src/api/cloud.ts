
export interface Specs {
  cores: number;
  disk_space: number;
  memory: number;
  swap: number;
}

export interface Template {
  title: string;
  subtitle: string;
  description: string;
  logo_url: string;
  disk_url: string;
  disk_sha256sum: string;
  disk_format: string;
  specs: Specs;
}

export interface ToS {
  suspended: boolean;
  reason: string;
}

export interface NICAllocation {
  addresses: string[];
  gateway4: string;
  macaddress: string;
}

export interface VHostOptions {
  port: number;
  https: boolean;
}

export interface Network {
  ports: { [external: number]: number };
  vhosts: { [vhost: string]: VHostOptions};
  nic_allocation: NICAllocation;
}

export interface RootUser {
  password_hash: string;
  ssh_public_key: string;
  mgmt_ssh_public_key: string;
  mgmt_ssh_private_key: string;
}

export interface RequestDetail {
  template_id: string;
  reason: string;
}

export interface Metadata {
  groups: string[];
  host_vars: { [key: string]: string };
  owner: string;
  tos: ToS;
  permanent: boolean;
  network: Network;
  root_user: RootUser;
  request_detail: RequestDetail;
}

export enum Status {
  NotApplicable = 'n/a',
  Stopped = 'Stopped',
  Running = 'Running'
}

export enum Type {
  VPS = 'vps',
  LXC = 'lxc'
}

export interface Request {
  username: string;
  hostname: string;
  type: Type;
  detail: RequestDetail;
}

export interface Instance {
  node: string;
  type: Type;
  id: number;
  hostname: string;
  fqdn: string;
  specs: Specs;
  active: boolean;
  metadata: Metadata;
  remarks: string[];
  status: Status;
}