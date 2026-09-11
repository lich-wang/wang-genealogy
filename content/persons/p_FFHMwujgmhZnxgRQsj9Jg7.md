---
schema: wang-person/v1
id: p_FFHMwujgmhZnxgRQsj9Jg7
status: active
merged_into: null
display_name: 王復原
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FKqRV4kMTYZb2gCwrs1iHB
        subject_person_id: p_FFHMwujgmhZnxgRQsj9Jg7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復原
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sqnpMQZeYV6EaeCpoEuoni
          claim_id: c_FKqRV4kMTYZb2gCwrs1iHB
          source_id: s_6QF8CPdu59w1UAEvVY8WGn
          stance: supports
          locator: CBDB:101355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101355）
          source: &a1
            id: s_6QF8CPdu59w1UAEvVY8WGn
            source_type: api_record
            title: 中国历代人物传记资料库：王復原（CBDB 101355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101355&o=json
            external_identifier: CBDB:101355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_USqu9EpG8k2fmY7vG9XkCC
        subject_person_id: p_FFHMwujgmhZnxgRQsj9Jg7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復原，元人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 101355）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0YJ1OXT6bUpzV8rX4ileZA
          claim_id: c_USqu9EpG8k2fmY7vG9XkCC
          source_id: s_6QF8CPdu59w1UAEvVY8WGn
          stance: supports
          locator: CBDB:101355
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

# 王復原

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復原 | accepted |
| bio.summary | 王復原，元人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 101355） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王復原（CBDB 101355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101355&o=json)
