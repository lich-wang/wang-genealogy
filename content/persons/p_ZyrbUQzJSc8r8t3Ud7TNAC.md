---
schema: wang-person/v1
id: p_ZyrbUQzJSc8r8t3Ud7TNAC
status: active
merged_into: null
display_name: 王鳳靈
cbdb_id: 126795
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ETmmWuaC6n5QvLbsiTYsZY
        subject_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳靈，明人物。明清進士進士，籍贯莆田，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126795）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xBsVaUGwE7lBQbvSWICdRM
          claim_id: c_ETmmWuaC6n5QvLbsiTYsZY
          source_id: s_HBWZQGdCiv1HxgEA5ns5Ni
          stance: supports
          locator: CBDB:126795
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HBWZQGdCiv1HxgEA5ns5Ni
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳靈（CBDB 126795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126795&o=json
            external_identifier: CBDB:126795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pc27MLMdHQx8MiWThRBAiD
        subject_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳靈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9H48DiLfeqkZrqT5SGHGUv
          claim_id: c_Pc27MLMdHQx8MiWThRBAiD
          source_id: s_HBWZQGdCiv1HxgEA5ns5Ni
          stance: supports
          locator: CBDB:126795
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_GDjC7pvEU5iRp3K4Ac1DMb
        status: active
        display_name: 王玉和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_W29INugQz_vdWSNkRM7c51
        subject_person_id: p_E9FN5LuN8Nu5my4V9KTU9e
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Z6onETtnE52B5HsQxbr4Y
          claim_id: c_W29INugQz_vdWSNkRM7c51
          source_id: s_XJUAL3qKpot9NmMiaggEZt
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第九十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XJUAL3qKpot9NmMiaggEZt
            source_type: api_record
            title: 中国历代人物传记资料库：王文傑（CBDB 280404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280404&o=json
            external_identifier: CBDB:280404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_E9FN5LuN8Nu5my4V9KTU9e
        status: active
        display_name: 王文傑
        merged_into_person_id: null
    - claim:
        id: c_cWmK14z6dw7J2UPar_3Mfw
        subject_person_id: p_6tt4hsMiMngzJX6wMc4JPH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JewLojOnxiGDQfT1Ztaw1f
          claim_id: c_cWmK14z6dw7J2UPar_3Mfw
          source_id: s_3YMBxmwCzaNCrRHY2Xab1A
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第九十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3YMBxmwCzaNCrRHY2Xab1A
            source_type: api_record
            title: 中国历代人物传记资料库：王止敬（CBDB 280405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280405&o=json
            external_identifier: CBDB:280405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6tt4hsMiMngzJX6wMc4JPH
        status: active
        display_name: 王止敬
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_E-ybgiIth3nj3ztB4oPjL6
        subject_person_id: p_3x2dov2G93VHHEwnCdN69L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3-HWqOSUX71XNoUW4c-5Sz
          claim_id: c_E-ybgiIth3nj3ztB4oPjL6
          source_id: s_d1ZiVoG46fROYuhKu8gHJ2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126795 王鳳靈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_juJ4AFhrOLw4Mp8vf0ZNwX
        subject_person_id: p_9PjQMBJZzsjUc6qH3HCV7R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9E29bSqO7RSaDC8GkROZpi
          claim_id: c_juJ4AFhrOLw4Mp8vf0ZNwX
          source_id: s_XRK2GYO63Dps8vyOQbRWt4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126795 王鳳靈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_yCpdEOQLioWM1xcujGBSBG
        subject_person_id: p_HvY2bQf3ZMqCaBJMQK88sW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2dTlFUHD74vI6t0i-0Av3W
          claim_id: c_yCpdEOQLioWM1xcujGBSBG
          source_id: s_8k1QT1bxXLXsHBWJOZCiwA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126795 王鳳靈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Wh7kzUHRb4w6-MxFK16mtm
        subject_person_id: p_JoDnV2R9ziQZfdGNgymC8X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_paP9qZAzB9tnYum97YwZGJ
          claim_id: c_Wh7kzUHRb4w6-MxFK16mtm
          source_id: s_LFpnWeHOvu2Cc-XwHCSed7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126795 王鳳靈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_iWewmlFx8FFpgJSsnGdCsD
        subject_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kWCZMu4rQmbVA9wRSC37n9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w0KuaNlu5dsfvb3RMNjWC5
          claim_id: c_iWewmlFx8FFpgJSsnGdCsD
          source_id: s_G98UfkUCC89DnYJgyFogO4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126795 王鳳靈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_FzorjGETCiRwCiSE0A9shN
        subject_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nEzuZeoPv13Jh9vth8cKco
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Q_AJffsd1eQsrx9acQEhO
          claim_id: c_FzorjGETCiRwCiSE0A9shN
          source_id: s_xCOHNmLYTKPAxRieOfTNb_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126795 王鳳靈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王鳳靈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鳳靈，明人物。明清進士進士，籍贯莆田，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126795） | accepted |
| name.primary | 王鳳靈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GDjC7pvEU5iRp3K4Ac1DMb | 王玉和 | accepted |
| ancestors | p_E9FN5LuN8Nu5my4V9KTU9e | 王文傑 | accepted |
| ancestors | p_6tt4hsMiMngzJX6wMc4JPH | 王止敬 | accepted |
| other | p_3x2dov2G93VHHEwnCdN69L | 王鳳翔 | accepted |
| other | p_9PjQMBJZzsjUc6qH3HCV7R | 王儼 | accepted |
| other | p_HvY2bQf3ZMqCaBJMQK88sW | 王鳳澤 | accepted |
| other | p_JoDnV2R9ziQZfdGNgymC8X | 王鳳儀 | accepted |
| other | p_kWCZMu4rQmbVA9wRSC37n9 | 王佐 | accepted |
| other | p_nEzuZeoPv13Jh9vth8cKco | 王伍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳靈（CBDB 126795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126795&o=json)
- [中国历代人物传记资料库：王鳳翔（CBDB 280411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280411&o=json)
- [中国历代人物传记资料库：王鳳儀（CBDB 280413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280413&o=json)
- [中国历代人物传记资料库：王鳳澤（CBDB 280412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280412&o=json)
- [中国历代人物传记资料库：王文傑（CBDB 280404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280404&o=json)
- [中国历代人物传记资料库：王伍（CBDB 280415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280415&o=json)
- [中国历代人物传记资料库：王儼（CBDB 280416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280416&o=json)
- [中国历代人物传记资料库：王玉和（CBDB 280406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280406&o=json)
- [中国历代人物传记资料库：王止敬（CBDB 280405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280405&o=json)
- [中国历代人物传记资料库：王佐（CBDB 280414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280414&o=json)
