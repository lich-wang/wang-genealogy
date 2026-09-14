---
schema: wang-person/v1
id: p_XU2HBZFhmiBGAyoKHD4B6w
status: active
merged_into: null
display_name: 王宬
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tAfyK5JcrNEhocSrd8DhTB
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EenfyuhPfyZgAwqMRbZ3wS
          claim_id: c_tAfyK5JcrNEhocSrd8DhTB
          source_id: s_fAninjy79gxLGtFFqcmEGK
          stance: supports
          locator: CBDB:199813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199813）
          source: &a1
            id: s_fAninjy79gxLGtFFqcmEGK
            source_type: api_record
            title: 中国历代人物传记资料库：王宬（CBDB 199813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199813&o=json
            external_identifier: CBDB:199813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sZfLfWZvpa5p4ANKQP7paz
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1440年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FMQdGgBAWGVVPVs2JvUifL
          claim_id: c_sZfLfWZvpa5p4ANKQP7paz
          source_id: s_fAninjy79gxLGtFFqcmEGK
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
        id: c_vUP1EV2FbfQExhc4EAN26k
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宬（生于1440年），明人物。明清進士進士，籍贯海陽，入仕進士。（中国历代人物传记资料库 CBDB 199813）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gfLmxyaUe_LSL4URPSnwBx
          claim_id: c_vUP1EV2FbfQExhc4EAN26k
          source_id: s_fAninjy79gxLGtFFqcmEGK
          stance: supports
          locator: CBDB:199813
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7NtKxrAY7J3bERyYOR0dko
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3psoZzj_r7ZVfxtC19Onux
          claim_id: c_7NtKxrAY7J3bERyYOR0dko
          source_id: s_Azh3eCr8gLTBDEiAV2xWej
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Azh3eCr8gLTBDEiAV2xWej
            source_type: api_record
            title: 中国历代人物传记资料库：王孟瓛（CBDB 250011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250011&o=json
            external_identifier: CBDB:250011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oYefTot2EGCYoXmKyUe9cv
        status: active
        display_name: 王孟瓛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_tL7zqlVoQetE8PHPoy2Ul6
        subject_person_id: p_1jz2eECTsX1sen39e2jJQD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__73-P51aaBgQcZVLw0lWCw
          claim_id: c_tL7zqlVoQetE8PHPoy2Ul6
          source_id: s_tG5N4JPEgCoqWkSLRU45eR
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tG5N4JPEgCoqWkSLRU45eR
            source_type: api_record
            title: 中国历代人物传记资料库：王子端（CBDB 250008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250008&o=json
            external_identifier: CBDB:250008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1jz2eECTsX1sen39e2jJQD
        status: active
        display_name: 王子端
        merged_into_person_id: null
    - claim:
        id: c_8N5V5YCWcSPOaJ74a-7dS0
        subject_person_id: p_fi4ETRtQqaJdFv91rEKU32
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jh8HPuInNhD4GCxM6A68wZ
          claim_id: c_8N5V5YCWcSPOaJ74a-7dS0
          source_id: s_BKwHMzKgz5Jwd1yocFEfHa
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BKwHMzKgz5Jwd1yocFEfHa
            source_type: api_record
            title: 中国历代人物传记资料库：王永紹（CBDB 250010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250010&o=json
            external_identifier: CBDB:250010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fi4ETRtQqaJdFv91rEKU32
        status: active
        display_name: 王永紹
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_PEOQLma2oUt28LCnf4YQ9z
        subject_person_id: p_6eaAjrU99rp44xUhiLPCEu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TiiWa7nNq6d5Ny9D9UHeAN
          claim_id: c_PEOQLma2oUt28LCnf4YQ9z
          source_id: s_TOBlDpsM7OvyVzGZPkBmHc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199813 王宬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TOBlDpsM7OvyVzGZPkBmHc
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 250019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250019&o=json
            external_identifier: CBDB:250019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6eaAjrU99rp44xUhiLPCEu
        status: active
        display_name: 王寬
        merged_into_person_id: null
    - claim:
        id: c_uJeX4sks2Hp_yF17uT1Q38
        subject_person_id: p_7oterUKC5ZN7v4GKb56Bxw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rtM_LZrKeqaUl9sBrnTPHI
          claim_id: c_uJeX4sks2Hp_yF17uT1Q38
          source_id: s_WbxjHDVXPL9tlhLYVGe98o
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199813 王宬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WbxjHDVXPL9tlhLYVGe98o
            source_type: api_record
            title: 中国历代人物传记资料库：王容（CBDB 250018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250018&o=json
            external_identifier: CBDB:250018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7oterUKC5ZN7v4GKb56Bxw
        status: active
        display_name: 王容
        merged_into_person_id: null
    - claim:
        id: c_xZpIMtKRJ9buwLJClFidvm
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aqWAAzG2m2Rx2hVZxZL27f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TPDoZxAarAMadIE_WQqV3j
          claim_id: c_xZpIMtKRJ9buwLJClFidvm
          source_id: s_6MAO68uHXumgYLc-Oq_S0j
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199813 王宬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6MAO68uHXumgYLc-Oq_S0j
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 250017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250017&o=json
            external_identifier: CBDB:250017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aqWAAzG2m2Rx2hVZxZL27f
        status: active
        display_name: 王寅
        merged_into_person_id: null
    - claim:
        id: c_xBNUdSQiLksYgt_SwEVhlK
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bRBtMQ8M92GL2GKWErhKgS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IYKCq5sfmJ-5aQDl_iQgSK
          claim_id: c_xBNUdSQiLksYgt_SwEVhlK
          source_id: s_UGSvtAaTPP-38_IewPjvP7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199813 王宬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UGSvtAaTPP-38_IewPjvP7
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 250014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250014&o=json
            external_identifier: CBDB:250014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bRBtMQ8M92GL2GKWErhKgS
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_qZ1svvkLHE3WQfwD3B1C-W
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fR5v5jHNNZVs5BT6RTLRqd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z2WNntYu6pcbbw9kRP0Tji
          claim_id: c_qZ1svvkLHE3WQfwD3B1C-W
          source_id: s_qy1_zxa85qyEmOgGZL53Zh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199813 王宬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qy1_zxa85qyEmOgGZL53Zh
            source_type: api_record
            title: 中国历代人物传记资料库：王宴（CBDB 250016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250016&o=json
            external_identifier: CBDB:250016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fR5v5jHNNZVs5BT6RTLRqd
        status: active
        display_name: 王宴
        merged_into_person_id: null
    - claim:
        id: c_p0CqNxEW4ZuTcVMXlnNsmm
        subject_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ubkyEtCfjKrR1ZZhc4kZet
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AiFqhMwzM6o1OfP1RWiBdN
          claim_id: c_p0CqNxEW4ZuTcVMXlnNsmm
          source_id: s__sSgwIeZdEKA1KHFRpj-JE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199813 王宬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__sSgwIeZdEKA1KHFRpj-JE
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 250015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250015&o=json
            external_identifier: CBDB:250015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ubkyEtCfjKrR1ZZhc4kZet
        status: active
        display_name: 王實
        merged_into_person_id: null
