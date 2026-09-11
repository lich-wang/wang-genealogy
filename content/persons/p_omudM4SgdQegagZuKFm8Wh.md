---
schema: wang-person/v1
id: p_omudM4SgdQegagZuKFm8Wh
status: active
merged_into: null
display_name: 王伯震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HBPSymGQb7RrcyCBUVkRdu
        subject_person_id: p_omudM4SgdQegagZuKFm8Wh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_csXkig6NnNDfqqyke9jnXC
          claim_id: c_HBPSymGQb7RrcyCBUVkRdu
          source_id: s_NpHnKGoRQDnMJqbf62dMHd
          stance: supports
          locator: CBDB:536105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（536105）
          source: &a1
            id: s_NpHnKGoRQDnMJqbf62dMHd
            source_type: api_record
            title: 中国历代人物传记资料库：王伯震（CBDB 536105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536105&o=json
            external_identifier: CBDB:536105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.401Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_grYkT4DS9XAyM94sUx1AMY
        subject_person_id: p_omudM4SgdQegagZuKFm8Wh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯震，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 536105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dYy-C1kvLxxErMNi7B-D9a
          claim_id: c_grYkT4DS9XAyM94sUx1AMY
          source_id: s_NpHnKGoRQDnMJqbf62dMHd
          stance: supports
          locator: CBDB:536105
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

# 王伯震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯震 | accepted |
| bio.summary | 王伯震，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 536105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯震（CBDB 536105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536105&o=json)
