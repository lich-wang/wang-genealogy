---
schema: wang-person/v1
id: p_HGx9jy5KVU1o3ShKgNEJ2j
status: active
merged_into: null
display_name: 王觀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dnMBKgnxFZgwEb63vGGamS
        subject_person_id: p_HGx9jy5KVU1o3ShKgNEJ2j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x7U6GUGyfBK9zW2xCzZ4HT
          claim_id: c_dnMBKgnxFZgwEb63vGGamS
          source_id: s_3S87ComfdCk3zPDLH8z4KE
          stance: supports
          locator: CBDB:265059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265059）
          source: &a1
            id: s_3S87ComfdCk3zPDLH8z4KE
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 265059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265059&o=json
            external_identifier: CBDB:265059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.674Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EfGAxKhUahPM4X66ksohBK
        subject_person_id: p_HGx9jy5KVU1o3ShKgNEJ2j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀，明人物。景泰五年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 265059）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uJYW5prxtFmGsIzMzFvF14
          claim_id: c_EfGAxKhUahPM4X66ksohBK
          source_id: s_3S87ComfdCk3zPDLH8z4KE
          stance: supports
          locator: CBDB:265059
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hdgZoYG3YRUfzX5zpXfznk
        subject_person_id: p_HivKtGCAjmdTAMqiQy41Yd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HGx9jy5KVU1o3ShKgNEJ2j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F39Z2dIcVcfwIn3EBX_Z28
          claim_id: c_hdgZoYG3YRUfzX5zpXfznk
          source_id: s_CJzSK-1tSxKMwL6pff31L7
          stance: supports
          locator: CBDB：兄弟 王豫（126827）之父／母 王和
          quotation: null
          interpretation_note: 由兄弟关系推断：王觀 与 王豫 为同胞（CBDB 记「弟」），王豫 之父／母即 王觀 之父／母。
          source:
            id: s_CJzSK-1tSxKMwL6pff31L7
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 265059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265059&o=json
            external_identifier: CBDB:265059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HivKtGCAjmdTAMqiQy41Yd
        status: active
        display_name: 王和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9dDtGawNGW50YuE_KAzq_u
        subject_person_id: p_HGx9jy5KVU1o3ShKgNEJ2j
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UrJznQmZF7mY3ST75yuPGB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66OJNY2BnxC36DtEXfDOfJ
          claim_id: c_9dDtGawNGW50YuE_KAzq_u
          source_id: s_CJzSK-1tSxKMwL6pff31L7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126827 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CJzSK-1tSxKMwL6pff31L7
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 265059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265059&o=json
            external_identifier: CBDB:265059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UrJznQmZF7mY3ST75yuPGB
        status: active
        display_name: 王豫
        merged_into_person_id: null
---

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | 王觀，明人物。景泰五年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 265059） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HivKtGCAjmdTAMqiQy41Yd | 王和 | accepted |
| other | p_UrJznQmZF7mY3ST75yuPGB | 王豫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 265059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265059&o=json)
