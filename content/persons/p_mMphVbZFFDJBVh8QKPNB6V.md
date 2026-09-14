---
schema: wang-person/v1
id: p_mMphVbZFFDJBVh8QKPNB6V
status: active
merged_into: null
display_name: 王瓚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eh5g9kDxjj6Dgv9F5Ajtf5
        subject_person_id: p_mMphVbZFFDJBVh8QKPNB6V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bABaKqxguBma4nRGZGB7Gu
          claim_id: c_eh5g9kDxjj6Dgv9F5Ajtf5
          source_id: s_sChhcexf3yogo7a2wAtsJu
          stance: supports
          locator: CBDB:469940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（469940）
          source: &a1
            id: s_sChhcexf3yogo7a2wAtsJu
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 469940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469940&o=json
            external_identifier: CBDB:469940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f69X8tYuXchn2519CPySuP
        subject_person_id: p_mMphVbZFFDJBVh8QKPNB6V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，宋人物。籍贯通遠軍，曾任忠訓郎。（中国历代人物传记资料库 CBDB 469940）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EANk3oYCBfUjAzH7KZ8Nmc
          claim_id: c_f69X8tYuXchn2519CPySuP
          source_id: s_sChhcexf3yogo7a2wAtsJu
          stance: supports
          locator: CBDB:469940
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p8gtpskb-p8zGJVfLxjuQ2
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mMphVbZFFDJBVh8QKPNB6V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BQ9pMfVmBzmm8hOV5xY8-L
          claim_id: c_p8gtpskb-p8zGJVfLxjuQ2
          source_id: s_yrq7wA93a1HZJNrGnHDypt
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_yrq7wA93a1HZJNrGnHDypt
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 469940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469940&o=json
            external_identifier: CBDB:469940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vfZA8CNHYRGPvaenX91t3P
        status: active
        display_name: 王德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，宋人物。籍贯通遠軍，曾任忠訓郎。（中国历代人物传记资料库 CBDB 469940） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vfZA8CNHYRGPvaenX91t3P | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 469940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469940&o=json)
