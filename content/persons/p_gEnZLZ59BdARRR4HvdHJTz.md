---
schema: wang-person/v1
id: p_gEnZLZ59BdARRR4HvdHJTz
status: active
merged_into: null
display_name: 王一文
cbdb_id: 230480
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1eCbLAkHS7WtcTdVoFAwCJ
        subject_person_id: p_gEnZLZ59BdARRR4HvdHJTz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一文，明人物。萬曆丙戌科進士進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 230480）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-6X6o6obW2UsEi5M6bG-7T
          claim_id: c_1eCbLAkHS7WtcTdVoFAwCJ
          source_id: s_XuMHVGurSPwKeTdQAnjjw2
          stance: supports
          locator: CBDB:230480
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XuMHVGurSPwKeTdQAnjjw2
            source_type: api_record
            title: 中国历代人物传记资料库：王一文（CBDB 230480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230480&o=json
            external_identifier: CBDB:230480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xUiy3jRvYjhNLHVPLqagD4
        subject_person_id: p_gEnZLZ59BdARRR4HvdHJTz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ze8toJAUUsvqnTPNhobj1E
          claim_id: c_xUiy3jRvYjhNLHVPLqagD4
          source_id: s_XuMHVGurSPwKeTdQAnjjw2
          stance: supports
          locator: CBDB:230480
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8QAmtW7wx52voJdxbjB7-R
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gEnZLZ59BdARRR4HvdHJTz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6cGqNK1Z97wz54C9mOEOyW
          claim_id: c_8QAmtW7wx52voJdxbjB7-R
          source_id: s_vXbpI9H6FXuBumAJMshn6a
          stance: supports
          locator: CBDB：兄弟 王一鳴（207264）之父／母 王追美
          quotation: null
          interpretation_note: 由兄弟关系推断：王一文 与 王一鳴 为同胞（CBDB 记「兄」），王一鳴 之父／母即 王一文 之父／母。
          source:
            id: s_vXbpI9H6FXuBumAJMshn6a
            source_type: api_record
            title: 中国历代人物传记资料库：王一文（CBDB 230480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230480&o=json
            external_identifier: CBDB:230480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1NFpKAdMuHUnaxbGrqKLeD
        status: active
        display_name: 王追美
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_lHcn9d6AOl5_BO3Oojgjif
        subject_person_id: p_gEnZLZ59BdARRR4HvdHJTz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wl4Cwj_0-JcNNqRGURiAgM
          claim_id: c_lHcn9d6AOl5_BO3Oojgjif
          source_id: s_vXbpI9H6FXuBumAJMshn6a
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207264 王一鳴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vXbpI9H6FXuBumAJMshn6a
            source_type: api_record
            title: 中国历代人物传记资料库：王一文（CBDB 230480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230480&o=json
            external_identifier: CBDB:230480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oYShNGR9e2YVy71LdVhQbQ
        status: active
        display_name: 王一鳴
        merged_into_person_id: null
---

# 王一文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一文，明人物。萬曆丙戌科進士進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 230480） | accepted |
| name.primary | 王一文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1NFpKAdMuHUnaxbGrqKLeD | 王追美 | accepted |
| other | p_oYShNGR9e2YVy71LdVhQbQ | 王一鳴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一文（CBDB 230480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230480&o=json)
