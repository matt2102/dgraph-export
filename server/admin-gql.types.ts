import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Int64: any;
  UInt64: any;
};

export type AddGroupInput = {
  name: Scalars['String'];
  rules?: InputMaybe<Array<InputMaybe<RuleRef>>>;
};

export type AddGroupPayload = {
  __typename?: 'AddGroupPayload';
  group?: Maybe<Array<Maybe<Group>>>;
};

export type AddNamespaceInput = {
  /** Enter a new password for groot in that namespace. If you leave it blank, the password will be the default. */
  password?: InputMaybe<Scalars['String']>;
};

export type AddUserInput = {
  groups?: InputMaybe<Array<InputMaybe<GroupRef>>>;
  name: Scalars['String'];
  password: Scalars['String'];
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
};

export type AssignInput = {
  /** How many to assign. */
  num: Scalars['UInt64'];
  /** Choose what to assign: UID, TIMESTAMP or NAMESPACE_ID. */
  what: AssignKind;
};

export enum AssignKind {
  NamespaceId = 'NAMESPACE_ID',
  Timestamp = 'TIMESTAMP',
  Uid = 'UID'
}

export type AssignPayload = {
  __typename?: 'AssignPayload';
  response?: Maybe<AssignedIds>;
};

export type AssignedIds = {
  __typename?: 'AssignedIds';
  /** The last UID, TIMESTAMP or NAMESPACE_ID assigned. */
  endId?: Maybe<Scalars['UInt64']>;
  /** TIMESTAMP for read-only transactions. */
  readOnly?: Maybe<Scalars['UInt64']>;
  /** The first UID, TIMESTAMP or NAMESPACE_ID assigned. */
  startId?: Maybe<Scalars['UInt64']>;
};

