---
schema: wang-person/v1
id: p_y5V3x2KBuHfJWj5Y76UY1p
status: active
merged_into: null
display_name: 王嘉賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nDP6ESyqWYiLM7vGfPTrvB
        subject_person_id: p_y5V3x2KBuHfJWj5Y76UY1p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kFtz1vCnYaRLrUNQbtM2NX
          claim_id: c_nDP6ESyqWYiLM7vGfPTrvB
          source_id: s_E3mx8BcYqKwq2E1APDGLdY
          stance: supports
          locator: CBDB:331579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331579）
          source: &a1
            id: s_E3mx8BcYqKwq2E1APDGLdY
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉賓（CBDB 331579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331579&o=json
            external_identifier: CBDB:331579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YJCS5RYF6kfJuVqJmBPJET
        subject_person_id: p_y5V3x2KBuHfJWj5Y76UY1p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉賓，明人物。嘉靖四十四年進士，籍贯滕縣，曾任知縣。（中国历代人物传记资料库 CBDB 331579）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HDoSRcC8kthVxnkLFe6lWG
          claim_id: c_YJCS5RYF6kfJuVqJmBPJET
          source_id: s_E3mx8BcYqKwq2E1APDGLdY
          stance: supports
          locator: CBDB:331579
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KVnFnm917V64sAxB_Xor6n
        subject_person_id: p_ZgyZoznnAJrPag6d8FS83S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y5V3x2KBuHfJWj5Y76UY1p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nAeHEvwH-xXOs6LrEZZEuD
          claim_id: c_KVnFnm917V64sAxB_Xor6n
          source_id: s_kZ9-bXpTxOU40h-n4lPZKN
          stance: supports
          locator: CBDB：兄弟 王元賓（205321）之父／母 王天敘
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉賓 与 王元賓 为同胞（CBDB 记「弟」），王元賓 之父／母即 王嘉賓 之父／母。
          source:
            id: s_kZ9-bXpTxOU40h-n4lPZKN
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉賓（CBDB 331579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331579&o=json
            external_identifier: CBDB:331579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZgyZoznnAJrPag6d8FS83S
        status: active
        display_name: 王天敘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XzM-2Q4D0eUuoOUhleNrIe
        subject_person_id: p_8FE6kbWmNCoQTRuebayd8Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y5V3x2KBuHfJWj5Y76UY1p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jfcInTEhOxie55eYVcvSYv
          claim_id: c_XzM-2Q4D0eUuoOUhleNrIe
          source_id: s_kZ9-bXpTxOU40h-n4lPZKN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205321 王元賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kZ9-bXpTxOU40h-n4lPZKN
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉賓（CBDB 331579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331579&o=json
            external_identifier: CBDB:331579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8FE6kbWmNCoQTRuebayd8Y
        status: active
        display_name: 王元賓
        merged_into_person_id: null
---

# 王嘉賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉賓 | accepted |
| bio.summary | 王嘉賓，明人物。嘉靖四十四年進士，籍贯滕縣，曾任知縣。（中国历代人物传记资料库 CBDB 331579） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZgyZoznnAJrPag6d8FS83S | 王天敘 | accepted |
| other | p_8FE6kbWmNCoQTRuebayd8Y | 王元賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉賓（CBDB 331579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331579&o=json)
