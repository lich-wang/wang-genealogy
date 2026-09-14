---
schema: wang-person/v1
id: p_Dq57ob6acmoL7bDj2k7d3c
status: active
merged_into: null
display_name: 王坦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xCxH591PYVP1rT5tiGEYSA
        subject_person_id: p_Dq57ob6acmoL7bDj2k7d3c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9N7H5gCA4S7qMjpPo3T2qK
          claim_id: c_xCxH591PYVP1rT5tiGEYSA
          source_id: s_9dLFKnzaALhs2zacXCYFoq
          stance: supports
          locator: CBDB:240576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240576）
          source: &a1
            id: s_9dLFKnzaALhs2zacXCYFoq
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 240576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240576&o=json
            external_identifier: CBDB:240576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lzpn2Nxo7e3hG1aMSDrXhQ
        subject_person_id: p_Dq57ob6acmoL7bDj2k7d3c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦，明人物。成化二年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 240576）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5AFWOxsPa43Vb4y1cGser-
          claim_id: c_Lzpn2Nxo7e3hG1aMSDrXhQ
          source_id: s_9dLFKnzaALhs2zacXCYFoq
          stance: supports
          locator: CBDB:240576
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cagiLxXqpWcg0FviwAcNys
        subject_person_id: p_wDGxRNCDYBWfdncywvt3LA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Dq57ob6acmoL7bDj2k7d3c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6fN94RIfzqYmMcAmugdDt0
          claim_id: c_cagiLxXqpWcg0FviwAcNys
          source_id: s_f9qeRT56Mbxsg3nh2ibTmT
          stance: supports
          locator: CBDB：兄弟 王俊（199171）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王坦 与 王俊 为同胞（CBDB 记「弟」），王俊 之父／母即 王坦 之父／母。
          source:
            id: s_f9qeRT56Mbxsg3nh2ibTmT
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 240576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240576&o=json
            external_identifier: CBDB:240576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wDGxRNCDYBWfdncywvt3LA
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
        id: c_rR_-ZHGRF-7reuldhc7FuU
        subject_person_id: p_Dq57ob6acmoL7bDj2k7d3c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kPeA425yX1vHGJ6NED9rRs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cYKxIclKA406TAkfBK4kSZ
          claim_id: c_rR_-ZHGRF-7reuldhc7FuU
          source_id: s_f9qeRT56Mbxsg3nh2ibTmT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199171 王俊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f9qeRT56Mbxsg3nh2ibTmT
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 240576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240576&o=json
            external_identifier: CBDB:240576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kPeA425yX1vHGJ6NED9rRs
        status: active
        display_name: 王俊
        merged_into_person_id: null
---

# 王坦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坦 | accepted |
| bio.summary | 王坦，明人物。成化二年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 240576） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wDGxRNCDYBWfdncywvt3LA | 王寧 | accepted |
| other | p_kPeA425yX1vHGJ6NED9rRs | 王俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坦（CBDB 240576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240576&o=json)
