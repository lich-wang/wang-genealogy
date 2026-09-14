---
schema: wang-person/v1
id: p_qCF2nAdW3AwQM2sNjTW55F
status: active
merged_into: null
display_name: 王獻圖
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eTjMnbS7EgF6K38sYRA5X9
        subject_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻圖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ACD1PturjjDGRAP6uNqYSx
          claim_id: c_eTjMnbS7EgF6K38sYRA5X9
          source_id: s_oxY7beP4DEJc8nwLt4U479
          stance: supports
          locator: CBDB:203927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203927）
          source: &a1
            id: s_oxY7beP4DEJc8nwLt4U479
            source_type: api_record
            title: 中国历代人物传记资料库：王獻圖（CBDB 203927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203927&o=json
            external_identifier: CBDB:203927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.808Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K3BsfCXBu536pczzKaEB2F
        subject_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1529年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_npcuYbPjSRJim9kHEPzXxp
          claim_id: c_K3BsfCXBu536pczzKaEB2F
          source_id: s_oxY7beP4DEJc8nwLt4U479
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
        id: c_NgC28nkKEPKVFCfFVHVyAc
        subject_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻圖（生于1529年），明人物。明清進士進士，籍贯寧陵，入仕進士。（中国历代人物传记资料库 CBDB 203927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nlvwANfcApqOW3r9TNbfSz
          claim_id: c_NgC28nkKEPKVFCfFVHVyAc
          source_id: s_oxY7beP4DEJc8nwLt4U479
          stance: supports
          locator: CBDB:203927
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_gGjZBHoDDbj9pFHekYZYqw
        status: active
        display_name: 王灌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0v4AfKJng9zSukmMRSCcAC
        subject_person_id: p_9HMtTjvmoGeT3dPyaMfM32
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mA8grMIShhog6iF2ViMKhN
          claim_id: c_0v4AfKJng9zSukmMRSCcAC
          source_id: s_LLQRGRGiNou9DsDTwjzxw2
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LLQRGRGiNou9DsDTwjzxw2
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 312060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312060&o=json
            external_identifier: CBDB:312060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9HMtTjvmoGeT3dPyaMfM32
        status: active
        display_name: 王鑰
        merged_into_person_id: null
    - claim:
        id: c_gcBf36JDqbD5xQARb535S3
        subject_person_id: p_zCUW578u3AU8q1fSG3rKQE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H3a717g-6q2xvR7rVBrnDW
          claim_id: c_gcBf36JDqbD5xQARb535S3
          source_id: s_82GoUJz494a1CW8RcbyKfi
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_82GoUJz494a1CW8RcbyKfi
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 312059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312059&o=json
            external_identifier: CBDB:312059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zCUW578u3AU8q1fSG3rKQE
        status: active
        display_name: 王義
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_UCVzTAov5cK2tZClpmDe98
        subject_person_id: p_DTH2rCsEKqTDBH8mjeGqkt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3nSzgAU3OWm-lYhEdfl3e7
          claim_id: c_UCVzTAov5cK2tZClpmDe98
          source_id: s_XYSdrtUWPcwlMbC2DnZhFR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203927 王獻圖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_kyzUTkj8dGRFGIQqpdLI9u
        subject_person_id: p_PiXeb8yvLQhYVsFyyNWk3N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UclxswhD86fhHad-yzUPk5
          claim_id: c_kyzUTkj8dGRFGIQqpdLI9u
          source_id: s_S30K0VoSPed0jxv7uoWm8g
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203927 王獻圖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Slf-d9I_uqc_rOUfxtr6Vf
        subject_person_id: p_Y1G2amKwhkCiB7APaYvbdR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KPPHKOBtT-5f36Oz64AD7D
          claim_id: c_Slf-d9I_uqc_rOUfxtr6Vf
          source_id: s_UeS0mNIdRd4s1VxhPg2lJG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203927 王獻圖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_S7B_JZr6IddWfrgppJO6W5
        subject_person_id: p_q3f1YXuX9xs22ndzs91ctb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n4JKKmVorugp_XQD1fpGER
          claim_id: c_S7B_JZr6IddWfrgppJO6W5
          source_id: s_P2aWJFq4qNMdKGLN3VKYK2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203927 王獻圖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_ykLygnR-qtZE6C10DLCdCI
        subject_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wPBmvnECQT1GB1CU6Jp4p8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EtAPBK2pbp7FiafvavmPia
          claim_id: c_ykLygnR-qtZE6C10DLCdCI
          source_id: s_6kfWSfb0K9ev4HjigBXIZ6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203927 王獻圖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_IhU0NDBWa2laup2wQ1DUQu
        subject_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wgkQ8PZsqBwVA1BD666D3u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MD4JWizd8fvoBm4govUI2k
          claim_id: c_IhU0NDBWa2laup2wQ1DUQu
          source_id: s_dwpjTQlu3Xsm8mJDML8YFJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203927 王獻圖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王獻圖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻圖 | accepted |
| birth.date | 1529年 | accepted |
| bio.summary | 王獻圖（生于1529年），明人物。明清進士進士，籍贯寧陵，入仕進士。（中国历代人物传记资料库 CBDB 203927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGjZBHoDDbj9pFHekYZYqw | 王灌 | accepted |
| ancestors | p_9HMtTjvmoGeT3dPyaMfM32 | 王鑰 | accepted |
| ancestors | p_zCUW578u3AU8q1fSG3rKQE | 王義 | accepted |
| other | p_DTH2rCsEKqTDBH8mjeGqkt | 王獻書 | accepted |
| other | p_PiXeb8yvLQhYVsFyyNWk3N | 王獻言 | accepted |
| other | p_Y1G2amKwhkCiB7APaYvbdR | 王獻詩 | accepted |
| other | p_q3f1YXuX9xs22ndzs91ctb | 王獻奇 | accepted |
| other | p_wPBmvnECQT1GB1CU6Jp4p8 | 王獻文 | accepted |
| other | p_wgkQ8PZsqBwVA1BD666D3u | 王獻策 | accepted |

## 外部来源

- [中国历代人物传记资料库：王灌（CBDB 312061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312061&o=json)
- [中国历代人物传记资料库：王獻策（CBDB 312067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312067&o=json)
- [中国历代人物传记资料库：王獻奇（CBDB 312066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312066&o=json)
- [中国历代人物传记资料库：王獻詩（CBDB 312068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312068&o=json)
- [中国历代人物传记资料库：王獻書（CBDB 312065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312065&o=json)
- [中国历代人物传记资料库：王獻圖（CBDB 203927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203927&o=json)
- [中国历代人物传记资料库：王獻文（CBDB 312069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312069&o=json)
- [中国历代人物传记资料库：王獻言（CBDB 312070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312070&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 312060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312060&o=json)
- [中国历代人物传记资料库：王義（CBDB 312059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312059&o=json)
