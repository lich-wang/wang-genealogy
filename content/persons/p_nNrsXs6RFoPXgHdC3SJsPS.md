---
schema: wang-person/v1
id: p_nNrsXs6RFoPXgHdC3SJsPS
status: active
merged_into: null
display_name: 王普
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NaRXDE1MMgSAMWsJPJHcMA
        subject_person_id: p_nNrsXs6RFoPXgHdC3SJsPS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_19DH2MvHoHR2TTgNuv8DGM
          claim_id: c_NaRXDE1MMgSAMWsJPJHcMA
          source_id: s_d2Zd5zNyMoHn7JLKhfoFQG
          stance: supports
          locator: CBDB:247367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247367）
          source: &a1
            id: s_d2Zd5zNyMoHn7JLKhfoFQG
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 247367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247367&o=json
            external_identifier: CBDB:247367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M9hHSePtKWsiLWipeYHc4J
        subject_person_id: p_nNrsXs6RFoPXgHdC3SJsPS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普，明人物。成化八年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 247367）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VKkXGJr_9TwWziV_R9tCvG
          claim_id: c_M9hHSePtKWsiLWipeYHc4J
          source_id: s_d2Zd5zNyMoHn7JLKhfoFQG
          stance: supports
          locator: CBDB:247367
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cmjxG039RTieWZTim69_Fl
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nNrsXs6RFoPXgHdC3SJsPS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CAczJO-YQ4vCMfNJBMtW62
          claim_id: c_cmjxG039RTieWZTim69_Fl
          source_id: s_02KkbDvm88fXIGqibpEwQc
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王普 与 王暄 为同胞（CBDB 记「弟」），王暄 之父／母即 王普 之父／母。
          source:
            id: s_02KkbDvm88fXIGqibpEwQc
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 247367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247367&o=json
            external_identifier: CBDB:247367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vNNRVNM4fb2RVGCGj65JaG
        status: active
        display_name: 王鈍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KuB018bGrP1vCIvvdeCghW
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nNrsXs6RFoPXgHdC3SJsPS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WhAgy9LawNjQTX36KowtsF
          claim_id: c_KuB018bGrP1vCIvvdeCghW
          source_id: s_02KkbDvm88fXIGqibpEwQc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_02KkbDvm88fXIGqibpEwQc
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 247367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247367&o=json
            external_identifier: CBDB:247367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dHFBy8GTgBZpvwKJGG8hsX
        status: active
        display_name: 王暄
        merged_into_person_id: null
---

# 王普

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王普 | accepted |
| bio.summary | 王普，明人物。成化八年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 247367） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vNNRVNM4fb2RVGCGj65JaG | 王鈍 | accepted |
| other | p_dHFBy8GTgBZpvwKJGG8hsX | 王暄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王普（CBDB 247367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247367&o=json)
