---
schema: wang-person/v1
id: p_Q1jg66jAxrN5BExJ1CmBJZ
status: active
merged_into: null
display_name: 王日珠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UnkPpHth9N6XdyVCTYPUBw
        subject_person_id: p_Q1jg66jAxrN5BExJ1CmBJZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日珠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tGLBBtGrnfGZS17AVUW7Yy
          claim_id: c_UnkPpHth9N6XdyVCTYPUBw
          source_id: s_9gPvYQN4bbL7ni6d4nUSgD
          stance: supports
          locator: CBDB:638336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638336）
          source: &a1
            id: s_9gPvYQN4bbL7ni6d4nUSgD
            source_type: api_record
            title: 中国历代人物传记资料库：王日珠（CBDB 638336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638336&o=json
            external_identifier: CBDB:638336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q5MT4USXnQAKAzuzBRr1ni
        subject_person_id: p_Q1jg66jAxrN5BExJ1CmBJZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日珠，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 638336）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TQLeTTAETLDG41_7RXZpnd
          claim_id: c_Q5MT4USXnQAKAzuzBRr1ni
          source_id: s_9gPvYQN4bbL7ni6d4nUSgD
          stance: supports
          locator: CBDB:638336
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

# 王日珠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日珠 | accepted |
| bio.summary | 王日珠，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 638336） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王日珠（CBDB 638336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638336&o=json)
