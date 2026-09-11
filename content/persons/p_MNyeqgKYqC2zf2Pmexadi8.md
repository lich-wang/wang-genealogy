---
schema: wang-person/v1
id: p_MNyeqgKYqC2zf2Pmexadi8
status: active
merged_into: null
display_name: 王登基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kver6jMVxCk2LVJTGQznpC
        subject_person_id: p_MNyeqgKYqC2zf2Pmexadi8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HMA9qymYhT3677fPQHBSa9
          claim_id: c_Kver6jMVxCk2LVJTGQznpC
          source_id: s_rtP7G18NCDyuXpFiS6Cgju
          stance: supports
          locator: CBDB:639499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639499）
          source: &a1
            id: s_rtP7G18NCDyuXpFiS6Cgju
            source_type: api_record
            title: 中国历代人物传记资料库：王登基（CBDB 639499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639499&o=json
            external_identifier: CBDB:639499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EjBww8cQ5MNqyZqtjMBfAg
        subject_person_id: p_MNyeqgKYqC2zf2Pmexadi8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登基，清人物。籍贯黃陂，曾任中軍守備。（中国历代人物传记资料库 CBDB 639499）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wh4Z91y-v6KQjNzLDkgzi2
          claim_id: c_EjBww8cQ5MNqyZqtjMBfAg
          source_id: s_rtP7G18NCDyuXpFiS6Cgju
          stance: supports
          locator: CBDB:639499
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

# 王登基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登基 | accepted |
| bio.summary | 王登基，清人物。籍贯黃陂，曾任中軍守備。（中国历代人物传记资料库 CBDB 639499） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登基（CBDB 639499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639499&o=json)
