---
schema: wang-person/v1
id: p_r5vKuJADPEciARjgn1mpBk
status: active
merged_into: null
display_name: 王璧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q7K8fwPxRxQm4DheU4fDXH
        subject_person_id: p_r5vKuJADPEciARjgn1mpBk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P9GLHHwHg5DUTYzk7pvqiE
          claim_id: c_q7K8fwPxRxQm4DheU4fDXH
          source_id: s_kJTX61skzTiMT6qJkSXNvG
          stance: supports
          locator: CBDB:331070
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331070）
          source: &a1
            id: s_kJTX61skzTiMT6qJkSXNvG
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 331070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331070&o=json
            external_identifier: CBDB:331070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QAEvX59rA9LWuYKHSNMGU1
        subject_person_id: p_r5vKuJADPEciARjgn1mpBk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧，明人物。嘉靖四十四年進士，籍贯南豐。（中国历代人物传记资料库 CBDB 331070）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m8HoZBK7IMTM9Q4_1bWFw2
          claim_id: c_QAEvX59rA9LWuYKHSNMGU1
          source_id: s_kJTX61skzTiMT6qJkSXNvG
          stance: supports
          locator: CBDB:331070
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QKhvX7JTW9yAWdirJi9QHP
        subject_person_id: p_GfRo7ojPV7D16XBUWZ7Rwa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r5vKuJADPEciARjgn1mpBk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W4sE1iXzfe2oj4LyylWXpC
          claim_id: c_QKhvX7JTW9yAWdirJi9QHP
          source_id: s_F4zewVNXt4ppomxNdP6aXQ
          stance: supports
          locator: CBDB：兄弟 王璽（126871）之父／母 王紹
          quotation: null
          interpretation_note: 由兄弟关系推断：王璧 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王璧 之父／母。
          source:
            id: s_F4zewVNXt4ppomxNdP6aXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 331070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331070&o=json
            external_identifier: CBDB:331070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GfRo7ojPV7D16XBUWZ7Rwa
        status: active
        display_name: 王紹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Z9l3l6VkF-Ujb-1IGJkcKP
        subject_person_id: p_o84m9e1kQDV1djF1562w8T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_r5vKuJADPEciARjgn1mpBk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AebKBXq3ztSAbreGSmPLqb
          claim_id: c_Z9l3l6VkF-Ujb-1IGJkcKP
          source_id: s_F4zewVNXt4ppomxNdP6aXQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126871 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F4zewVNXt4ppomxNdP6aXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 331070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331070&o=json
            external_identifier: CBDB:331070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o84m9e1kQDV1djF1562w8T
        status: active
        display_name: 王璽
        merged_into_person_id: null
---

# 王璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璧 | accepted |
| bio.summary | 王璧，明人物。嘉靖四十四年進士，籍贯南豐。（中国历代人物传记资料库 CBDB 331070） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GfRo7ojPV7D16XBUWZ7Rwa | 王紹 | accepted |
| other | p_o84m9e1kQDV1djF1562w8T | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 331070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331070&o=json)
