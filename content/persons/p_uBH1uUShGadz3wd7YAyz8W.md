---
schema: wang-person/v1
id: p_uBH1uUShGadz3wd7YAyz8W
status: active
merged_into: null
display_name: 王月曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Z38FF7StZH78EyjMNSmJt
        subject_person_id: p_uBH1uUShGadz3wd7YAyz8W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王月曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xbkgEN8r4nCQB639ATaYs6
          claim_id: c_8Z38FF7StZH78EyjMNSmJt
          source_id: s_m9HrwobB3gSm6uSnJrCQWz
          stance: supports
          locator: CBDB:638580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638580）
          source: &a1
            id: s_m9HrwobB3gSm6uSnJrCQWz
            source_type: api_record
            title: 中国历代人物传记资料库：王月曾（CBDB 638580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638580&o=json
            external_identifier: CBDB:638580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7uHdhFG5hBS8tEuAY6pnaj
        subject_person_id: p_uBH1uUShGadz3wd7YAyz8W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王月曾，清人物。籍贯華亭，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638580）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nPnX5UXO5pWRU95zl4jxF4
          claim_id: c_7uHdhFG5hBS8tEuAY6pnaj
          source_id: s_m9HrwobB3gSm6uSnJrCQWz
          stance: supports
          locator: CBDB:638580
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

# 王月曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王月曾 | accepted |
| bio.summary | 王月曾，清人物。籍贯華亭，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王月曾（CBDB 638580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638580&o=json)
