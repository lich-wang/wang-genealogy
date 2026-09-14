---
schema: wang-person/v1
id: p_9yAZ8HiJAXYanutZzigvBw
status: active
merged_into: null
display_name: 王閥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bjfPdKKXkN6K9qKxFrVb8K
        subject_person_id: p_9yAZ8HiJAXYanutZzigvBw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8Lo4sSfsDbBA5PAVenTWn6
          claim_id: c_bjfPdKKXkN6K9qKxFrVb8K
          source_id: s_h7bTtiRnoT1ryXpPNoJjHG
          stance: supports
          locator: CBDB:213944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213944）
          source: &a1
            id: s_h7bTtiRnoT1ryXpPNoJjHG
            source_type: api_record
            title: 中国历代人物传记资料库：王閥（CBDB 213944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213944&o=json
            external_identifier: CBDB:213944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rQTNMvQUNawr9jxF1XPZe4
        subject_person_id: p_9yAZ8HiJAXYanutZzigvBw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閥，明人物。萬曆二年進士，籍贯清苑，曾任知府。（中国历代人物传记资料库 CBDB 213944）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wona-nTQP4fMFWV6bIJ8rF
          claim_id: c_rQTNMvQUNawr9jxF1XPZe4
          source_id: s_h7bTtiRnoT1ryXpPNoJjHG
          stance: supports
          locator: CBDB:213944
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gNoy8E2GKLG9EwMbeyNnTp
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9yAZ8HiJAXYanutZzigvBw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hsM9uyL_vkS1mTW_l4PFDf
          claim_id: c_gNoy8E2GKLG9EwMbeyNnTp
          source_id: s_NknUqM7TJRKUaI2MUBdq1i
          stance: supports
          locator: CBDB：兄弟 王開（206147）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王閥 与 王開 为同胞（CBDB 记「弟」），王開 之父／母即 王閥 之父／母。
          source:
            id: s_NknUqM7TJRKUaI2MUBdq1i
            source_type: api_record
            title: 中国历代人物传记资料库：王閥（CBDB 213944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213944&o=json
            external_identifier: CBDB:213944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NaFFWeby89s7T6a15SkTWd
        status: active
        display_name: 王德純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jNBTq0aPjp3KMMrNNtO6AE
        subject_person_id: p_9yAZ8HiJAXYanutZzigvBw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KlBAAp3-ugVLwfu_gshQNP
          claim_id: c_jNBTq0aPjp3KMMrNNtO6AE
          source_id: s_NknUqM7TJRKUaI2MUBdq1i
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206147 王開）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NknUqM7TJRKUaI2MUBdq1i
            source_type: api_record
            title: 中国历代人物传记资料库：王閥（CBDB 213944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213944&o=json
            external_identifier: CBDB:213944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GDsYhHNBBkDcpWQEYco8Kg
        status: active
        display_name: 王開
        merged_into_person_id: null
---

# 王閥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閥 | accepted |
| bio.summary | 王閥，明人物。萬曆二年進士，籍贯清苑，曾任知府。（中国历代人物传记资料库 CBDB 213944） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NaFFWeby89s7T6a15SkTWd | 王德純 | accepted |
| other | p_GDsYhHNBBkDcpWQEYco8Kg | 王開 | accepted |

## 外部来源

- [中国历代人物传记资料库：王閥（CBDB 213944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213944&o=json)
