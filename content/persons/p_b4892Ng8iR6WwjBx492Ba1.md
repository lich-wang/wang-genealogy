---
schema: wang-person/v1
id: p_b4892Ng8iR6WwjBx492Ba1
status: active
merged_into: null
display_name: 王駒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SgFYRKc3FAxHobetH8Cfr7
        subject_person_id: p_b4892Ng8iR6WwjBx492Ba1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王駒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QzLnNyu4z38VjP76oFtzj4
          claim_id: c_SgFYRKc3FAxHobetH8Cfr7
          source_id: s_v8XwecVNfnVCSXq4SJnYqM
          stance: supports
          locator: CBDB:71118
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71118）
          source: &a1
            id: s_v8XwecVNfnVCSXq4SJnYqM
            source_type: api_record
            title: 中国历代人物传记资料库：王駒（CBDB 71118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71118&o=json
            external_identifier: CBDB:71118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zG6C5qQPBt6xC5ALTKKtoX
        subject_person_id: p_b4892Ng8iR6WwjBx492Ba1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1866年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7jx2qYCgN7iBUdh9EZWZ3H
          claim_id: c_zG6C5qQPBt6xC5ALTKKtoX
          source_id: s_v8XwecVNfnVCSXq4SJnYqM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yDaFXhYEy8tNF8mo52EHG6
        subject_person_id: p_b4892Ng8iR6WwjBx492Ba1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1894年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1MS9vBoBsat4LJx9BXC6gi
          claim_id: c_yDaFXhYEy8tNF8mo52EHG6
          source_id: s_v8XwecVNfnVCSXq4SJnYqM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bikXeqLvuZ8T5L4LDopgp5
        subject_person_id: p_b4892Ng8iR6WwjBx492Ba1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LMVQSwhXKwjFkCyuqvaG4G
          claim_id: c_bikXeqLvuZ8T5L4LDopgp5
          source_id: s_v8XwecVNfnVCSXq4SJnYqM
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

# 王駒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王駒 | accepted |
| birth.date | 1866年 | accepted |
| death.date | 1894年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王駒（CBDB 71118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71118&o=json)
