---
schema: wang-person/v1
id: p_6u9Tk8BY9MGJnrCMMEJMMo
status: active
merged_into: null
display_name: 王居中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RzKy1BCTHrgVGQMFhw1BwN
        subject_person_id: p_6u9Tk8BY9MGJnrCMMEJMMo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hbFM57HsJsADt9d8qnE88y
          claim_id: c_RzKy1BCTHrgVGQMFhw1BwN
          source_id: s_HeEBg7QGHWyZzfjxxCmJHh
          stance: supports
          locator: CBDB:637301
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637301）
          source: &a1
            id: s_HeEBg7QGHWyZzfjxxCmJHh
            source_type: api_record
            title: 中国历代人物传记资料库：王居中（CBDB 637301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637301&o=json
            external_identifier: CBDB:637301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pxP6xDGtQrPGSHepaTYmRm
        subject_person_id: p_6u9Tk8BY9MGJnrCMMEJMMo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居中，清人物。籍贯保寧府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637301）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MsGf_jpZUUM6VjRsJMhB6T
          claim_id: c_pxP6xDGtQrPGSHepaTYmRm
          source_id: s_HeEBg7QGHWyZzfjxxCmJHh
          stance: supports
          locator: CBDB:637301
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

# 王居中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居中 | accepted |
| bio.summary | 王居中，清人物。籍贯保寧府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637301） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居中（CBDB 637301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637301&o=json)
