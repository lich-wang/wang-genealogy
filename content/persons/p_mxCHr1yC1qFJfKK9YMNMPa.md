---
schema: wang-person/v1
id: p_mxCHr1yC1qFJfKK9YMNMPa
status: active
merged_into: null
display_name: 王棨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J99kmkZVz754LSmR58wTf3
        subject_person_id: p_mxCHr1yC1qFJfKK9YMNMPa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cqKmEutP5ieuqeSk4Xjqsc
          claim_id: c_J99kmkZVz754LSmR58wTf3
          source_id: s_DZJ2b2zHTEixWtyRYRbwvi
          stance: supports
          locator: CBDB:545873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545873）
          source: &a1
            id: s_DZJ2b2zHTEixWtyRYRbwvi
            source_type: api_record
            title: 中国历代人物传记资料库：王棨（CBDB 545873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545873&o=json
            external_identifier: CBDB:545873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mNpCb7uFj6wc2Ve96XyxY2
        subject_person_id: p_mxCHr1yC1qFJfKK9YMNMPa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棨，宋人物。籍贯清江，入仕進士。（中国历代人物传记资料库 CBDB 545873）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O_vXHQvVxWkXfqq036OCwJ
          claim_id: c_mNpCb7uFj6wc2Ve96XyxY2
          source_id: s_DZJ2b2zHTEixWtyRYRbwvi
          stance: supports
          locator: CBDB:545873
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

# 王棨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棨 | accepted |
| bio.summary | 王棨，宋人物。籍贯清江，入仕進士。（中国历代人物传记资料库 CBDB 545873） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棨（CBDB 545873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545873&o=json)
