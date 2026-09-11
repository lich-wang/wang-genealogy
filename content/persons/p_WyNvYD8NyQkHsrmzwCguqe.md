---
schema: wang-person/v1
id: p_WyNvYD8NyQkHsrmzwCguqe
status: active
merged_into: null
display_name: 王世爵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NbMEJevct38tTkDvoGxfFk
        subject_person_id: p_WyNvYD8NyQkHsrmzwCguqe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5dCBNo1VcAZn5QYvLbtNPj
          claim_id: c_NbMEJevct38tTkDvoGxfFk
          source_id: s_XbCGw32AqA7MrTQ78qzrNE
          stance: supports
          locator: CBDB:501437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501437）
          source: &a1
            id: s_XbCGw32AqA7MrTQ78qzrNE
            source_type: api_record
            title: 中国历代人物传记资料库：王世爵（CBDB 501437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501437&o=json
            external_identifier: CBDB:501437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UnAeSJFLiAyiYpqrQAAGdA
        subject_person_id: p_WyNvYD8NyQkHsrmzwCguqe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世爵，清人物。曾任營遊擊。（中国历代人物传记资料库 CBDB 501437）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6C3-4YlZbHcTx-EVAduxQY
          claim_id: c_UnAeSJFLiAyiYpqrQAAGdA
          source_id: s_XbCGw32AqA7MrTQ78qzrNE
          stance: supports
          locator: CBDB:501437
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

# 王世爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世爵 | accepted |
| bio.summary | 王世爵，清人物。曾任營遊擊。（中国历代人物传记资料库 CBDB 501437） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世爵（CBDB 501437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501437&o=json)
