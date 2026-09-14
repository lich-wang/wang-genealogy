---
schema: wang-person/v1
id: p_jrykkmzrQXq266DY21HkgQ
status: active
merged_into: null
display_name: 王灌
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cH75uJpgud21DSMVwxSy2C
        subject_person_id: p_jrykkmzrQXq266DY21HkgQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ijP8n1J1awRBZJwhGNzxgX
          claim_id: c_cH75uJpgud21DSMVwxSy2C
          source_id: s_Q6Q779p5KY37kgE2Gxof7x
          stance: supports
          locator: CBDB:284252
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284252）
          source: &a1
            id: s_Q6Q779p5KY37kgE2Gxof7x
            source_type: api_record
            title: 中国历代人物传记资料库：王灌（CBDB 284252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284252&o=json
            external_identifier: CBDB:284252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PTTzgRGRtJpkPiKGXF9HNy
        subject_person_id: p_jrykkmzrQXq266DY21HkgQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灌，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284252）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YKRijCag79oZDxEGFlb9-k
          claim_id: c_PTTzgRGRtJpkPiKGXF9HNy
          source_id: s_Q6Q779p5KY37kgE2Gxof7x
          stance: supports
          locator: CBDB:284252
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ac9z1eW3QG3Y0AccqA4JQb
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jrykkmzrQXq266DY21HkgQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_597_TBNhcTZarIoY-HHRDy
          claim_id: c_Ac9z1eW3QG3Y0AccqA4JQb
          source_id: s_A5P0yfuOrecrPkphDhZ-6r
          stance: supports
          locator: CBDB：兄弟 王洙（202146）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王灌 与 王洙 为同胞（CBDB 记「弟」），王洙 之父／母即 王灌 之父／母。
          source:
            id: s_A5P0yfuOrecrPkphDhZ-6r
            source_type: api_record
            title: 中国历代人物传记资料库：王灌（CBDB 284252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284252&o=json
            external_identifier: CBDB:284252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_229EQbFCA3PP8BNNQ1HMQL
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_K0K1bxo8A_cwV5OuKap9bd
        subject_person_id: p_jrykkmzrQXq266DY21HkgQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OsBWjXCjxuAFezOJ_-fGY3
          claim_id: c_K0K1bxo8A_cwV5OuKap9bd
          source_id: s_A5P0yfuOrecrPkphDhZ-6r
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202146 王洙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A5P0yfuOrecrPkphDhZ-6r
            source_type: api_record
            title: 中国历代人物传记资料库：王灌（CBDB 284252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284252&o=json
            external_identifier: CBDB:284252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ziFePMbdNLKAgyGGN4BwgX
        status: active
        display_name: 王洙
        merged_into_person_id: null
---

# 王灌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王灌 | accepted |
| bio.summary | 王灌，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284252） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_229EQbFCA3PP8BNNQ1HMQL | 王鎬 | accepted |
| other | p_ziFePMbdNLKAgyGGN4BwgX | 王洙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王灌（CBDB 284252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284252&o=json)
