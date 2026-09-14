---
schema: wang-person/v1
id: p_oKkzy3873cWFyj79szDYmN
status: active
merged_into: null
display_name: 王廉
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yFYBcg9YrY4n4Acr6afnM8
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NPdcHWRxi2XHh5MR73aQy4
          claim_id: c_yFYBcg9YrY4n4Acr6afnM8
          source_id: s_t6T5gjq9QBMp5d8GaptmV5
          stance: supports
          locator: CBDB:283882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283882）
          source: &a1
            id: s_t6T5gjq9QBMp5d8GaptmV5
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 283882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283882&o=json
            external_identifier: CBDB:283882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mfX5HP23NJTN6RNZ1U6kGY
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉，明人物。正德十六年進士，籍贯鄱陽，曾任指揮僉事。（中国历代人物传记资料库 CBDB 283882）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X3UkVm0twLHwvI5Cj6td2i
          claim_id: c_mfX5HP23NJTN6RNZ1U6kGY
          source_id: s_t6T5gjq9QBMp5d8GaptmV5
          stance: supports
          locator: CBDB:283882
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_r0Wd1xNXhNmCprr1w9DZw_
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vDtBh1kto7gV1VoE7a-HLE
          claim_id: c_r0Wd1xNXhNmCprr1w9DZw_
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yeDS7MthSZ69rfW6mZGg3S
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 202119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202119&o=json
            external_identifier: CBDB:202119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AfLhoGsLbskzeER6Tw4Mw8
        status: active
        display_name: 王道
        merged_into_person_id: null
    - claim:
        id: c_0G1eCtQQGMxCg3dP80FSOJ
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Af4LSfN48z84SXXU6eroG5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7EKvL7M51CJ5iVwNht92fm
          claim_id: c_0G1eCtQQGMxCg3dP80FSOJ
          source_id: s_ItiJGIYDQB4nA1MRDYwdrf
          stance: supports
          locator: CBDB：兄弟 王道（202119）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王迎 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王迎 之父／母。
          source:
            id: s_ItiJGIYDQB4nA1MRDYwdrf
            source_type: api_record
            title: 中国历代人物传记资料库：王迎（CBDB 283890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283890&o=json
            external_identifier: CBDB:283890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Af4LSfN48z84SXXU6eroG5
        status: active
        display_name: 王迎
        merged_into_person_id: null
    - claim:
        id: c_8sfMCMypL1Fjw72D2Dc8i1
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KFGGAQiXKLZ1How6GMLtHc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ipma9h2T-iKFnZdGVnOj2H
          claim_id: c_8sfMCMypL1Fjw72D2Dc8i1
          source_id: s_qsLVOt2BpVN6qyJetL34zd
          stance: supports
          locator: CBDB：兄弟 王道（202119）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王進 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王進 之父／母。
          source:
            id: s_qsLVOt2BpVN6qyJetL34zd
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 283887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283887&o=json
            external_identifier: CBDB:283887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KFGGAQiXKLZ1How6GMLtHc
        status: active
        display_name: 王進
        merged_into_person_id: null
    - claim:
        id: c_9NQigTeGAFVH-eyRa_BwjE
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QYaDmcFu9VPJMNzFyiC5GV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jd-lQNd3cAIfDmU_O8_HYh
          claim_id: c_9NQigTeGAFVH-eyRa_BwjE
          source_id: s_J2zwhFumShXhDeuKj-SW1L
          stance: supports
          locator: CBDB：兄弟 王道（202119）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王遂 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王遂 之父／母。
          source:
            id: s_J2zwhFumShXhDeuKj-SW1L
            source_type: api_record
            title: 中国历代人物传记资料库：王遂（CBDB 283891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283891&o=json
            external_identifier: CBDB:283891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QYaDmcFu9VPJMNzFyiC5GV
        status: active
        display_name: 王遂
        merged_into_person_id: null
    - claim:
        id: c_sbyM64tnbrtyoL4aScpdeV
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RRio7dJ4QAndzT95pkasoj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vaqxKjJXM18800OqNITMBz
          claim_id: c_sbyM64tnbrtyoL4aScpdeV
          source_id: s_BEjXoZfMqcTO7zCBVR9_pP
          stance: supports
          locator: CBDB：兄弟 王道（202119）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王選 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王選 之父／母。
          source:
            id: s_BEjXoZfMqcTO7zCBVR9_pP
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 283889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283889&o=json
            external_identifier: CBDB:283889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RRio7dJ4QAndzT95pkasoj
        status: active
        display_name: 王選
        merged_into_person_id: null
    - claim:
        id: c_V2-7p3wP99kynXXp3daNWo
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yiCBExH3DTLm2arPBKGYQA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FZKRTOhI6GugvEzNBUTUgY
          claim_id: c_V2-7p3wP99kynXXp3daNWo
          source_id: s_IUtuJbHdy3F9HeqMg_6aFu
          stance: supports
          locator: CBDB：兄弟 王道（202119）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王遜 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王遜 之父／母。
          source:
            id: s_IUtuJbHdy3F9HeqMg_6aFu
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 283886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283886&o=json
            external_identifier: CBDB:283886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yiCBExH3DTLm2arPBKGYQA
        status: active
        display_name: 王遜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廉 | accepted |
| bio.summary | 王廉，明人物。正德十六年進士，籍贯鄱陽，曾任指揮僉事。（中国历代人物传记资料库 CBDB 283882） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AfLhoGsLbskzeER6Tw4Mw8 | 王道 | accepted |
| children | p_Af4LSfN48z84SXXU6eroG5 | 王迎 | accepted |
| children | p_KFGGAQiXKLZ1How6GMLtHc | 王進 | accepted |
| children | p_QYaDmcFu9VPJMNzFyiC5GV | 王遂 | accepted |
| children | p_RRio7dJ4QAndzT95pkasoj | 王選 | accepted |
| children | p_yiCBExH3DTLm2arPBKGYQA | 王遜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 202119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202119&o=json)
- [中国历代人物传记资料库：王進（CBDB 283887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283887&o=json)
- [中国历代人物传记资料库：王廉（CBDB 283882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283882&o=json)
- [中国历代人物传记资料库：王遂（CBDB 283891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283891&o=json)
- [中国历代人物传记资料库：王選（CBDB 283889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283889&o=json)
- [中国历代人物传记资料库：王遜（CBDB 283886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283886&o=json)
- [中国历代人物传记资料库：王迎（CBDB 283890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283890&o=json)
