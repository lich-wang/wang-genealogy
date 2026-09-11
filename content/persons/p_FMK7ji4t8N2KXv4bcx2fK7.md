---
schema: wang-person/v1
id: p_FMK7ji4t8N2KXv4bcx2fK7
status: active
merged_into: null
display_name: 王玄琚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z74A4EMk92dFKVA2KAjuGu
        subject_person_id: p_FMK7ji4t8N2KXv4bcx2fK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄琚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ExR2k3eVceC6U1xWjpWQRB
          claim_id: c_Z74A4EMk92dFKVA2KAjuGu
          source_id: s_KKsSQAyYtD4fkT7QLHGzSG
          stance: supports
          locator: CBDB:71498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71498）
          source: &a1
            id: s_KKsSQAyYtD4fkT7QLHGzSG
            source_type: api_record
            title: 中国历代人物传记资料库：王玄琚（CBDB 71498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71498&o=json
            external_identifier: CBDB:71498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DKuhtrWj4NK6xAgMFx8idN
        subject_person_id: p_FMK7ji4t8N2KXv4bcx2fK7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1622年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aURpJwXKU9s4MHeNi7GMPW
          claim_id: c_DKuhtrWj4NK6xAgMFx8idN
          source_id: s_KKsSQAyYtD4fkT7QLHGzSG
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
        id: c_iTLMU88ZHexQEbaD119yrF
        subject_person_id: p_FMK7ji4t8N2KXv4bcx2fK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄琚（生于1622年），清人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 71498）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YNy8bhF45k0xx01q5yX3H0
          claim_id: c_iTLMU88ZHexQEbaD119yrF
          source_id: s_KKsSQAyYtD4fkT7QLHGzSG
          stance: supports
          locator: CBDB:71498
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

# 王玄琚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄琚 | accepted |
| birth.date | 1622年 | accepted |
| bio.summary | 王玄琚（生于1622年），清人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 71498） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玄琚（CBDB 71498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71498&o=json)
