---
schema: wang-person/v1
id: p_9yH6DWxULeZLZW16cs2H8L
status: active
merged_into: null
display_name: 王琚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XM6vYdcv5txAzKMxsxgLxP
        subject_person_id: p_9yH6DWxULeZLZW16cs2H8L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BG723ZMuBHY4b3eJqTvND7
          claim_id: c_XM6vYdcv5txAzKMxsxgLxP
          source_id: s_38T35UCpD4j7AJCYGLkEsC
          stance: supports
          locator: CBDB:467361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467361）
          source: &a1
            id: s_38T35UCpD4j7AJCYGLkEsC
            source_type: api_record
            title: 中国历代人物传记资料库：王琚（CBDB 467361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467361&o=json
            external_identifier: CBDB:467361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ngQQHsE779pWqjKQHt5XeN
        subject_person_id: p_9yH6DWxULeZLZW16cs2H8L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚，元人物。曾任御史大夫。（中国历代人物传记资料库 CBDB 467361）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uO27mUVQnJslrQYuSTvhS1
          claim_id: c_ngQQHsE779pWqjKQHt5XeN
          source_id: s_38T35UCpD4j7AJCYGLkEsC
          stance: supports
          locator: CBDB:467361
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

# 王琚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琚 | accepted |
| bio.summary | 王琚，元人物。曾任御史大夫。（中国历代人物传记资料库 CBDB 467361） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琚（CBDB 467361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467361&o=json)
