---
schema: wang-person/v1
id: p_MKvnJATMRBHM5CVGcKNCBQ
status: active
merged_into: null
display_name: 王逄祿
cbdb_id: 415482
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GB29ZoQ75kUn7dGUSmz56u
        subject_person_id: p_MKvnJATMRBHM5CVGcKNCBQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逄祿，清人物。曾任千總。（中国历代人物传记资料库 CBDB 415482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QV9i56_F1cfrv1DE8hFwnk
          claim_id: c_GB29ZoQ75kUn7dGUSmz56u
          source_id: s_fEBJTW6p6xA6P7ciJKAGWs
          stance: supports
          locator: CBDB:415482
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fEBJTW6p6xA6P7ciJKAGWs
            source_type: api_record
            title: 中国历代人物传记资料库：王逄祿（CBDB 415482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415482&o=json
            external_identifier: CBDB:415482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:02.698Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zJrKEDiXo9pqja2obJFXht
        subject_person_id: p_MKvnJATMRBHM5CVGcKNCBQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逄祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LH3A4DeJhZUYtcPvA8sxUW
          claim_id: c_zJrKEDiXo9pqja2obJFXht
          source_id: s_fEBJTW6p6xA6P7ciJKAGWs
          stance: supports
          locator: CBDB:415482
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6301-6400）｜历史性依据：CBDB 朝代 = 清
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

# 王逄祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王逄祿，清人物。曾任千總。（中国历代人物传记资料库 CBDB 415482） | accepted |
| name.primary | 王逄祿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逄祿（CBDB 415482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415482&o=json)
