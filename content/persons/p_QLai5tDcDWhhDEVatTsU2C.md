---
schema: wang-person/v1
id: p_QLai5tDcDWhhDEVatTsU2C
status: active
merged_into: null
display_name: 王銓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bmbmnX8KhjxoQ39c7Ej8eH
        subject_person_id: p_QLai5tDcDWhhDEVatTsU2C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oFBVxN9nDAEcBMXgBRR8DE
          claim_id: c_bmbmnX8KhjxoQ39c7Ej8eH
          source_id: s_1BCpn7oKu6iW5uLsm8DJti
          stance: supports
          locator: CBDB:503513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503513）
          source: &a1
            id: s_1BCpn7oKu6iW5uLsm8DJti
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 503513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503513&o=json
            external_identifier: CBDB:503513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fyUtNgKSTBq7maveoTfmJa
        subject_person_id: p_QLai5tDcDWhhDEVatTsU2C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓，明人物。入仕進士，曾任通判。（中国历代人物传记资料库 CBDB 503513）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PNyl4Q5jnChSy3QYRIu8xB
          claim_id: c_fyUtNgKSTBq7maveoTfmJa
          source_id: s_1BCpn7oKu6iW5uLsm8DJti
          stance: supports
          locator: CBDB:503513
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

# 王銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓 | accepted |
| bio.summary | 王銓，明人物。入仕進士，曾任通判。（中国历代人物传记资料库 CBDB 503513） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銓（CBDB 503513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503513&o=json)
