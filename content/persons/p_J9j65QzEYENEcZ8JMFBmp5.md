---
schema: wang-person/v1
id: p_J9j65QzEYENEcZ8JMFBmp5
status: active
merged_into: null
display_name: 王琴堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MFAwH1cxwQ698dhsk1LHLS
        subject_person_id: p_J9j65QzEYENEcZ8JMFBmp5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t9mGRTajXxebvTKXSNm4FW
          claim_id: c_MFAwH1cxwQ698dhsk1LHLS
          source_id: s_WBYSDUg9ytbAkGzWtJ82PM
          stance: supports
          locator: CBDB:639419
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639419）
          source: &a1
            id: s_WBYSDUg9ytbAkGzWtJ82PM
            source_type: api_record
            title: 中国历代人物传记资料库：王琴堂（CBDB 639419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639419&o=json
            external_identifier: CBDB:639419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AMHNSGYSXSJcCzTJQDQF1M
        subject_person_id: p_J9j65QzEYENEcZ8JMFBmp5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴堂，清人物。籍贯館陶，曾任三等侍衛。（中国历代人物传记资料库 CBDB 639419）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_glru0zhBdRhtfaaaRZKlTN
          claim_id: c_AMHNSGYSXSJcCzTJQDQF1M
          source_id: s_WBYSDUg9ytbAkGzWtJ82PM
          stance: supports
          locator: CBDB:639419
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

# 王琴堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琴堂 | accepted |
| bio.summary | 王琴堂，清人物。籍贯館陶，曾任三等侍衛。（中国历代人物传记资料库 CBDB 639419） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琴堂（CBDB 639419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639419&o=json)
