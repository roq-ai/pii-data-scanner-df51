interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Security Analyst', 'IT Manager', 'End User', 'Compliance Officer'],
  tenantName: 'Client',
  applicationName: 'PII Data Scanner',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal user information',
    'View client information',
    'Edit personal user information',
    'Delete personal user information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage client information',
    'Control tenant access',
    'Manage database extensions',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/ea02cafc-9126-4c29-849a-0eaf7abbf584',
};
