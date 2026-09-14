---
schema: wang-person/v1
id: p_GDjC7pvEU5iRp3K4Ac1DMb
status: active
merged_into: null
display_name: 王玉和
cbdb_id: 280406
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BZ2i9hN1t9Hey2Frrm27JJ
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉和，明人物。正德十二年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 280406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ysevCl_zSUqIn4YV0BZVJ9
          claim_id: c_BZ2i9hN1t9Hey2Frrm27JJ
          source_id: s_tQDR8kLta8UJwatD8TKTEv
          stance: supports
          locator: CBDB:280406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tQDR8kLta8UJwatD8TKTEv
            source_type: api_record
            title: 中国历代人物传记资料库：王玉和（CBDB 280406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280406&o=json
            external_identifier: CBDB:280406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iaPcGwWFFfg39UbyjVXTaj
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_y6DJAHcDX8azQKqVRfFBPQ
          claim_id: c_iaPcGwWFFfg39UbyjVXTaj
          source_id: s_tQDR8kLta8UJwatD8TKTEv
          stance: supports
          locator: CBDB:280406
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YZJ3uU_492z3ZJIRXSExs8
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XMu48gew6kDx1QAYd13I1Q
          claim_id: c_YZJ3uU_492z3ZJIRXSExs8
          source_id: s_tQDR8kLta8UJwatD8TKTEv
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第九十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tQDR8kLta8UJwatD8TKTEv
            source_type: api_record
            title: 中国历代人物传记资料库：王玉和（CBDB 280406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280406&o=json
            external_identifier: CBDB:280406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        status: active
        display_name: 王鳳靈
        merged_into_person_id: null
    - claim:
        id: c_i0KXvMV7XxRuX9R_ASo6Px
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3x2dov2G93VHHEwnCdN69L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XSlk0b6V55roX_y0wileLj
          claim_id: c_i0KXvMV7XxRuX9R_ASo6Px
          source_id: s_d1ZiVoG46fROYuhKu8gHJ2
          stance: supports
          locator: CBDB：兄弟 王鳳靈（126795）之父／母 王玉和
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳翔 与 王鳳靈 为同胞（CBDB 记「弟」），王鳳靈 之父／母即 王鳳翔 之父／母。
          source:
            id: s_d1ZiVoG46fROYuhKu8gHJ2
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳翔（CBDB 280411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280411&o=json
            external_identifier: CBDB:280411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3x2dov2G93VHHEwnCdN69L
        status: active
        display_name: 王鳳翔
        merged_into_person_id: null
    - claim:
        id: c_0uX7UQjo6zi3ReHXXRgprc
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9PjQMBJZzsjUc6qH3HCV7R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UWt1dyxfC5EDrsZjyDKmqH
          claim_id: c_0uX7UQjo6zi3ReHXXRgprc
          source_id: s_XRK2GYO63Dps8vyOQbRWt4
          stance: supports
          locator: CBDB：兄弟 王鳳靈（126795）之父／母 王玉和
          quotation: null
          interpretation_note: 由兄弟关系推断：王儼 与 王鳳靈 为同胞（CBDB 记「弟」），王鳳靈 之父／母即 王儼 之父／母。
          source:
            id: s_XRK2GYO63Dps8vyOQbRWt4
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 280416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280416&o=json
            external_identifier: CBDB:280416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9PjQMBJZzsjUc6qH3HCV7R
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_i-GBD0WKyP6HfHDaszJSGK
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HvY2bQf3ZMqCaBJMQK88sW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WvP-vSBZ9JMdZ63b3J9Oxr
          claim_id: c_i-GBD0WKyP6HfHDaszJSGK
          source_id: s_8k1QT1bxXLXsHBWJOZCiwA
          stance: supports
          locator: CBDB：兄弟 王鳳靈（126795）之父／母 王玉和
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳澤 与 王鳳靈 为同胞（CBDB 记「弟」），王鳳靈 之父／母即 王鳳澤 之父／母。
          source:
            id: s_8k1QT1bxXLXsHBWJOZCiwA
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳澤（CBDB 280412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280412&o=json
            external_identifier: CBDB:280412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HvY2bQf3ZMqCaBJMQK88sW
        status: active
        display_name: 王鳳澤
        merged_into_person_id: null
    - claim:
        id: c_CsU_oPWNz5ly4IfskSy-P7
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JoDnV2R9ziQZfdGNgymC8X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SEBziFigSiBPb9ruPUSyoR
          claim_id: c_CsU_oPWNz5ly4IfskSy-P7
          source_id: s_LFpnWeHOvu2Cc-XwHCSed7
          stance: supports
          locator: CBDB：兄弟 王鳳靈（126795）之父／母 王玉和
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳儀 与 王鳳靈 为同胞（CBDB 记「弟」），王鳳靈 之父／母即 王鳳儀 之父／母。
          source:
            id: s_LFpnWeHOvu2Cc-XwHCSed7
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳儀（CBDB 280413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280413&o=json
            external_identifier: CBDB:280413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JoDnV2R9ziQZfdGNgymC8X
        status: active
        display_name: 王鳳儀
        merged_into_person_id: null
    - claim:
        id: c_t1ievyts8QOY09mACL5OpY
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kWCZMu4rQmbVA9wRSC37n9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3-2dsDLKlTaUHxraO0NwIH
          claim_id: c_t1ievyts8QOY09mACL5OpY
          source_id: s_G98UfkUCC89DnYJgyFogO4
          stance: supports
          locator: CBDB：兄弟 王鳳靈（126795）之父／母 王玉和
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王鳳靈 为同胞（CBDB 记「弟」），王鳳靈 之父／母即 王佐 之父／母。
          source:
            id: s_G98UfkUCC89DnYJgyFogO4
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 280414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280414&o=json
            external_identifier: CBDB:280414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kWCZMu4rQmbVA9wRSC37n9
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_v33Ibt262W_OlEHmyepwxK
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nEzuZeoPv13Jh9vth8cKco
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9DHEQ5TbUgBitoiIqh_COc
          claim_id: c_v33Ibt262W_OlEHmyepwxK
          source_id: s_xCOHNmLYTKPAxRieOfTNb_
          stance: supports
          locator: CBDB：兄弟 王鳳靈（126795）之父／母 王玉和
          quotation: null
          interpretation_note: 由兄弟关系推断：王伍 与 王鳳靈 为同胞（CBDB 记「弟」），王鳳靈 之父／母即 王伍 之父／母。
          source:
            id: s_xCOHNmLYTKPAxRieOfTNb_
            source_type: api_record
            title: 中国历代人物传记资料库：王伍（CBDB 280415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280415&o=json
            external_identifier: CBDB:280415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nEzuZeoPv13Jh9vth8cKco
        status: active
        display_name: 王伍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉和，明人物。正德十二年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 280406） | accepted |
