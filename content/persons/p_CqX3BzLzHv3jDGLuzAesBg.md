---
schema: wang-person/v1
id: p_CqX3BzLzHv3jDGLuzAesBg
status: active
merged_into: null
display_name: 王秀民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3VLpZVU56VzaExUQCAD1VW
        subject_person_id: p_CqX3BzLzHv3jDGLuzAesBg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d7eUUcmkRzKEBoXZWnUXez
          claim_id: c_3VLpZVU56VzaExUQCAD1VW
          source_id: s_r5KRFP68CiSLTUiYbGkJUt
          stance: supports
          locator: CBDB:282428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282428）
          source: &a1
            id: s_r5KRFP68CiSLTUiYbGkJUt
            source_type: api_record
            title: 中国历代人物传记资料库：王秀民（CBDB 282428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282428&o=json
            external_identifier: CBDB:282428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2KAQEJVPcBD8vZBGG6EbkP
        subject_person_id: p_CqX3BzLzHv3jDGLuzAesBg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀民，明人物。正德十二年進士，籍贯魚臺。（中国历代人物传记资料库 CBDB 282428）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FDiuvM9Ev10FM2RyJQJLm6
          claim_id: c_2KAQEJVPcBD8vZBGG6EbkP
          source_id: s_r5KRFP68CiSLTUiYbGkJUt
          stance: supports
          locator: CBDB:282428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3GAeNw1fWF7zFtuWQgyYqW
        subject_person_id: p_CCMezUv4HjuKUC99JaW7qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CqX3BzLzHv3jDGLuzAesBg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2pKGr4RNOp_PTP768WUlIj
          claim_id: c_3GAeNw1fWF7zFtuWQgyYqW
          source_id: s_aNnLrmUjD5XNWFbi0DKHlo
          stance: supports
          locator: CBDB：兄弟 王天民（202040）之父／母 王鉉
          quotation: null
          interpretation_note: 由兄弟关系推断：王秀民 与 王天民 为同胞（CBDB 记「兄」），王天民 之父／母即 王秀民 之父／母。
          source:
            id: s_aNnLrmUjD5XNWFbi0DKHlo
            source_type: api_record
            title: 中国历代人物传记资料库：王秀民（CBDB 282428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282428&o=json
            external_identifier: CBDB:282428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CCMezUv4HjuKUC99JaW7qa
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ms0yyPGYI2I2BJO4hl2M13
        subject_person_id: p_CqX3BzLzHv3jDGLuzAesBg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gAAfv7JQBPfPSFmCq4BBah
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qSIh7T7TEbBhxfy3TNj3J4
          claim_id: c_Ms0yyPGYI2I2BJO4hl2M13
          source_id: s_aNnLrmUjD5XNWFbi0DKHlo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202040 王天民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aNnLrmUjD5XNWFbi0DKHlo
            source_type: api_record
            title: 中国历代人物传记资料库：王秀民（CBDB 282428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282428&o=json
            external_identifier: CBDB:282428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gAAfv7JQBPfPSFmCq4BBah
        status: active
        display_name: 王天民
        merged_into_person_id: null
---

# 王秀民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秀民 | accepted |
| bio.summary | 王秀民，明人物。正德十二年進士，籍贯魚臺。（中国历代人物传记资料库 CBDB 282428） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CCMezUv4HjuKUC99JaW7qa | 王鉉 | accepted |
| other | p_gAAfv7JQBPfPSFmCq4BBah | 王天民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秀民（CBDB 282428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282428&o=json)
