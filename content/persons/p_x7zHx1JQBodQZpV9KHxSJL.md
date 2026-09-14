---
schema: wang-person/v1
id: p_x7zHx1JQBodQZpV9KHxSJL
status: active
merged_into: null
display_name: 王達
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zgStRQkRj9VuQWqLkcCt33
        subject_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JNFGM92wqrJhCEMphTg9ix
          claim_id: c_zgStRQkRj9VuQWqLkcCt33
          source_id: s_JSxQWQobEWA8ePXo4noH8g
          stance: supports
          locator: CBDB:202886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202886）
          source: &a1
            id: s_JSxQWQobEWA8ePXo4noH8g
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 202886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202886&o=json
            external_identifier: CBDB:202886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.762Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nmVQGqV8qF15ny5zZ1J7VN
        subject_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JygMvFbpdToXHJzk5D8PM2
          claim_id: c_nmVQGqV8qF15ny5zZ1J7VN
          source_id: s_JSxQWQobEWA8ePXo4noH8g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dwEvmgZrkKUmrBcckq32zU
        subject_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達（生于1497年），明人物。明清進士進士，籍贯濱州，入仕進士。（中国历代人物传记资料库 CBDB 202886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n4hRlwKPSX3jXRciIZoqKC
          claim_id: c_dwEvmgZrkKUmrBcckq32zU
          source_id: s_JSxQWQobEWA8ePXo4noH8g
          stance: supports
          locator: CBDB:202886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_GFBurspQ3EyXZg3MXH57h2
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_gYPPPtJG1a7s6L9JRTdFKt
        subject_person_id: p_oK5NxzBKrE4v6ab6c8LChD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U3mChDhR2TNhWp-ApL_5oN
          claim_id: c_gYPPPtJG1a7s6L9JRTdFKt
          source_id: s_jDYwaP63gnRxxMohYDaEQH
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jDYwaP63gnRxxMohYDaEQH
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 296145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296145&o=json
            external_identifier: CBDB:296145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oK5NxzBKrE4v6ab6c8LChD
        status: active
        display_name: 王恭
        merged_into_person_id: null
    - claim:
        id: c_kuT7uolovaoXiHMKiOOneE
        subject_person_id: p_SQUBxHcrFDcLNGP7FjeBw9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l8hx_zj21Awox-HQpOF6Y-
          claim_id: c_kuT7uolovaoXiHMKiOOneE
          source_id: s_hP4aDkMhwP4rF99Gepa79o
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hP4aDkMhwP4rF99Gepa79o
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 296144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296144&o=json
            external_identifier: CBDB:296144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SQUBxHcrFDcLNGP7FjeBw9
        status: active
        display_name: 王思誠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_6bUXBONv5kki05fjACV_lr
        subject_person_id: p_1mBY8DMmczQ79Fr8giMdHq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_leNP-xYXLEf020FFAGR7vl
          claim_id: c_6bUXBONv5kki05fjACV_lr
          source_id: s_7kJTCaYCHF17mwLNG1u4Mq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202886 王達）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_EgD5Lkw0AdEHe2SMnwy5yM
        subject_person_id: p_Co38TuriorcDEDV5rGaWUd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5TQEROh7KAFXyYt8P7umXZ
          claim_id: c_EgD5Lkw0AdEHe2SMnwy5yM
          source_id: s_EQ_cYbUEf3NTZcSUjHJsbi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202886 王達）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_y9TJihok_MrUOew_vvaWZY
        subject_person_id: p_GHesvNA4FmFj9NWynajwu7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xtcT0SnoyS5rnJ38pC0R_b
          claim_id: c_y9TJihok_MrUOew_vvaWZY
          source_id: s_mbyRWBZDK_dnNlTs-6kMC9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202886 王達）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_jlPvf5aePUIXDbHaX_WzyQ
        subject_person_id: p_ZCC9u1jwVj9KSj3bhgRfu3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cjVPcU31xbg6_G2_U0a7sd
          claim_id: c_jlPvf5aePUIXDbHaX_WzyQ
          source_id: s_x86xgigOfd_i1EGQep1OcH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202886 王達）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| birth.date | 1497年 | accepted |
| bio.summary | 王達（生于1497年），明人物。明清進士進士，籍贯濱州，入仕進士。（中国历代人物传记资料库 CBDB 202886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GFBurspQ3EyXZg3MXH57h2 | 王政 | accepted |
| ancestors | p_oK5NxzBKrE4v6ab6c8LChD | 王恭 | accepted |
| ancestors | p_SQUBxHcrFDcLNGP7FjeBw9 | 王思誠 | accepted |
| other | p_1mBY8DMmczQ79Fr8giMdHq | 王朝輔 | accepted |
| other | p_Co38TuriorcDEDV5rGaWUd | 王逵 | accepted |
| other | p_GHesvNA4FmFj9NWynajwu7 | 王通 | accepted |
| other | p_ZCC9u1jwVj9KSj3bhgRfu3 | 王适 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝輔（CBDB 296150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296150&o=json)
- [中国历代人物传记资料库：王達（CBDB 202886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202886&o=json)
- [中国历代人物传记资料库：王恭（CBDB 296145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296145&o=json)
- [中国历代人物传记资料库：王逵（CBDB 296149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296149&o=json)
- [中国历代人物传记资料库：王适（CBDB 296152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296152&o=json)
- [中国历代人物传记资料库：王思誠（CBDB 296144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296144&o=json)
- [中国历代人物传记资料库：王通（CBDB 296151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296151&o=json)
- [中国历代人物传记资料库：王政（CBDB 296146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296146&o=json)
