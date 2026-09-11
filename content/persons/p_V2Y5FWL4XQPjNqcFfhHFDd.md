---
schema: wang-person/v1
id: p_V2Y5FWL4XQPjNqcFfhHFDd
status: active
merged_into: null
display_name: 王寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vyrwqqPpmCJwJV1Jg2i4Sg
        subject_person_id: p_V2Y5FWL4XQPjNqcFfhHFDd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xzr69XN4KPfeL8KCCAaYgh
          claim_id: c_vyrwqqPpmCJwJV1Jg2i4Sg
          source_id: s_RMLuGRZnrExM97V9U6EFvb
          stance: supports
          locator: CBDB:147629
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147629）
          source: &a1
            id: s_RMLuGRZnrExM97V9U6EFvb
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 147629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147629&o=json
            external_identifier: CBDB:147629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R9gGzN2o1LgNUHPH1y4fQ2
        subject_person_id: p_V2Y5FWL4XQPjNqcFfhHFDd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧，隋人物。曾任州刺史。（中国历代人物传记资料库 CBDB 147629）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bJZiHyTfdWZLSUxY3ZLxWo
          claim_id: c_R9gGzN2o1LgNUHPH1y4fQ2
          source_id: s_RMLuGRZnrExM97V9U6EFvb
          stance: supports
          locator: CBDB:147629
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

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，隋人物。曾任州刺史。（中国历代人物传记资料库 CBDB 147629） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 147629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147629&o=json)
