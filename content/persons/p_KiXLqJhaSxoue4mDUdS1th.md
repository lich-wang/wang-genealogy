---
schema: wang-person/v1
id: p_KiXLqJhaSxoue4mDUdS1th
status: active
merged_into: null
display_name: 王大順
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fdo5xdLCD6udXjpDM5qdum
        subject_person_id: p_KiXLqJhaSxoue4mDUdS1th
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u82oReceJQFkHv9t7Q63ma
          claim_id: c_Fdo5xdLCD6udXjpDM5qdum
          source_id: s_xMmoS5eLHtM1wn15yLjAGY
          stance: supports
          locator: CBDB:572687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572687）
          source: &a1
            id: s_xMmoS5eLHtM1wn15yLjAGY
            source_type: api_record
            title: 中国历代人物传记资料库：王大順（CBDB 572687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572687&o=json
            external_identifier: CBDB:572687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mGJHAEUarDhYudNhCP1oYT
        subject_person_id: p_KiXLqJhaSxoue4mDUdS1th
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大順，宋人物。籍贯鄆州，曾任縣主簿。（中国历代人物传记资料库 CBDB 572687）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_caTUr5upDKMNRj1HCe4XH4
          claim_id: c_mGJHAEUarDhYudNhCP1oYT
          source_id: s_xMmoS5eLHtM1wn15yLjAGY
          stance: supports
          locator: CBDB:572687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l8qiJmZQIrbiI0I7SaD1By
        subject_person_id: p_qaNbPxVseZmSQDL1Q2zNGZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KiXLqJhaSxoue4mDUdS1th
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e5-TadwaPDTtmBY2Bsp6Oi
          claim_id: c_l8qiJmZQIrbiI0I7SaD1By
          source_id: s_Uow8FgRE1V_VSRko96GThR
          stance: supports
          locator: CBDB 亲属：父（KinPerson 38101）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Uow8FgRE1V_VSRko96GThR
            source_type: api_record
            title: 中国历代人物传记资料库：王大順（CBDB 572687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572687&o=json
            external_identifier: CBDB:572687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qaNbPxVseZmSQDL1Q2zNGZ
        status: active
        display_name: 王惟德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大順 | accepted |
| bio.summary | 王大順，宋人物。籍贯鄆州，曾任縣主簿。（中国历代人物传记资料库 CBDB 572687） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qaNbPxVseZmSQDL1Q2zNGZ | 王惟德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大順（CBDB 572687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572687&o=json)
