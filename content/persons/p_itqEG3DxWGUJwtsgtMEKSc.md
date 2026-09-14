---
schema: wang-person/v1
id: p_itqEG3DxWGUJwtsgtMEKSc
status: active
merged_into: null
display_name: 王觪
cbdb_id: 306629
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3BZWx8pdQQDUseaFtpqHGT
        subject_person_id: p_itqEG3DxWGUJwtsgtMEKSc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觪，明人物。嘉靖二十三年進士，籍贯漢陽。（中国历代人物传记资料库 CBDB 306629）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AyiamjiNStqZCasvqnSIfM
          claim_id: c_3BZWx8pdQQDUseaFtpqHGT
          source_id: s_jNdJF9qV7kpxjaQJcGGUXD
          stance: supports
          locator: CBDB:306629
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jNdJF9qV7kpxjaQJcGGUXD
            source_type: api_record
            title: 中国历代人物传记资料库：王觪（CBDB 306629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306629&o=json
            external_identifier: CBDB:306629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9o7YLLdCUSjHsCPP9H8R2c
        subject_person_id: p_itqEG3DxWGUJwtsgtMEKSc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7yQHQxJdK4JAyJ1BVQVydS
          claim_id: c_9o7YLLdCUSjHsCPP9H8R2c
          source_id: s_jNdJF9qV7kpxjaQJcGGUXD
          stance: supports
          locator: CBDB:306629
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gxEdnY2C8CDo9_aL1-0OF9
        subject_person_id: p_asR7CUjP1iXKvRkyGBMSJF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_itqEG3DxWGUJwtsgtMEKSc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R94Lm6LtN_2TqpPeX--GcD
          claim_id: c_gxEdnY2C8CDo9_aL1-0OF9
          source_id: s_s2vSI10UR3JXAnNVLq0IIS
          stance: supports
          locator: CBDB：兄弟 王斛（203566）之父／母 王教
          quotation: null
          interpretation_note: 由兄弟关系推断：王觪 与 王斛 为同胞（CBDB 记「兄」），王斛 之父／母即 王觪 之父／母。
          source:
            id: s_s2vSI10UR3JXAnNVLq0IIS
            source_type: api_record
            title: 中国历代人物传记资料库：王觪（CBDB 306629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306629&o=json
            external_identifier: CBDB:306629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_asR7CUjP1iXKvRkyGBMSJF
        status: active
        display_name: 王教
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yea0ImBXnkUy2AKw5P8uHR
        subject_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_itqEG3DxWGUJwtsgtMEKSc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_72AZyvAN4Qy4BTisVT0mlS
          claim_id: c_yea0ImBXnkUy2AKw5P8uHR
          source_id: s_s2vSI10UR3JXAnNVLq0IIS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203566 王斛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s2vSI10UR3JXAnNVLq0IIS
            source_type: api_record
            title: 中国历代人物传记资料库：王觪（CBDB 306629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306629&o=json
            external_identifier: CBDB:306629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DCXEWHeu41hY7yzKSpPNK7
        status: active
        display_name: 王斛
        merged_into_person_id: null
---

# 王觪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王觪，明人物。嘉靖二十三年進士，籍贯漢陽。（中国历代人物传记资料库 CBDB 306629） | accepted |
| name.primary | 王觪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_asR7CUjP1iXKvRkyGBMSJF | 王教 | accepted |
| other | p_DCXEWHeu41hY7yzKSpPNK7 | 王斛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觪（CBDB 306629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306629&o=json)
