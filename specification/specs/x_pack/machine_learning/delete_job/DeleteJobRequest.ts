@rest_spec_name("ml.delete_job")
class DeleteJobRequest extends RequestBase {
  pathParts?: {
    job_id: string;
  }
  query_parameters?: {
    force?: boolean;
    wait_for_completion?: boolean;
  }
  body?: {
  }
}
