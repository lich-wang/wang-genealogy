---
schema: wang-person/v1
id: p_ZS2NawTEzek9eBQ49pCYe2
status: active
merged_into: null
display_name: 王鎮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MavZTG34CZgXg3kfMffwGE
        subject_person_id: p_ZS2NawTEzek9eBQ49pCYe2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aMcwLV1vHGfTP3mtwvotCa
          claim_id: c_MavZTG34CZgXg3kfMffwGE
          source_id: s_iP5JqB27exX4Aad5jFjK3c
          stance: supports
          locator: CBDB:239474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239474）
          source: &a1
            id: s_iP5JqB27exX4Aad5jFjK3c
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 239474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239474&o=json
            external_identifier: CBDB:239474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kPEBxasnqJKxFrhYgqr9LW
        subject_person_id: p_ZS2NawTEzek9eBQ49pCYe2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮，明人物。正统十年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 239474）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vg4pLl11i7unm3g_q6ME7k
          claim_id: c_kPEBxasnqJKxFrhYgqr9LW
          source_id: s_iP5JqB27exX4Aad5jFjK3c
          stance: supports
          locator: CBDB:239474
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RbUESwK7YD1ZHCX6cQA37s
        subject_person_id: p_24PyNib2E1k3cWE7XUriAS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZS2NawTEzek9eBQ49pCYe2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2OBKMgQeWczURwUTX1Tnw
          claim_id: c_RbUESwK7YD1ZHCX6cQA37s
          source_id: s_V8gES0Rn5FE3zycv0EyYdg
          stance: supports
          locator: CBDB：兄弟 王鉉（126766）之父／母 王處安
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎮 与 王鉉 为同胞（CBDB 记「弟」），王鉉 之父／母即 王鎮 之父／母。
          source:
            id: s_V8gES0Rn5FE3zycv0EyYdg
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 239474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239474&o=json
            external_identifier: CBDB:239474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_24PyNib2E1k3cWE7XUriAS
        status: active
        display_name: 王處安
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5PsPrMW26RAZaDhKyUbd6-
        subject_person_id: p_ZS2NawTEzek9eBQ49pCYe2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_a2MgxrEcSzhbMSTAx75fb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0xVMQI6H_Vg1amfST38qZm
          claim_id: c_5PsPrMW26RAZaDhKyUbd6-
          source_id: s_V8gES0Rn5FE3zycv0EyYdg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126766 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V8gES0Rn5FE3zycv0EyYdg
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 239474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239474&o=json
            external_identifier: CBDB:239474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a2MgxrEcSzhbMSTAx75fb8
        status: active
        display_name: 王鉉
        merged_into_person_id: null
---

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | 王鎮，明人物。正统十年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 239474） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_24PyNib2E1k3cWE7XUriAS | 王處安 | accepted |
| other | p_a2MgxrEcSzhbMSTAx75fb8 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎮（CBDB 239474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239474&o=json)
