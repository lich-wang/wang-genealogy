---
schema: wang-person/v1
id: p_hK54JE12oBSfXTGEBfKcK6
status: active
merged_into: null
display_name: 王振玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WtSDdJyKQGQYwrPihX3uyw
        subject_person_id: p_hK54JE12oBSfXTGEBfKcK6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xfaCEWrMH5QXF7Rw5J3M7W
          claim_id: c_WtSDdJyKQGQYwrPihX3uyw
          source_id: s_sMdYiFQFT2DpXvhgiG5cJK
          stance: supports
          locator: CBDB:638125
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638125）
          source: &a1
            id: s_sMdYiFQFT2DpXvhgiG5cJK
            source_type: api_record
            title: 中国历代人物传记资料库：王振玉（CBDB 638125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638125&o=json
            external_identifier: CBDB:638125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.534Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NvvrZ34qNARwaQ574UUgBJ
        subject_person_id: p_hK54JE12oBSfXTGEBfKcK6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振玉，清人物。籍贯永綏直隸廳，曾任復設教諭。（中国历代人物传记资料库 CBDB 638125）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_caFpyVfh1CgHtXLN72ZQ6c
          claim_id: c_NvvrZ34qNARwaQ574UUgBJ
          source_id: s_sMdYiFQFT2DpXvhgiG5cJK
          stance: supports
          locator: CBDB:638125
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

# 王振玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振玉 | accepted |
| bio.summary | 王振玉，清人物。籍贯永綏直隸廳，曾任復設教諭。（中国历代人物传记资料库 CBDB 638125） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振玉（CBDB 638125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638125&o=json)
