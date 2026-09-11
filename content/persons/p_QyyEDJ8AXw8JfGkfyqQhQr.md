---
schema: wang-person/v1
id: p_QyyEDJ8AXw8JfGkfyqQhQr
status: active
merged_into: null
display_name: 王藉登
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zHft2xncMQnHNLuCXpCsCy
        subject_person_id: p_QyyEDJ8AXw8JfGkfyqQhQr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藉登
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vFdtsyJiV3sr14cKDqxupY
          claim_id: c_zHft2xncMQnHNLuCXpCsCy
          source_id: s_a1gG9A1hUMXEiqPXW1ArMU
          stance: supports
          locator: CBDB:684506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（684506）
          source: &a1
            id: s_a1gG9A1hUMXEiqPXW1ArMU
            source_type: api_record
            title: 中国历代人物传记资料库：王藉登（CBDB 684506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684506&o=json
            external_identifier: CBDB:684506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDyJsJCs8R9e1S2PvBoZff
        subject_person_id: p_QyyEDJ8AXw8JfGkfyqQhQr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藉登，清人物。籍贯歙縣。（中国历代人物传记资料库 CBDB 684506）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PrB7t2kjV9YXIe8nttTdKa
          claim_id: c_GDyJsJCs8R9e1S2PvBoZff
          source_id: s_a1gG9A1hUMXEiqPXW1ArMU
          stance: supports
          locator: CBDB:684506
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

# 王藉登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藉登 | accepted |
| bio.summary | 王藉登，清人物。籍贯歙縣。（中国历代人物传记资料库 CBDB 684506） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藉登（CBDB 684506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684506&o=json)
