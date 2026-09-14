---
schema: wang-person/v1
id: p_VsUEBsvkAXXbA9FWfTN5pA
status: active
merged_into: null
display_name: 王國禎
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5AWWL4dcf2jUAMRhg5kBQX
        subject_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jNXRH9AtTFXbF1J4y4gQ6T
          claim_id: c_5AWWL4dcf2jUAMRhg5kBQX
          source_id: s_QF4d9VCiywQ59DBDNxkXS1
          stance: supports
          locator: CBDB:126691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126691）
          source: &a1
            id: s_QF4d9VCiywQ59DBDNxkXS1
            source_type: api_record
            title: 中国历代人物传记资料库：王國禎（CBDB 126691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126691&o=json
            external_identifier: CBDB:126691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eymijeEc5Naf3bq72i9AAH
        subject_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國禎，明人物。籍贯山陰，入仕進士。（中国历代人物传记资料库 CBDB 126691）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9vTuoLuQZwKMKaHmCo1qXL
          claim_id: c_eymijeEc5Naf3bq72i9AAH
          source_id: s_QF4d9VCiywQ59DBDNxkXS1
          stance: supports
          locator: CBDB:126691
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Y8ZY2Ll-u9AuQvYN8ownzN
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U90p_UqBTCR3Y9MXVj5RC5
          claim_id: c_Y8ZY2Ll-u9AuQvYN8ownzN
          source_id: s_gLqYcPwPC3KJqKEtZKNiXV
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gLqYcPwPC3KJqKEtZKNiXV
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 300441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300441&o=json
            external_identifier: CBDB:300441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nfDQpFcmyR41HhRtmj92PA
        status: active
        display_name: 王愷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_mAdLTu8ykxBj1fa3VQLsZQ
        subject_person_id: p_AvcaPwSSq3Uk1GE9thkKb5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W5vDVAAuX3nXyR-sGoe1XW
          claim_id: c_mAdLTu8ykxBj1fa3VQLsZQ
          source_id: s_7y4EiaxsnEtoTLrueGoZEK
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7y4EiaxsnEtoTLrueGoZEK
            source_type: api_record
            title: 中国历代人物传记资料库：王玉玭（CBDB 300440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300440&o=json
            external_identifier: CBDB:300440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AvcaPwSSq3Uk1GE9thkKb5
        status: active
        display_name: 王玉玭
        merged_into_person_id: null
    - claim:
        id: c_lBwhsOkHrWPhKPX1Vs0QKF
        subject_person_id: p_EwKGggUj1jjhMxcXzgQ97L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TUlgi-_k24ZSXx3LyWNe2y
          claim_id: c_lBwhsOkHrWPhKPX1Vs0QKF
          source_id: s_Mnf3yQ2MKoWjaq3QQ7AT7R
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mnf3yQ2MKoWjaq3QQ7AT7R
            source_type: api_record
            title: 中国历代人物传记资料库：王彥德（CBDB 300439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300439&o=json
            external_identifier: CBDB:300439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_EwKGggUj1jjhMxcXzgQ97L
        status: active
        display_name: 王彥德
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_xrv2c8wflfmj0x_z8dt8oK
        subject_person_id: p_C5JXetdqzJDyK61Lkc87hJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MVEdydC4xlHQroT3-owVBe
          claim_id: c_xrv2c8wflfmj0x_z8dt8oK
          source_id: s_JF___QwuavZRUvYE67s5L_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126691 王國禎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JF___QwuavZRUvYE67s5L_
            source_type: api_record
            title: 中国历代人物传记资料库：王國賓（CBDB 300446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300446&o=json
            external_identifier: CBDB:300446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C5JXetdqzJDyK61Lkc87hJ
        status: active
        display_name: 王國賓
        merged_into_person_id: null
    - claim:
        id: c_Btzov2tnhuupT5EJY4ku_E
        subject_person_id: p_NHWKFSJwMQa18gB2fHSFSP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eAu6tGtfZ6A8Y9aAYWlrxf
          claim_id: c_Btzov2tnhuupT5EJY4ku_E
          source_id: s_y2VrrXeX9L4bjUW0fyhzoC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126691 王國禎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_y2VrrXeX9L4bjUW0fyhzoC
            source_type: api_record
            title: 中国历代人物传记资料库：王國器（CBDB 300448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300448&o=json
            external_identifier: CBDB:300448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NHWKFSJwMQa18gB2fHSFSP
        status: active
        display_name: 王國器
        merged_into_person_id: null
    - claim:
        id: c_iYzCOurfIq-coAg6T47sLB
        subject_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kM8BgAuHD8CLZLgfEVoMZb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KdDAmIou6_t44-zgGQlLO2
          claim_id: c_iYzCOurfIq-coAg6T47sLB
          source_id: s_SYlXVZ-RnOeXgRRq95rbD2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126691 王國禎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SYlXVZ-RnOeXgRRq95rbD2
            source_type: api_record
            title: 中国历代人物传记资料库：王國臣（CBDB 300444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300444&o=json
            external_identifier: CBDB:300444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kM8BgAuHD8CLZLgfEVoMZb
        status: active
        display_name: 王國臣
        merged_into_person_id: null
    - claim:
        id: c_PbVjgHiPj8mNL-IcBwjmzX
        subject_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n4p43ECzNzGHq1vp3dKsGh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t4s-5L0Np9cvj3nUWJNpOO
          claim_id: c_PbVjgHiPj8mNL-IcBwjmzX
          source_id: s_SjKoXEAZI6xBjldjoD68l-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126691 王國禎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SjKoXEAZI6xBjldjoD68l-
            source_type: api_record
            title: 中国历代人物传记资料库：王國言（CBDB 300445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300445&o=json
            external_identifier: CBDB:300445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n4p43ECzNzGHq1vp3dKsGh
        status: active
        display_name: 王國言
        merged_into_person_id: null
    - claim:
        id: c_olPdX19llEvqz-kw9Fhc0T
        subject_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pAjAvgf8GL8NvCzQiKHN93
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DUG3J3Q9-_4UD66T3wp7or
          claim_id: c_olPdX19llEvqz-kw9Fhc0T
          source_id: s_QTK-yV3EwZyjyrbM-5n18h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126691 王國禎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QTK-yV3EwZyjyrbM-5n18h
            source_type: api_record
            title: 中国历代人物传记资料库：王國某（CBDB 300447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300447&o=json
            external_identifier: CBDB:300447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pAjAvgf8GL8NvCzQiKHN93
        status: active
        display_name: 王國某
        merged_into_person_id: null
