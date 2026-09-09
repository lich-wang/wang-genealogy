---
schema: wang-person/v1
id: p_6nT154pC7vxv6W27YY28dv
status: active
merged_into: null
display_name: 王溶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yksBLWEPj4AbHJ6x7xr1Hj
        subject_person_id: p_6nT154pC7vxv6W27YY28dv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_71TDyEBt3wEjcbkFJBJ5g6
          claim_id: c_yksBLWEPj4AbHJ6x7xr1Hj
          source_id: s_L5sAq87cqEixx7wDsNZM36
          stance: supports
          locator: CBDB:69374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69374）
          source: &a1
            id: s_L5sAq87cqEixx7wDsNZM36
            source_type: api_record
            title: 中国历代人物传记资料库：王溶（CBDB 69374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69374&o=json
            external_identifier: CBDB:69374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.233Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9pV7sNifAngT6LLfqov8TW
        subject_person_id: p_6nT154pC7vxv6W27YY28dv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1AkT6kHEghCMFvQYCGofi2
          claim_id: c_9pV7sNifAngT6LLfqov8TW
          source_id: s_L5sAq87cqEixx7wDsNZM36
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
        id: c_MZN4JGmpu41LBtfGBCkhnB
        subject_person_id: p_6nT154pC7vxv6W27YY28dv
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
        - id: cs_Gj3qkFuDw5N93hYA5Egnvz
          claim_id: c_MZN4JGmpu41LBtfGBCkhnB
          source_id: s_L5sAq87cqEixx7wDsNZM36
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

# 王溶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溶 | accepted |
| death.date | 1798年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溶（CBDB 69374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69374&o=json)
