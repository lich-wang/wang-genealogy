---
schema: wang-person/v1
id: p_Xuy9jPb62VMvUCJM1MazAP
status: active
merged_into: null
display_name: 王廷相
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CqBqFdCnssDByGZb2GLeAd
        subject_person_id: p_Xuy9jPb62VMvUCJM1MazAP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Gffqn7gxLw5ZNNt63GCck
          claim_id: c_CqBqFdCnssDByGZb2GLeAd
          source_id: s_SExJCqXrwRtYkVTP83XCL8
          stance: supports
          locator: CBDB:221740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221740）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pf4C4ar46HTM4Hrx7Ttwa7
        subject_person_id: p_Xuy9jPb62VMvUCJM1MazAP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷相，明人物。萬曆八年進士，籍贯祥符，曾任王府典膳。（中国历代人物传记资料库 CBDB 221740）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C1qfRQjNakMWbCdWnEecxn
          claim_id: c_pf4C4ar46HTM4Hrx7Ttwa7
          source_id: s_SExJCqXrwRtYkVTP83XCL8
          stance: supports
          locator: CBDB:221740
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_7F2eLtMppfYhb1rX2t5C3R
        status: active
        display_name: 王九德
        merged_into_person_id: null
    - claim:
        id: c_yR7UgIymh5IeahON9qvt1e
        subject_person_id: p_Xuy9jPb62VMvUCJM1MazAP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wuG8tUCqQ7qLH8JJ35KoG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yDL9s8aqrq8FPzNvxglSWI
          claim_id: c_yR7UgIymh5IeahON9qvt1e
          source_id: s_I1GDJ_LUniYF72kbJO2hze
          stance: supports
          locator: CBDB：兄弟 王九德（206699）之父／母 王廷相
          quotation: null
          interpretation_note: 由兄弟关系推断：王九淵 与 王九德 为同胞（CBDB 记「兄」），王九德 之父／母即 王九淵 之父／母。
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
        id: c_kPsN0G3quxrJnW_PwB4O-U
        subject_person_id: p_Xuy9jPb62VMvUCJM1MazAP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B6SZC1tGYQaDzcsnMt9g4S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-qNdZjnVuLBJf5QVZ4o6cH
          claim_id: c_kPsN0G3quxrJnW_PwB4O-U
          source_id: s_jECv2I1EymnZbI0jvxa5xp
          stance: supports
          locator: CBDB：兄弟 王九德（206699）之父／母 王廷相
          quotation: null
          interpretation_note: 由兄弟关系推断：王九功 与 王九德 为同胞（CBDB 记「弟」），王九德 之父／母即 王九功 之父／母。
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
        id: c_xPa013vjTTxg4N5vDi9JIY
        subject_person_id: p_Xuy9jPb62VMvUCJM1MazAP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W5rt1yvuNJAuHVDug33og9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pUXDFzvYEABRP_Z1kmic0M
          claim_id: c_xPa013vjTTxg4N5vDi9JIY
          source_id: s_I19QTJeVza8uXqRGXRP5pJ
          stance: supports
          locator: CBDB：兄弟 王九德（206699）之父／母 王廷相
          quotation: null
          interpretation_note: 由兄弟关系推断：王九思 与 王九德 为同胞（CBDB 记「弟」），王九德 之父／母即 王九思 之父／母。
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
        id: c_ufJUcT7NcrxmwcFIn9yKrz
        subject_person_id: p_Xuy9jPb62VMvUCJM1MazAP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wb6X3GJ8LiDLopymZC6KMh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uQJRB0c7bgK2y462tlxxYU
          claim_id: c_ufJUcT7NcrxmwcFIn9yKrz
          source_id: s_KxBp1LF1bNdSymS-O-X2Et
          stance: supports
          locator: CBDB：兄弟 王九德（206699）之父／母 王廷相
          quotation: null
          interpretation_note: 由兄弟关系推断：王九一 与 王九德 为同胞（CBDB 记「兄」），王九德 之父／母即 王九一 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷相 | accepted |
| bio.summary | 王廷相，明人物。萬曆八年進士，籍贯祥符，曾任王府典膳。（中国历代人物传记资料库 CBDB 221740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7F2eLtMppfYhb1rX2t5C3R | 王九德 | accepted |
| children | p_7wuG8tUCqQ7qLH8JJ35KoG | 王九淵 | accepted |
| children | p_B6SZC1tGYQaDzcsnMt9g4S | 王九功 | accepted |
| children | p_W5rt1yvuNJAuHVDug33og9 | 王九思 | accepted |
| children | p_Wb6X3GJ8LiDLopymZC6KMh | 王九一 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九功（CBDB 221744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221744&o=json)
- [中国历代人物传记资料库：王九思（CBDB 221743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221743&o=json)
- [中国历代人物传记资料库：王九一（CBDB 221745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221745&o=json)
- [中国历代人物传记资料库：王九淵（CBDB 221746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221746&o=json)
- [中国历代人物传记资料库：王廷相（CBDB 221740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221740&o=json)
