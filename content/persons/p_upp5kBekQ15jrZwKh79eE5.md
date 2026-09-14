---
schema: wang-person/v1
id: p_upp5kBekQ15jrZwKh79eE5
status: active
merged_into: null
display_name: 王如瓚
cbdb_id: 210790
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5RDGoozYACk9m8K4LV811h
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如瓚，明人物。隆慶五年進士，籍贯泰和，曾任知府。（中国历代人物传记资料库 CBDB 210790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_l77AFD5DGBIsOjIJgtwfEL
          claim_id: c_5RDGoozYACk9m8K4LV811h
          source_id: s_bM6UrKeZhSuBoe5GUAz6iz
          stance: supports
          locator: CBDB:210790
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bM6UrKeZhSuBoe5GUAz6iz
            source_type: api_record
            title: 中国历代人物传记资料库：王如瓚（CBDB 210790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210790&o=json
            external_identifier: CBDB:210790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YvwReqbt9tc6a2mTC1Khf3
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9ZYLPGrKq13b6Rj8MAeef4
          claim_id: c_YvwReqbt9tc6a2mTC1Khf3
          source_id: s_bM6UrKeZhSuBoe5GUAz6iz
          stance: supports
          locator: CBDB:210790
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_y1a9i_qIc_66nkjp_M7Hyr
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XiSMyrMCkl8ig2vAmPA6B6
          claim_id: c_y1a9i_qIc_66nkjp_M7Hyr
          source_id: s_bM6UrKeZhSuBoe5GUAz6iz
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bM6UrKeZhSuBoe5GUAz6iz
            source_type: api_record
            title: 中国历代人物传记资料库：王如瓚（CBDB 210790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210790&o=json
            external_identifier: CBDB:210790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DDFA2NLfrQKM4TnFh33EoF
        status: active
        display_name: 王一乾
        merged_into_person_id: null
    - claim:
        id: c_LhZf24FvvwoqL-lI0oAcQG
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KXjEM8wae9qpLicqSanMCX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1jz_sLtyzIyBYmHnjpAAHM
          claim_id: c_LhZf24FvvwoqL-lI0oAcQG
          source_id: s_YqKC2ORI0_DQ8-UvpGy_CJ
          stance: supports
          locator: CBDB：兄弟 王一乾（205929）之父／母 王如瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王一惋 与 王一乾 为同胞（CBDB 记「兄」），王一乾 之父／母即 王一惋 之父／母。
          source:
            id: s_YqKC2ORI0_DQ8-UvpGy_CJ
            source_type: api_record
            title: 中国历代人物传记资料库：王一惋（CBDB 210800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210800&o=json
            external_identifier: CBDB:210800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KXjEM8wae9qpLicqSanMCX
        status: active
        display_name: 王一惋
        merged_into_person_id: null
    - claim:
        id: c_NBV3LBpcsTgqJ2zZavrrme
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NBdhUqNsqzJWXe6PGnmj5J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6nZtvhRqYd4cIj05NJYdXj
          claim_id: c_NBV3LBpcsTgqJ2zZavrrme
          source_id: s_x4--M_xs4RBiCt-6hG8Il3
          stance: supports
          locator: CBDB：兄弟 王一乾（205929）之父／母 王如瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王一能 与 王一乾 为同胞（CBDB 记「弟」），王一乾 之父／母即 王一能 之父／母。
          source:
            id: s_x4--M_xs4RBiCt-6hG8Il3
            source_type: api_record
            title: 中国历代人物传记资料库：王一能（CBDB 210797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210797&o=json
            external_identifier: CBDB:210797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NBdhUqNsqzJWXe6PGnmj5J
        status: active
        display_name: 王一能
        merged_into_person_id: null
    - claim:
        id: c_ACxqIgLPLI7IovLSMArH4U
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kCyHskJxKrjbUAQhdmCZ8b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OuqMW2YHVUZc0WHXQEmBJi
          claim_id: c_ACxqIgLPLI7IovLSMArH4U
          source_id: s_cTpiYfrDsvbEzkbLHYf-Km
          stance: supports
          locator: CBDB：兄弟 王一乾（205929）之父／母 王如瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王一光 与 王一乾 为同胞（CBDB 记「弟」），王一乾 之父／母即 王一光 之父／母。
          source:
            id: s_cTpiYfrDsvbEzkbLHYf-Km
            source_type: api_record
            title: 中国历代人物传记资料库：王一光（CBDB 210798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210798&o=json
            external_identifier: CBDB:210798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kCyHskJxKrjbUAQhdmCZ8b
        status: active
        display_name: 王一光
        merged_into_person_id: null
    - claim:
        id: c_woDC-_zSlu8XPN_oYvcZIA
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rQcsMdYUa5T1hJ35di8tcC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5rI6ZaQUvvuCzNspA4sL-f
          claim_id: c_woDC-_zSlu8XPN_oYvcZIA
          source_id: s_BOZr30MEdicukDUKWIXkrK
          stance: supports
          locator: CBDB：兄弟 王一乾（205929）之父／母 王如瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王一凱 与 王一乾 为同胞（CBDB 记「弟」），王一乾 之父／母即 王一凱 之父／母。
          source:
            id: s_BOZr30MEdicukDUKWIXkrK
            source_type: api_record
            title: 中国历代人物传记资料库：王一凱（CBDB 210796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210796&o=json
            external_identifier: CBDB:210796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rQcsMdYUa5T1hJ35di8tcC
        status: active
        display_name: 王一凱
        merged_into_person_id: null
    - claim:
        id: c_l0J5WHSywm4zkJEp4K8ZkF
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tzn9UrPvs7x1RCyiDggv2V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vEsK50oYbO4m9yv9vedokN
          claim_id: c_l0J5WHSywm4zkJEp4K8ZkF
          source_id: s_c0jVtnW4r2FdBIwmQS2iTW
          stance: supports
          locator: CBDB：兄弟 王一乾（205929）之父／母 王如瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王一兌 与 王一乾 为同胞（CBDB 记「兄」），王一乾 之父／母即 王一兌 之父／母。
          source:
            id: s_c0jVtnW4r2FdBIwmQS2iTW
            source_type: api_record
            title: 中国历代人物传记资料库：王一兌（CBDB 210799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210799&o=json
            external_identifier: CBDB:210799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tzn9UrPvs7x1RCyiDggv2V
        status: active
        display_name: 王一兌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王如瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王如瓚，明人物。隆慶五年進士，籍贯泰和，曾任知府。（中国历代人物传记资料库 CBDB 210790） | accepted |
| name.primary | 王如瓚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DDFA2NLfrQKM4TnFh33EoF | 王一乾 | accepted |
| children | p_KXjEM8wae9qpLicqSanMCX | 王一惋 | accepted |
| children | p_NBdhUqNsqzJWXe6PGnmj5J | 王一能 | accepted |
| children | p_kCyHskJxKrjbUAQhdmCZ8b | 王一光 | accepted |
| children | p_rQcsMdYUa5T1hJ35di8tcC | 王一凱 | accepted |
| children | p_tzn9UrPvs7x1RCyiDggv2V | 王一兌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王如瓚（CBDB 210790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210790&o=json)
- [中国历代人物传记资料库：王一兌（CBDB 210799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210799&o=json)
- [中国历代人物传记资料库：王一光（CBDB 210798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210798&o=json)
- [中国历代人物传记资料库：王一凱（CBDB 210796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210796&o=json)
- [中国历代人物传记资料库：王一能（CBDB 210797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210797&o=json)
- [中国历代人物传记资料库：王一惋（CBDB 210800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210800&o=json)