---

# 王國禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國禎 | accepted |
| bio.summary | 王國禎，明人物。籍贯山陰，入仕進士。（中国历代人物传记资料库 CBDB 126691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nfDQpFcmyR41HhRtmj92PA | 王愷 | accepted |
| ancestors | p_AvcaPwSSq3Uk1GE9thkKb5 | 王玉玭 | accepted |
| ancestors | p_EwKGggUj1jjhMxcXzgQ97L | 王彥德 | accepted |
| other | p_C5JXetdqzJDyK61Lkc87hJ | 王國賓 | accepted |
| other | p_NHWKFSJwMQa18gB2fHSFSP | 王國器 | accepted |
| other | p_kM8BgAuHD8CLZLgfEVoMZb | 王國臣 | accepted |
| other | p_n4p43ECzNzGHq1vp3dKsGh | 王國言 | accepted |
| other | p_pAjAvgf8GL8NvCzQiKHN93 | 王國某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國賓（CBDB 300446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300446&o=json)
- [中国历代人物传记资料库：王國臣（CBDB 300444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300444&o=json)
- [中国历代人物传记资料库：王國某（CBDB 300447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300447&o=json)
- [中国历代人物传记资料库：王國器（CBDB 300448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300448&o=json)
- [中国历代人物传记资料库：王國言（CBDB 300445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300445&o=json)
- [中国历代人物传记资料库：王國禎（CBDB 126691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126691&o=json)
- [中国历代人物传记资料库：王愷（CBDB 300441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300441&o=json)
- [中国历代人物传记资料库：王彥德（CBDB 300439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300439&o=json)
- [中国历代人物传记资料库：王玉玭（CBDB 300440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300440&o=json)
