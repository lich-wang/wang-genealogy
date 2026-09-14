---
schema: wang-person/v1
id: p_gj8BDarWAWGpynQXXtTNLe
status: active
merged_into: null
display_name: 王烋
cbdb_id: 309655
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PdE36XT8igrNEGnxS4jCpw
        subject_person_id: p_gj8BDarWAWGpynQXXtTNLe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烋，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309655）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4gsn4xk-LjKitglRCxYSSU
          claim_id: c_PdE36XT8igrNEGnxS4jCpw
          source_id: s_Hs5up3Pi7QZHJ1htA278pf
          stance: supports
          locator: CBDB:309655
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Hs5up3Pi7QZHJ1htA278pf
            source_type: api_record
            title: 中国历代人物传记资料库：王烋（CBDB 309655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309655&o=json
            external_identifier: CBDB:309655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1K5oNDBTai9AZf9EbRShMm
        subject_person_id: p_gj8BDarWAWGpynQXXtTNLe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_s6whLrckxjBEMfEaq8v4fy
          claim_id: c_1K5oNDBTai9AZf9EbRShMm
          source_id: s_Hs5up3Pi7QZHJ1htA278pf
          stance: supports
          locator: CBDB:309655
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-VX0iBClQI0_1_SUhra5NV
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gj8BDarWAWGpynQXXtTNLe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGQItTcOSRdNvLS8043xRf
          claim_id: c_-VX0iBClQI0_1_SUhra5NV
          source_id: s_7DpTalnYbMe3G9HU0qeAnp
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王烋 与 王樵 为同胞（CBDB 记「弟」），王樵 之父／母即 王烋 之父／母。
          source:
            id: s_7DpTalnYbMe3G9HU0qeAnp
            source_type: api_record
            title: 中国历代人物传记资料库：王烋（CBDB 309655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309655&o=json
            external_identifier: CBDB:309655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fUwDA-IP3K-2U4l6DYfote
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gj8BDarWAWGpynQXXtTNLe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z7R6St8oACm0WK-TV_lNtP
          claim_id: c_fUwDA-IP3K-2U4l6DYfote
          source_id: s_7DpTalnYbMe3G9HU0qeAnp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7DpTalnYbMe3G9HU0qeAnp
            source_type: api_record
            title: 中国历代人物传记资料库：王烋（CBDB 309655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309655&o=json
            external_identifier: CBDB:309655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_923xZ5qSMZFGgS46h7nLWU
        status: active
        display_name: 王樵
        merged_into_person_id: null
---

# 王烋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王烋，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309655） | accepted |
| name.primary | 王烋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |
| other | p_923xZ5qSMZFGgS46h7nLWU | 王樵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烋（CBDB 309655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309655&o=json)
