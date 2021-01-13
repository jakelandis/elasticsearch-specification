@rest_spec_name("field_caps")
class FieldCapabilitiesRequest extends RequestBase {
  pathParts?: {
    index?: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    fields?: Field | Field[];
    ignore_unavailable?: boolean;
    include_unmapped?: boolean;
  }
  body?: {
  }
}
