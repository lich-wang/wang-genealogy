---
schema: wang-person/v1
id: p_LcDFK2jg5Pshjk7BATBHA9
status: active
merged_into: null
display_name: 王仲端
cbdb_id: 3944
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dpR1dEfE3mu3VFyj4CJSwp
        subject_person_id: p_LcDFK2jg5Pshjk7BATBHA9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲端，宋人物。籍贯東明，曾任判登聞檢院事、軍器監少監。（中国历代人物传记资料库 CBDB 3944）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5m0cxQCx4RLbAM0x_h09Mw
          claim_id: c_dpR1dEfE3mu3VFyj4CJSwp
          source_id: s_M3wKmyKkHD2YTEDQgLKgYd
          stance: supports
          locator: CBDB:3944
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_M3wKmyKkHD2YTEDQgLKgYd
            source_type: api_record
            title: 中国历代人物传记资料库：王仲端（CBDB 3944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3944&o=json
            external_identifier: CBDB:3944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BMDkLRdJoKhP9d8Xdr85W8
        subject_person_id: p_LcDFK2jg5Pshjk7BATBHA9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P9Rrao4sBGmmKwV6zGAEa8
          claim_id: c_BMDkLRdJoKhP9d8Xdr85W8
          source_id: s_M3wKmyKkHD2YTEDQgLKgYd
          stance: supports
          locator: CBDB:3944
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EV29TxuSBrQEuKSGi4gvsG
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LcDFK2jg5Pshjk7BATBHA9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5tRt1rsYdC_DCu0WjY8_Lv
          claim_id: c_EV29TxuSBrQEuKSGi4gvsG
          source_id: s_2V8Pa5pTOpP931RbnKk0vg
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1845）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_2V8Pa5pTOpP931RbnKk0vg
            source_type: api_record
            title: 中国历代人物传记资料库：王仲端（CBDB 3944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3944&o=json
            external_identifier: CBDB:3944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KzB2C1aLBuDGmUVnrc9So3
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲端，宋人物。籍贯東明，曾任判登聞檢院事、軍器監少監。（中国历代人物传记资料库 CBDB 3944） | accepted |
| name.primary | 王仲端 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KzB2C1aLBuDGmUVnrc9So3 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲端（CBDB 3944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3944&o=json)
