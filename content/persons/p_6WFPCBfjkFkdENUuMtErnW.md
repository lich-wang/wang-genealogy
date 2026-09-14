---
schema: wang-person/v1
id: p_6WFPCBfjkFkdENUuMtErnW
status: active
merged_into: null
display_name: 王廷器
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tD4a3765JPnx72BD1dNJNa
        subject_person_id: p_6WFPCBfjkFkdENUuMtErnW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷器
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AQTB9nsK5HJuDnttYMMtkG
          claim_id: c_tD4a3765JPnx72BD1dNJNa
          source_id: s_MQAwzayKDLhiVsYpN9dPfb
          stance: supports
          locator: CBDB:279544
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279544）
          source: &a1
            id: s_MQAwzayKDLhiVsYpN9dPfb
            source_type: api_record
            title: 中国历代人物传记资料库：王廷器（CBDB 279544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279544&o=json
            external_identifier: CBDB:279544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eGDATHSUGJPNGFtEvG5KFL
        subject_person_id: p_6WFPCBfjkFkdENUuMtErnW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷器，明人物。正德十二年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 279544）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ngj_L4w0GNyC-kHbiLQirV
          claim_id: c_eGDATHSUGJPNGFtEvG5KFL
          source_id: s_MQAwzayKDLhiVsYpN9dPfb
          stance: supports
          locator: CBDB:279544
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vqeQtUYASo1r3-x3cDWGmv
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6WFPCBfjkFkdENUuMtErnW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_voa_mjL_ZhTJaAwszdCS8F
          claim_id: c_vqeQtUYASo1r3-x3cDWGmv
          source_id: s_xyjavYsmvasDuOmTuqXjqW
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷器 与 王廷陳 为同胞（CBDB 记「弟」），王廷陳 之父／母即 王廷器 之父／母。
          source:
            id: s_xyjavYsmvasDuOmTuqXjqW
            source_type: api_record
            title: 中国历代人物传记资料库：王廷器（CBDB 279544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279544&o=json
            external_identifier: CBDB:279544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CF5LJP7gMSDjjxZDLTJKd5
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kdrf-vvEsuBFLnJ04fbafR
        subject_person_id: p_6WFPCBfjkFkdENUuMtErnW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FplqVB0cRgSTRauxvxbyv3
          claim_id: c_kdrf-vvEsuBFLnJ04fbafR
          source_id: s_xyjavYsmvasDuOmTuqXjqW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xyjavYsmvasDuOmTuqXjqW
            source_type: api_record
            title: 中国历代人物传记资料库：王廷器（CBDB 279544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279544&o=json
            external_identifier: CBDB:279544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qLcC4SmUNJ1rkkQyeeqtKk
        status: active
        display_name: 王廷陳
        merged_into_person_id: null
---

# 王廷器

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷器 | accepted |
| bio.summary | 王廷器，明人物。正德十二年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 279544） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CF5LJP7gMSDjjxZDLTJKd5 | 王濟 | accepted |
| other | p_qLcC4SmUNJ1rkkQyeeqtKk | 王廷陳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷器（CBDB 279544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279544&o=json)
