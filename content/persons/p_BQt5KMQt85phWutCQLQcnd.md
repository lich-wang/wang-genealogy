---
schema: wang-person/v1
id: p_BQt5KMQt85phWutCQLQcnd
status: active
merged_into: null
display_name: 王叔中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Gs8EUNXpMPQYM32BPHTA1
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F49fq5z5JwWK6xPAZfSnPF
          claim_id: c_6Gs8EUNXpMPQYM32BPHTA1
          source_id: s_pN52pFNwLz1ehR6jX8PCC8
          stance: supports
          locator: CBDB:326619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326619）
          source: &a1
            id: s_pN52pFNwLz1ehR6jX8PCC8
            source_type: api_record
            title: 中国历代人物传记资料库：王叔中（CBDB 326619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326619&o=json
            external_identifier: CBDB:326619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_anKQB7VJvN8zfbiJs18vmo
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔中，明人物。嘉靖四十一年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 326619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WFHBHYBWJEoU55-LE1tjir
          claim_id: c_anKQB7VJvN8zfbiJs18vmo
          source_id: s_pN52pFNwLz1ehR6jX8PCC8
          stance: supports
          locator: CBDB:326619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zP701nQiwF-tvqPRBPLgIG
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4PMudrRao4a9cRDuakPq7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_je-aZmrd42koe1C5etlFiH
          claim_id: c_zP701nQiwF-tvqPRBPLgIG
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1rvQicHBV2nhuQQ8M41Xjf
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 204969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json
            external_identifier: CBDB:204969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4PMudrRao4a9cRDuakPq7M
        status: active
        display_name: 王同讚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王叔中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔中 | accepted |
| bio.summary | 王叔中，明人物。嘉靖四十一年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 326619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4PMudrRao4a9cRDuakPq7M | 王同讚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔中（CBDB 326619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326619&o=json)
- [中国历代人物传记资料库：王同讚（CBDB 204969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json)