| name.primary | 王玉和 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZyrbUQzJSc8r8t3Ud7TNAC | 王鳳靈 | accepted |
| children | p_3x2dov2G93VHHEwnCdN69L | 王鳳翔 | accepted |
| children | p_9PjQMBJZzsjUc6qH3HCV7R | 王儼 | accepted |
| children | p_HvY2bQf3ZMqCaBJMQK88sW | 王鳳澤 | accepted |
| children | p_JoDnV2R9ziQZfdGNgymC8X | 王鳳儀 | accepted |
| children | p_kWCZMu4rQmbVA9wRSC37n9 | 王佐 | accepted |
| children | p_nEzuZeoPv13Jh9vth8cKco | 王伍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳翔（CBDB 280411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280411&o=json)
- [中国历代人物传记资料库：王鳳儀（CBDB 280413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280413&o=json)
- [中国历代人物传记资料库：王鳳澤（CBDB 280412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280412&o=json)
- [中国历代人物传记资料库：王伍（CBDB 280415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280415&o=json)
- [中国历代人物传记资料库：王儼（CBDB 280416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280416&o=json)
- [中国历代人物传记资料库：王玉和（CBDB 280406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280406&o=json)
- [中国历代人物传记资料库：王佐（CBDB 280414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280414&o=json)
