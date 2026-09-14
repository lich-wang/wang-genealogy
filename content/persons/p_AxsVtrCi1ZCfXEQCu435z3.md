---
schema: wang-person/v1
id: p_AxsVtrCi1ZCfXEQCu435z3
status: active
merged_into: null
display_name: 王适迪
cbdb_id: 279742
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e8Q4MDpXuiZhBFZC1AJM9j
        subject_person_id: p_AxsVtrCi1ZCfXEQCu435z3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王适迪，明人物。正德十二年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 279742）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xKqQvDH-nIlvnxXBBpVQ0w
          claim_id: c_e8Q4MDpXuiZhBFZC1AJM9j
          source_id: s_h3qMS2ZJ7pFNcYEYNxEwnV
          stance: supports
          locator: CBDB:279742
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_h3qMS2ZJ7pFNcYEYNxEwnV
            source_type: api_record
            title: 中国历代人物传记资料库：王适迪（CBDB 279742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279742&o=json
            external_identifier: CBDB:279742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZnEGP86FJ4bBFhi5N6Tf1F
        subject_person_id: p_AxsVtrCi1ZCfXEQCu435z3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王适迪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_juSGnx1NMbHz2YivC9DD8k
          claim_id: c_ZnEGP86FJ4bBFhi5N6Tf1F
          source_id: s_h3qMS2ZJ7pFNcYEYNxEwnV
          stance: supports
          locator: CBDB:279742
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Jalj1vmM1UBLWqfeAnVE3Y
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AxsVtrCi1ZCfXEQCu435z3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RoIISiCwDghq9WGTxaWcdv
          claim_id: c_Jalj1vmM1UBLWqfeAnVE3Y
          source_id: s_feriU1vMvJnMq6mXQBzW8K
          stance: supports
          locator: CBDB：兄弟 王漸逵（126774）之父／母 王傅
          quotation: null
          interpretation_note: 由兄弟关系推断：王适迪 与 王漸逵 为同胞（CBDB 记「弟」），王漸逵 之父／母即 王适迪 之父／母。
          source:
            id: s_feriU1vMvJnMq6mXQBzW8K
            source_type: api_record
            title: 中国历代人物传记资料库：王适迪（CBDB 279742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279742&o=json
            external_identifier: CBDB:279742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_83yzu33D3zG1xGPeEb9Ebe
        status: active
        display_name: 王傅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nJXmxNwG5-qAaBlOuU2NA8
        subject_person_id: p_AxsVtrCi1ZCfXEQCu435z3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xw34vm7booOs9sJSgw3YBJ
          claim_id: c_nJXmxNwG5-qAaBlOuU2NA8
          source_id: s_feriU1vMvJnMq6mXQBzW8K
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126774 王漸逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_feriU1vMvJnMq6mXQBzW8K
            source_type: api_record
            title: 中国历代人物传记资料库：王适迪（CBDB 279742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279742&o=json
            external_identifier: CBDB:279742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zAiQVyNzoej4Q1vwE84ZjB
        status: active
        display_name: 王漸逵
        merged_into_person_id: null
---

# 王适迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王适迪，明人物。正德十二年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 279742） | accepted |
| name.primary | 王适迪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_83yzu33D3zG1xGPeEb9Ebe | 王傅 | accepted |
| other | p_zAiQVyNzoej4Q1vwE84ZjB | 王漸逵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王适迪（CBDB 279742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279742&o=json)
