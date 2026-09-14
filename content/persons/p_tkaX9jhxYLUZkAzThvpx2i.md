---
schema: wang-person/v1
id: p_tkaX9jhxYLUZkAzThvpx2i
status: active
merged_into: null
display_name: 王澍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kPLL7fdDamLQJYCzzs37Uo
        subject_person_id: p_tkaX9jhxYLUZkAzThvpx2i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ngg3oZaFqZLexJC4gVz3E1
          claim_id: c_kPLL7fdDamLQJYCzzs37Uo
          source_id: s_1HM8521W2NwMjcyJeWPF95
          stance: supports
          locator: CBDB:323931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323931）
          source: &a1
            id: s_1HM8521W2NwMjcyJeWPF95
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 323931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323931&o=json
            external_identifier: CBDB:323931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hUdWJvW9CEWH9KaBPLmsqd
        subject_person_id: p_tkaX9jhxYLUZkAzThvpx2i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍，明人物。嘉靖三十八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 323931）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LKxwOs7RGjfgLM11ZmZnXH
          claim_id: c_hUdWJvW9CEWH9KaBPLmsqd
          source_id: s_1HM8521W2NwMjcyJeWPF95
          stance: supports
          locator: CBDB:323931
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_flTR6uZikjT0TWUfaJPCKa
        subject_person_id: p_3zsERGNnSdJfLFVXc9rCRi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tkaX9jhxYLUZkAzThvpx2i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ybEZiza666BvGivzpMC9SR
          claim_id: c_flTR6uZikjT0TWUfaJPCKa
          source_id: s_OriwMYzjRRMVI71pfsKthy
          stance: supports
          locator: CBDB：兄弟 王淑（204778）之父／母 王諫
          quotation: null
          interpretation_note: 由兄弟关系推断：王澍 与 王淑 为同胞（CBDB 记「兄」），王淑 之父／母即 王澍 之父／母。
          source:
            id: s_OriwMYzjRRMVI71pfsKthy
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 323931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323931&o=json
            external_identifier: CBDB:323931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3zsERGNnSdJfLFVXc9rCRi
        status: active
        display_name: 王諫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gq4512DHLIBgx0rWLLDoN7
        subject_person_id: p_JZ9ABX21r2pGL5CSXT41XF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tkaX9jhxYLUZkAzThvpx2i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lhfd8b8vubFdIoWBoxwnjO
          claim_id: c_gq4512DHLIBgx0rWLLDoN7
          source_id: s_OriwMYzjRRMVI71pfsKthy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204778 王淑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OriwMYzjRRMVI71pfsKthy
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 323931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323931&o=json
            external_identifier: CBDB:323931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JZ9ABX21r2pGL5CSXT41XF
        status: active
        display_name: 王淑
        merged_into_person_id: null
---

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| bio.summary | 王澍，明人物。嘉靖三十八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 323931） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3zsERGNnSdJfLFVXc9rCRi | 王諫 | accepted |
| other | p_JZ9ABX21r2pGL5CSXT41XF | 王淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澍（CBDB 323931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323931&o=json)
