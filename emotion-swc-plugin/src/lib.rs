use swc_plugin::{ast::*, plugin_transform};

pub struct TransformVisitor;

impl VisitMut for TransformVisitor {
    // Implement necessary visit_mut_* methods for actual custom transform.
}

/// An entrypoint to the SWC's transform plugin.
/// `plugin_transform` macro handles necessary interop to communicate with the host,
/// and entrypoint function name (`process_transform`) can be anything else.
///
/// If plugin need to handle low-level ptr directly,
/// it is possible to opt out from macro by writing transform fn manually via raw interface
///
/// `__plugin_process_impl(
///     ast_ptr: *const u8,
///     ast_ptr_len: i32,
///     config_str_ptr: *const u8,
///     config_str_ptr_len: i32) ->
///     i32 /*  0 for success, fail otherwise.
///             Note this is only for internal pointer interop result,
///             not actual transform result */
///
/// However, this means plugin author need to handle all of serialization/deserialization
/// steps with communicating with host. Refer `swc_plugin_macro` for more details.
#[plugin_transform]
pub fn process_transform(program: Program, _plugin_config: String) -> Program {
    println!("Versión 0.0.1 - emotion-swc-plugin coming soon!");
    program.fold_with(&mut as_folder(TransformVisitor))
}
