---
schema: wang-person/v1
id: p_SZU86WPfUHE8KPtnK3YoeX
status: active
merged_into: null
display_name: 王行實
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H2yv2EM7HxJtfTFjqmteyK
        subject_person_id: p_SZU86WPfUHE8KPtnK3YoeX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9vnwNP2LFUN9xQj5b67TZZ
          claim_id: c_H2yv2EM7HxJtfTFjqmteyK
          source_id: s_z71bzXwfcmZTLbNDXxYd8b
          stance: supports
          locator: CBDB:186055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186055）
          source: &a1
            id: s_z71bzXwfcmZTLbNDXxYd8b
            source_type: api_record
            title: 中国历代人物传记资料库：王行實（CBDB 186055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186055&o=json
            external_identifier: CBDB:186055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eeE2TP76kgcQFvoBtabHph
        subject_person_id: p_SZU86WPfUHE8KPtnK3YoeX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a6wN4ZKyuHd3ycVyyvABBN
          claim_id: c_eeE2TP76kgcQFvoBtabHph
          source_id: s_z71bzXwfcmZTLbNDXxYd8b
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
        id: c_2YhbBvFjWe3PJekzG8GgQ4
        subject_person_id: p_SZU86WPfUHE8KPtnK3YoeX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行實（卒于857年），唐人物。曾任節度使。（中国历代人物传记资料库 CBDB 186055）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5SzACFHq5OuXKOw_4K9V8i
          claim_id: c_2YhbBvFjWe3PJekzG8GgQ4
          source_id: s_z71bzXwfcmZTLbNDXxYd8b
          stance: supports
          locator: CBDB:186055
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

# 王行實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行實 | accepted |
| death.date | 857年 | accepted |
| bio.summary | 王行實（卒于857年），唐人物。曾任節度使。（中国历代人物传记资料库 CBDB 186055） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行實（CBDB 186055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186055&o=json)
