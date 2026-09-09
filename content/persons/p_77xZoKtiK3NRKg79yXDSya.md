---
schema: wang-person/v1
id: p_77xZoKtiK3NRKg79yXDSya
status: active
merged_into: null
display_name: 王璟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_memceaSU7E5AvVb1LWu3En
        subject_person_id: p_77xZoKtiK3NRKg79yXDSya
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oJUBeV63R1GuHYjmeQ4cy3
          claim_id: c_memceaSU7E5AvVb1LWu3En
          source_id: s_RVFBxD1wdCHL5QQhGSeNeN
          stance: supports
          locator: CBDB:207889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207889）
          source: &a1
            id: s_RVFBxD1wdCHL5QQhGSeNeN
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 207889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207889&o=json
            external_identifier: CBDB:207889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Riar9hwo8JXKLdWs6yFqXW
        subject_person_id: p_77xZoKtiK3NRKg79yXDSya
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1408年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4mBX1rhS6PSPCX2fp84dG
          claim_id: c_Riar9hwo8JXKLdWs6yFqXW
          source_id: s_RVFBxD1wdCHL5QQhGSeNeN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uV6vqr8qFkNVkL9vfowAMR
        subject_person_id: p_77xZoKtiK3NRKg79yXDSya
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
        - id: cs_fMV8Kd34z7ws7ty48XAUQM
          claim_id: c_uV6vqr8qFkNVkL9vfowAMR
          source_id: s_RVFBxD1wdCHL5QQhGSeNeN
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

# 王璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璟 | accepted |
| birth.date | 1408年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 207889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207889&o=json)
