---
schema: wang-person/v1
id: p_kYENZDMXi8nnyQf82XCyE9
status: active
merged_into: null
display_name: 王泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hvjLRaZiZGyd6JZBv256k2
        subject_person_id: p_kYENZDMXi8nnyQf82XCyE9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GFEPcm976sjG8QK45Ct54t
          claim_id: c_hvjLRaZiZGyd6JZBv256k2
          source_id: s_u5j1DMWS1kNpwAKhMjnXQa
          stance: supports
          locator: CBDB:318570
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318570）
          source: &a1
            id: s_u5j1DMWS1kNpwAKhMjnXQa
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 318570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318570&o=json
            external_identifier: CBDB:318570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xyu8EHQ8YMetKdwUV7KjWi
        subject_person_id: p_kYENZDMXi8nnyQf82XCyE9
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
        - id: cs_vQJnpRTDNLWuBk6AqV41QM
          claim_id: c_Xyu8EHQ8YMetKdwUV7KjWi
          source_id: s_u5j1DMWS1kNpwAKhMjnXQa
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

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 318570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318570&o=json)
