---
schema: wang-person/v1
id: p_T8L37o7idUobwEBBYipqei
status: active
merged_into: null
display_name: 王昌時
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_417EeVTmB6pBZBGMw6wTts
        subject_person_id: p_T8L37o7idUobwEBBYipqei
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KwAnsRv2Q4voMff19KX4AP
          claim_id: c_417EeVTmB6pBZBGMw6wTts
          source_id: s_wBx5KqVnEq3cLzSk2r4U4c
          stance: supports
          locator: CBDB:343479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343479）
          source: &a1
            id: s_wBx5KqVnEq3cLzSk2r4U4c
            source_type: api_record
            title: 中国历代人物传记资料库：王昌時（CBDB 343479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343479&o=json
            external_identifier: CBDB:343479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1DHiovSxE7QpE1UA1F7LjH
        subject_person_id: p_T8L37o7idUobwEBBYipqei
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌時，明人物。明清進士進士，籍贯沂州，入仕進士。（中国历代人物传记资料库 CBDB 343479）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3x3kNA7j4gFWDxQ7VszYiB
          claim_id: c_1DHiovSxE7QpE1UA1F7LjH
          source_id: s_wBx5KqVnEq3cLzSk2r4U4c
          stance: supports
          locator: CBDB:343479
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

# 王昌時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌時 | accepted |
| bio.summary | 王昌時，明人物。明清進士進士，籍贯沂州，入仕進士。（中国历代人物传记资料库 CBDB 343479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌時（CBDB 343479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343479&o=json)
