---
schema: wang-person/v1
id: p_qbYaLDUMeALhkDSTBYjJHB
status: active
merged_into: null
display_name: 王珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NeYCAPkQ6X6Ki32pKK3MRD
        subject_person_id: p_qbYaLDUMeALhkDSTBYjJHB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hf13CPL7HWiUNG2Cv6ka3g
          claim_id: c_NeYCAPkQ6X6Ki32pKK3MRD
          source_id: s_j5w62W8DeGEWi9L1av9o6N
          stance: supports
          locator: CBDB:2129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（2129）
          source: &a1
            id: s_j5w62W8DeGEWi9L1av9o6N
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 2129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2129&o=json
            external_identifier: CBDB:2129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y52eZX1baMu8mD9WBZjez8
        subject_person_id: p_qbYaLDUMeALhkDSTBYjJHB
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
        - id: cs_P3CEgPbvSWHBbz88KA67ib
          claim_id: c_Y52eZX1baMu8mD9WBZjez8
          source_id: s_j5w62W8DeGEWi9L1av9o6N
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

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珍（CBDB 2129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2129&o=json)