export type BackupGroup = {
  __typename?: 'BackupGroup';
  /** The ID of the cluster group. */
  groupId?: Maybe<Scalars['UInt64']>;
  /** List of predicates assigned to the group. */
  predicates?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BackupInput = {
  /** Access key credential for the destination. */
  accessKey?: InputMaybe<Scalars['String']>;
  /** Set to true to allow backing up to S3 or Minio bucket that requires no credentials. */
  anonymous?: InputMaybe<Scalars['Boolean']>;
  /** Destination for the backup: e.g. Minio or S3 bucket. */
  destination: Scalars['String'];
  /** Force a full backup instead of an incremental backup. */
  forceFull?: InputMaybe<Scalars['Boolean']>;
  /** Secret key credential for the destination. */
  secretKey?: InputMaybe<Scalars['String']>;
  /** AWS session token, if required. */
  sessionToken?: InputMaybe<Scalars['String']>;
};

export type BackupPayload = {
  __typename?: 'BackupPayload';
  response?: Maybe<Response>;
  taskId?: Maybe<Scalars['String']>;
};

export type ClusterGroup = {
  __typename?: 'ClusterGroup';
  checksum?: Maybe<Scalars['UInt64']>;
  id?: Maybe<Scalars['UInt64']>;
  members?: Maybe<Array<Maybe<Member>>>;
  snapshotTs?: Maybe<Scalars['UInt64']>;
  tablets?: Maybe<Array<Maybe<Tablet>>>;
};

export type Config = {
  __typename?: 'Config';
  cacheMb?: Maybe<Scalars['Float']>;
};

export type ConfigInput = {
  /**
   * Estimated memory the caches can take. Actual usage by the process would be
   * more than specified here. The caches will be updated according to the
   * cache_percentage flag.
   */
  cacheMb?: InputMaybe<Scalars['Float']>;
  /**
   * True value of logDQLRequest enables logging of all the requests coming to alphas.
   * False value of logDQLRequest disables above.
   */
  logDQLRequest?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigPayload = {
  __typename?: 'ConfigPayload';
  response?: Maybe<Response>;
};

export type DeleteGroupPayload = {
  __typename?: 'DeleteGroupPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DeleteNamespaceInput = {
  namespaceId: Scalars['Int'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};

export type DrainingPayload = {
  __typename?: 'DrainingPayload';
  response?: Maybe<Response>;
};

export type EnterpriseLicenseInput = {
  /** The contents of license file as a String. */
  license: Scalars['String'];
};

export type EnterpriseLicensePayload = {
  __typename?: 'EnterpriseLicensePayload';
  response?: Maybe<Response>;
};

export type ExportInput = {
  /** Access key credential for the destination. */
  accessKey?: InputMaybe<Scalars['String']>;
  /** Set to true to allow backing up to S3 or Minio bucket that requires no credentials. */
  anonymous?: InputMaybe<Scalars['Boolean']>;
  /** Destination for the export: e.g. Minio or S3 bucket or /absolute/path */
  destination?: InputMaybe<Scalars['String']>;
  /** Data format for the export, e.g. "rdf" or "json" (default: "rdf") */
  format?: InputMaybe<Scalars['String']>;
  /**
   * Namespace for the export in multi-tenant cluster. Users from guardians of galaxy can export
   * all namespaces by passing a negative value or specific namespaceId to export that namespace.
   */
  namespace?: InputMaybe<Scalars['Int']>;
  /** Secret key credential for the destination. */
  secretKey?: InputMaybe<Scalars['String']>;
  /** AWS session token, if required. */
  sessionToken?: InputMaybe<Scalars['String']>;
};

export type ExportPayload = {
  __typename?: 'ExportPayload';
  exportedFiles?: Maybe<Array<Maybe<Scalars['String']>>>;
  response?: Maybe<Response>;
};

/** Data about the GraphQL schema being served by Dgraph. */
export type GqlSchema = {
  __typename?: 'GQLSchema';
  /**
   * The GraphQL schema that was generated from the 'schema' field.
   * This is the schema that is being served by Dgraph at /graphql.
   */
  generatedSchema: Scalars['String'];
  id: Scalars['ID'];
  /** Input schema (GraphQL types) that was used in the latest schema update. */
  schema: Scalars['String'];
};

export type GqlSchemaPatch = {
  schema: Scalars['String'];
};

export type Group = {
  __typename?: 'Group';
  /** Name of the group.  Dgraph ensures uniqueness of group names. */
  name: Scalars['String'];
  rules?: Maybe<Array<Maybe<Rule>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type GroupFilter = {
  and?: InputMaybe<UserFilter>;
  name?: InputMaybe<StringHashFilter>;
  not?: InputMaybe<UserFilter>;
  or?: InputMaybe<UserFilter>;
};

export type GroupOrder = {
  asc?: InputMaybe<GroupOrderable>;
  desc?: InputMaybe<GroupOrderable>;
  then?: InputMaybe<GroupOrder>;
};

export enum GroupOrderable {
  Name = 'name'
}

export type GroupRef = {
  name: Scalars['String'];
};

export type License = {
  __typename?: 'License';
  enabled?: Maybe<Scalars['Boolean']>;
  expiryTs?: Maybe<Scalars['Int64']>;
  maxNodes?: Maybe<Scalars['UInt64']>;
  user?: Maybe<Scalars['String']>;
};

export type ListBackupsInput = {
  /** Access key credential for the destination. */
  accessKey?: InputMaybe<Scalars['String']>;
  /** Whether the destination doesn't require credentials (e.g. S3 public bucket). */
  anonymous?: InputMaybe<Scalars['Boolean']>;
  /** Destination for the backup: e.g. Minio or S3 bucket. */
  location: Scalars['String'];
  /** Secret key credential for the destination. */
  secretKey?: InputMaybe<Scalars['String']>;
  /** AWS session token, if required. */
  sessionToken?: InputMaybe<Scalars['String']>;
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  response?: Maybe<LoginResponse>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  /** JWT token that should be used in future requests after this login. */
  accessJWT?: Maybe<Scalars['String']>;
  /** Refresh token that can be used to re-login after accessJWT expires. */
  refreshJWT?: Maybe<Scalars['String']>;
};

export type Manifest = {
  __typename?: 'Manifest';
  /** Unique ID for the backup series. */
  backupId?: Maybe<Scalars['String']>;
  /** Number of this backup within the backup series. The full backup always has a value of one. */
  backupNum?: Maybe<Scalars['UInt64']>;
  /** Whether this backup was encrypted. */
  encrypted?: Maybe<Scalars['Boolean']>;
  /** List of groups and the predicates they store in this backup. */
  groups?: Maybe<Array<Maybe<BackupGroup>>>;
  /** Path to the manifest file. */
  path?: Maybe<Scalars['String']>;
  /**
   * The timestamp at which this backup was taken. The next incremental backup will
   * start from this timestamp.
   */
  since?: Maybe<Scalars['UInt64']>;
  /** The type of backup, either full or incremental. */
  type?: Maybe<Scalars['String']>;
};

export type Member = {
  __typename?: 'Member';
  addr?: Maybe<Scalars['String']>;
  amDead?: Maybe<Scalars['Boolean']>;
  clusterInfoOnly?: Maybe<Scalars['Boolean']>;
  forceGroupId?: Maybe<Scalars['Boolean']>;
  groupId?: Maybe<Scalars['UInt64']>;
  id?: Maybe<Scalars['UInt64']>;
  lastUpdate?: Maybe<Scalars['UInt64']>;
  leader?: Maybe<Scalars['Boolean']>;
};

export type MembershipState = {
  __typename?: 'MembershipState';
  cid?: Maybe<Scalars['String']>;
  counter?: Maybe<Scalars['UInt64']>;
  groups?: Maybe<Array<Maybe<ClusterGroup>>>;
  license?: Maybe<License>;
  maxNsID?: Maybe<Scalars['UInt64']>;
  maxRaftId?: Maybe<Scalars['UInt64']>;
  maxTxnTs?: Maybe<Scalars['UInt64']>;
  maxUID?: Maybe<Scalars['UInt64']>;
  /**
   * Contains list of namespaces. Note that this is not stored in proto's MembershipState and
   * computed at the time of query.
   */
  namespaces?: Maybe<Array<Maybe<Scalars['UInt64']>>>;
  removed?: Maybe<Array<Maybe<Member>>>;
  zeros?: Maybe<Array<Maybe<Member>>>;
};

export type MoveTabletInput = {
  /** ID of the destination group where the predicate is to be moved. */
  groupId: Scalars['UInt64'];
  /** Namespace in which the predicate exists. */
  namespace?: InputMaybe<Scalars['UInt64']>;
  /** Name of the predicate to move. */
  tablet: Scalars['String'];
};

export type MoveTabletPayload = {
  __typename?: 'MoveTabletPayload';
  response?: Maybe<Response>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a new group and (optionally) set the rules for the group. */
  addGroup?: Maybe<AddGroupPayload>;
  /** Add a new namespace. */
  addNamespace?: Maybe<NamespacePayload>;
  /**
   * Add a user.  When linking to groups: if the group doesn't exist it is created; if the group
   * exists, the new user is linked to the existing group.  It's possible to both create new
   * groups and link to existing groups in the one mutation.
   *
   * Dgraph ensures that usernames are unique, hence attempting to add an existing user results
   * in an error.
   */
  addUser?: Maybe<AddUserPayload>;
  /** Lease UIDs, Timestamps or Namespace IDs in advance. */
  assign?: Maybe<AssignPayload>;
  /** Start a binary backup.  See : https://dgraph.io/docs/enterprise-features/#binary-backups */
  backup?: Maybe<BackupPayload>;
  /** Alter the node's config. */
  config?: Maybe<ConfigPayload>;
  deleteGroup?: Maybe<DeleteGroupPayload>;
  /** Delete a namespace. */
  deleteNamespace?: Maybe<NamespacePayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Set (or unset) the cluster draining mode.  In draining mode no further requests are served. */
  draining?: Maybe<DrainingPayload>;
  /** Apply enterprise license. */
  enterpriseLicense?: Maybe<EnterpriseLicensePayload>;
  /**
   * Starts an export of all data in the cluster.  Export format should be 'rdf' (the default
   * if no format is given), or 'json'.
   * See : https://dgraph.io/docs/deploy/#export-database
   */
  export?: Maybe<ExportPayload>;
  /**
   * Login to Dgraph.  Successful login results in a JWT that can be used in future requests.
   * If login is not successful an error is returned.
   */
  login?: Maybe<LoginPayload>;
  /** Move a predicate from one group to another. */
  moveTablet?: Maybe<MoveTabletPayload>;
  /** Remove a node from the cluster. */
  removeNode?: Maybe<RemoveNodePayload>;
  /**
   * Reset password can only be used by the Guardians of the galaxy to reset password of
   * any user in any namespace.
   */
  resetPassword?: Maybe<ResetPasswordPayload>;
  /**
   * Start restoring a binary backup.  See :
   * 	https://dgraph.io/docs/enterprise-features/#binary-backups
   */
  restore?: Maybe<RestorePayload>;
  /** Shutdown this node. */
  shutdown?: Maybe<ShutdownPayload>;
  /**
   * Update the Dgraph cluster to serve the input schema.  This may change the GraphQL
   * schema, the types and predicates in the Dgraph schema, and cause indexes to be recomputed.
   */
  updateGQLSchema?: Maybe<UpdateGqlSchemaPayload>;
  /**
   * Add or remove rules for groups. If the filter doesn't match any groups,
   * the mutation has no effect.
   */
  updateGroup?: Maybe<AddGroupPayload>;
  /**
   * Update users, their passwords and groups.  As with AddUser, when linking to groups: if the
   * group doesn't exist it is created; if the group exists, the new user is linked to the existing
   * group.  If the filter doesn't match any users, the mutation has no effect.
   */
  updateUser?: Maybe<AddUserPayload>;
};


export type MutationAddGroupArgs = {
  input: Array<AddGroupInput>;
};


export type MutationAddNamespaceArgs = {
  input?: InputMaybe<AddNamespaceInput>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
};


export type MutationAssignArgs = {
  input: AssignInput;
};


export type MutationBackupArgs = {
  input: BackupInput;
};


export type MutationConfigArgs = {
  input: ConfigInput;
};


export type MutationDeleteGroupArgs = {
  filter: GroupFilter;
};


export type MutationDeleteNamespaceArgs = {
  input: DeleteNamespaceInput;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationDrainingArgs = {
  enable?: InputMaybe<Scalars['Boolean']>;
};


export type MutationEnterpriseLicenseArgs = {
  input: EnterpriseLicenseInput;
};


export type MutationExportArgs = {
  input: ExportInput;
};


export type MutationLoginArgs = {
  namespace?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type MutationMoveTabletArgs = {
  input: MoveTabletInput;
};


export type MutationRemoveNodeArgs = {
  input: RemoveNodeInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationRestoreArgs = {
  input: RestoreInput;
};


export type MutationUpdateGqlSchemaArgs = {
  input: UpdateGqlSchemaInput;
};


export type MutationUpdateGroupArgs = {
  input: UpdateGroupInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type NamespacePayload = {
  __typename?: 'NamespacePayload';
  message?: Maybe<Scalars['String']>;
  namespaceId?: Maybe<Scalars['UInt64']>;
};

/** A NodeState is the state of an individual node in the Dgraph cluster. */
export type NodeState = {
  __typename?: 'NodeState';
  /** Address of the node. */
  address?: Maybe<Scalars['String']>;
  /** List of Enterprise Features that are enabled. */
  ee_features?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The group this node belongs to in the Dgraph cluster.
   * See : https://dgraph.io/docs/deploy/#cluster-setup.
   */
  group?: Maybe<Scalars['String']>;
  /** List of predicates for which indexes are built in the background. */
  indexing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Node type : either 'alpha' or 'zero'. */
  instance?: Maybe<Scalars['String']>;
  /** Time in Unix epoch time that the node was last contacted by another Zero or Alpha node. */
  lastEcho?: Maybe<Scalars['Int64']>;
  /** List of ongoing operations in the background. */
  ongoing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Node health status : either 'healthy' or 'unhealthy'. */
  status?: Maybe<Scalars['String']>;
  /** Time in nanoseconds since the node started. */
  uptime?: Maybe<Scalars['Int64']>;
  /** Version of the Dgraph binary. */
  version?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  config?: Maybe<Config>;
  /** Get the currently logged in user. */
  getCurrentUser?: Maybe<User>;
  getGQLSchema?: Maybe<GqlSchema>;
  getGroup?: Maybe<Group>;
  getUser?: Maybe<User>;
  health?: Maybe<Array<Maybe<NodeState>>>;
  /** Get the information about the backups at a given location. */
  listBackups?: Maybe<Array<Maybe<Manifest>>>;
  queryGroup?: Maybe<Array<Maybe<Group>>>;
  queryUser?: Maybe<Array<Maybe<User>>>;
  state?: Maybe<MembershipState>;
  task?: Maybe<TaskPayload>;
};


export type QueryGetGroupArgs = {
  name: Scalars['String'];
};


export type QueryGetUserArgs = {
  name: Scalars['String'];
};


export type QueryListBackupsArgs = {
  input: ListBackupsInput;
};


export type QueryQueryGroupArgs = {
  filter?: InputMaybe<GroupFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GroupOrder>;
};


export type QueryQueryUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};


export type QueryTaskArgs = {
  input: TaskInput;
};

export type RemoveGroupPatch = {
  rules: Array<Scalars['String']>;
};

export type RemoveNodeInput = {
  /** ID of the group from which the node is to be removed. */
  groupId: Scalars['UInt64'];
  /** ID of the node to be removed. */
  nodeId: Scalars['UInt64'];
};

export type RemoveNodePayload = {
  __typename?: 'RemoveNodePayload';
  response?: Maybe<Response>;
};

export type ResetPasswordInput = {
  namespace: Scalars['Int'];
  password: Scalars['String'];
  userId: Scalars['String'];
};

export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  message?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['UInt64']>;
  userId?: Maybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type RestoreInput = {
  /** Access key credential for the destination. */
  accessKey?: InputMaybe<Scalars['String']>;
  /** Set to true to allow backing up to S3 or Minio bucket that requires no credentials. */
  anonymous?: InputMaybe<Scalars['Boolean']>;
  /**
   * Backup ID of the backup series to restore. This ID is included in the manifest.json file.
   * If missing, it defaults to the latest series.
   */
  backupId?: InputMaybe<Scalars['String']>;
  /**
   * Number of the backup within the backup series to be restored. Backups with a greater value
   * will be ignored. If the value is zero or missing, the entire series will be restored.
   */
  backupNum?: InputMaybe<Scalars['Int']>;
  /**
   * Path to the key file needed to decrypt the backup. This file should be accessible
   * by all alphas in the group. The backup will be written using the encryption key
   * with which the cluster was started, which might be different than this key.
   */
  encryptionKeyFile?: InputMaybe<Scalars['String']>;
  /** Destination for the backup: e.g. Minio or S3 bucket. */
  location: Scalars['String'];
  /** Secret key credential for the destination. */
  secretKey?: InputMaybe<Scalars['String']>;
  /** AWS session token, if required. */
  sessionToken?: InputMaybe<Scalars['String']>;
  /**
   * Vault server address where the key is stored. This server must be accessible
   * by all alphas in the group. Default "http://localhost:8200".
   */
  vaultAddr?: InputMaybe<Scalars['String']>;
  /** Vault kv store field whose value is the key. Default "enc_key". */
  vaultField?: InputMaybe<Scalars['String']>;
  /** Vault kv store field's format. Must be "base64" or "raw". Default "base64". */
  vaultFormat?: InputMaybe<Scalars['String']>;
  /** Vault kv store path where the key lives. Default "secret/data/dgraph". */
  vaultPath?: InputMaybe<Scalars['String']>;
  /** Path to the Vault RoleID file. */
  vaultRoleIDFile?: InputMaybe<Scalars['String']>;
  /** Path to the Vault SecretID file. */
  vaultSecretIDFile?: InputMaybe<Scalars['String']>;
};

export type RestorePayload = {
  __typename?: 'RestorePayload';
  /** A short string indicating whether the restore operation was successfully scheduled. */
  code?: Maybe<Scalars['String']>;
  /** Includes the error message if the operation failed. */
  message?: Maybe<Scalars['String']>;
};

export type Rule = {
  __typename?: 'Rule';
  /**
   * Permissions that apply for the rule.  Represented following the UNIX file permission
   * convention. That is, 4 (binary 100) represents READ, 2 (binary 010) represents WRITE,
   * and 1 (binary 001) represents MODIFY (the permission to change a predicate’s schema).
   *
   * The options are:
   * * 1 (binary 001) : MODIFY
   * * 2 (010) : WRITE
   * * 3 (011) : WRITE+MODIFY
   * * 4 (100) : READ
   * * 5 (101) : READ+MODIFY
   * * 6 (110) : READ+WRITE
   * * 7 (111) : READ+WRITE+MODIFY
   *
   * Permission 0, which is equal to no permission for a predicate, blocks all read,
   * write and modify operations.
   */
  permission: Scalars['Int'];
  /** Predicate to which the rule applies. */
  predicate: Scalars['String'];
};

export type RuleRef = {
  /**
   * Permissions that apply for the rule.  Represented following the UNIX file permission
   * convention. That is, 4 (binary 100) represents READ, 2 (binary 010) represents WRITE,
   * and 1 (binary 001) represents MODIFY (the permission to change a predicate’s schema).
   *
   * The options are:
   * * 1 (binary 001) : MODIFY
   * * 2 (010) : WRITE
   * * 3 (011) : WRITE+MODIFY
   * * 4 (100) : READ
   * * 5 (101) : READ+MODIFY
   * * 6 (110) : READ+WRITE
   * * 7 (111) : READ+WRITE+MODIFY
   *
   * Permission 0, which is equal to no permission for a predicate, blocks all read,
   * write and modify operations.
   */
  permission: Scalars['Int'];
  /** Predicate to which the rule applies. */
  predicate: Scalars['String'];
};

export type SetGroupPatch = {
  rules: Array<RuleRef>;
};

export type ShutdownPayload = {
  __typename?: 'ShutdownPayload';
  response?: Maybe<Response>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']>;
};

export type Tablet = {
  __typename?: 'Tablet';
  force?: Maybe<Scalars['Boolean']>;
  groupId?: Maybe<Scalars['UInt64']>;
  moveTs?: Maybe<Scalars['UInt64']>;
  predicate?: Maybe<Scalars['String']>;
  readOnly?: Maybe<Scalars['Boolean']>;
  remove?: Maybe<Scalars['Boolean']>;
  space?: Maybe<Scalars['Int']>;
};

export type TaskInput = {
  id: Scalars['String'];
};

export enum TaskKind {
  Backup = 'Backup',
  Export = 'Export',
  Unknown = 'Unknown'
}

export type TaskPayload = {
  __typename?: 'TaskPayload';
  kind?: Maybe<TaskKind>;
  lastUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<TaskStatus>;
};

export enum TaskStatus {
  Failed = 'Failed',
  Queued = 'Queued',
  Running = 'Running',
  Success = 'Success',
  Unknown = 'Unknown'
}

export type UpdateGqlSchemaInput = {
  set: GqlSchemaPatch;
};

export type UpdateGqlSchemaPayload = {
  __typename?: 'UpdateGQLSchemaPayload';
  gqlSchema?: Maybe<GqlSchema>;
};

export type UpdateGroupInput = {
  filter: GroupFilter;
  remove?: InputMaybe<RemoveGroupPatch>;
  set?: InputMaybe<SetGroupPatch>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  remove?: InputMaybe<UserPatch>;
  set?: InputMaybe<UserPatch>;
};

export type User = {
  __typename?: 'User';
  groups?: Maybe<Array<Maybe<Group>>>;
  /** Username for the user.  Dgraph ensures that usernames are unique. */
  name: Scalars['String'];
};

export type UserFilter = {
  and?: InputMaybe<UserFilter>;
  name?: InputMaybe<StringHashFilter>;
  not?: InputMaybe<UserFilter>;
  or?: InputMaybe<UserFilter>;
};

export type UserOrder = {
  asc?: InputMaybe<UserOrderable>;
  desc?: InputMaybe<UserOrderable>;
  then?: InputMaybe<UserOrder>;
};

export enum UserOrderable {
  Name = 'name'
}

export type UserPatch = {
  groups?: InputMaybe<Array<InputMaybe<GroupRef>>>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserRef = {
  name: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddGroupInput: AddGroupInput;
  AddGroupPayload: ResolverTypeWrapper<AddGroupPayload>;
  AddNamespaceInput: AddNamespaceInput;
  AddUserInput: AddUserInput;
  AddUserPayload: ResolverTypeWrapper<AddUserPayload>;
  AssignInput: AssignInput;
  AssignKind: AssignKind;
  AssignPayload: ResolverTypeWrapper<AssignPayload>;
  AssignedIds: ResolverTypeWrapper<AssignedIds>;
  BackupGroup: ResolverTypeWrapper<BackupGroup>;
  BackupInput: BackupInput;
  BackupPayload: ResolverTypeWrapper<BackupPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ClusterGroup: ResolverTypeWrapper<ClusterGroup>;
  Config: ResolverTypeWrapper<Config>;
  ConfigInput: ConfigInput;
  ConfigPayload: ResolverTypeWrapper<ConfigPayload>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteGroupPayload: ResolverTypeWrapper<DeleteGroupPayload>;
  DeleteNamespaceInput: DeleteNamespaceInput;
  DeleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>;
  DrainingPayload: ResolverTypeWrapper<DrainingPayload>;
  EnterpriseLicenseInput: EnterpriseLicenseInput;
  EnterpriseLicensePayload: ResolverTypeWrapper<EnterpriseLicensePayload>;
  ExportInput: ExportInput;
  ExportPayload: ResolverTypeWrapper<ExportPayload>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GQLSchema: ResolverTypeWrapper<GqlSchema>;
  GQLSchemaPatch: GqlSchemaPatch;
  Group: ResolverTypeWrapper<Group>;
  GroupFilter: GroupFilter;
  GroupOrder: GroupOrder;
  GroupOrderable: GroupOrderable;
  GroupRef: GroupRef;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int64: ResolverTypeWrapper<Scalars['Int64']>;
  License: ResolverTypeWrapper<License>;
  ListBackupsInput: ListBackupsInput;
  LoginPayload: ResolverTypeWrapper<LoginPayload>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Manifest: ResolverTypeWrapper<Manifest>;
  Member: ResolverTypeWrapper<Member>;
  MembershipState: ResolverTypeWrapper<MembershipState>;
  MoveTabletInput: MoveTabletInput;
  MoveTabletPayload: ResolverTypeWrapper<MoveTabletPayload>;
  Mutation: ResolverTypeWrapper<{}>;
  NamespacePayload: ResolverTypeWrapper<NamespacePayload>;
  NodeState: ResolverTypeWrapper<NodeState>;
  Query: ResolverTypeWrapper<{}>;
  RemoveGroupPatch: RemoveGroupPatch;
  RemoveNodeInput: RemoveNodeInput;
  RemoveNodePayload: ResolverTypeWrapper<RemoveNodePayload>;
  ResetPasswordInput: ResetPasswordInput;
  ResetPasswordPayload: ResolverTypeWrapper<ResetPasswordPayload>;
  Response: ResolverTypeWrapper<Response>;
  RestoreInput: RestoreInput;
  RestorePayload: ResolverTypeWrapper<RestorePayload>;
  Rule: ResolverTypeWrapper<Rule>;
  RuleRef: RuleRef;
  SetGroupPatch: SetGroupPatch;
  ShutdownPayload: ResolverTypeWrapper<ShutdownPayload>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringHashFilter: StringHashFilter;
  Tablet: ResolverTypeWrapper<Tablet>;
  TaskInput: TaskInput;
  TaskKind: TaskKind;
  TaskPayload: ResolverTypeWrapper<TaskPayload>;
  TaskStatus: TaskStatus;
  UInt64: ResolverTypeWrapper<Scalars['UInt64']>;
  UpdateGQLSchemaInput: UpdateGqlSchemaInput;
  UpdateGQLSchemaPayload: ResolverTypeWrapper<UpdateGqlSchemaPayload>;
  UpdateGroupInput: UpdateGroupInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UserFilter: UserFilter;
  UserOrder: UserOrder;
  UserOrderable: UserOrderable;
  UserPatch: UserPatch;
  UserRef: UserRef;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddGroupInput: AddGroupInput;
  AddGroupPayload: AddGroupPayload;
  AddNamespaceInput: AddNamespaceInput;
  AddUserInput: AddUserInput;
  AddUserPayload: AddUserPayload;
  AssignInput: AssignInput;
  AssignPayload: AssignPayload;
  AssignedIds: AssignedIds;
  BackupGroup: BackupGroup;
  BackupInput: BackupInput;
  BackupPayload: BackupPayload;
  Boolean: Scalars['Boolean'];
  ClusterGroup: ClusterGroup;
  Config: Config;
  ConfigInput: ConfigInput;
  ConfigPayload: ConfigPayload;
  DateTime: Scalars['DateTime'];
  DeleteGroupPayload: DeleteGroupPayload;
  DeleteNamespaceInput: DeleteNamespaceInput;
  DeleteUserPayload: DeleteUserPayload;
  DrainingPayload: DrainingPayload;
  EnterpriseLicenseInput: EnterpriseLicenseInput;
  EnterpriseLicensePayload: EnterpriseLicensePayload;
  ExportInput: ExportInput;
  ExportPayload: ExportPayload;
  Float: Scalars['Float'];
  GQLSchema: GqlSchema;
  GQLSchemaPatch: GqlSchemaPatch;
  Group: Group;
  GroupFilter: GroupFilter;
  GroupOrder: GroupOrder;
  GroupRef: GroupRef;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int64: Scalars['Int64'];
  License: License;
  ListBackupsInput: ListBackupsInput;
  LoginPayload: LoginPayload;
  LoginResponse: LoginResponse;
  Manifest: Manifest;
  Member: Member;
  MembershipState: MembershipState;
  MoveTabletInput: MoveTabletInput;
  MoveTabletPayload: MoveTabletPayload;
  Mutation: {};
  NamespacePayload: NamespacePayload;
  NodeState: NodeState;
  Query: {};
  RemoveGroupPatch: RemoveGroupPatch;
  RemoveNodeInput: RemoveNodeInput;
  RemoveNodePayload: RemoveNodePayload;
  ResetPasswordInput: ResetPasswordInput;
  ResetPasswordPayload: ResetPasswordPayload;
  Response: Response;
  RestoreInput: RestoreInput;
  RestorePayload: RestorePayload;
  Rule: Rule;
  RuleRef: RuleRef;
  SetGroupPatch: SetGroupPatch;
  ShutdownPayload: ShutdownPayload;
  String: Scalars['String'];
  StringHashFilter: StringHashFilter;
  Tablet: Tablet;
  TaskInput: TaskInput;
  TaskPayload: TaskPayload;
  UInt64: Scalars['UInt64'];
  UpdateGQLSchemaInput: UpdateGqlSchemaInput;
  UpdateGQLSchemaPayload: UpdateGqlSchemaPayload;
  UpdateGroupInput: UpdateGroupInput;
  UpdateUserInput: UpdateUserInput;
  User: User;
  UserFilter: UserFilter;
  UserOrder: UserOrder;
  UserPatch: UserPatch;
  UserRef: UserRef;
};

export type DgraphDirectiveArgs = {
  pred?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type DgraphDirectiveResolver<Result, Parent, ContextType = any, Args = DgraphDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SecretDirectiveArgs = {
  field: Scalars['String'];
  pred?: Maybe<Scalars['String']>;
};

export type SecretDirectiveResolver<Result, Parent, ContextType = any, Args = SecretDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddGroupPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddGroupPayload'] = ResolversParentTypes['AddGroupPayload']> = {
  group?: Resolver<Maybe<Array<Maybe<ResolversTypes['Group']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddUserPayload'] = ResolversParentTypes['AddUserPayload']> = {
  user?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssignPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssignPayload'] = ResolversParentTypes['AssignPayload']> = {
  response?: Resolver<Maybe<ResolversTypes['AssignedIds']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssignedIdsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssignedIds'] = ResolversParentTypes['AssignedIds']> = {
  endId?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  startId?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BackupGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['BackupGroup'] = ResolversParentTypes['BackupGroup']> = {
  groupId?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  predicates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BackupPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BackupPayload'] = ResolversParentTypes['BackupPayload']> = {
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType>;
  taskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClusterGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClusterGroup'] = ResolversParentTypes['ClusterGroup']> = {
  checksum?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['Member']>>>, ParentType, ContextType>;
  snapshotTs?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  tablets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tablet']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['Config'] = ResolversParentTypes['Config']> = {
  cacheMb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigPayload'] = ResolversParentTypes['ConfigPayload']> = {
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteGroupPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteGroupPayload'] = ResolversParentTypes['DeleteGroupPayload']> = {
  msg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numUids?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserPayload'] = ResolversParentTypes['DeleteUserPayload']> = {
  msg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numUids?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DrainingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DrainingPayload'] = ResolversParentTypes['DrainingPayload']> = {
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnterpriseLicensePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnterpriseLicensePayload'] = ResolversParentTypes['EnterpriseLicensePayload']> = {
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExportPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExportPayload'] = ResolversParentTypes['ExportPayload']> = {
  exportedFiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlSchemaResolvers<ContextType = any, ParentType extends ResolversParentTypes['GQLSchema'] = ResolversParentTypes['GQLSchema']> = {
  generatedSchema?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  schema?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rules?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rule']>>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Int64ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int64'], any> {
  name: 'Int64';
}

export type LicenseResolvers<ContextType = any, ParentType extends ResolversParentTypes['License'] = ResolversParentTypes['License']> = {
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  expiryTs?: Resolver<Maybe<ResolversTypes['Int64']>, ParentType, ContextType>;
  maxNodes?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginPayload'] = ResolversParentTypes['LoginPayload']> = {
  response?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  accessJWT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshJWT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManifestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manifest'] = ResolversParentTypes['Manifest']> = {
  backupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backupNum?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  encrypted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['BackupGroup']>>>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  since?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  addr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amDead?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  clusterInfoOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  forceGroupId?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  lastUpdate?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  leader?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembershipStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembershipState'] = ResolversParentTypes['MembershipState']> = {
  cid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  counter?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClusterGroup']>>>, ParentType, ContextType>;
  license?: Resolver<Maybe<ResolversTypes['License']>, ParentType, ContextType>;
  maxNsID?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  maxRaftId?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  maxTxnTs?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  maxUID?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  namespaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['UInt64']>>>, ParentType, ContextType>;
  removed?: Resolver<Maybe<Array<Maybe<ResolversTypes['Member']>>>, ParentType, ContextType>;
  zeros?: Resolver<Maybe<Array<Maybe<ResolversTypes['Member']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoveTabletPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveTabletPayload'] = ResolversParentTypes['MoveTabletPayload']> = {
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addGroup?: Resolver<Maybe<ResolversTypes['AddGroupPayload']>, ParentType, ContextType, RequireFields<MutationAddGroupArgs, 'input'>>;
  addNamespace?: Resolver<Maybe<ResolversTypes['NamespacePayload']>, ParentType, ContextType, Partial<MutationAddNamespaceArgs>>;
  addUser?: Resolver<Maybe<ResolversTypes['AddUserPayload']>, ParentType, ContextType, RequireFields<MutationAddUserArgs, 'input'>>;
  assign?: Resolver<Maybe<ResolversTypes['AssignPayload']>, ParentType, ContextType, RequireFields<MutationAssignArgs, 'input'>>;
  backup?: Resolver<Maybe<ResolversTypes['BackupPayload']>, ParentType, ContextType, RequireFields<MutationBackupArgs, 'input'>>;
  config?: Resolver<Maybe<ResolversTypes['ConfigPayload']>, ParentType, ContextType, RequireFields<MutationConfigArgs, 'input'>>;
  deleteGroup?: Resolver<Maybe<ResolversTypes['DeleteGroupPayload']>, ParentType, ContextType, RequireFields<MutationDeleteGroupArgs, 'filter'>>;
  deleteNamespace?: Resolver<Maybe<ResolversTypes['NamespacePayload']>, ParentType, ContextType, RequireFields<MutationDeleteNamespaceArgs, 'input'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'filter'>>;
  draining?: Resolver<Maybe<ResolversTypes['DrainingPayload']>, ParentType, ContextType, Partial<MutationDrainingArgs>>;
  enterpriseLicense?: Resolver<Maybe<ResolversTypes['EnterpriseLicensePayload']>, ParentType, ContextType, RequireFields<MutationEnterpriseLicenseArgs, 'input'>>;
  export?: Resolver<Maybe<ResolversTypes['ExportPayload']>, ParentType, ContextType, RequireFields<MutationExportArgs, 'input'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginPayload']>, ParentType, ContextType, Partial<MutationLoginArgs>>;
  moveTablet?: Resolver<Maybe<ResolversTypes['MoveTabletPayload']>, ParentType, ContextType, RequireFields<MutationMoveTabletArgs, 'input'>>;
  removeNode?: Resolver<Maybe<ResolversTypes['RemoveNodePayload']>, ParentType, ContextType, RequireFields<MutationRemoveNodeArgs, 'input'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['ResetPasswordPayload']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'input'>>;
  restore?: Resolver<Maybe<ResolversTypes['RestorePayload']>, ParentType, ContextType, RequireFields<MutationRestoreArgs, 'input'>>;
  shutdown?: Resolver<Maybe<ResolversTypes['ShutdownPayload']>, ParentType, ContextType>;
  updateGQLSchema?: Resolver<Maybe<ResolversTypes['UpdateGQLSchemaPayload']>, ParentType, ContextType, RequireFields<MutationUpdateGqlSchemaArgs, 'input'>>;
  updateGroup?: Resolver<Maybe<ResolversTypes['AddGroupPayload']>, ParentType, ContextType, RequireFields<MutationUpdateGroupArgs, 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['AddUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
};

export type NamespacePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['NamespacePayload'] = ResolversParentTypes['NamespacePayload']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  namespaceId?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['NodeState'] = ResolversParentTypes['NodeState']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ee_features?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  indexing?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  instance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastEcho?: Resolver<Maybe<ResolversTypes['Int64']>, ParentType, ContextType>;
  ongoing?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uptime?: Resolver<Maybe<ResolversTypes['Int64']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  config?: Resolver<Maybe<ResolversTypes['Config']>, ParentType, ContextType>;
  getCurrentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getGQLSchema?: Resolver<Maybe<ResolversTypes['GQLSchema']>, ParentType, ContextType>;
  getGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGetGroupArgs, 'name'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'name'>>;
  health?: Resolver<Maybe<Array<Maybe<ResolversTypes['NodeState']>>>, ParentType, ContextType>;
  listBackups?: Resolver<Maybe<Array<Maybe<ResolversTypes['Manifest']>>>, ParentType, ContextType, RequireFields<QueryListBackupsArgs, 'input'>>;
  queryGroup?: Resolver<Maybe<Array<Maybe<ResolversTypes['Group']>>>, ParentType, ContextType, Partial<QueryQueryGroupArgs>>;
  queryUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<QueryQueryUserArgs>>;
  state?: Resolver<Maybe<ResolversTypes['MembershipState']>, ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['TaskPayload']>, ParentType, ContextType, RequireFields<QueryTaskArgs, 'input'>>;
};

export type RemoveNodePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveNodePayload'] = ResolversParentTypes['RemoveNodePayload']> = {
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResetPasswordPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResetPasswordPayload'] = ResolversParentTypes['ResetPasswordPayload']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  namespace?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestorePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestorePayload'] = ResolversParentTypes['RestorePayload']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rule'] = ResolversParentTypes['Rule']> = {
  permission?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  predicate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShutdownPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShutdownPayload'] = ResolversParentTypes['ShutdownPayload']> = {
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TabletResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tablet'] = ResolversParentTypes['Tablet']> = {
  force?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  moveTs?: Resolver<Maybe<ResolversTypes['UInt64']>, ParentType, ContextType>;
  predicate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  remove?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  space?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskPayload'] = ResolversParentTypes['TaskPayload']> = {
  kind?: Resolver<Maybe<ResolversTypes['TaskKind']>, ParentType, ContextType>;
  lastUpdated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['TaskStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UInt64ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UInt64'], any> {
  name: 'UInt64';
}

export type UpdateGqlSchemaPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateGQLSchemaPayload'] = ResolversParentTypes['UpdateGQLSchemaPayload']> = {
  gqlSchema?: Resolver<Maybe<ResolversTypes['GQLSchema']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['Group']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AddGroupPayload?: AddGroupPayloadResolvers<ContextType>;
  AddUserPayload?: AddUserPayloadResolvers<ContextType>;
  AssignPayload?: AssignPayloadResolvers<ContextType>;
  AssignedIds?: AssignedIdsResolvers<ContextType>;
  BackupGroup?: BackupGroupResolvers<ContextType>;
  BackupPayload?: BackupPayloadResolvers<ContextType>;
  ClusterGroup?: ClusterGroupResolvers<ContextType>;
  Config?: ConfigResolvers<ContextType>;
  ConfigPayload?: ConfigPayloadResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteGroupPayload?: DeleteGroupPayloadResolvers<ContextType>;
  DeleteUserPayload?: DeleteUserPayloadResolvers<ContextType>;
  DrainingPayload?: DrainingPayloadResolvers<ContextType>;
  EnterpriseLicensePayload?: EnterpriseLicensePayloadResolvers<ContextType>;
  ExportPayload?: ExportPayloadResolvers<ContextType>;
  GQLSchema?: GqlSchemaResolvers<ContextType>;
  Group?: GroupResolvers<ContextType>;
  Int64?: GraphQLScalarType;
  License?: LicenseResolvers<ContextType>;
  LoginPayload?: LoginPayloadResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Manifest?: ManifestResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  MembershipState?: MembershipStateResolvers<ContextType>;
  MoveTabletPayload?: MoveTabletPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NamespacePayload?: NamespacePayloadResolvers<ContextType>;
  NodeState?: NodeStateResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RemoveNodePayload?: RemoveNodePayloadResolvers<ContextType>;
  ResetPasswordPayload?: ResetPasswordPayloadResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  RestorePayload?: RestorePayloadResolvers<ContextType>;
  Rule?: RuleResolvers<ContextType>;
  ShutdownPayload?: ShutdownPayloadResolvers<ContextType>;
  Tablet?: TabletResolvers<ContextType>;
  TaskPayload?: TaskPayloadResolvers<ContextType>;
  UInt64?: GraphQLScalarType;
  UpdateGQLSchemaPayload?: UpdateGqlSchemaPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  dgraph?: DgraphDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  secret?: SecretDirectiveResolver<any, any, ContextType>;
};

export type ExportDatabaseMutationVariables = Exact<{
  s3BucketName: Scalars['String'];
  accessKey: Scalars['String'];
  secretAccessKey: Scalars['String'];
}>;


export type ExportDatabaseMutation = { __typename?: 'Mutation', export?: { __typename?: 'ExportPayload', response?: { __typename?: 'Response', message?: string | null, code?: string | null } | null } | null };
