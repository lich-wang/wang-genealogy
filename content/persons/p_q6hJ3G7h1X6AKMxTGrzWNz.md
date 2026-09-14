---
schema: wang-person/v1
id: p_q6hJ3G7h1X6AKMxTGrzWNz
status: active
merged_into: null
display_name: 王汝器
cbdb_id: 290270
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VzpH1LLk3AbbFaCDcQMYAB
        subject_person_id: p_q6hJ3G7h1X6AKMxTGrzWNz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝器，明人物。嘉靖八年進士，籍贯德州，曾任訓導。（中国历代人物传记资料库 CBDB 290270）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0TygLYe-YBKdnzHbQQQE4g
          claim_id: c_VzpH1LLk3AbbFaCDcQMYAB
          source_id: s_MkgRozhDE36i7LnhqhNRN2
          stance: supports
          locator: CBDB:290270
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MkgRozhDE36i7LnhqhNRN2
            source_type: api_record
            title: 中国历代人物传记资料库：王汝器（CBDB 290270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290270&o=json
            external_identifier: CBDB:290270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nUbAcJaJLtJw4KUED98Emf
        subject_person_id: p_q6hJ3G7h1X6AKMxTGrzWNz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝器
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iyThxH5z3gkNe5thxzk1ri
          claim_id: c_nUbAcJaJLtJw4KUED98Emf
          source_id: s_MkgRozhDE36i7LnhqhNRN2
          stance: supports
          locator: CBDB:290270
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kVrh8tQOh5_lOrq_ZDQw20
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q6hJ3G7h1X6AKMxTGrzWNz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jz8a_wFhRpWWxexkkTd4dC
          claim_id: c_kVrh8tQOh5_lOrq_ZDQw20
          source_id: s_x5c8OdogL04PkixstV9mUv
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝器 与 王汝楫 为同胞（CBDB 记「兄」），王汝楫 之父／母即 王汝器 之父／母。
          source:
            id: s_x5c8OdogL04PkixstV9mUv
            source_type: api_record
            title: 中国历代人物传记资料库：王汝器（CBDB 290270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290270&o=json
            external_identifier: CBDB:290270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C5NJgthLEeWbSTDMxHE6iV
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_d9EO7DLY9C2Zw6uNPMG-3Q
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q6hJ3G7h1X6AKMxTGrzWNz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q4OZsqZW72TQLTznqdxYV2
          claim_id: c_d9EO7DLY9C2Zw6uNPMG-3Q
          source_id: s_x5c8OdogL04PkixstV9mUv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x5c8OdogL04PkixstV9mUv
            source_type: api_record
            title: 中国历代人物传记资料库：王汝器（CBDB 290270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290270&o=json
            external_identifier: CBDB:290270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Td2fuKuEoYV2zfraAXswcd
        status: active
        display_name: 王汝楫
        merged_into_person_id: null
---

# 王汝器

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝器，明人物。嘉靖八年進士，籍贯德州，曾任訓導。（中国历代人物传记资料库 CBDB 290270） | accepted |
| name.primary | 王汝器 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C5NJgthLEeWbSTDMxHE6iV | 王寧 | accepted |
| other | p_Td2fuKuEoYV2zfraAXswcd | 王汝楫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝器（CBDB 290270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290270&o=json)
