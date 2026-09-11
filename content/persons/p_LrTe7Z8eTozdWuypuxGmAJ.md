---
schema: wang-person/v1
id: p_LrTe7Z8eTozdWuypuxGmAJ
status: active
merged_into: null
display_name: 王宗牧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uLdi5FcfySpmxXEuJmTdm4
        subject_person_id: p_LrTe7Z8eTozdWuypuxGmAJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗牧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cGpAGuf26MV5HUuHNoUiS1
          claim_id: c_uLdi5FcfySpmxXEuJmTdm4
          source_id: s_iwz6de6dXLJRPCqgZrLF2K
          stance: supports
          locator: CBDB:637112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637112）
          source: &a1
            id: s_iwz6de6dXLJRPCqgZrLF2K
            source_type: api_record
            title: 中国历代人物传记资料库：王宗牧（CBDB 637112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637112&o=json
            external_identifier: CBDB:637112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6NrNZkt5RmNUbQNoG3DjAR
        subject_person_id: p_LrTe7Z8eTozdWuypuxGmAJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗牧，清人物。籍贯大定府直轄地方，曾任學正、復設訓導。（中国历代人物传记资料库 CBDB 637112）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lSaYnMmvSEH-FcJQDyKdSs
          claim_id: c_6NrNZkt5RmNUbQNoG3DjAR
          source_id: s_iwz6de6dXLJRPCqgZrLF2K
          stance: supports
          locator: CBDB:637112
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

# 王宗牧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗牧 | accepted |
| bio.summary | 王宗牧，清人物。籍贯大定府直轄地方，曾任學正、復設訓導。（中国历代人物传记资料库 CBDB 637112） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗牧（CBDB 637112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637112&o=json)
