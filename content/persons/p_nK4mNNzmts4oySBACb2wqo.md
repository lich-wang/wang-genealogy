---
schema: wang-person/v1
id: p_nK4mNNzmts4oySBACb2wqo
status: active
merged_into: null
display_name: 王廷錦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hHwzr5yn2kgfcUb95ALaF5
        subject_person_id: p_nK4mNNzmts4oySBACb2wqo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B62Cf4ij2onU119Ecc38GZ
          claim_id: c_hHwzr5yn2kgfcUb95ALaF5
          source_id: s_txE8B1StbV5ycp8xgz1wzy
          stance: supports
          locator: CBDB:637571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637571）
          source: &a1
            id: s_txE8B1StbV5ycp8xgz1wzy
            source_type: api_record
            title: 中国历代人物传记资料库：王廷錦（CBDB 637571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637571&o=json
            external_identifier: CBDB:637571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_388RVQce3s8Jiqp6R6nq58
        subject_person_id: p_nK4mNNzmts4oySBACb2wqo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷錦，清人物。籍贯大城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637571）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DY86cLENrSOT-A4uWe3nnQ
          claim_id: c_388RVQce3s8Jiqp6R6nq58
          source_id: s_txE8B1StbV5ycp8xgz1wzy
          stance: supports
          locator: CBDB:637571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷錦 | accepted |
| bio.summary | 王廷錦，清人物。籍贯大城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷錦（CBDB 637571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637571&o=json)
