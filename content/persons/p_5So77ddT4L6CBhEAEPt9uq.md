---
schema: wang-person/v1
id: p_5So77ddT4L6CBhEAEPt9uq
status: active
merged_into: null
display_name: 王佑民
cbdb_id: 336584
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GJiinBo4GDGZZh5xgM2gxH
        subject_person_id: p_5So77ddT4L6CBhEAEPt9uq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336584）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_StdG1jFxGvwwz0wyEMH3ol
          claim_id: c_GJiinBo4GDGZZh5xgM2gxH
          source_id: s_FNrcAR2nhymRn27914bm66
          stance: supports
          locator: CBDB:336584
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FNrcAR2nhymRn27914bm66
            source_type: api_record
            title: 中国历代人物传记资料库：王佑民（CBDB 336584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336584&o=json
            external_identifier: CBDB:336584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1UzDZj5XcFHnEj4ArAGBLE
        subject_person_id: p_5So77ddT4L6CBhEAEPt9uq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZfMPSCHGxBhGuzA9AsGxaK
          claim_id: c_1UzDZj5XcFHnEj4ArAGBLE
          source_id: s_FNrcAR2nhymRn27914bm66
          stance: supports
          locator: CBDB:336584
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LSFMa5dETEiYUhWuHWZleM
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5So77ddT4L6CBhEAEPt9uq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RenvGBplQMLbizzu1rrxdt
          claim_id: c_LSFMa5dETEiYUhWuHWZleM
          source_id: s_mjWipdAC8I9NaLiJ-HcW4c
          stance: supports
          locator: CBDB：兄弟 王恩民（205656）之父／母 王世學
          quotation: null
          interpretation_note: 由兄弟关系推断：王佑民 与 王恩民 为同胞（CBDB 记「弟」），王恩民 之父／母即 王佑民 之父／母。
          source:
            id: s_mjWipdAC8I9NaLiJ-HcW4c
            source_type: api_record
            title: 中国历代人物传记资料库：王佑民（CBDB 336584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336584&o=json
            external_identifier: CBDB:336584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rzdGCJdbAnivH2NuEMbZHX
        status: active
        display_name: 王世學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_a_TqCxS3SfGhDPH2CZgo4W
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5So77ddT4L6CBhEAEPt9uq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eS1AMq590PpuDX0Qusghak
          claim_id: c_a_TqCxS3SfGhDPH2CZgo4W
          source_id: s_mjWipdAC8I9NaLiJ-HcW4c
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mjWipdAC8I9NaLiJ-HcW4c
            source_type: api_record
            title: 中国历代人物传记资料库：王佑民（CBDB 336584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336584&o=json
            external_identifier: CBDB:336584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3iyxEBFwgRpJCsXBwB3FWC
        status: active
        display_name: 王恩民
        merged_into_person_id: null
---

# 王佑民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佑民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336584） | accepted |
| name.primary | 王佑民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rzdGCJdbAnivH2NuEMbZHX | 王世學 | accepted |
| other | p_3iyxEBFwgRpJCsXBwB3FWC | 王恩民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佑民（CBDB 336584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336584&o=json)
