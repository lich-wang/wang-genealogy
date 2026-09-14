---
schema: wang-person/v1
id: p_qGQsVR5gzeQy8Y9aNmPG9C
status: active
merged_into: null
display_name: 王槐
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VFw3dRw9oqB572Af8TNT8A
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zCeUuca9xC7XefNNAFgmu1
          claim_id: c_VFw3dRw9oqB572Af8TNT8A
          source_id: s_hSYp21GgkBHXpWFmbVWv24
          stance: supports
          locator: CBDB:280915
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280915）
          source: &a1
            id: s_hSYp21GgkBHXpWFmbVWv24
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 280915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280915&o=json
            external_identifier: CBDB:280915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9TGECFumMfMkLbKpD1ptTy
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280915）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j8k_toEy8qwWrXa_dodDN6
          claim_id: c_9TGECFumMfMkLbKpD1ptTy
          source_id: s_hSYp21GgkBHXpWFmbVWv24
          stance: supports
          locator: CBDB:280915
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZlYo6xkp99jNi6RrN9qeqj
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X_d1t7z6aKXprWxdf2pfTV
          claim_id: c_ZlYo6xkp99jNi6RrN9qeqj
          source_id: s_hSYp21GgkBHXpWFmbVWv24
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qC31C42hD4UK4m3NDzMPZB
        status: active
        display_name: 王暐
        merged_into_person_id: null
    - claim:
        id: c_5r3ob48O8iPLq4N16XYwWZ
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7TVGTNu3sbko426HVSAN25
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IH6E1wkXvrDJw4ykM6i_HT
          claim_id: c_5r3ob48O8iPLq4N16XYwWZ
          source_id: s_1PfHbcbAuHF5ofTdAEn-Op
          stance: supports
          locator: CBDB：兄弟 王暐（68343）之父／母 王槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王昕 与 王暐 为同胞（CBDB 记「兄」），王暐 之父／母即 王昕 之父／母。
          source:
            id: s_1PfHbcbAuHF5ofTdAEn-Op
            source_type: api_record
            title: 中国历代人物传记资料库：王昕（CBDB 280921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280921&o=json
            external_identifier: CBDB:280921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7TVGTNu3sbko426HVSAN25
        status: active
        display_name: 王昕
        merged_into_person_id: null
    - claim:
        id: c_W8xsJz0uN1XjhKm_VdCOiT
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LmeHDe5PBAsiWLxvX64Q3J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cMABFO5XZ3OxbVgix7JqSF
          claim_id: c_W8xsJz0uN1XjhKm_VdCOiT
          source_id: s_vKqwfiXrpMwhBp1ccVhzPQ
          stance: supports
          locator: CBDB：兄弟 王暐（68343）之父／母 王槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王曄 与 王暐 为同胞（CBDB 记「兄」），王暐 之父／母即 王曄 之父／母。
          source:
            id: s_vKqwfiXrpMwhBp1ccVhzPQ
            source_type: api_record
            title: 中国历代人物传记资料库：王曄（CBDB 280920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280920&o=json
            external_identifier: CBDB:280920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LmeHDe5PBAsiWLxvX64Q3J
        status: active
        display_name: 王曄
        merged_into_person_id: null
    - claim:
        id: c_ts6WhJn_SEhHUS93KvcQjX
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NxwXbwWCCuYtwms8SfYMQC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bo9lKxQ8Ej5m6uoUIu_gtC
          claim_id: c_ts6WhJn_SEhHUS93KvcQjX
          source_id: s_fG5ewSTwZd6IYb129vSRip
          stance: supports
          locator: CBDB：兄弟 王暐（68343）之父／母 王槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王昞 与 王暐 为同胞（CBDB 记「弟」），王暐 之父／母即 王昞 之父／母。
          source:
            id: s_fG5ewSTwZd6IYb129vSRip
            source_type: api_record
            title: 中国历代人物传记资料库：王昞（CBDB 280918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280918&o=json
            external_identifier: CBDB:280918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NxwXbwWCCuYtwms8SfYMQC
        status: active
        display_name: 王昞
        merged_into_person_id: null
    - claim:
        id: c_EcbySu9Pa3xnuruMjRqOaN
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WdRPeFwAMEzH5rEnyH9rR9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4tvJ7AQHfL4z2y1hm5pLl-
          claim_id: c_EcbySu9Pa3xnuruMjRqOaN
          source_id: s_1GYh1cNlXclE3hqEajt_qa
          stance: supports
          locator: CBDB：兄弟 王暐（68343）之父／母 王槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王旵 与 王暐 为同胞（CBDB 记「兄」），王暐 之父／母即 王旵 之父／母。
          source:
            id: s_1GYh1cNlXclE3hqEajt_qa
            source_type: api_record
            title: 中国历代人物传记资料库：王旵（CBDB 280924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280924&o=json
            external_identifier: CBDB:280924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WdRPeFwAMEzH5rEnyH9rR9
        status: active
        display_name: 王旵
        merged_into_person_id: null
    - claim:
        id: c_dH7rvaedI0DK5q2Q7iBikU
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pdYaJuvk9HxWZQ9ad6aF8k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c7i_VAi1xrQs2Llq2ErIA4
          claim_id: c_dH7rvaedI0DK5q2Q7iBikU
          source_id: s_jGtg07kOZSDAo8xfi5yOlo
          stance: supports
          locator: CBDB：兄弟 王暐（68343）之父／母 王槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王曦 与 王暐 为同胞（CBDB 记「兄」），王暐 之父／母即 王曦 之父／母。
          source:
            id: s_jGtg07kOZSDAo8xfi5yOlo
            source_type: api_record
            title: 中国历代人物传记资料库：王曦（CBDB 280922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280922&o=json
            external_identifier: CBDB:280922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pdYaJuvk9HxWZQ9ad6aF8k
        status: active
        display_name: 王曦
        merged_into_person_id: null
    - claim:
        id: c_MulWyGgwKMN3mOFPuowbFv
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zvDLLjsaBbAAQZrQMfa4Dg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8CaI7owG5qN7QsXrtwBBxD
          claim_id: c_MulWyGgwKMN3mOFPuowbFv
          source_id: s_AgbFp1w0NMidMiFi1UZIhm
          stance: supports
          locator: CBDB：兄弟 王暐（68343）之父／母 王槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王曉 与 王暐 为同胞（CBDB 记「兄」），王暐 之父／母即 王曉 之父／母。
          source:
            id: s_AgbFp1w0NMidMiFi1UZIhm
            source_type: api_record
            title: 中国历代人物传记资料库：王曉（CBDB 280923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280923&o=json
            external_identifier: CBDB:280923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zvDLLjsaBbAAQZrQMfa4Dg
        status: active
        display_name: 王曉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐 | accepted |
| bio.summary | 王槐，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280915） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qC31C42hD4UK4m3NDzMPZB | 王暐 | accepted |
| children | p_7TVGTNu3sbko426HVSAN25 | 王昕 | accepted |
| children | p_LmeHDe5PBAsiWLxvX64Q3J | 王曄 | accepted |
| children | p_NxwXbwWCCuYtwms8SfYMQC | 王昞 | accepted |
| children | p_WdRPeFwAMEzH5rEnyH9rR9 | 王旵 | accepted |
| children | p_pdYaJuvk9HxWZQ9ad6aF8k | 王曦 | accepted |
| children | p_zvDLLjsaBbAAQZrQMfa4Dg | 王曉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昞（CBDB 280918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280918&o=json)
- [中国历代人物传记资料库：王旵（CBDB 280924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280924&o=json)
- [中国历代人物传记资料库：王槐（CBDB 280915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280915&o=json)
- [中国历代人物传记资料库：王曦（CBDB 280922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280922&o=json)
- [中国历代人物传记资料库：王曉（CBDB 280923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280923&o=json)
- [中国历代人物传记资料库：王昕（CBDB 280921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280921&o=json)
- [中国历代人物传记资料库：王曄（CBDB 280920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280920&o=json)
