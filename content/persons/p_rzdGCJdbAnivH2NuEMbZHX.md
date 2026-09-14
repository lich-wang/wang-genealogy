---
schema: wang-person/v1
id: p_rzdGCJdbAnivH2NuEMbZHX
status: active
merged_into: null
display_name: 王世學
cbdb_id: 336580
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Na44gKpNpA9VqcMWoYcPMR
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世學，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336580）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6WZCAkOnb1TLd7rNhDqm5j
          claim_id: c_Na44gKpNpA9VqcMWoYcPMR
          source_id: s_C6HkK9dtgbU99Pt8SkcQnQ
          stance: supports
          locator: CBDB:336580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_C6HkK9dtgbU99Pt8SkcQnQ
            source_type: api_record
            title: 中国历代人物传记资料库：王世學（CBDB 336580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336580&o=json
            external_identifier: CBDB:336580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_V1r28mq9cGuKsENxcgN6iZ
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PJb6jm6jVtky6b6hWvqgpg
          claim_id: c_V1r28mq9cGuKsENxcgN6iZ
          source_id: s_C6HkK9dtgbU99Pt8SkcQnQ
          stance: supports
          locator: CBDB:336580
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UeCwSbEpBaNHrLbDJZWuYQ
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ts0Xj_p9UiI2MxyU_tCOV
          claim_id: c_UeCwSbEpBaNHrLbDJZWuYQ
          source_id: s_C6HkK9dtgbU99Pt8SkcQnQ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百零六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C6HkK9dtgbU99Pt8SkcQnQ
            source_type: api_record
            title: 中国历代人物传记资料库：王世學（CBDB 336580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336580&o=json
            external_identifier: CBDB:336580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3iyxEBFwgRpJCsXBwB3FWC
        status: active
        display_name: 王恩民
        merged_into_person_id: null
    - claim:
        id: c_RJCuRkzjOPoV7yhkME5-sA
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_21crTBmbnQ3eub1vWBszZY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_42r6yFcRqBzJp2l961BevE
          claim_id: c_RJCuRkzjOPoV7yhkME5-sA
          source_id: s_bXvnpNdUZO7bV5v6HlrKeI
          stance: supports
          locator: CBDB：兄弟 王恩民（205656）之父／母 王世學
          quotation: null
          interpretation_note: 由兄弟关系推断：王愛民 与 王恩民 为同胞（CBDB 记「兄」），王恩民 之父／母即 王愛民 之父／母。
          source:
            id: s_bXvnpNdUZO7bV5v6HlrKeI
            source_type: api_record
            title: 中国历代人物传记资料库：王愛民（CBDB 336587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336587&o=json
            external_identifier: CBDB:336587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_21crTBmbnQ3eub1vWBszZY
        status: active
        display_name: 王愛民
        merged_into_person_id: null
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
        id: p_5So77ddT4L6CBhEAEPt9uq
        status: active
        display_name: 王佑民
        merged_into_person_id: null
    - claim:
        id: c_QtvTeNI9DM-OUPu1gWH7aK
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C1XmMPpPDBPssN8EgrCHd9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6fhS1PfOp9j5ytSt_zGatJ
          claim_id: c_QtvTeNI9DM-OUPu1gWH7aK
          source_id: s_gQ7oTSryekJMcgEVZNrzM5
          stance: supports
          locator: CBDB：兄弟 王恩民（205656）之父／母 王世學
          quotation: null
          interpretation_note: 由兄弟关系推断：王治民 与 王恩民 为同胞（CBDB 记「弟」），王恩民 之父／母即 王治民 之父／母。
          source:
            id: s_gQ7oTSryekJMcgEVZNrzM5
            source_type: api_record
            title: 中国历代人物传记资料库：王治民（CBDB 336586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336586&o=json
            external_identifier: CBDB:336586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C1XmMPpPDBPssN8EgrCHd9
        status: active
        display_name: 王治民
        merged_into_person_id: null
    - claim:
        id: c_F-57Lq-7Hf3r_T7h6LjPMl
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Et2f23vzjwkjLTZafX5Vhb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0bWeBSbgrXQlB-Zi6j8I8Z
          claim_id: c_F-57Lq-7Hf3r_T7h6LjPMl
          source_id: s_1eedV7tV5O4qRGFkKsQvci
          stance: supports
          locator: CBDB：兄弟 王恩民（205656）之父／母 王世學
          quotation: null
          interpretation_note: 由兄弟关系推断：王養民 与 王恩民 为同胞（CBDB 记「弟」），王恩民 之父／母即 王養民 之父／母。
          source:
            id: s_1eedV7tV5O4qRGFkKsQvci
            source_type: api_record
            title: 中国历代人物传记资料库：王養民（CBDB 336585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336585&o=json
            external_identifier: CBDB:336585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Et2f23vzjwkjLTZafX5Vhb
        status: active
        display_name: 王養民
        merged_into_person_id: null
    - claim:
        id: c_0cFlbZvwK1jh_HZzdGghyB
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G7vRwojaJ61PX4ZNyFj6SG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tf2MxCGm63qKTDVsg5yk5m
          claim_id: c_0cFlbZvwK1jh_HZzdGghyB
          source_id: s_Q_-memrdUcrlEGUYiuvc6m
          stance: supports
          locator: CBDB：兄弟 王恩民（205656）之父／母 王世學
          quotation: null
          interpretation_note: 由兄弟关系推断：王正民 与 王恩民 为同胞（CBDB 记「兄」），王恩民 之父／母即 王正民 之父／母。
          source:
            id: s_Q_-memrdUcrlEGUYiuvc6m
            source_type: api_record
            title: 中国历代人物传记资料库：王正民（CBDB 336589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336589&o=json
            external_identifier: CBDB:336589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G7vRwojaJ61PX4ZNyFj6SG
        status: active
        display_name: 王正民
        merged_into_person_id: null
    - claim:
        id: c_qLZDMuUIYCNKQRyNMNXYd0
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TjXb1UwWVHKDutCc7gfqPV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WSWx6YSviAM6yWIktF-H_2
          claim_id: c_qLZDMuUIYCNKQRyNMNXYd0
          source_id: s_4wQ12HzoszXz9sYey6g9GO
          stance: supports
          locator: CBDB：兄弟 王恩民（205656）之父／母 王世學
          quotation: null
          interpretation_note: 由兄弟关系推断：王安民 与 王恩民 为同胞（CBDB 记「弟」），王恩民 之父／母即 王安民 之父／母。
          source:
            id: s_4wQ12HzoszXz9sYey6g9GO
            source_type: api_record
            title: 中国历代人物传记资料库：王安民（CBDB 336583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336583&o=json
            external_identifier: CBDB:336583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TjXb1UwWVHKDutCc7gfqPV
        status: active
        display_name: 王安民
        merged_into_person_id: null
    - claim:
        id: c_qb8mW0qaRFOBui5DdQK_sM
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eErBnoUA72i9MbXQ6Ltd9h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wQCHHuN63IjAES8YyasWVn
          claim_id: c_qb8mW0qaRFOBui5DdQK_sM
          source_id: s_1qgdCW8o8zODvP7xlvQXT-
          stance: supports
          locator: CBDB：兄弟 王恩民（205656）之父／母 王世學
          quotation: null
          interpretation_note: 由兄弟关系推断：王濟民 与 王恩民 为同胞（CBDB 记「兄」），王恩民 之父／母即 王濟民 之父／母。
          source:
            id: s_1qgdCW8o8zODvP7xlvQXT-
            source_type: api_record
            title: 中国历代人物传记资料库：王濟民（CBDB 336590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336590&o=json
            external_identifier: CBDB:336590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eErBnoUA72i9MbXQ6Ltd9h
        status: active
        display_name: 王濟民
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世學，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336580） | accepted |
| name.primary | 王世學 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3iyxEBFwgRpJCsXBwB3FWC | 王恩民 | accepted |
| children | p_21crTBmbnQ3eub1vWBszZY | 王愛民 | accepted |
| children | p_5So77ddT4L6CBhEAEPt9uq | 王佑民 | accepted |
| children | p_C1XmMPpPDBPssN8EgrCHd9 | 王治民 | accepted |
| children | p_Et2f23vzjwkjLTZafX5Vhb | 王養民 | accepted |
| children | p_G7vRwojaJ61PX4ZNyFj6SG | 王正民 | accepted |
| children | p_TjXb1UwWVHKDutCc7gfqPV | 王安民 | accepted |
| children | p_eErBnoUA72i9MbXQ6Ltd9h | 王濟民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛民（CBDB 336587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336587&o=json)
- [中国历代人物传记资料库：王安民（CBDB 336583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336583&o=json)
- [中国历代人物传记资料库：王濟民（CBDB 336590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336590&o=json)
- [中国历代人物传记资料库：王世學（CBDB 336580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336580&o=json)
- [中国历代人物传记资料库：王養民（CBDB 336585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336585&o=json)
- [中国历代人物传记资料库：王佑民（CBDB 336584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336584&o=json)
- [中国历代人物传记资料库：王正民（CBDB 336589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336589&o=json)
- [中国历代人物传记资料库：王治民（CBDB 336586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336586&o=json)
