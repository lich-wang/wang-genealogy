---
schema: wang-person/v1
id: p_8mVNKzueP5UgXsSKLD5Ld7
status: active
merged_into: null
display_name: 王孳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pWP39gwz3uNAubMsum7ebY
        subject_person_id: p_8mVNKzueP5UgXsSKLD5Ld7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8seUMu1Dd4QoQPtNUNsaTX
          claim_id: c_pWP39gwz3uNAubMsum7ebY
          source_id: s_HHbFF8Ya5PrdANdteG5mRM
          stance: supports
          locator: CBDB:279350
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279350）
          source: &a1
            id: s_HHbFF8Ya5PrdANdteG5mRM
            source_type: api_record
            title: 中国历代人物传记资料库：王孳（CBDB 279350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279350&o=json
            external_identifier: CBDB:279350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qjxSw6LkAHH9kek75R6bMU
        subject_person_id: p_8mVNKzueP5UgXsSKLD5Ld7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孳，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279350）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z10W1ifFmmmAl7cESuK2Ah
          claim_id: c_qjxSw6LkAHH9kek75R6bMU
          source_id: s_HHbFF8Ya5PrdANdteG5mRM
          stance: supports
          locator: CBDB:279350
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zlIdXuWV85GULZ2-G5xNN0
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8mVNKzueP5UgXsSKLD5Ld7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r0hGIPTg9RGkkj81n6asQ5
          claim_id: c_zlIdXuWV85GULZ2-G5xNN0
          source_id: s_GSe2GMZldBgsFCuF4MGAi-
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王孳 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王孳 之父／母。
          source:
            id: s_GSe2GMZldBgsFCuF4MGAi-
            source_type: api_record
            title: 中国历代人物传记资料库：王孳（CBDB 279350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279350&o=json
            external_identifier: CBDB:279350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QzvV4sG1QiUMXjGNxx2is5
        status: active
        display_name: 王度
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_T001JpCAK-B4AolNx5FZq1
        subject_person_id: p_8mVNKzueP5UgXsSKLD5Ld7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pSxjMsjoRJ-YJiMTbwQkzQ
          claim_id: c_T001JpCAK-B4AolNx5FZq1
          source_id: s_GSe2GMZldBgsFCuF4MGAi-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GSe2GMZldBgsFCuF4MGAi-
            source_type: api_record
            title: 中国历代人物传记资料库：王孳（CBDB 279350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279350&o=json
            external_identifier: CBDB:279350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kS75cqd3Wh2NjJNrFJL2j4
        status: active
        display_name: 王遵
        merged_into_person_id: null
---

# 王孳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孳 | accepted |
| bio.summary | 王孳，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279350） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QzvV4sG1QiUMXjGNxx2is5 | 王度 | accepted |
| other | p_kS75cqd3Wh2NjJNrFJL2j4 | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孳（CBDB 279350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279350&o=json)
