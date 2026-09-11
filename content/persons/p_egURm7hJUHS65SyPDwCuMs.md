---
schema: wang-person/v1
id: p_egURm7hJUHS65SyPDwCuMs
status: active
merged_into: null
display_name: 王汝玢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D3wiE6884yZ2vbwTwcJN4D
        subject_person_id: p_egURm7hJUHS65SyPDwCuMs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝玢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6L9L4SjbDKpGhRsFnCVYug
          claim_id: c_D3wiE6884yZ2vbwTwcJN4D
          source_id: s_uBkk215ofGbyRWDUo2ZYxL
          stance: supports
          locator: CBDB:639022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639022）
          source: &a1
            id: s_uBkk215ofGbyRWDUo2ZYxL
            source_type: api_record
            title: 中国历代人物传记资料库：王汝玢（CBDB 639022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639022&o=json
            external_identifier: CBDB:639022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y6FVrZm8mXB1HVGfMZmCDV
        subject_person_id: p_egURm7hJUHS65SyPDwCuMs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝玢，清人物。籍贯汾州府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 639022）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IBypa9INuenDQJ-OAP7DAm
          claim_id: c_y6FVrZm8mXB1HVGfMZmCDV
          source_id: s_uBkk215ofGbyRWDUo2ZYxL
          stance: supports
          locator: CBDB:639022
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

# 王汝玢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝玢 | accepted |
| bio.summary | 王汝玢，清人物。籍贯汾州府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 639022） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝玢（CBDB 639022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639022&o=json)
