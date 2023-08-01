/**
 * @module Generated Schema Definitions
 * @description This was auto-generated by the 'npm run schema' command.
 * It uses JSON schema files located in the 'schema' folder
 *
 * The 'Interfaces' listed below can be used to document API boundaries where JSON is sent/received to the various
 * platforms. They all have a corresponding Zod parser that can be used in runtime code to verify incoming/outgoing data.
 *
 * For example, {@link RequestData} is used by all platforms to describe the minimum amount of data required
 * by the Privacy Dashboard - it's parser can be imported from 'schema/__generated__/schema.parsers.js' and used
 * to validate incoming Tracker data.
 */
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This describes all of the top-level generated types
 * @internal
 */
export interface API {
  getFeatures?: GetFeaturesResponse;
  updateResource?: UpdateResourceParams;
  getTabs?: GetTabsResponse;
}
export interface GetFeaturesResponse {
  features: {
    remoteResources: {
      resources: RemoteResource[];
    };
    userScripts?: {
      scripts: UserScript[];
    };
  };
}
export interface RemoteResource {
  id: string;
  url: string;
  /**
   * How this resources is referred to in the UI.
   */
  name: string;
  current: {
    source: RemoteSource | DebugToolsSource;
    /**
     * The contents of the resource - always as a string value.
     */
    contents: string;
    /**
     * A mime type for the contents of the resource.
     */
    contentType: string;
  };
}
export interface RemoteSource {
  remote: {
    url: string;
    fetchedAt: string;
  };
}
export interface DebugToolsSource {
  debugTools: {
    modifiedAt: string;
  };
}
export interface UserScript {
  name: string;
  id: string;
  contents: string;
}
export interface UpdateResourceParams {
  id: string;
  source: UpdatingRemoteSource | UpdatingDebugToolsSource;
}
/**
 * This is not the same as the source in the remote-resource schema. This is a subset of that schema that omits the 'fetchedAt' key.
 */
export interface UpdatingRemoteSource {
  remote: {
    url: string;
  };
}
export interface UpdatingDebugToolsSource {
  debugTools: {
    content: string;
  };
}
export interface GetTabsResponse {
  tabs: Tab[];
}
export interface Tab {
  id?: string;
  url: string;
  title?: string;
}

