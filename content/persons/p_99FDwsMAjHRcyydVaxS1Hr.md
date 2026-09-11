---
schema: wang-person/v1
id: p_99FDwsMAjHRcyydVaxS1Hr
status: active
merged_into: null
display_name: 宋守有
revision: 1
cbdb_id: 437796
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_adBaas1hbf-aCxr7rhz4PD
        subject_person_id: p_99FDwsMAjHRcyydVaxS1Hr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋守有，元人物。籍贯金華。（中国历代人物传记资料库 CBDB 437796）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vHOYYH6cja2XkukQbTGV6o
          claim_id: c_adBaas1hbf-aCxr7rhz4PD
          source_id: s_AN_m82SHYTtlSzU1Rb9wdY
          stance: supports
          locator: CBDB:437796
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AN_m82SHYTtlSzU1Rb9wdY
            source_type: api_record
            title: 中国历代人物传记资料库：宋守有（CBDB 437796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437796&o=json
            external_identifier: CBDB:437796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nyOj28qPTStOsdss8aEdZy
        subject_person_id: p_99FDwsMAjHRcyydVaxS1Hr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋守有
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rsk2Kf0SlVdhnL9SDion2c
          claim_id: c_nyOj28qPTStOsdss8aEdZy
          source_id: s_AN_m82SHYTtlSzU1Rb9wdY
          stance: supports
          locator: CBDB:437796
          quotation: null
          interpretation_note: CBDB 明确记录的王康配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_MBtJck1CA5VjnpIdoKgZe4
        subject_person_id: p_xsKb7AHTpR5yx7vAZtCiMJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_99FDwsMAjHRcyydVaxS1Hr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wpiZEpPxtJog3K07UvQzJ0
          claim_id: c_MBtJck1CA5VjnpIdoKgZe4
          source_id: s_AN_m82SHYTtlSzU1Rb9wdY
          stance: supports
          locator: CBDB 双向互证（丈夫 宋守有）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xsKb7AHTpR5yx7vAZtCiMJ
        status: active
        display_name: 王康
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宋守有

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 宋守有，元人物。籍贯金華。（中国历代人物传记资料库 CBDB 437796） | accepted |
| name.primary | 宋守有 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xsKb7AHTpR5yx7vAZtCiMJ | 王康 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋守有（CBDB 437796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437796&o=json)
