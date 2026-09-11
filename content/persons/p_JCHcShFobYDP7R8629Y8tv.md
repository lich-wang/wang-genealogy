---
schema: wang-person/v1
id: p_JCHcShFobYDP7R8629Y8tv
status: active
merged_into: null
display_name: 王綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ja19oV9x1ziAnMtysPrapv
        subject_person_id: p_JCHcShFobYDP7R8629Y8tv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gt19wLimhMMtWikiuiEbPT
          claim_id: c_Ja19oV9x1ziAnMtysPrapv
          source_id: s_y6tQAevU61SHk7SZyfD4ih
          stance: supports
          locator: CBDB:469358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（469358）
          source: &a1
            id: s_y6tQAevU61SHk7SZyfD4ih
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 469358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469358&o=json
            external_identifier: CBDB:469358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tTfdKBgPHsJ5ioqmD93xaf
        subject_person_id: p_JCHcShFobYDP7R8629Y8tv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸，史料所见人物。本项目依据《中国历代人物传记资料库：王綸（CBDB 469358）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j69AL1pn-yQXZ7rTFhR1nZ
          claim_id: c_tTfdKBgPHsJ5ioqmD93xaf
          source_id: s_y6tQAevU61SHk7SZyfD4ih
          stance: supports
          locator: CBDB:469358
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| bio.summary | 王綸，史料所见人物。本项目依据《中国历代人物传记资料库：王綸（CBDB 469358）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 469358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469358&o=json)
