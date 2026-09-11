---
schema: wang-person/v1
id: p_KHge1WfQX84wmCaackCCBY
status: active
merged_into: null
display_name: 王儉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KNK8LrSBZqK2Y33RJV7PKH
        subject_person_id: p_KHge1WfQX84wmCaackCCBY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ho6UATN1bf8oVFE1op83SR
          claim_id: c_KNK8LrSBZqK2Y33RJV7PKH
          source_id: s_6TyFEC6iYQEZarQ5gGghsD
          stance: supports
          locator: CBDB:491788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491788）
          source: &a1
            id: s_6TyFEC6iYQEZarQ5gGghsD
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 491788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491788&o=json
            external_identifier: CBDB:491788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UBJnPCfgCjmRjfbctX4ryk
        subject_person_id: p_KHge1WfQX84wmCaackCCBY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儉，明人物。曾任廵檢。（中国历代人物传记资料库 CBDB 491788）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J0w_2E9f9HQVntj8yCbJD2
          claim_id: c_UBJnPCfgCjmRjfbctX4ryk
          source_id: s_6TyFEC6iYQEZarQ5gGghsD
          stance: supports
          locator: CBDB:491788
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

# 王儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儉 | accepted |
| bio.summary | 王儉，明人物。曾任廵檢。（中国历代人物传记资料库 CBDB 491788） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儉（CBDB 491788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491788&o=json)
