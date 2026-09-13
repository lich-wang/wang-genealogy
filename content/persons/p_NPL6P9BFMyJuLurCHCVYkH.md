---
schema: wang-person/v1
id: p_NPL6P9BFMyJuLurCHCVYkH
status: active
merged_into: null
display_name: 王貴華
cbdb_id: 322902
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bCZNDymoEfDQe7PawSm9TW
        subject_person_id: p_NPL6P9BFMyJuLurCHCVYkH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴華，明人物。宣德五年進士，籍贯公安。（中国历代人物传记资料库 CBDB 322902）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-JElriCs1_aqLyOFeTtvJe
          claim_id: c_bCZNDymoEfDQe7PawSm9TW
          source_id: s_A88LcQcFYbxkzdGoN5M9TE
          stance: supports
          locator: CBDB:322902
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_A88LcQcFYbxkzdGoN5M9TE
            source_type: api_record
            title: 中国历代人物传记资料库：王貴華（CBDB 322902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322902&o=json
            external_identifier: CBDB:322902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EGcvGUGua52cMJQhspHDEH
        subject_person_id: p_NPL6P9BFMyJuLurCHCVYkH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_i8WNAeHxbiYhTKmdjYxWAb
          claim_id: c_EGcvGUGua52cMJQhspHDEH
          source_id: s_A88LcQcFYbxkzdGoN5M9TE
          stance: supports
          locator: CBDB:322902
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_T8d9TROzG_IsOwTv7iwRW0
        subject_person_id: p_NPL6P9BFMyJuLurCHCVYkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-B-JNi8ck1GHv5RQXPNLef
          claim_id: c_T8d9TROzG_IsOwTv7iwRW0
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A8mfRA1Q8JxLwPQKEgaVDE
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 126598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126598&o=json
            external_identifier: CBDB:126598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jqYHdYDCnzgGeD3VwT2HJQ
        status: active
        display_name: 王恂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貴華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王貴華，明人物。宣德五年進士，籍贯公安。（中国历代人物传记资料库 CBDB 322902） | accepted |
| name.primary | 王貴華 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jqYHdYDCnzgGeD3VwT2HJQ | 王恂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴華（CBDB 322902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322902&o=json)
- [中国历代人物传记资料库：王恂（CBDB 126598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126598&o=json)
