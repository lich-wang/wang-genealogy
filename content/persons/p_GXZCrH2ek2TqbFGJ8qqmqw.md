---
schema: wang-person/v1
id: p_GXZCrH2ek2TqbFGJ8qqmqw
status: active
merged_into: null
display_name: 王宇
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AzAHJBrQ7G9FwUyK6sa8SY
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q2MydjMTRcHd5arze11J22
          claim_id: c_AzAHJBrQ7G9FwUyK6sa8SY
          source_id: s_Q26QGsE1tDWf8c5tgB1Cix
          stance: supports
          locator: CBDB:204187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204187）
          source: &a1
            id: s_Q26QGsE1tDWf8c5tgB1Cix
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 204187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204187&o=json
            external_identifier: CBDB:204187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_at3QfA8QBXM2Dmz8hx2Kkw
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A2VG13n3HmdYit16DEG2EL
          claim_id: c_at3QfA8QBXM2Dmz8hx2Kkw
          source_id: s_Q26QGsE1tDWf8c5tgB1Cix
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
        id: c_6jYs97JCFkzxNLxKfoP8BQ
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇（生于1518年），明人物。明清進士進士，籍贯崑山，入仕進士。（中国历代人物传记资料库 CBDB 204187）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j9i0odH4v1-jXGm42GSG60
          claim_id: c_6jYs97JCFkzxNLxKfoP8BQ
          source_id: s_Q26QGsE1tDWf8c5tgB1Cix
          stance: supports
          locator: CBDB:204187
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CqWcd8SXHLdBe0lYgTwl4j
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bhp9xkE0dHWgxO8xi1ycrf
          claim_id: c_CqWcd8SXHLdBe0lYgTwl4j
          source_id: s_JV9KsRurtZYg171fJ7Lg7T
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JV9KsRurtZYg171fJ7Lg7T
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 315703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315703&o=json
            external_identifier: CBDB:315703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QuF4DaKK4SqaM66dLXVH8d
        status: active
        display_name: 王億
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_KQ5q122cNnnE2ew06px7Nj
        subject_person_id: p_BhzbpVnWNojWd9QYAz11EY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0AeLM9fPJEyy5oKLI1L5FP
          claim_id: c_KQ5q122cNnnE2ew06px7Nj
          source_id: s_4TXVvFYqGUTP297xcjE1Su
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4TXVvFYqGUTP297xcjE1Su
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 315701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315701&o=json
            external_identifier: CBDB:315701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BhzbpVnWNojWd9QYAz11EY
        status: active
        display_name: 王寶
        merged_into_person_id: null
    - claim:
        id: c_ICVSynne5m_Rm-udNhmOHQ
        subject_person_id: p_j2pBDD21Qom1eWLd3CawJw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q4T2TrI0FWcWGxJUsrUdXw
          claim_id: c_ICVSynne5m_Rm-udNhmOHQ
          source_id: s_Q4dJ9vkeXEpGN7T2oG3MuY
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第七十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q4dJ9vkeXEpGN7T2oG3MuY
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 315702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315702&o=json
            external_identifier: CBDB:315702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j2pBDD21Qom1eWLd3CawJw
        status: active
        display_name: 王慶
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_6tpq5jR3vOA4u9XDGXM1qf
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NzTWth6hN1Hy5PztPD5mHR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Aoe_ca0DFBVJdpoPI5v9R
          claim_id: c_6tpq5jR3vOA4u9XDGXM1qf
          source_id: s_x-fCNAPC-IokYSFlmdZJAt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204187 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x-fCNAPC-IokYSFlmdZJAt
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 315710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315710&o=json
            external_identifier: CBDB:315710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NzTWth6hN1Hy5PztPD5mHR
        status: active
        display_name: 王宜
        merged_into_person_id: null
    - claim:
        id: c_BAfjUibw-tAm_9MbjM-SSg
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PvpHV3E9m1N4g6FN9UETEJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sMv1gWYNJUoWFntoaLOqQT
          claim_id: c_BAfjUibw-tAm_9MbjM-SSg
          source_id: s_X8bDBxsH9wv7-LrIiOmhPe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204187 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X8bDBxsH9wv7-LrIiOmhPe
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 315713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315713&o=json
            external_identifier: CBDB:315713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PvpHV3E9m1N4g6FN9UETEJ
        status: active
        display_name: 王憲
        merged_into_person_id: null
    - claim:
        id: c_mWU0xC4vnTROQPEemRXWNG
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W9Qbo7BwfNZtyVoLMYF75Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8eT7pVePTPqLKqAHnoTvC
          claim_id: c_mWU0xC4vnTROQPEemRXWNG
          source_id: s_sRLnsisf7Dm-3_9WyfIFrK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204187 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sRLnsisf7Dm-3_9WyfIFrK
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 315711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315711&o=json
            external_identifier: CBDB:315711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W9Qbo7BwfNZtyVoLMYF75Z
        status: active
        display_name: 王完
        merged_into_person_id: null
    - claim:
        id: c_SGlrWWpWOL97KGPlsh4EJe
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZiAaipdiTs875XcQc52JHG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_znQScqxoKs-bKrMAwBzXLz
          claim_id: c_SGlrWWpWOL97KGPlsh4EJe
          source_id: s_yfYE-GBrE9fobQMpBzkHXB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204187 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yfYE-GBrE9fobQMpBzkHXB
            source_type: api_record
            title: 中国历代人物传记资料库：王宙（CBDB 315712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315712&o=json
            external_identifier: CBDB:315712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZiAaipdiTs875XcQc52JHG
        status: active
        display_name: 王宙
        merged_into_person_id: null
    - claim:
        id: c_4eQPhNkxpChT6AF8gSaYwS
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Zq4mJMQVLGpnDc4Hf8ri4Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U_IzXsB55evH4WadCfzsJ7
          claim_id: c_4eQPhNkxpChT6AF8gSaYwS
          source_id: s_RJtj9cW5dx8mmfDwGl2s82
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204187 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RJtj9cW5dx8mmfDwGl2s82
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 315707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315707&o=json
            external_identifier: CBDB:315707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zq4mJMQVLGpnDc4Hf8ri4Y
        status: active
        display_name: 王璇
        merged_into_person_id: null
    - claim:
        id: c_bzSP1aclQh-gcMzwy2B13n
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kJTUrBuuGqeVrwNyV8UXuU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c1RcR5EhxxVF77UhpNPbjR
          claim_id: c_bzSP1aclQh-gcMzwy2B13n
          source_id: s_94Le6U1_4y16HJQUvtJe3D
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204187 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_94Le6U1_4y16HJQUvtJe3D
            source_type: api_record
            title: 中国历代人物传记资料库：王琨（CBDB 315708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315708&o=json
            external_identifier: CBDB:315708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kJTUrBuuGqeVrwNyV8UXuU
        status: active
        display_name: 王琨
        merged_into_person_id: null
    - claim:
        id: c_e70ZHNrtl_6Gv1F_CC-Yup
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_u4WJzDqd2NQMRBGF8jd3Vq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rlbspe8uIGPPxX4ahih4oL
          claim_id: c_e70ZHNrtl_6Gv1F_CC-Yup
          source_id: s_vS6cvdAFxpsM-JL1bEuN9e
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204187 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vS6cvdAFxpsM-JL1bEuN9e
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 315709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315709&o=json
            external_identifier: CBDB:315709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u4WJzDqd2NQMRBGF8jd3Vq
        status: active
        display_name: 王卿
        merged_into_person_id: null
