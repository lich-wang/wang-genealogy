---
schema: wang-person/v1
id: p_p6zP6ehuKdE6HGjxY8WMp8
status: active
merged_into: null
display_name: 王九疇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z9pEwaSJAX3SAs225tA8kV
        subject_person_id: p_p6zP6ehuKdE6HGjxY8WMp8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九疇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HZA1nx2cTNA4f3VCFCAhBH
          claim_id: c_z9pEwaSJAX3SAs225tA8kV
          source_id: s_3iDWj628mS2B1QspgKoLVP
          stance: supports
          locator: CBDB:557513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557513）
          source: &a1
            id: s_3iDWj628mS2B1QspgKoLVP
            source_type: api_record
            title: 中国历代人物传记资料库：王九疇（CBDB 557513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557513&o=json
            external_identifier: CBDB:557513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HWCbb4D4JtUQF17vMLcc6D
        subject_person_id: p_p6zP6ehuKdE6HGjxY8WMp8
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
        - id: cs_E9Cq5f6a7KP6xr9BoNr4Wo
          claim_id: c_HWCbb4D4JtUQF17vMLcc6D
          source_id: s_3iDWj628mS2B1QspgKoLVP
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

# 王九疇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九疇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九疇（CBDB 557513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557513&o=json)
