---
schema: wang-person/v1
id: p_35cXAZjEGDydKjMrkFbvo6
status: active
merged_into: null
display_name: 王鋌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nyNMPyPQFZr2pZUPYpcgT1
        subject_person_id: p_35cXAZjEGDydKjMrkFbvo6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B2C7QoLz5Uboga7TWN9Pqv
          claim_id: c_nyNMPyPQFZr2pZUPYpcgT1
          source_id: s_SkUREJWW7rRAQRRRxkQwNb
          stance: supports
          locator: CBDB:186331
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186331）
          source: &a1
            id: s_SkUREJWW7rRAQRRRxkQwNb
            source_type: api_record
            title: 中国历代人物传记资料库：王鋌（CBDB 186331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186331&o=json
            external_identifier: CBDB:186331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EAsUjoL4rTYHncsP9ZG6x4
        subject_person_id: p_35cXAZjEGDydKjMrkFbvo6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 836年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6HRyrjRjp5MoHq5NLcQ2yQ
          claim_id: c_EAsUjoL4rTYHncsP9ZG6x4
          source_id: s_SkUREJWW7rRAQRRRxkQwNb
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
        id: c_s8REkWMD3ZhX9JLWHDoD2H
        subject_person_id: p_35cXAZjEGDydKjMrkFbvo6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋌（卒于836年），唐人物。曾任令。（中国历代人物传记资料库 CBDB 186331）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H1EH_EVRWZ7ImbyQADqaKe
          claim_id: c_s8REkWMD3ZhX9JLWHDoD2H
          source_id: s_SkUREJWW7rRAQRRRxkQwNb
          stance: supports
          locator: CBDB:186331
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

# 王鋌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鋌 | accepted |
| death.date | 836年 | accepted |
| bio.summary | 王鋌（卒于836年），唐人物。曾任令。（中国历代人物传记资料库 CBDB 186331） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鋌（CBDB 186331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186331&o=json)
