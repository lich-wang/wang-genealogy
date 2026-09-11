---
schema: wang-person/v1
id: p_N6HBr8y6smcreFZeYftsFn
status: active
merged_into: null
display_name: 王澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5jZSnhEMy8sj3YoqSYhMZZ
        subject_person_id: p_N6HBr8y6smcreFZeYftsFn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yUVBfRb3pM9UZswBGGKoop
          claim_id: c_5jZSnhEMy8sj3YoqSYhMZZ
          source_id: s_d46J2iBiQFwWcLTCQDbP6y
          stance: supports
          locator: CBDB:451479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（451479）
          source: &a1
            id: s_d46J2iBiQFwWcLTCQDbP6y
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 451479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451479&o=json
            external_identifier: CBDB:451479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ksDemTEWJuf2MNJ2Un5pn2
        subject_person_id: p_N6HBr8y6smcreFZeYftsFn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤，元人物。曾任推官。（中国历代人物传记资料库 CBDB 451479）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0lMaAgwun4G6Ey7308_d-4
          claim_id: c_ksDemTEWJuf2MNJ2Un5pn2
          source_id: s_d46J2iBiQFwWcLTCQDbP6y
          stance: supports
          locator: CBDB:451479
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

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | 王澤，元人物。曾任推官。（中国历代人物传记资料库 CBDB 451479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 451479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451479&o=json)
