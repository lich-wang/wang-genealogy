---
schema: wang-person/v1
id: p_dfvvCkvP2ETFgDkAvCrtbD
status: active
merged_into: null
display_name: 王九皋
cbdb_id: 268143
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mzKHP8rEt5Qh9Wgj9BawFr
        subject_person_id: p_dfvvCkvP2ETFgDkAvCrtbD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九皋，明人物。弘治九年進士，籍贯鄠縣。（中国历代人物传记资料库 CBDB 268143）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_liIri8nITnODqpHNXmF89L
          claim_id: c_mzKHP8rEt5Qh9Wgj9BawFr
          source_id: s_QTxGQkkEFUezV6qgJw8L6z
          stance: supports
          locator: CBDB:268143
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QTxGQkkEFUezV6qgJw8L6z
            source_type: api_record
            title: 中国历代人物传记资料库：王九皋（CBDB 268143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268143&o=json
            external_identifier: CBDB:268143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DrWFpQMW7GViiT1bvMQwkv
        subject_person_id: p_dfvvCkvP2ETFgDkAvCrtbD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九皋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gerDCDgRwuzja2BvJSTjBf
          claim_id: c_DrWFpQMW7GViiT1bvMQwkv
          source_id: s_QTxGQkkEFUezV6qgJw8L6z
          stance: supports
          locator: CBDB:268143
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_o8M83GyKDKH1g7Vegrrp6X
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dfvvCkvP2ETFgDkAvCrtbD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jos0cSI_X7zEpwbyP9UoND
          claim_id: c_o8M83GyKDKH1g7Vegrrp6X
          source_id: s_miN8n4HYZ4I8hRopfE9d-H
          stance: supports
          locator: CBDB：兄弟 王九思（126440）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王九皋 与 王九思 为同胞（CBDB 记「兄」），王九思 之父／母即 王九皋 之父／母。
          source:
            id: s_miN8n4HYZ4I8hRopfE9d-H
            source_type: api_record
            title: 中国历代人物传记资料库：王九皋（CBDB 268143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268143&o=json
            external_identifier: CBDB:268143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AHxos763CxLVJAAUFYkhkc
        status: active
        display_name: 王儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OmTBRjm3BR78wAiRLMFQ1K
        subject_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dfvvCkvP2ETFgDkAvCrtbD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZG104R_LOnLTsdTRZ7_EgF
          claim_id: c_OmTBRjm3BR78wAiRLMFQ1K
          source_id: s_miN8n4HYZ4I8hRopfE9d-H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126440 王九思）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_miN8n4HYZ4I8hRopfE9d-H
            source_type: api_record
            title: 中国历代人物传记资料库：王九皋（CBDB 268143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268143&o=json
            external_identifier: CBDB:268143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BDk6YNhR5VP5UAnHiZAmaN
        status: active
        display_name: 王九思
        merged_into_person_id: null
---

# 王九皋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九皋，明人物。弘治九年進士，籍贯鄠縣。（中国历代人物传记资料库 CBDB 268143） | accepted |
| name.primary | 王九皋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AHxos763CxLVJAAUFYkhkc | 王儒 | accepted |
| other | p_BDk6YNhR5VP5UAnHiZAmaN | 王九思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九皋（CBDB 268143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268143&o=json)
