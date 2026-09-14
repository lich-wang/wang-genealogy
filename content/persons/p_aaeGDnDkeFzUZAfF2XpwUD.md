---
schema: wang-person/v1
id: p_aaeGDnDkeFzUZAfF2XpwUD
status: active
merged_into: null
display_name: 王傳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ohjYA7QxFvPGyJcK5WqWeR
        subject_person_id: p_aaeGDnDkeFzUZAfF2XpwUD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D4PdAQUiF2LbsGxkmENzFT
          claim_id: c_ohjYA7QxFvPGyJcK5WqWeR
          source_id: s_7DZWjzQ36L4kuRCgC2V5P4
          stance: supports
          locator: CBDB:30518
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30518）
          source: &a1
            id: s_7DZWjzQ36L4kuRCgC2V5P4
            source_type: api_record
            title: 中国历代人物传记资料库：王傳（CBDB 30518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30518&o=json
            external_identifier: CBDB:30518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TeDSzfYqdntd8Ua97qTfHK
        subject_person_id: p_aaeGDnDkeFzUZAfF2XpwUD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 30518）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ewawqrHmKpvpxBzqEudlNH
          claim_id: c_TeDSzfYqdntd8Ua97qTfHK
          source_id: s_7DZWjzQ36L4kuRCgC2V5P4
          stance: supports
          locator: CBDB:30518
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yTa4p7877vFDsqNdpOjUsk
        subject_person_id: p_vqND44YidPRfbGnCkwxK3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aaeGDnDkeFzUZAfF2XpwUD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6EctF621ULuLa4PaCzyXwV
          claim_id: c_yTa4p7877vFDsqNdpOjUsk
          source_id: s_FJP56rWj-KS4wlruCHW-7f
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10720）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_FJP56rWj-KS4wlruCHW-7f
            source_type: api_record
            title: 中国历代人物传记资料库：王傳（CBDB 30518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30518&o=json
            external_identifier: CBDB:30518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vqND44YidPRfbGnCkwxK3f
        status: active
        display_name: 王植
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傳 | accepted |
| bio.summary | 王傳，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 30518） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vqND44YidPRfbGnCkwxK3f | 王植 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傳（CBDB 30518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30518&o=json)
