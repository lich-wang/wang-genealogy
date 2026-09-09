---
schema: wang-person/v1
id: p_XoFh3KSiNqKfArGybk6qB2
status: active
merged_into: null
display_name: 王元霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c9sMqBnLiV3Tcii3jjGR4v
        subject_person_id: p_XoFh3KSiNqKfArGybk6qB2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GhVftJjQiwJc3Na6GJm9pH
          claim_id: c_c9sMqBnLiV3Tcii3jjGR4v
          source_id: s_Wg6jWS5qy65AMnfMHjsuZG
          stance: supports
          locator: CBDB:500814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500814）
          source: &a1
            id: s_Wg6jWS5qy65AMnfMHjsuZG
            source_type: api_record
            title: 中国历代人物传记资料库：王元霖（CBDB 500814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500814&o=json
            external_identifier: CBDB:500814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aaHb3ARk1LfBCUTLALToBh
        subject_person_id: p_XoFh3KSiNqKfArGybk6qB2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oUGB4hGskrxzhCQAQp69Ag
          claim_id: c_aaHb3ARk1LfBCUTLALToBh
          source_id: s_Wg6jWS5qy65AMnfMHjsuZG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王元霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元霖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元霖（CBDB 500814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500814&o=json)
