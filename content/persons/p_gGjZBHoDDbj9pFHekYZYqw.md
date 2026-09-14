---
schema: wang-person/v1
id: p_gGjZBHoDDbj9pFHekYZYqw
status: active
merged_into: null
display_name: 王灌
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K2duFh5XA9zp9Hsm4o7Jry
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8oQXiMHK8BtBLt4Mhf8U3R
          claim_id: c_K2duFh5XA9zp9Hsm4o7Jry
          source_id: s_qkW3z3kvfwTuE7YPQuMZem
          stance: supports
          locator: CBDB:312061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312061）
          source: &a1
            id: s_qkW3z3kvfwTuE7YPQuMZem
            source_type: api_record
            title: 中国历代人物传记资料库：王灌（CBDB 312061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312061&o=json
            external_identifier: CBDB:312061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mN9C2VdUcV7r1xkzJQHzXT
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灌，明人物。嘉靖二十九年進士，籍贯寧陵。（中国历代人物传记资料库 CBDB 312061）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oerEsLYsrr_bAWyrv9BLqN
          claim_id: c_mN9C2VdUcV7r1xkzJQHzXT
          source_id: s_qkW3z3kvfwTuE7YPQuMZem
          stance: supports
          locator: CBDB:312061
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_u4i-zcB829ywiWwbG3I6aO
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k33HUxL9jqe8W_yibxsZAz
          claim_id: c_u4i-zcB829ywiWwbG3I6aO
          source_id: s_qkW3z3kvfwTuE7YPQuMZem
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qCF2nAdW3AwQM2sNjTW55F
        status: active
        display_name: 王獻圖
        merged_into_person_id: null
    - claim:
        id: c_tW0S3MC3w95CztnL7zFKXL
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DTH2rCsEKqTDBH8mjeGqkt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGKzElYQEttUTuB-fSOR7s
          claim_id: c_tW0S3MC3w95CztnL7zFKXL
          source_id: s_XYSdrtUWPcwlMbC2DnZhFR
          stance: supports
          locator: CBDB：兄弟 王獻圖（203927）之父／母 王灌
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻書 与 王獻圖 为同胞（CBDB 记「兄」），王獻圖 之父／母即 王獻書 之父／母。
          source:
            id: s_XYSdrtUWPcwlMbC2DnZhFR
            source_type: api_record
            title: 中国历代人物传记资料库：王獻書（CBDB 312065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312065&o=json
            external_identifier: CBDB:312065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DTH2rCsEKqTDBH8mjeGqkt
        status: active
        display_name: 王獻書
        merged_into_person_id: null
    - claim:
        id: c_pDpp7Hf4Da2D8Dh-lbZIuq
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PiXeb8yvLQhYVsFyyNWk3N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AytnTkvrIJL-_NF1HkOiCp
          claim_id: c_pDpp7Hf4Da2D8Dh-lbZIuq
          source_id: s_S30K0VoSPed0jxv7uoWm8g
          stance: supports
          locator: CBDB：兄弟 王獻圖（203927）之父／母 王灌
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻言 与 王獻圖 为同胞（CBDB 记「兄」），王獻圖 之父／母即 王獻言 之父／母。
          source:
            id: s_S30K0VoSPed0jxv7uoWm8g
            source_type: api_record
            title: 中国历代人物传记资料库：王獻言（CBDB 312070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312070&o=json
            external_identifier: CBDB:312070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PiXeb8yvLQhYVsFyyNWk3N
        status: active
        display_name: 王獻言
        merged_into_person_id: null
    - claim:
        id: c_VzALIjxYkS2t-nzjkxNMzl
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y1G2amKwhkCiB7APaYvbdR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_koQRhTmJHEj_tQdKGCKOub
          claim_id: c_VzALIjxYkS2t-nzjkxNMzl
          source_id: s_UeS0mNIdRd4s1VxhPg2lJG
          stance: supports
          locator: CBDB：兄弟 王獻圖（203927）之父／母 王灌
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻詩 与 王獻圖 为同胞（CBDB 记「兄」），王獻圖 之父／母即 王獻詩 之父／母。
          source:
            id: s_UeS0mNIdRd4s1VxhPg2lJG
            source_type: api_record
            title: 中国历代人物传记资料库：王獻詩（CBDB 312068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312068&o=json
            external_identifier: CBDB:312068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y1G2amKwhkCiB7APaYvbdR
        status: active
        display_name: 王獻詩
        merged_into_person_id: null
    - claim:
        id: c_ze7nQT9-G0EUQSpuMk0BWB
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q3f1YXuX9xs22ndzs91ctb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FafXJWbJhx5Vv-sfwckkbS
          claim_id: c_ze7nQT9-G0EUQSpuMk0BWB
          source_id: s_P2aWJFq4qNMdKGLN3VKYK2
          stance: supports
          locator: CBDB：兄弟 王獻圖（203927）之父／母 王灌
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻奇 与 王獻圖 为同胞（CBDB 记「兄」），王獻圖 之父／母即 王獻奇 之父／母。
          source:
            id: s_P2aWJFq4qNMdKGLN3VKYK2
            source_type: api_record
            title: 中国历代人物传记资料库：王獻奇（CBDB 312066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312066&o=json
            external_identifier: CBDB:312066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q3f1YXuX9xs22ndzs91ctb
        status: active
        display_name: 王獻奇
        merged_into_person_id: null
    - claim:
        id: c_3Ha4CxSb0GqtNwBaW7DH3v
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wPBmvnECQT1GB1CU6Jp4p8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KzqXBtXNBCum6cuhx131si
          claim_id: c_3Ha4CxSb0GqtNwBaW7DH3v
          source_id: s_6kfWSfb0K9ev4HjigBXIZ6
          stance: supports
          locator: CBDB：兄弟 王獻圖（203927）之父／母 王灌
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻文 与 王獻圖 为同胞（CBDB 记「兄」），王獻圖 之父／母即 王獻文 之父／母。
          source:
            id: s_6kfWSfb0K9ev4HjigBXIZ6
            source_type: api_record
            title: 中国历代人物传记资料库：王獻文（CBDB 312069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312069&o=json
            external_identifier: CBDB:312069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wPBmvnECQT1GB1CU6Jp4p8
        status: active
        display_name: 王獻文
        merged_into_person_id: null
    - claim:
        id: c_0T1VAcQ1Ip0XjzR-bOqf4u
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wgkQ8PZsqBwVA1BD666D3u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4SSFK6p-OL2QwM7F7PTANb
          claim_id: c_0T1VAcQ1Ip0XjzR-bOqf4u
          source_id: s_dwpjTQlu3Xsm8mJDML8YFJ
          stance: supports
          locator: CBDB：兄弟 王獻圖（203927）之父／母 王灌
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻策 与 王獻圖 为同胞（CBDB 记「兄」），王獻圖 之父／母即 王獻策 之父／母。
          source:
            id: s_dwpjTQlu3Xsm8mJDML8YFJ
            source_type: api_record
            title: 中国历代人物传记资料库：王獻策（CBDB 312067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312067&o=json
            external_identifier: CBDB:312067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wgkQ8PZsqBwVA1BD666D3u
        status: active
        display_name: 王獻策
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王灌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王灌 | accepted |
| bio.summary | 王灌，明人物。嘉靖二十九年進士，籍贯寧陵。（中国历代人物传记资料库 CBDB 312061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qCF2nAdW3AwQM2sNjTW55F | 王獻圖 | accepted |
| children | p_DTH2rCsEKqTDBH8mjeGqkt | 王獻書 | accepted |
| children | p_PiXeb8yvLQhYVsFyyNWk3N | 王獻言 | accepted |
| children | p_Y1G2amKwhkCiB7APaYvbdR | 王獻詩 | accepted |
| children | p_q3f1YXuX9xs22ndzs91ctb | 王獻奇 | accepted |
| children | p_wPBmvnECQT1GB1CU6Jp4p8 | 王獻文 | accepted |
| children | p_wgkQ8PZsqBwVA1BD666D3u | 王獻策 | accepted |

## 外部来源

- [中国历代人物传记资料库：王灌（CBDB 312061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312061&o=json)
- [中国历代人物传记资料库：王獻策（CBDB 312067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312067&o=json)
- [中国历代人物传记资料库：王獻奇（CBDB 312066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312066&o=json)
- [中国历代人物传记资料库：王獻詩（CBDB 312068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312068&o=json)
- [中国历代人物传记资料库：王獻書（CBDB 312065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312065&o=json)
- [中国历代人物传记资料库：王獻文（CBDB 312069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312069&o=json)
- [中国历代人物传记资料库：王獻言（CBDB 312070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312070&o=json)
