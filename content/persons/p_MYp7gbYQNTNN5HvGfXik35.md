---
schema: wang-person/v1
id: p_MYp7gbYQNTNN5HvGfXik35
status: active
merged_into: null
display_name: 王道亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cJCZ3ha5331d8Atbm2wuS5
        subject_person_id: p_MYp7gbYQNTNN5HvGfXik35
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XrHieTeXdjutMF8JJFsNAb
          claim_id: c_cJCZ3ha5331d8Atbm2wuS5
          source_id: s_6E2DJ8ZidHmkWqxW67Gk1C
          stance: supports
          locator: CBDB:467258
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467258）
          source: &a1
            id: s_6E2DJ8ZidHmkWqxW67Gk1C
            source_type: api_record
            title: 中国历代人物传记资料库：王道亨（CBDB 467258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467258&o=json
            external_identifier: CBDB:467258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GeVPshBDEpcotAq7XA4eHL
        subject_person_id: p_MYp7gbYQNTNN5HvGfXik35
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道亨，明人物。曾任千戶。（中国历代人物传记资料库 CBDB 467258）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yz_v4dWdwXLT40BU2aVXKy
          claim_id: c_GeVPshBDEpcotAq7XA4eHL
          source_id: s_6E2DJ8ZidHmkWqxW67Gk1C
          stance: supports
          locator: CBDB:467258
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

# 王道亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道亨 | accepted |
| bio.summary | 王道亨，明人物。曾任千戶。（中国历代人物传记资料库 CBDB 467258） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道亨（CBDB 467258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467258&o=json)
