---
schema: wang-person/v1
id: p_zb31JbxMcCKstJdRF4Pm1n
status: active
merged_into: null
display_name: 王陟瞻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YHu7jqGjUHxVe46HNWacUK
        subject_person_id: p_zb31JbxMcCKstJdRF4Pm1n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陟瞻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DXvZfF7W6wwQNCo741nV1Z
          claim_id: c_YHu7jqGjUHxVe46HNWacUK
          source_id: s_xu3s6J668oL4R5Lo2szsXF
          stance: supports
          locator: CBDB:640766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640766）
          source: &a1
            id: s_xu3s6J668oL4R5Lo2szsXF
            source_type: api_record
            title: 中国历代人物传记资料库：王陟瞻（CBDB 640766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640766&o=json
            external_identifier: CBDB:640766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_63JH4K5MUUmtvbG77bFmyf
        subject_person_id: p_zb31JbxMcCKstJdRF4Pm1n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陟瞻，清人物。籍贯錦縣，曾任訓導。（中国历代人物传记资料库 CBDB 640766）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9tb3mgqhq8qNPPp6Id-b3T
          claim_id: c_63JH4K5MUUmtvbG77bFmyf
          source_id: s_xu3s6J668oL4R5Lo2szsXF
          stance: supports
          locator: CBDB:640766
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

# 王陟瞻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陟瞻 | accepted |
| bio.summary | 王陟瞻，清人物。籍贯錦縣，曾任訓導。（中国历代人物传记资料库 CBDB 640766） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陟瞻（CBDB 640766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640766&o=json)
