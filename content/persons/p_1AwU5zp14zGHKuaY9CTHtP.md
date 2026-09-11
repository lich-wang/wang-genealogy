---
schema: wang-person/v1
id: p_1AwU5zp14zGHKuaY9CTHtP
status: active
merged_into: null
display_name: 王鼐銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CX9VXhzwiiJboY1egE5bsD
        subject_person_id: p_1AwU5zp14zGHKuaY9CTHtP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HcXrLBnjqezNCtF87jyL4F
          claim_id: c_CX9VXhzwiiJboY1egE5bsD
          source_id: s_eEMP6ug7UBdfiaAoQ7bBXv
          stance: supports
          locator: CBDB:641055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641055）
          source: &a1
            id: s_eEMP6ug7UBdfiaAoQ7bBXv
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐銘（CBDB 641055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641055&o=json
            external_identifier: CBDB:641055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n6T4vjt9BJLXMAX179dmVm
        subject_person_id: p_1AwU5zp14zGHKuaY9CTHtP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐銘，清人物。籍贯上虞，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 641055）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-jFAQtnZtuI73tCdYrikIn
          claim_id: c_n6T4vjt9BJLXMAX179dmVm
          source_id: s_eEMP6ug7UBdfiaAoQ7bBXv
          stance: supports
          locator: CBDB:641055
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

# 王鼐銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼐銘 | accepted |
| bio.summary | 王鼐銘，清人物。籍贯上虞，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 641055） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼐銘（CBDB 641055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641055&o=json)
