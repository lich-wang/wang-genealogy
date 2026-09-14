---
schema: wang-person/v1
id: p_JP4dZ9Qgk2oGTc9mcdrUkB
status: active
merged_into: null
display_name: 王彬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mH6JDaXmZaow7nnCMRamBt
        subject_person_id: p_JP4dZ9Qgk2oGTc9mcdrUkB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KCADL3jbSDqQ54x6vY6H7U
          claim_id: c_mH6JDaXmZaow7nnCMRamBt
          source_id: s_BLhsVFc621W9PD4aR1Lfxi
          stance: supports
          locator: CBDB:236747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236747）
          source: &a1
            id: s_BLhsVFc621W9PD4aR1Lfxi
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 236747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236747&o=json
            external_identifier: CBDB:236747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jaG7wofD75L8g8MXXsBUoD
        subject_person_id: p_JP4dZ9Qgk2oGTc9mcdrUkB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬，明人物。正統四年進士，籍贯海陽。（中国历代人物传记资料库 CBDB 236747）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6cYWO9ceOoe4UxgG5MSFNE
          claim_id: c_jaG7wofD75L8g8MXXsBUoD
          source_id: s_BLhsVFc621W9PD4aR1Lfxi
          stance: supports
          locator: CBDB:236747
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_P_J1NzC7evmVyjFV8H-P_S
        subject_person_id: p_asrgtX2pUYpXvHRKiTx2Da
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JP4dZ9Qgk2oGTc9mcdrUkB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9LKeq6kTXinZWObHC0XXj2
          claim_id: c_P_J1NzC7evmVyjFV8H-P_S
          source_id: s_Om-s_0o9jVb1ysqmo9T2Fa
          stance: supports
          locator: CBDB：兄弟 王彰（207831）之父／母 王聞凱
          quotation: null
          interpretation_note: 由兄弟关系推断：王彬 与 王彰 为同胞（CBDB 记「弟」），王彰 之父／母即 王彬 之父／母。
          source:
            id: s_Om-s_0o9jVb1ysqmo9T2Fa
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 236747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236747&o=json
            external_identifier: CBDB:236747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_asrgtX2pUYpXvHRKiTx2Da
        status: active
        display_name: 王聞凱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4-MrkLeEfyTrlhVmsDVgb0
        subject_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JP4dZ9Qgk2oGTc9mcdrUkB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O9s8yWcwsvyctSkt5q5Hxh
          claim_id: c_4-MrkLeEfyTrlhVmsDVgb0
          source_id: s_Om-s_0o9jVb1ysqmo9T2Fa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207831 王彰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Om-s_0o9jVb1ysqmo9T2Fa
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 236747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236747&o=json
            external_identifier: CBDB:236747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2iNYB7MMKmz6yPS4rjCAQD
        status: active
        display_name: 王彰
        merged_into_person_id: null
---

# 王彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彬 | accepted |
| bio.summary | 王彬，明人物。正統四年進士，籍贯海陽。（中国历代人物传记资料库 CBDB 236747） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_asrgtX2pUYpXvHRKiTx2Da | 王聞凱 | accepted |
| other | p_2iNYB7MMKmz6yPS4rjCAQD | 王彰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 236747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236747&o=json)
