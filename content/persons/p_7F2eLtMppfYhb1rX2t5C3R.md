---
schema: wang-person/v1
id: p_7F2eLtMppfYhb1rX2t5C3R
status: active
merged_into: null
display_name: 王九德
cbdb_id: 206699
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aR7A1RPGMRxUcafZit9AEc
        subject_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九德（生于1552年），明人物。萬曆八年進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 206699）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_EN65O7bczSGGfxDS2-RKrR
          claim_id: c_aR7A1RPGMRxUcafZit9AEc
          source_id: s_sJ9Qi1nPvJCLfs9QNMyoYr
          stance: supports
          locator: CBDB:206699
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sJ9Qi1nPvJCLfs9QNMyoYr
            source_type: api_record
            title: 中国历代人物传记资料库：王九德（CBDB 206699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206699&o=json
            external_identifier: CBDB:206699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zuPXW7GJqHTJiKhjUUb8k7
        subject_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1552年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1552-01-01
            latest: 1552-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LdNTCTeC1eQKMijuWH7K2Y
          claim_id: c_zuPXW7GJqHTJiKhjUUb8k7
          source_id: s_sJ9Qi1nPvJCLfs9QNMyoYr
          stance: supports
          locator: CBDB:206699
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1552
          source:
            id: s_sJ9Qi1nPvJCLfs9QNMyoYr
            source_type: api_record
            title: 中国历代人物传记资料库：王九德（CBDB 206699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206699&o=json
            external_identifier: CBDB:206699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YQCNLVL5MqjP6QjHKtGqFp
        subject_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X5itMk4jEQ7rGJkq3kYgQ3
          claim_id: c_YQCNLVL5MqjP6QjHKtGqFp
          source_id: s_sJ9Qi1nPvJCLfs9QNMyoYr
          stance: supports
          locator: CBDB:206699
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1552
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_12igLEMyJcPfn69OUkbTn-
        subject_person_id: p_Xuy9jPb62VMvUCJM1MazAP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HQQ1yKBTmunvUM17JVhPPp
          claim_id: c_12igLEMyJcPfn69OUkbTn-
          source_id: s_SExJCqXrwRtYkVTP83XCL8
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百一十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SExJCqXrwRtYkVTP83XCL8
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 221740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221740&o=json
            external_identifier: CBDB:221740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Xuy9jPb62VMvUCJM1MazAP
        status: active
        display_name: 王廷相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6OdT6V_rURy2G7bdCK_KPm
        subject_person_id: p_ELj7af6FP9ng738M3GQvto
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rwtZPgZ23pP0wi_c_fbAPh
          claim_id: c_6OdT6V_rURy2G7bdCK_KPm
          source_id: s_o7b2XSrAFHSQbt8is31wgR
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百一十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o7b2XSrAFHSQbt8is31wgR
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 221737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221737&o=json
            external_identifier: CBDB:221737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ELj7af6FP9ng738M3GQvto
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_SbX6lsrvYxiYw0-j7-cMJS
        subject_person_id: p_pBHcZmEwQwDgBxDERRkBDR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-hvz2lO499hllPib1Hae1B
          claim_id: c_SbX6lsrvYxiYw0-j7-cMJS
          source_id: s_qE41DAJoNwXRQShb3josGn
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百一十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qE41DAJoNwXRQShb3josGn
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 221739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221739&o=json
            external_identifier: CBDB:221739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.330Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pBHcZmEwQwDgBxDERRkBDR
        status: active
        display_name: 王澄
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_y2NO9k3GdUf9yX2tEBtpvn
        subject_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7wuG8tUCqQ7qLH8JJ35KoG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l81tNoHUcWAezsIBynHGyT
          claim_id: c_y2NO9k3GdUf9yX2tEBtpvn
          source_id: s_I1GDJ_LUniYF72kbJO2hze
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206699 王九德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I1GDJ_LUniYF72kbJO2hze
            source_type: api_record
            title: 中国历代人物传记资料库：王九淵（CBDB 221746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221746&o=json
            external_identifier: CBDB:221746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7wuG8tUCqQ7qLH8JJ35KoG
        status: active
        display_name: 王九淵
        merged_into_person_id: null
    - claim:
        id: c_8_Q2--Le7g2AtA6JpVLBpe
        subject_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_B6SZC1tGYQaDzcsnMt9g4S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MvjejcN3-RmRFhUNIZH6i3
          claim_id: c_8_Q2--Le7g2AtA6JpVLBpe
          source_id: s_jECv2I1EymnZbI0jvxa5xp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206699 王九德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jECv2I1EymnZbI0jvxa5xp
            source_type: api_record
            title: 中国历代人物传记资料库：王九功（CBDB 221744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221744&o=json
            external_identifier: CBDB:221744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B6SZC1tGYQaDzcsnMt9g4S
        status: active
        display_name: 王九功
        merged_into_person_id: null
    - claim:
        id: c_MBQo7gjFS34H2qbHDypKjw
        subject_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W5rt1yvuNJAuHVDug33og9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p8KirTapMXgwp5smVBCds-
          claim_id: c_MBQo7gjFS34H2qbHDypKjw
          source_id: s_I19QTJeVza8uXqRGXRP5pJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206699 王九德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I19QTJeVza8uXqRGXRP5pJ
            source_type: api_record
            title: 中国历代人物传记资料库：王九思（CBDB 221743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221743&o=json
            external_identifier: CBDB:221743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W5rt1yvuNJAuHVDug33og9
        status: active
        display_name: 王九思
        merged_into_person_id: null
    - claim:
        id: c_EvzAnv_mnz1n3MRAciGcwC
        subject_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wb6X3GJ8LiDLopymZC6KMh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hmj2WBsjm4sEShiBW4_C7V
          claim_id: c_EvzAnv_mnz1n3MRAciGcwC
          source_id: s_KxBp1LF1bNdSymS-O-X2Et
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206699 王九德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KxBp1LF1bNdSymS-O-X2Et
            source_type: api_record
            title: 中国历代人物传记资料库：王九一（CBDB 221745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221745&o=json
            external_identifier: CBDB:221745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wb6X3GJ8LiDLopymZC6KMh
        status: active
        display_name: 王九一
        merged_into_person_id: null
---

# 王九德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九德（生于1552年），明人物。萬曆八年進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 206699） | accepted |
| birth.date | 1552年 | accepted |
| name.primary | 王九德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xuy9jPb62VMvUCJM1MazAP | 王廷相 | accepted |
| ancestors | p_ELj7af6FP9ng738M3GQvto | 王政 | accepted |
| ancestors | p_pBHcZmEwQwDgBxDERRkBDR | 王澄 | accepted |
| other | p_7wuG8tUCqQ7qLH8JJ35KoG | 王九淵 | accepted |
| other | p_B6SZC1tGYQaDzcsnMt9g4S | 王九功 | accepted |
| other | p_W5rt1yvuNJAuHVDug33og9 | 王九思 | accepted |
| other | p_Wb6X3GJ8LiDLopymZC6KMh | 王九一 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 221739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221739&o=json)
- [中国历代人物传记资料库：王九德（CBDB 206699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206699&o=json)
- [中国历代人物传记资料库：王九功（CBDB 221744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221744&o=json)
- [中国历代人物传记资料库：王九思（CBDB 221743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221743&o=json)
- [中国历代人物传记资料库：王九一（CBDB 221745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221745&o=json)
- [中国历代人物传记资料库：王九淵（CBDB 221746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221746&o=json)
- [中国历代人物传记资料库：王廷相（CBDB 221740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221740&o=json)
- [中国历代人物传记资料库：王政（CBDB 221737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221737&o=json)
