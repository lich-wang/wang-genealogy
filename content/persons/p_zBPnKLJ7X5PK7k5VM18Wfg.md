---
schema: wang-person/v1
id: p_zBPnKLJ7X5PK7k5VM18Wfg
status: active
merged_into: null
display_name: 王元清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7y7jhGKhpEBh63rNMGkKeN
        subject_person_id: p_zBPnKLJ7X5PK7k5VM18Wfg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qwsKG8JucJTPEVk2PAftLT
          claim_id: c_7y7jhGKhpEBh63rNMGkKeN
          source_id: s_bva8pTq6WuHGqZoABEgF2n
          stance: supports
          locator: CBDB:578340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578340）
          source: &a1
            id: s_bva8pTq6WuHGqZoABEgF2n
            source_type: api_record
            title: 中国历代人物传记资料库：王元清（CBDB 578340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578340&o=json
            external_identifier: CBDB:578340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.728Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jGhLGGFhjdg7AffjScS4tk
        subject_person_id: p_zBPnKLJ7X5PK7k5VM18Wfg
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
        - id: cs_Vp3mkXWenJy87LegzMBo4L
          claim_id: c_jGhLGGFhjdg7AffjScS4tk
          source_id: s_bva8pTq6WuHGqZoABEgF2n
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

# 王元清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元清 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元清（CBDB 578340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578340&o=json)