---

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宇 | accepted |
| birth.date | 1518年 | accepted |
| bio.summary | 王宇（生于1518年），明人物。明清進士進士，籍贯崑山，入仕進士。（中国历代人物传记资料库 CBDB 204187） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QuF4DaKK4SqaM66dLXVH8d | 王億 | accepted |
| ancestors | p_BhzbpVnWNojWd9QYAz11EY | 王寶 | accepted |
| ancestors | p_j2pBDD21Qom1eWLd3CawJw | 王慶 | accepted |
| other | p_NzTWth6hN1Hy5PztPD5mHR | 王宜 | accepted |
| other | p_PvpHV3E9m1N4g6FN9UETEJ | 王憲 | accepted |
| other | p_W9Qbo7BwfNZtyVoLMYF75Z | 王完 | accepted |
| other | p_ZiAaipdiTs875XcQc52JHG | 王宙 | accepted |
| other | p_Zq4mJMQVLGpnDc4Hf8ri4Y | 王璇 | accepted |
| other | p_kJTUrBuuGqeVrwNyV8UXuU | 王琨 | accepted |
| other | p_u4WJzDqd2NQMRBGF8jd3Vq | 王卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 315701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315701&o=json)
- [中国历代人物传记资料库：王琨（CBDB 315708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315708&o=json)
- [中国历代人物传记资料库：王卿（CBDB 315709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315709&o=json)
- [中国历代人物传记资料库：王慶（CBDB 315702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315702&o=json)
- [中国历代人物传记资料库：王完（CBDB 315711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315711&o=json)
- [中国历代人物传记资料库：王憲（CBDB 315713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315713&o=json)
- [中国历代人物传记资料库：王璇（CBDB 315707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315707&o=json)
- [中国历代人物传记资料库：王宜（CBDB 315710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315710&o=json)
- [中国历代人物传记资料库：王億（CBDB 315703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315703&o=json)
- [中国历代人物传记资料库：王宇（CBDB 204187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204187&o=json)
- [中国历代人物传记资料库：王宙（CBDB 315712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315712&o=json)
