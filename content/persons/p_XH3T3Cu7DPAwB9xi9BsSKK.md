---
schema: wang-person/v1
id: p_XH3T3Cu7DPAwB9xi9BsSKK
status: active
merged_into: null
display_name: 王模
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5MfZWyTmiQTrXmEFCSS8kz
        subject_person_id: p_XH3T3Cu7DPAwB9xi9BsSKK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王模
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6KcEKF8iKJpub1s8D6npXb
          claim_id: c_5MfZWyTmiQTrXmEFCSS8kz
          source_id: s_BKkPW8CENefQ3Q6YYsy8Jz
          stance: supports
          locator: CBDB:35575
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35575）
          source: &a1
            id: s_BKkPW8CENefQ3Q6YYsy8Jz
            source_type: api_record
            title: 中国历代人物传记资料库：王模（CBDB 35575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35575&o=json
            external_identifier: CBDB:35575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x5Nhz97TmaiXuQq2qSs1Rt
        subject_person_id: p_XH3T3Cu7DPAwB9xi9BsSKK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王模，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 35575）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__H7t5GWlj3VysiBNI0eYBJ
          claim_id: c_x5Nhz97TmaiXuQq2qSs1Rt
          source_id: s_BKkPW8CENefQ3Q6YYsy8Jz
          stance: supports
          locator: CBDB:35575
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1GbUgqeLUouR2tCrYbG2MW
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XH3T3Cu7DPAwB9xi9BsSKK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_glxKe3daI6e9xVPpVQU8zV
          claim_id: c_1GbUgqeLUouR2tCrYbG2MW
          source_id: s_y2EQbZ_b63Zu1vej-rVpGv
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10697）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_y2EQbZ_b63Zu1vej-rVpGv
            source_type: api_record
            title: 中国历代人物传记资料库：王模（CBDB 35575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35575&o=json
            external_identifier: CBDB:35575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UvehpGMJTzc9aejBRt9mWN
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王模

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王模 | accepted |
| bio.summary | 王模，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 35575） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UvehpGMJTzc9aejBRt9mWN | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王模（CBDB 35575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35575&o=json)
