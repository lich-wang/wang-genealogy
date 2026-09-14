---
schema: wang-person/v1
id: p_N79j3qJ7kSXo4mPw794Y9Y
status: active
merged_into: null
display_name: 王學朱
cbdb_id: 315450
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gNA1F5eEebU1vZTqYHEsYT
        subject_person_id: p_N79j3qJ7kSXo4mPw794Y9Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學朱，明人物。嘉靖三十二年進士，籍贯湘潭。（中国历代人物传记资料库 CBDB 315450）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MpzUEjNtknTZH-GLlx_Hy5
          claim_id: c_gNA1F5eEebU1vZTqYHEsYT
          source_id: s_DJhRfkmJbfnifXepgux1YX
          stance: supports
          locator: CBDB:315450
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DJhRfkmJbfnifXepgux1YX
            source_type: api_record
            title: 中国历代人物传记资料库：王學朱（CBDB 315450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315450&o=json
            external_identifier: CBDB:315450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TbHJvmsJGwDpvxti1re3p8
        subject_person_id: p_N79j3qJ7kSXo4mPw794Y9Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學朱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DeGYb6R9MY1QUp44Cr2DxP
          claim_id: c_TbHJvmsJGwDpvxti1re3p8
          source_id: s_DJhRfkmJbfnifXepgux1YX
          stance: supports
          locator: CBDB:315450
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C1Q8_ZK1joldiyD0kUOKSC
        subject_person_id: p_6U2hKWNf3zvZ6acQ4hYSRb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N79j3qJ7kSXo4mPw794Y9Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n1LJFHDJErLaVapkXR-v9L
          claim_id: c_C1Q8_ZK1joldiyD0kUOKSC
          source_id: s_snmPmV0nHSizYPDETQ3tOM
          stance: supports
          locator: CBDB：兄弟 王學顏（126840）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學朱 与 王學顏 为同胞（CBDB 记「兄」），王學顏 之父／母即 王學朱 之父／母。
          source:
            id: s_snmPmV0nHSizYPDETQ3tOM
            source_type: api_record
            title: 中国历代人物传记资料库：王學朱（CBDB 315450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315450&o=json
            external_identifier: CBDB:315450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6U2hKWNf3zvZ6acQ4hYSRb
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jdL9gn8GzoIjNTWsq8esGh
        subject_person_id: p_N79j3qJ7kSXo4mPw794Y9Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NYhLgZdoGrWgJuFRGNjyW4
          claim_id: c_jdL9gn8GzoIjNTWsq8esGh
          source_id: s_snmPmV0nHSizYPDETQ3tOM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126840 王學顏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_snmPmV0nHSizYPDETQ3tOM
            source_type: api_record
            title: 中国历代人物传记资料库：王學朱（CBDB 315450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315450&o=json
            external_identifier: CBDB:315450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJ4a7bRMV9hCP3y348uRJE
        status: active
        display_name: 王學顏
        merged_into_person_id: null
---

# 王學朱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學朱，明人物。嘉靖三十二年進士，籍贯湘潭。（中国历代人物传记资料库 CBDB 315450） | accepted |
| name.primary | 王學朱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6U2hKWNf3zvZ6acQ4hYSRb | 王相 | accepted |
| other | p_tJ4a7bRMV9hCP3y348uRJE | 王學顏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學朱（CBDB 315450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315450&o=json)
