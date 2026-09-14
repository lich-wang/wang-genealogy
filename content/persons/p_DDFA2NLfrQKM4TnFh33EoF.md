---
schema: wang-person/v1
id: p_DDFA2NLfrQKM4TnFh33EoF
status: active
merged_into: null
display_name: 王一乾
cbdb_id: 205929
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_12DQBEjSgrdCBGCxanRBxt
        subject_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一乾（生于1542年），明人物。明清進士進士，籍贯泰和，入仕進士。（中国历代人物传记资料库 CBDB 205929）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wGfZ9NsUmHoKTkS8wJoFLN
          claim_id: c_12DQBEjSgrdCBGCxanRBxt
          source_id: s_FXMHA33WNt2oj9sTv7GkAu
          stance: supports
          locator: CBDB:205929
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FXMHA33WNt2oj9sTv7GkAu
            source_type: api_record
            title: 中国历代人物传记资料库：王一乾（CBDB 205929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205929&o=json
            external_identifier: CBDB:205929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8FPoHMc41E6EdrGE9qxfvd
        subject_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1542-01-01
            latest: 1542-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yp2d4ShbzvkMNMJxxai8iC
          claim_id: c_8FPoHMc41E6EdrGE9qxfvd
          source_id: s_FXMHA33WNt2oj9sTv7GkAu
          stance: supports
          locator: CBDB:205929
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1542
          source:
            id: s_FXMHA33WNt2oj9sTv7GkAu
            source_type: api_record
            title: 中国历代人物传记资料库：王一乾（CBDB 205929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205929&o=json
            external_identifier: CBDB:205929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G9yHYgTUbr8aLh1zat8VbH
        subject_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SL96Tr43SFXPurpT8fQ4MW
          claim_id: c_G9yHYgTUbr8aLh1zat8VbH
          source_id: s_FXMHA33WNt2oj9sTv7GkAu
          stance: supports
          locator: CBDB:205929
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1542
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_upp5kBekQ15jrZwKh79eE5
        status: active
        display_name: 王如瓚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_RSGU0WYeNJux-ealqCbN6k
        subject_person_id: p_7U5XNGmapbydHeyTDEZCwv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a6emQL1P9u1U_1Jfs5TSkR
          claim_id: c_RSGU0WYeNJux-ealqCbN6k
          source_id: s_2phq8ACrjVLUk2G6QLdpya
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2phq8ACrjVLUk2G6QLdpya
            source_type: api_record
            title: 中国历代人物传记资料库：王語（CBDB 210789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210789&o=json
            external_identifier: CBDB:210789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7U5XNGmapbydHeyTDEZCwv
        status: active
        display_name: 王語
        merged_into_person_id: null
    - claim:
        id: c_Oih1agKygzuwCcts4gcxoR
        subject_person_id: p_bX1ebsvviwPe9w4HiR1Lqa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fo03f07_EqQS5iEY_yn5ic
          claim_id: c_Oih1agKygzuwCcts4gcxoR
          source_id: s_S1P3jvSvxpPLus6qzFGe5t
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S1P3jvSvxpPLus6qzFGe5t
            source_type: api_record
            title: 中国历代人物传记资料库：王憼（CBDB 210788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210788&o=json
            external_identifier: CBDB:210788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_bX1ebsvviwPe9w4HiR1Lqa
        status: active
        display_name: 王憼
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_m1dQujMx8uo-s2juuElLC5
        subject_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KXjEM8wae9qpLicqSanMCX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rZPn6yXV10ObeIPoGjb55i
          claim_id: c_m1dQujMx8uo-s2juuElLC5
          source_id: s_YqKC2ORI0_DQ8-UvpGy_CJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205929 王一乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_fB3NRo6xpsYAnzs8gLJJ-P
        subject_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NBdhUqNsqzJWXe6PGnmj5J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WhDRIlFxJnbEqbq-5teXwZ
          claim_id: c_fB3NRo6xpsYAnzs8gLJJ-P
          source_id: s_x4--M_xs4RBiCt-6hG8Il3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205929 王一乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_LxITTQAJtqTlPCKRR-moCI
        subject_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kCyHskJxKrjbUAQhdmCZ8b
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-4y37ep9h-73UsnNPtnHih
          claim_id: c_LxITTQAJtqTlPCKRR-moCI
          source_id: s_cTpiYfrDsvbEzkbLHYf-Km
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205929 王一乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_DdnYNAGHxPV7NMJV1tquK7
        subject_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rQcsMdYUa5T1hJ35di8tcC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3UVXkbriFEaNkLlHlK9R6B
          claim_id: c_DdnYNAGHxPV7NMJV1tquK7
          source_id: s_BOZr30MEdicukDUKWIXkrK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205929 王一乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_uk7hxpatI82EIIm4j1lTUx
        subject_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tzn9UrPvs7x1RCyiDggv2V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nFYItXMfLKlxmOzerYJWvj
          claim_id: c_uk7hxpatI82EIIm4j1lTUx
          source_id: s_c0jVtnW4r2FdBIwmQS2iTW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205929 王一乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王一乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一乾（生于1542年），明人物。明清進士進士，籍贯泰和，入仕進士。（中国历代人物传记资料库 CBDB 205929） | accepted |
| birth.date | 1542年 | accepted |
| name.primary | 王一乾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_upp5kBekQ15jrZwKh79eE5 | 王如瓚 | accepted |
| ancestors | p_7U5XNGmapbydHeyTDEZCwv | 王語 | accepted |
| ancestors | p_bX1ebsvviwPe9w4HiR1Lqa | 王憼 | accepted |
| other | p_KXjEM8wae9qpLicqSanMCX | 王一惋 | accepted |
| other | p_NBdhUqNsqzJWXe6PGnmj5J | 王一能 | accepted |
| other | p_kCyHskJxKrjbUAQhdmCZ8b | 王一光 | accepted |
| other | p_rQcsMdYUa5T1hJ35di8tcC | 王一凱 | accepted |
| other | p_tzn9UrPvs7x1RCyiDggv2V | 王一兌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憼（CBDB 210788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210788&o=json)
- [中国历代人物传记资料库：王如瓚（CBDB 210790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210790&o=json)
- [中国历代人物传记资料库：王一兌（CBDB 210799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210799&o=json)
- [中国历代人物传记资料库：王一光（CBDB 210798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210798&o=json)
- [中国历代人物传记资料库：王一凱（CBDB 210796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210796&o=json)
- [中国历代人物传记资料库：王一能（CBDB 210797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210797&o=json)
- [中国历代人物传记资料库：王一乾（CBDB 205929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205929&o=json)
- [中国历代人物传记资料库：王一惋（CBDB 210800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210800&o=json)
- [中国历代人物传记资料库：王語（CBDB 210789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210789&o=json)
