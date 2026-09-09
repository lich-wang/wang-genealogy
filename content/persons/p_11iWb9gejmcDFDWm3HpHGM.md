---
schema: wang-person/v1
id: p_11iWb9gejmcDFDWm3HpHGM
status: active
merged_into: null
display_name: 王彪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i3udQCMe6eXh3zy5a9wC3e
        subject_person_id: p_11iWb9gejmcDFDWm3HpHGM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hGsoRbN29eiKfCN7Kov98C
          claim_id: c_i3udQCMe6eXh3zy5a9wC3e
          source_id: s_JwJg4KSdMxVaso6UMnYtH5
          stance: supports
          locator: CBDB:190092
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190092）
          source: &a1
            id: s_JwJg4KSdMxVaso6UMnYtH5
            source_type: api_record
            title: 中国历代人物传记资料库：王彪（CBDB 190092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190092&o=json
            external_identifier: CBDB:190092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SboAaiRqE84Bp5ZPV28haw
        subject_person_id: p_11iWb9gejmcDFDWm3HpHGM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 794年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b2UEptAQ6MDufhzy7t6LP6
          claim_id: c_SboAaiRqE84Bp5ZPV28haw
          source_id: s_JwJg4KSdMxVaso6UMnYtH5
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
        id: c_6eiSUf86uz3335SQB7bcUq
        subject_person_id: p_11iWb9gejmcDFDWm3HpHGM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A4wSj6uNUHJtw5zCfQdonL
          claim_id: c_6eiSUf86uz3335SQB7bcUq
          source_id: s_JwJg4KSdMxVaso6UMnYtH5
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

# 王彪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彪 | accepted |
| death.date | 794年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彪（CBDB 190092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190092&o=json)
