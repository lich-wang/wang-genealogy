---
schema: wang-person/v1
id: p_5tRELu5ZQN1MVbhcP9h259
status: active
merged_into: null
display_name: 王思道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r7DTa9dvom8w32Lqh7bTwA
        subject_person_id: p_5tRELu5ZQN1MVbhcP9h259
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PdhRTyBQUc3Vcex46cBdZN
          claim_id: c_r7DTa9dvom8w32Lqh7bTwA
          source_id: s_iMvxPmA8S8HzJ41oYWKHUT
          stance: supports
          locator: CBDB:101282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101282）
          source: &a1
            id: s_iMvxPmA8S8HzJ41oYWKHUT
            source_type: api_record
            title: 中国历代人物传记资料库：王思道（CBDB 101282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101282&o=json
            external_identifier: CBDB:101282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UyW1DYDvTaCQsKv7cqg2nK
        subject_person_id: p_5tRELu5ZQN1MVbhcP9h259
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1275年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ZuQnqTWETcz5xCSJ9GDWx
          claim_id: c_UyW1DYDvTaCQsKv7cqg2nK
          source_id: s_iMvxPmA8S8HzJ41oYWKHUT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mFmQdQ47qJMWuf8tbZ46CL
        subject_person_id: p_5tRELu5ZQN1MVbhcP9h259
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1334年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i76hYs1j9XL8R4r2XJG3EH
          claim_id: c_mFmQdQ47qJMWuf8tbZ46CL
          source_id: s_iMvxPmA8S8HzJ41oYWKHUT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2cRgaGLzg7qSoGhJheWYED
        subject_person_id: p_5tRELu5ZQN1MVbhcP9h259
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思道（1275年—1334年），元人物。籍贯廬陵，身份为為善鄉里，入仕薦舉 (保任,保舉)，曾任兩軍照磨。（中国历代人物传记资料库 CBDB 101282）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a_vjDyciTXy-4VlnnA1rEj
          claim_id: c_2cRgaGLzg7qSoGhJheWYED
          source_id: s_iMvxPmA8S8HzJ41oYWKHUT
          stance: supports
          locator: CBDB:101282
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

# 王思道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思道 | accepted |
| birth.date | 1275年 | accepted |
| death.date | 1334年 | accepted |
| bio.summary | 王思道（1275年—1334年），元人物。籍贯廬陵，身份为為善鄉里，入仕薦舉 (保任,保舉)，曾任兩軍照磨。（中国历代人物传记资料库 CBDB 101282） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思道（CBDB 101282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101282&o=json)
