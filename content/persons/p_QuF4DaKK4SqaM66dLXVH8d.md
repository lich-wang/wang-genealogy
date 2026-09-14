---
schema: wang-person/v1
id: p_QuF4DaKK4SqaM66dLXVH8d
status: active
merged_into: null
display_name: 王億
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_soHLY8maDJ942gRSNcbKT4
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xpsgw4DvGQ3BppLEC2kWAh
          claim_id: c_soHLY8maDJ942gRSNcbKT4
          source_id: s_JV9KsRurtZYg171fJ7Lg7T
          stance: supports
          locator: CBDB:315703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315703）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4YLX2fUfB6aXgLdZb4MC9h
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZwOPkbz7YQ7MDN3P0knxsl
          claim_id: c_4YLX2fUfB6aXgLdZb4MC9h
          source_id: s_JV9KsRurtZYg171fJ7Lg7T
          stance: supports
          locator: CBDB:315703
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_GXZCrH2ek2TqbFGJ8qqmqw
        status: active
        display_name: 王宇
        merged_into_person_id: null
    - claim:
        id: c_mFP4Rxe_9R5KNUh6IK_dg1
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NzTWth6hN1Hy5PztPD5mHR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R3kwZWkCbErrcdC5u9DOrt
          claim_id: c_mFP4Rxe_9R5KNUh6IK_dg1
          source_id: s_x-fCNAPC-IokYSFlmdZJAt
          stance: supports
          locator: CBDB：兄弟 王宇（204187）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王宜 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王宜 之父／母。
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
        id: c_rgyNoSZy-ym4lcD9gwSv6C
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PvpHV3E9m1N4g6FN9UETEJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B9Rtic-VjjQKAcYJlvUB93
          claim_id: c_rgyNoSZy-ym4lcD9gwSv6C
          source_id: s_X8bDBxsH9wv7-LrIiOmhPe
          stance: supports
          locator: CBDB：兄弟 王宇（204187）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲 与 王宇 为同胞（CBDB 记「兄」），王宇 之父／母即 王憲 之父／母。
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
        id: c_emakTRGXvhYWgAJQz5mnjH
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W9Qbo7BwfNZtyVoLMYF75Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aunR_w9IiyiZbOIOGDgXZJ
          claim_id: c_emakTRGXvhYWgAJQz5mnjH
          source_id: s_sRLnsisf7Dm-3_9WyfIFrK
          stance: supports
          locator: CBDB：兄弟 王宇（204187）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王完 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王完 之父／母。
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
        id: c_eaSxb2N_RmjtFxKQmgy_mG
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZiAaipdiTs875XcQc52JHG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MG2HTevCMO5WFHPktoOnLQ
          claim_id: c_eaSxb2N_RmjtFxKQmgy_mG
          source_id: s_yfYE-GBrE9fobQMpBzkHXB
          stance: supports
          locator: CBDB：兄弟 王宇（204187）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王宙 与 王宇 为同胞（CBDB 记「兄」），王宇 之父／母即 王宙 之父／母。
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
        id: c_9ECGnBqGfCQSAFqj2FbbWj
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zq4mJMQVLGpnDc4Hf8ri4Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8a2vmv2O1Tz_GDh6orCU8i
          claim_id: c_9ECGnBqGfCQSAFqj2FbbWj
          source_id: s_RJtj9cW5dx8mmfDwGl2s82
          stance: supports
          locator: CBDB：兄弟 王宇（204187）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王璇 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王璇 之父／母。
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
        id: c_LIl1Rk4f880YqQdbl9ych7
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kJTUrBuuGqeVrwNyV8UXuU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dos_4fUsG8RyVUOKnZzmq5
          claim_id: c_LIl1Rk4f880YqQdbl9ych7
          source_id: s_94Le6U1_4y16HJQUvtJe3D
          stance: supports
          locator: CBDB：兄弟 王宇（204187）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王琨 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王琨 之父／母。
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
        id: c_97RhNm6OsOeC2ILIQYE9eg
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u4WJzDqd2NQMRBGF8jd3Vq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PpbeS9ETTRceoKZbTEjg0D
          claim_id: c_97RhNm6OsOeC2ILIQYE9eg
          source_id: s_vS6cvdAFxpsM-JL1bEuN9e
          stance: supports
          locator: CBDB：兄弟 王宇（204187）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王卿 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王卿 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王億

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王億 | accepted |
| bio.summary | 王億，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315703） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GXZCrH2ek2TqbFGJ8qqmqw | 王宇 | accepted |
| children | p_NzTWth6hN1Hy5PztPD5mHR | 王宜 | accepted |
| children | p_PvpHV3E9m1N4g6FN9UETEJ | 王憲 | accepted |
| children | p_W9Qbo7BwfNZtyVoLMYF75Z | 王完 | accepted |
| children | p_ZiAaipdiTs875XcQc52JHG | 王宙 | accepted |
| children | p_Zq4mJMQVLGpnDc4Hf8ri4Y | 王璇 | accepted |
| children | p_kJTUrBuuGqeVrwNyV8UXuU | 王琨 | accepted |
| children | p_u4WJzDqd2NQMRBGF8jd3Vq | 王卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琨（CBDB 315708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315708&o=json)
- [中国历代人物传记资料库：王卿（CBDB 315709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315709&o=json)
- [中国历代人物传记资料库：王完（CBDB 315711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315711&o=json)
- [中国历代人物传记资料库：王憲（CBDB 315713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315713&o=json)
- [中国历代人物传记资料库：王璇（CBDB 315707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315707&o=json)
- [中国历代人物传记资料库：王宜（CBDB 315710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315710&o=json)
- [中国历代人物传记资料库：王億（CBDB 315703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315703&o=json)
- [中国历代人物传记资料库：王宙（CBDB 315712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315712&o=json)
