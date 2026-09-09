---
schema: wang-person/v1
id: p_vBZf8XcAfN7YLCu434S6Mn
status: active
merged_into: null
display_name: 王瓖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AXRMkEygYfHjkBogvyfeE4
        subject_person_id: p_vBZf8XcAfN7YLCu434S6Mn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HBDUn9uFo3543SB1Ae4z5S
          claim_id: c_AXRMkEygYfHjkBogvyfeE4
          source_id: s_Jf83McwehKc65yc8E3wmxL
          stance: supports
          locator: CBDB:244355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244355）
          source: &a1
            id: s_Jf83McwehKc65yc8E3wmxL
            source_type: api_record
            title: 中国历代人物传记资料库：王瓖（CBDB 244355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244355&o=json
            external_identifier: CBDB:244355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e2Wkd3TBbdDeeQGF5TAQxJ
        subject_person_id: p_vBZf8XcAfN7YLCu434S6Mn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LZrrxVdnmfrBSdzEjpUjJR
          claim_id: c_e2Wkd3TBbdDeeQGF5TAQxJ
          source_id: s_Jf83McwehKc65yc8E3wmxL
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

# 王瓖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓖（CBDB 244355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244355&o=json)