---

# 王宬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宬 | accepted |
| birth.date | 1440年 | accepted |
| bio.summary | 王宬（生于1440年），明人物。明清進士進士，籍贯海陽，入仕進士。（中国历代人物传记资料库 CBDB 199813） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oYefTot2EGCYoXmKyUe9cv | 王孟瓛 | accepted |
| ancestors | p_1jz2eECTsX1sen39e2jJQD | 王子端 | accepted |
| ancestors | p_fi4ETRtQqaJdFv91rEKU32 | 王永紹 | accepted |
| other | p_6eaAjrU99rp44xUhiLPCEu | 王寬 | accepted |
| other | p_7oterUKC5ZN7v4GKb56Bxw | 王容 | accepted |
| other | p_aqWAAzG2m2Rx2hVZxZL27f | 王寅 | accepted |
| other | p_bRBtMQ8M92GL2GKWErhKgS | 王賓 | accepted |
| other | p_fR5v5jHNNZVs5BT6RTLRqd | 王宴 | accepted |
| other | p_ubkyEtCfjKrR1ZZhc4kZet | 王實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 250014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250014&o=json)
- [中国历代人物传记资料库：王宬（CBDB 199813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199813&o=json)
- [中国历代人物传记资料库：王寬（CBDB 250019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250019&o=json)
- [中国历代人物传记资料库：王孟瓛（CBDB 250011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250011&o=json)
- [中国历代人物传记资料库：王容（CBDB 250018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250018&o=json)
- [中国历代人物传记资料库：王實（CBDB 250015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250015&o=json)
- [中国历代人物传记资料库：王宴（CBDB 250016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250016&o=json)
- [中国历代人物传记资料库：王寅（CBDB 250017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250017&o=json)
- [中国历代人物传记资料库：王永紹（CBDB 250010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250010&o=json)
- [中国历代人物传记资料库：王子端（CBDB 250008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250008&o=json)
