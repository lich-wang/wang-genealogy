---
schema: wang-person/v1
id: p_oYefTot2EGCYoXmKyUe9cv
status: active
merged_into: null
display_name: 王孟瓛
cbdb_id: 250011
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uLkFkqm6kRH6oB6xDSX841
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟瓛，明人物。成化十一年進士，籍贯海陽，曾任陰陽訓術。（中国历代人物传记资料库 CBDB 250011）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Qyh7hTkoLlgcP2yRR0b23_
          claim_id: c_uLkFkqm6kRH6oB6xDSX841
          source_id: s_Azh3eCr8gLTBDEiAV2xWej
          stance: supports
          locator: CBDB:250011
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G8XP2koHHPLU7esok6TPcj
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟瓛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qd6tG6G6MLHY9qGcN2Eo2Q
          claim_id: c_G8XP2koHHPLU7esok6TPcj
          source_id: s_Azh3eCr8gLTBDEiAV2xWej
          stance: supports
          locator: CBDB:250011
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
        id: p_XU2HBZFhmiBGAyoKHD4B6w
        status: active
        display_name: 王宬
        merged_into_person_id: null
    - claim:
        id: c_6GBy0JmqbV5wBRqhMzhjRq
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6eaAjrU99rp44xUhiLPCEu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zV-j0uLZRfBcS56q967kwY
          claim_id: c_6GBy0JmqbV5wBRqhMzhjRq
          source_id: s_TOBlDpsM7OvyVzGZPkBmHc
          stance: supports
          locator: CBDB：兄弟 王宬（199813）之父／母 王孟瓛
          quotation: null
          interpretation_note: 由兄弟关系推断：王寬 与 王宬 为同胞（CBDB 记「兄」），王宬 之父／母即 王寬 之父／母。
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
        id: c_qLbXQsoobiCUQ8OimZkHIU
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7oterUKC5ZN7v4GKb56Bxw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UZw6z4-OjziyXAVQqErb4t
          claim_id: c_qLbXQsoobiCUQ8OimZkHIU
          source_id: s_WbxjHDVXPL9tlhLYVGe98o
          stance: supports
          locator: CBDB：兄弟 王宬（199813）之父／母 王孟瓛
          quotation: null
          interpretation_note: 由兄弟关系推断：王容 与 王宬 为同胞（CBDB 记「兄」），王宬 之父／母即 王容 之父／母。
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
        id: c_7ZUdouii7drvRm8OBGgeWp
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aqWAAzG2m2Rx2hVZxZL27f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UznfEH2N4-I602_sMqMPeZ
          claim_id: c_7ZUdouii7drvRm8OBGgeWp
          source_id: s_6MAO68uHXumgYLc-Oq_S0j
          stance: supports
          locator: CBDB：兄弟 王宬（199813）之父／母 王孟瓛
          quotation: null
          interpretation_note: 由兄弟关系推断：王寅 与 王宬 为同胞（CBDB 记「兄」），王宬 之父／母即 王寅 之父／母。
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
        id: c_ttEJvdKTS9NyQAzxG27gVn
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bRBtMQ8M92GL2GKWErhKgS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UxujuRm0YAeMtD9fxZoj7J
          claim_id: c_ttEJvdKTS9NyQAzxG27gVn
          source_id: s_UGSvtAaTPP-38_IewPjvP7
          stance: supports
          locator: CBDB：兄弟 王宬（199813）之父／母 王孟瓛
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓 与 王宬 为同胞（CBDB 记「弟」），王宬 之父／母即 王賓 之父／母。
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
        id: c_bJpILXz3uLD2-3og29_pKw
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fR5v5jHNNZVs5BT6RTLRqd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__BXPjA5vBe5pA1Mk70VzyS
          claim_id: c_bJpILXz3uLD2-3og29_pKw
          source_id: s_qy1_zxa85qyEmOgGZL53Zh
          stance: supports
          locator: CBDB：兄弟 王宬（199813）之父／母 王孟瓛
          quotation: null
          interpretation_note: 由兄弟关系推断：王宴 与 王宬 为同胞（CBDB 记「兄」），王宬 之父／母即 王宴 之父／母。
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
        id: c_rNDx7CahLsHgdjG1A3-Lps
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ubkyEtCfjKrR1ZZhc4kZet
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g8EaZwuB5tqRJRsVdBfOUf
          claim_id: c_rNDx7CahLsHgdjG1A3-Lps
          source_id: s__sSgwIeZdEKA1KHFRpj-JE
          stance: supports
          locator: CBDB：兄弟 王宬（199813）之父／母 王孟瓛
          quotation: null
          interpretation_note: 由兄弟关系推断：王實 与 王宬 为同胞（CBDB 记「弟」），王宬 之父／母即 王實 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孟瓛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟瓛，明人物。成化十一年進士，籍贯海陽，曾任陰陽訓術。（中国历代人物传记资料库 CBDB 250011） | accepted |
| name.primary | 王孟瓛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XU2HBZFhmiBGAyoKHD4B6w | 王宬 | accepted |
| children | p_6eaAjrU99rp44xUhiLPCEu | 王寬 | accepted |
| children | p_7oterUKC5ZN7v4GKb56Bxw | 王容 | accepted |
| children | p_aqWAAzG2m2Rx2hVZxZL27f | 王寅 | accepted |
| children | p_bRBtMQ8M92GL2GKWErhKgS | 王賓 | accepted |
| children | p_fR5v5jHNNZVs5BT6RTLRqd | 王宴 | accepted |
| children | p_ubkyEtCfjKrR1ZZhc4kZet | 王實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 250014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250014&o=json)
- [中国历代人物传记资料库：王寬（CBDB 250019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250019&o=json)
- [中国历代人物传记资料库：王孟瓛（CBDB 250011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250011&o=json)
- [中国历代人物传记资料库：王容（CBDB 250018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250018&o=json)
- [中国历代人物传记资料库：王實（CBDB 250015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250015&o=json)
- [中国历代人物传记资料库：王宴（CBDB 250016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250016&o=json)
- [中国历代人物传记资料库：王寅（CBDB 250017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250017&o=json)
