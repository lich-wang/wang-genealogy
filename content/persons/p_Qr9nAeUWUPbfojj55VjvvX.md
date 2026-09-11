---
schema: wang-person/v1
id: p_Qr9nAeUWUPbfojj55VjvvX
status: active
merged_into: null
display_name: 王養素
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Knjfj6PAJdUdmvLmV78tVY
        subject_person_id: p_Qr9nAeUWUPbfojj55VjvvX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3HdhnYrzcgyNriBfkaB5t3
          claim_id: c_Knjfj6PAJdUdmvLmV78tVY
          source_id: s_hw8Nv8UUZQ76gjL6g9NWFa
          stance: supports
          locator: CBDB:101435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101435）
          source: &a1
            id: s_hw8Nv8UUZQ76gjL6g9NWFa
            source_type: api_record
            title: 中国历代人物传记资料库：王養素（CBDB 101435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101435&o=json
            external_identifier: CBDB:101435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zJJGGnD8iQfQaFDChCuYHg
        subject_person_id: p_Qr9nAeUWUPbfojj55VjvvX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養素，元人物。籍贯棲霞，身份为道士。（中国历代人物传记资料库 CBDB 101435）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TNKorLcROvSnMoYSgrr1IK
          claim_id: c_zJJGGnD8iQfQaFDChCuYHg
          source_id: s_hw8Nv8UUZQ76gjL6g9NWFa
          stance: supports
          locator: CBDB:101435
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

# 王養素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養素 | accepted |
| bio.summary | 王養素，元人物。籍贯棲霞，身份为道士。（中国历代人物传记资料库 CBDB 101435） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王養素（CBDB 101435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101435&o=json)
