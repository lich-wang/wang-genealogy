---
schema: wang-person/v1
id: p_8n8UmF3XQ3S2ADjRhxtEUU
status: active
merged_into: null
display_name: 王道張
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pa7XCFF6eXyw4LoZd9ewGy
        subject_person_id: p_8n8UmF3XQ3S2ADjRhxtEUU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道張
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TF3nUvFPe5uP6vkQhsG8M3
          claim_id: c_pa7XCFF6eXyw4LoZd9ewGy
          source_id: s_AM3679ij33dQ6ZT8EbLSRT
          stance: supports
          locator: CBDB:640453
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640453）
          source: &a1
            id: s_AM3679ij33dQ6ZT8EbLSRT
            source_type: api_record
            title: 中国历代人物传记资料库：王道張（CBDB 640453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640453&o=json
            external_identifier: CBDB:640453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JAQfnzuiQcJAabNLVYUv4M
        subject_person_id: p_8n8UmF3XQ3S2ADjRhxtEUU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道張，清人物。籍贯德安，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640453）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7d5UxsThHAYy2e-O3cfND1
          claim_id: c_JAQfnzuiQcJAabNLVYUv4M
          source_id: s_AM3679ij33dQ6ZT8EbLSRT
          stance: supports
          locator: CBDB:640453
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

# 王道張

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道張 | accepted |
| bio.summary | 王道張，清人物。籍贯德安，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640453） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道張（CBDB 640453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640453&o=json)
