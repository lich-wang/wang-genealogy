---
schema: wang-person/v1
id: p_LxuWCfFBuPuWC5z1E4vMUe
status: active
merged_into: null
display_name: 王煥祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TfLaHTB6bAjZ1pHMZRyzp1
        subject_person_id: p_LxuWCfFBuPuWC5z1E4vMUe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xairHDJFUCV5YBV6GUG2bi
          claim_id: c_TfLaHTB6bAjZ1pHMZRyzp1
          source_id: s_TQcadcdjxHCH6Qy7Q1wfwr
          stance: supports
          locator: CBDB:639302
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639302）
          source: &a1
            id: s_TQcadcdjxHCH6Qy7Q1wfwr
            source_type: api_record
            title: 中国历代人物传记资料库：王煥祖（CBDB 639302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639302&o=json
            external_identifier: CBDB:639302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WZJoNzoQ28PdrD9cy5bbB1
        subject_person_id: p_LxuWCfFBuPuWC5z1E4vMUe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥祖，清人物。籍贯紹興府，入仕鄉貢舉人，曾任教授、學正、復設教諭。（中国历代人物传记资料库 CBDB 639302）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-1hgpIJtZhXAL6NpUwadpl
          claim_id: c_WZJoNzoQ28PdrD9cy5bbB1
          source_id: s_TQcadcdjxHCH6Qy7Q1wfwr
          stance: supports
          locator: CBDB:639302
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王煥祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煥祖 | accepted |
| bio.summary | 王煥祖，清人物。籍贯紹興府，入仕鄉貢舉人，曾任教授、學正、復設教諭。（中国历代人物传记资料库 CBDB 639302） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煥祖（CBDB 639302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639302&o=json)
