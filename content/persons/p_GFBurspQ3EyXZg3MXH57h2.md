---
schema: wang-person/v1
id: p_GFBurspQ3EyXZg3MXH57h2
status: active
merged_into: null
display_name: 王政
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kZ3ZtLmKqCqCjYr7qmD67d
        subject_person_id: p_GFBurspQ3EyXZg3MXH57h2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8t53JX1nEczQkDaw4Fpkbq
          claim_id: c_kZ3ZtLmKqCqCjYr7qmD67d
          source_id: s_eTAWg2aqZLuFbMQbc1zd4P
          stance: supports
          locator: CBDB:296146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296146）
          source: &a1
            id: s_eTAWg2aqZLuFbMQbc1zd4P
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 296146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296146&o=json
            external_identifier: CBDB:296146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cZWhVVCVtr5SDU1oKAJp8Q
        subject_person_id: p_GFBurspQ3EyXZg3MXH57h2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。嘉靖十四年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 296146）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1Bs15VQI3_41wB3qyt9jOk
          claim_id: c_cZWhVVCVtr5SDU1oKAJp8Q
          source_id: s_eTAWg2aqZLuFbMQbc1zd4P
          stance: supports
          locator: CBDB:296146
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_c25Pf5UFKxU6QlUXYTplB0
        subject_person_id: p_GFBurspQ3EyXZg3MXH57h2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JwmeLARI8m1HyTupb0Dlms
          claim_id: c_c25Pf5UFKxU6QlUXYTplB0
          source_id: s_eTAWg2aqZLuFbMQbc1zd4P
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x7zHx1JQBodQZpV9KHxSJL
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_1IncQF3dDHCWh5GGs7j7Ro
        subject_person_id: p_GFBurspQ3EyXZg3MXH57h2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1mBY8DMmczQ79Fr8giMdHq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n4fyBdW7KK4NXBut4PqbrM
          claim_id: c_1IncQF3dDHCWh5GGs7j7Ro
          source_id: s_7kJTCaYCHF17mwLNG1u4Mq
          stance: supports
          locator: CBDB：兄弟 王達（202886）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝輔 与 王達 为同胞（CBDB 记「弟」），王達 之父／母即 王朝輔 之父／母。
          source:
            id: s_7kJTCaYCHF17mwLNG1u4Mq
            source_type: api_record
            title: 中国历代人物传记资料库：王朝輔（CBDB 296150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296150&o=json
            external_identifier: CBDB:296150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1mBY8DMmczQ79Fr8giMdHq
        status: active
        display_name: 王朝輔
        merged_into_person_id: null
    - claim:
        id: c_A-rkPJuqLigBU0fOCjDfs1
        subject_person_id: p_GFBurspQ3EyXZg3MXH57h2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Co38TuriorcDEDV5rGaWUd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NlCr6T1ISHsqwM2dvCa22P
          claim_id: c_A-rkPJuqLigBU0fOCjDfs1
          source_id: s_EQ_cYbUEf3NTZcSUjHJsbi
          stance: supports
          locator: CBDB：兄弟 王達（202886）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王逵 与 王達 为同胞（CBDB 记「弟」），王達 之父／母即 王逵 之父／母。
          source:
            id: s_EQ_cYbUEf3NTZcSUjHJsbi
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 296149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296149&o=json
            external_identifier: CBDB:296149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Co38TuriorcDEDV5rGaWUd
        status: active
        display_name: 王逵
        merged_into_person_id: null
    - claim:
        id: c_78VOo_IfXffphR3NFUwocV
        subject_person_id: p_GFBurspQ3EyXZg3MXH57h2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GHesvNA4FmFj9NWynajwu7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lQBvhw_TdmXgbm8qD_qa-H
          claim_id: c_78VOo_IfXffphR3NFUwocV
          source_id: s_mbyRWBZDK_dnNlTs-6kMC9
          stance: supports
          locator: CBDB：兄弟 王達（202886）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王通 与 王達 为同胞（CBDB 记「兄」），王達 之父／母即 王通 之父／母。
          source:
            id: s_mbyRWBZDK_dnNlTs-6kMC9
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 296151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296151&o=json
            external_identifier: CBDB:296151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GHesvNA4FmFj9NWynajwu7
        status: active
        display_name: 王通
        merged_into_person_id: null
    - claim:
        id: c_NBa7WVQyVLyCmnwrpp7mpA
        subject_person_id: p_GFBurspQ3EyXZg3MXH57h2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZCC9u1jwVj9KSj3bhgRfu3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KjANEJb0qA3VBswLJ2Cf_F
          claim_id: c_NBa7WVQyVLyCmnwrpp7mpA
          source_id: s_x86xgigOfd_i1EGQep1OcH
          stance: supports
          locator: CBDB：兄弟 王達（202886）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王适 与 王達 为同胞（CBDB 记「兄」），王達 之父／母即 王适 之父／母。
          source:
            id: s_x86xgigOfd_i1EGQep1OcH
            source_type: api_record
            title: 中国历代人物传记资料库：王适（CBDB 296152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296152&o=json
            external_identifier: CBDB:296152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZCC9u1jwVj9KSj3bhgRfu3
        status: active
        display_name: 王适
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。嘉靖十四年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 296146） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_x7zHx1JQBodQZpV9KHxSJL | 王達 | accepted |
| children | p_1mBY8DMmczQ79Fr8giMdHq | 王朝輔 | accepted |
| children | p_Co38TuriorcDEDV5rGaWUd | 王逵 | accepted |
| children | p_GHesvNA4FmFj9NWynajwu7 | 王通 | accepted |
| children | p_ZCC9u1jwVj9KSj3bhgRfu3 | 王适 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝輔（CBDB 296150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296150&o=json)
- [中国历代人物传记资料库：王逵（CBDB 296149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296149&o=json)
- [中国历代人物传记资料库：王适（CBDB 296152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296152&o=json)
- [中国历代人物传记资料库：王通（CBDB 296151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296151&o=json)
- [中国历代人物传记资料库：王政（CBDB 296146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296146&o=json)
