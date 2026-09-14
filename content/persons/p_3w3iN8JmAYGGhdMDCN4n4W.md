---
schema: wang-person/v1
id: p_3w3iN8JmAYGGhdMDCN4n4W
status: active
merged_into: null
display_name: 王羾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P5fGaofPTziBfuHqoi99gc
        subject_person_id: p_3w3iN8JmAYGGhdMDCN4n4W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PEgAhPLKt5UVEranD9H9gx
          claim_id: c_P5fGaofPTziBfuHqoi99gc
          source_id: s_9iruRk3LtQjQsiQ46qcAAC
          stance: supports
          locator: CBDB:264660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264660）
          source: &a1
            id: s_9iruRk3LtQjQsiQ46qcAAC
            source_type: api_record
            title: 中国历代人物传记资料库：王羾（CBDB 264660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264660&o=json
            external_identifier: CBDB:264660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_veLS7JUu15Z7R4VvyrhdJE
        subject_person_id: p_3w3iN8JmAYGGhdMDCN4n4W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羾，明人物。弘治六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 264660）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JzgK7s3ZJX1ZexIs_mpCgr
          claim_id: c_veLS7JUu15Z7R4VvyrhdJE
          source_id: s_9iruRk3LtQjQsiQ46qcAAC
          stance: supports
          locator: CBDB:264660
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pTOqvBiK6dNAhs1HZHJKX1
        subject_person_id: p_y6LBWWQUDfvbAme5hkV5bP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3w3iN8JmAYGGhdMDCN4n4W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ohVdJgmRhlXkGr4PbHWTpY
          claim_id: c_pTOqvBiK6dNAhs1HZHJKX1
          source_id: s_vy0NPOcVj7OX-IAO7W5-V1
          stance: supports
          locator: CBDB：兄弟 王翀（200923）之父／母 王大韶
          quotation: null
          interpretation_note: 由兄弟关系推断：王羾 与 王翀 为同胞（CBDB 记「兄」），王翀 之父／母即 王羾 之父／母。
          source:
            id: s_vy0NPOcVj7OX-IAO7W5-V1
            source_type: api_record
            title: 中国历代人物传记资料库：王羾（CBDB 264660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264660&o=json
            external_identifier: CBDB:264660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y6LBWWQUDfvbAme5hkV5bP
        status: active
        display_name: 王大韶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Q6DU7apshpywKdwytplDd3
        subject_person_id: p_3w3iN8JmAYGGhdMDCN4n4W
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XWgo6Q1nhAmPTc3Xg4eENs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WQOHoXkTdYtVI_F8Kziyo2
          claim_id: c_Q6DU7apshpywKdwytplDd3
          source_id: s_vy0NPOcVj7OX-IAO7W5-V1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200923 王翀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vy0NPOcVj7OX-IAO7W5-V1
            source_type: api_record
            title: 中国历代人物传记资料库：王羾（CBDB 264660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264660&o=json
            external_identifier: CBDB:264660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XWgo6Q1nhAmPTc3Xg4eENs
        status: active
        display_name: 王翀
        merged_into_person_id: null
---

# 王羾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羾 | accepted |
| bio.summary | 王羾，明人物。弘治六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 264660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y6LBWWQUDfvbAme5hkV5bP | 王大韶 | accepted |
| other | p_XWgo6Q1nhAmPTc3Xg4eENs | 王翀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王羾（CBDB 264660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264660&o=json)
