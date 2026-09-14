---
schema: wang-person/v1
id: p_pAeM9kBSTAJMf4aS8aopYc
status: active
merged_into: null
display_name: 王誥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bZoLdzFTJ4bQRXRaFpCHQ4
        subject_person_id: p_pAeM9kBSTAJMf4aS8aopYc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TRNjmRGU9LRE7mGv4zKrps
          claim_id: c_bZoLdzFTJ4bQRXRaFpCHQ4
          source_id: s_2nECWAaX6KDmHp5Nkt5w6J
          stance: supports
          locator: CBDB:238066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238066）
          source: &a1
            id: s_2nECWAaX6KDmHp5Nkt5w6J
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 238066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238066&o=json
            external_identifier: CBDB:238066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZZ18kbQ1hVnRxuG3jkXEcT
        subject_person_id: p_pAeM9kBSTAJMf4aS8aopYc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238066）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TR9Q5Y4byfva08y8F21crY
          claim_id: c_ZZ18kbQ1hVnRxuG3jkXEcT
          source_id: s_2nECWAaX6KDmHp5Nkt5w6J
          stance: supports
          locator: CBDB:238066
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LKOvOsS7PBTHMM5Y00kL_f
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pAeM9kBSTAJMf4aS8aopYc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTTqCRTI2E71tCyZmLPZBF
          claim_id: c_LKOvOsS7PBTHMM5Y00kL_f
          source_id: s_k67rajDHvbxXVLd7OjKUWP
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王誥 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王誥 之父／母。
          source:
            id: s_k67rajDHvbxXVLd7OjKUWP
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 238066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238066&o=json
            external_identifier: CBDB:238066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zr3cc57cGmUXGbD4psHLyS
        status: active
        display_name: 王仕復
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Q5xbVaUj-7tUyoXKfYQvnQ
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pAeM9kBSTAJMf4aS8aopYc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPqVo3tyTcu_064xQEs_-r
          claim_id: c_Q5xbVaUj-7tUyoXKfYQvnQ
          source_id: s_k67rajDHvbxXVLd7OjKUWP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_k67rajDHvbxXVLd7OjKUWP
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 238066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238066&o=json
            external_identifier: CBDB:238066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Sfy82F6BmihArAucn9Vuw
        status: active
        display_name: 王詔
        merged_into_person_id: null
---

# 王誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誥 | accepted |
| bio.summary | 王誥，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238066） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zr3cc57cGmUXGbD4psHLyS | 王仕復 | accepted |
| other | p_8Sfy82F6BmihArAucn9Vuw | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 238066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238066&o=json)
