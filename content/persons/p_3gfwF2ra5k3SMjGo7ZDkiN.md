---
schema: wang-person/v1
id: p_3gfwF2ra5k3SMjGo7ZDkiN
status: active
merged_into: null
display_name: 王光宇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jb9TdhpMntKKVz5R9Jzsw9
        subject_person_id: p_3gfwF2ra5k3SMjGo7ZDkiN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d7ZJUWoSgKQy2D5ChJwqgi
          claim_id: c_jb9TdhpMntKKVz5R9Jzsw9
          source_id: s_CB7MpWMCpXkPtufyie6P3k
          stance: supports
          locator: CBDB:69199
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69199）
          source: &a1
            id: s_CB7MpWMCpXkPtufyie6P3k
            source_type: api_record
            title: 中国历代人物传记资料库：王光宇（CBDB 69199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69199&o=json
            external_identifier: CBDB:69199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5hAh23W7kvQ2QD3JuExsDv
        subject_person_id: p_3gfwF2ra5k3SMjGo7ZDkiN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_erchZgfF135h1pP2CLJz26
          claim_id: c_5hAh23W7kvQ2QD3JuExsDv
          source_id: s_CB7MpWMCpXkPtufyie6P3k
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
        id: c_zJU3WwJd1Z3F5ybXq4H9J9
        subject_person_id: p_3gfwF2ra5k3SMjGo7ZDkiN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光宇（卒于1841年），清人物。籍贯興寧，入仕監生，曾任典史、司巡檢。（中国历代人物传记资料库 CBDB 69199）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C3MZPPkEisrSiID42osaOn
          claim_id: c_zJU3WwJd1Z3F5ybXq4H9J9
          source_id: s_CB7MpWMCpXkPtufyie6P3k
          stance: supports
          locator: CBDB:69199
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

# 王光宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光宇 | accepted |
| death.date | 1841年 | accepted |
| bio.summary | 王光宇（卒于1841年），清人物。籍贯興寧，入仕監生，曾任典史、司巡檢。（中国历代人物传记资料库 CBDB 69199） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光宇（CBDB 69199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69199&o=json)
