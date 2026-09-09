---
schema: wang-person/v1
id: p_m4ZYUkmkANsUKPZ2tMyioD
status: active
merged_into: null
display_name: 王言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G2HE443qFWh88h8VM42Eu7
        subject_person_id: p_m4ZYUkmkANsUKPZ2tMyioD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7eDgXok7c97YszfKRyCita
          claim_id: c_G2HE443qFWh88h8VM42Eu7
          source_id: s_7DricB4NpGiZMbSPM7EASJ
          stance: supports
          locator: CBDB:451418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（451418）
          source: &a1
            id: s_7DricB4NpGiZMbSPM7EASJ
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 451418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451418&o=json
            external_identifier: CBDB:451418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C2zEX2qvDoFa5AmdW1DvhF
        subject_person_id: p_m4ZYUkmkANsUKPZ2tMyioD
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
        - id: cs_wrP5Q3qDfi2MQEzYgj9sKB
          claim_id: c_C2zEX2qvDoFa5AmdW1DvhF
          source_id: s_7DricB4NpGiZMbSPM7EASJ
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

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 451418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451418&o=json)
