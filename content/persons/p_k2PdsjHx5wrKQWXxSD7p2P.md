---
schema: wang-person/v1
id: p_k2PdsjHx5wrKQWXxSD7p2P
status: active
merged_into: null
display_name: 王謹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DgNU8HnWKMMUVyGAiFgyKv
        subject_person_id: p_k2PdsjHx5wrKQWXxSD7p2P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cfB1YaQy2x8bWwa9ZAbH6x
          claim_id: c_DgNU8HnWKMMUVyGAiFgyKv
          source_id: s_vzqBxDqx4UmTN75TuiLV7u
          stance: supports
          locator: CBDB:640288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640288）
          source: &a1
            id: s_vzqBxDqx4UmTN75TuiLV7u
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 640288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640288&o=json
            external_identifier: CBDB:640288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iYfMkjMbNT2GEZobKnCKrC
        subject_person_id: p_k2PdsjHx5wrKQWXxSD7p2P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謹，清人物。籍贯登州府，入仕鄉貢舉人，曾任教諭、復設教諭。（中国历代人物传记资料库 CBDB 640288）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C4GR22PQyOddnSQtHUzxvg
          claim_id: c_iYfMkjMbNT2GEZobKnCKrC
          source_id: s_vzqBxDqx4UmTN75TuiLV7u
          stance: supports
          locator: CBDB:640288
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

# 王謹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謹 | accepted |
| bio.summary | 王謹，清人物。籍贯登州府，入仕鄉貢舉人，曾任教諭、復設教諭。（中国历代人物传记资料库 CBDB 640288） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謹（CBDB 640288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640288&o=json)
