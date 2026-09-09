---
schema: wang-person/v1
id: p_dVK9JQCoz5N4Hduu7vw7uF
status: active
merged_into: null
display_name: 王峋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8VBGhuH7LEbu6SwJe4uBUX
        subject_person_id: p_dVK9JQCoz5N4Hduu7vw7uF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jCGvK4c9KKshuGt4eUYiBp
          claim_id: c_8VBGhuH7LEbu6SwJe4uBUX
          source_id: s_6BQnRx8sV44GaRC1UHmAUA
          stance: supports
          locator: CBDB:38145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38145）
          source: &a1
            id: s_6BQnRx8sV44GaRC1UHmAUA
            source_type: api_record
            title: 中国历代人物传记资料库：王峋（CBDB 38145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38145&o=json
            external_identifier: CBDB:38145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CiJdjCq5Vt2PbvtRgbBNUe
        subject_person_id: p_dVK9JQCoz5N4Hduu7vw7uF
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
        - id: cs_qL1o3JoSNin9LFuBHK8ab5
          claim_id: c_CiJdjCq5Vt2PbvtRgbBNUe
          source_id: s_6BQnRx8sV44GaRC1UHmAUA
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

# 王峋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王峋 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王峋（CBDB 38145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38145&o=json)
