interface IMenuListItem {
  pathname: string;
  primaryText: string;
  secondaryText?: string;
  Icon: import('@mui/material/OverridableComponent').OverridableComponent<
    import('@mui/material').SvgIconTypeMap<Record<string, unknown>, 'svg'>
  > & {
    muiName: string;
  };
}
