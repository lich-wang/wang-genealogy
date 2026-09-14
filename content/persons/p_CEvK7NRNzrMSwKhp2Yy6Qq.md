---
schema: wang-person/v1
id: p_CEvK7NRNzrMSwKhp2Yy6Qq
status: active
merged_into: null
display_name: 王文粹
cbdb_id: 318797
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XDMfQSP2ThCGq9vdkzwJ8r
        subject_person_id: p_CEvK7NRNzrMSwKhp2Yy6Qq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文粹，明人物。嘉靖三十二年進士，籍贯濰縣，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 318797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_RK2IJyowCtwYXq_Jj5Dv40
          claim_id: c_XDMfQSP2ThCGq9vdkzwJ8r
          source_id: s_yG625kN6KFUUwBHTUCcD2b
          stance: supports
          locator: CBDB:318797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yG625kN6KFUUwBHTUCcD2b
            source_type: api_record
            title: 中国历代人物传记资料库：王文粹（CBDB 318797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318797&o=json
            external_identifier: CBDB:318797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5EdJHpdJhxPbtDaw9ZF3vN
        subject_person_id: p_CEvK7NRNzrMSwKhp2Yy6Qq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文粹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MKRuFejSiJT3ZAYtLBaKJN
          claim_id: c_5EdJHpdJhxPbtDaw9ZF3vN
          source_id: s_yG625kN6KFUUwBHTUCcD2b
          stance: supports
          locator: CBDB:318797
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h8DcbRQeyc0m5FS8ugmgB_
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CEvK7NRNzrMSwKhp2Yy6Qq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_51omyb4ryjP768IsqsPTJH
          claim_id: c_h8DcbRQeyc0m5FS8ugmgB_
          source_id: s_uPHPstok2UzUDGNLC-HE6S
          stance: supports
          locator: CBDB：兄弟 王文政（204419）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王文粹 与 王文政 为同胞（CBDB 记「弟」），王文政 之父／母即 王文粹 之父／母。
          source:
            id: s_uPHPstok2UzUDGNLC-HE6S
            source_type: api_record
            title: 中国历代人物传记资料库：王文粹（CBDB 318797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318797&o=json
            external_identifier: CBDB:318797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BHMsY8qAbSMNGU2H8r2g2y
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Hzk3HTNLvWQGYVlHDL59yn
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CEvK7NRNzrMSwKhp2Yy6Qq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DpsQjeLxXsVXnDiU7j03nS
          claim_id: c_Hzk3HTNLvWQGYVlHDL59yn
          source_id: s_uPHPstok2UzUDGNLC-HE6S
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204419 王文政）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uPHPstok2UzUDGNLC-HE6S
            source_type: api_record
            title: 中国历代人物传记资料库：王文粹（CBDB 318797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318797&o=json
            external_identifier: CBDB:318797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BXF3dbPMGdrpkj3BGNYpWy
        status: active
        display_name: 王文政
        merged_into_person_id: null
---

# 王文粹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文粹，明人物。嘉靖三十二年進士，籍贯濰縣，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 318797） | accepted |
| name.primary | 王文粹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BHMsY8qAbSMNGU2H8r2g2y | 王佐 | accepted |
| other | p_BXF3dbPMGdrpkj3BGNYpWy | 王文政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文粹（CBDB 318797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318797&o=json)
