---
schema: wang-person/v1
id: p_wEtJV1XfV3qEbVY9CL8Ewi
status: active
merged_into: null
display_name: 王文慧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_661KQMLtDpUtnLBzDa1xPe
        subject_person_id: p_wEtJV1XfV3qEbVY9CL8Ewi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文慧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PuLTgNXEMyF7ttUBKhEN51
          claim_id: c_661KQMLtDpUtnLBzDa1xPe
          source_id: s_oGzUmSBZDeA1HE9qSB3u9s
          stance: supports
          locator: CBDB:638224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638224）
          source: &a1
            id: s_oGzUmSBZDeA1HE9qSB3u9s
            source_type: api_record
            title: 中国历代人物传记资料库：王文慧（CBDB 638224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638224&o=json
            external_identifier: CBDB:638224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TQ2dFUZxcix92xHR8sBYFc
        subject_person_id: p_wEtJV1XfV3qEbVY9CL8Ewi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文慧，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638224）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wADq5qYu8OJXaAbgC-ye9T
          claim_id: c_TQ2dFUZxcix92xHR8sBYFc
          source_id: s_oGzUmSBZDeA1HE9qSB3u9s
          stance: supports
          locator: CBDB:638224
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

# 王文慧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文慧 | accepted |
| bio.summary | 王文慧，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638224） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文慧（CBDB 638224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638224&o=json)
