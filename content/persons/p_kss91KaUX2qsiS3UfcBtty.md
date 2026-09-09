---
schema: wang-person/v1
id: p_kss91KaUX2qsiS3UfcBtty
status: active
merged_into: null
display_name: 王習
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HssxHd8syXWfvrXzwkrk1y
        subject_person_id: p_kss91KaUX2qsiS3UfcBtty
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王習
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_36u6XMh2QnnEzxUnPRnGBc
          claim_id: c_HssxHd8syXWfvrXzwkrk1y
          source_id: s_GLGzAvp4fAe84UqYjBvBUx
          stance: supports
          locator: CBDB:699438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699438）
          source: &a1
            id: s_GLGzAvp4fAe84UqYjBvBUx
            source_type: api_record
            title: 中国历代人物传记资料库：王習（CBDB 699438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699438&o=json
            external_identifier: CBDB:699438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YAGrKSBSNKdsBam3hkzUog
        subject_person_id: p_kss91KaUX2qsiS3UfcBtty
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gRU7PHAAT7BbiCQiTrp9nJ
          claim_id: c_YAGrKSBSNKdsBam3hkzUog
          source_id: s_GLGzAvp4fAe84UqYjBvBUx
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

# 王習

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王習 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王習（CBDB 699438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699438&o=json)
