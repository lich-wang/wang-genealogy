---
schema: wang-person/v1
id: p_nLarpZ8oPBtkV8qWtk13pw
status: active
merged_into: null
display_name: 王才
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G95b4zJ95WLqWB3FLTsijB
        subject_person_id: p_nLarpZ8oPBtkV8qWtk13pw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_evYNtmchg1UD5BqbmMyDFF
          claim_id: c_G95b4zJ95WLqWB3FLTsijB
          source_id: s_PXVtaKpJD7cM2CJ5pq9vg9
          stance: supports
          locator: CBDB:139770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139770）
          source: &a1
            id: s_PXVtaKpJD7cM2CJ5pq9vg9
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 139770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139770&o=json
            external_identifier: CBDB:139770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Y2d5B32r7X3xGmhrmwkGfG
        subject_person_id: p_nLarpZ8oPBtkV8qWtk13pw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 606年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J944dLBsj1zNQtZfM8Vk5M
          claim_id: c_Y2d5B32r7X3xGmhrmwkGfG
          source_id: s_PXVtaKpJD7cM2CJ5pq9vg9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AbmjuyL16PBMnCLWxoTCTK
        subject_person_id: p_nLarpZ8oPBtkV8qWtk13pw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 677年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A7CfebyzFSBdjsGGFufNtJ
          claim_id: c_AbmjuyL16PBMnCLWxoTCTK
          source_id: s_PXVtaKpJD7cM2CJ5pq9vg9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pu7rKxGHSSpCKS3StQscGj
        subject_person_id: p_nLarpZ8oPBtkV8qWtk13pw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才（606年—677年），唐人物。籍贯太原，曾任縣令。（中国历代人物传记资料库 CBDB 139770）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ctIaymEZ_mexaF59s_Z_ze
          claim_id: c_Pu7rKxGHSSpCKS3StQscGj
          source_id: s_PXVtaKpJD7cM2CJ5pq9vg9
          stance: supports
          locator: CBDB:139770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wTUNjW9ALqIxM427JSu_zP
        subject_person_id: p_r99NDuC1Qi2kLpFwoa3C6h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nLarpZ8oPBtkV8qWtk13pw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmggs4j_XlIW6eSiUo6McV
          claim_id: c_wTUNjW9ALqIxM427JSu_zP
          source_id: s_PXVtaKpJD7cM2CJ5pq9vg9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonglong 12：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_r99NDuC1Qi2kLpFwoa3C6h
        status: active
        display_name: 王彥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__O_NaNUenxpbGaSHWY8sOL
        subject_person_id: p_nLarpZ8oPBtkV8qWtk13pw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cipoHEnFXTQWDcWDcQ7pyV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jFZ4fqEi1IacKrRwsonbxF
          claim_id: c__O_NaNUenxpbGaSHWY8sOL
          source_id: s_qWgGOO9ZTCQYmJk0CKp4_M
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonglong 12：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qWgGOO9ZTCQYmJk0CKp4_M
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王才妻)（CBDB 148997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148997&o=json
            external_identifier: CBDB:148997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cipoHEnFXTQWDcWDcQ7pyV
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王才 | accepted |
| birth.date | 606年 | accepted |
| death.date | 677年 | accepted |
| bio.summary | 王才（606年—677年），唐人物。籍贯太原，曾任縣令。（中国历代人物传记资料库 CBDB 139770） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_r99NDuC1Qi2kLpFwoa3C6h | 王彥 | accepted |
| spouses | p_cipoHEnFXTQWDcWDcQ7pyV | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 139770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139770&o=json)
- [中国历代人物传记资料库：張氏(王才妻)（CBDB 148997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148997&o=json)
