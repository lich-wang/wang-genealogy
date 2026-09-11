---
schema: wang-person/v1
id: p_bbY6BksPxzNen3V4KcsgPd
status: active
merged_into: null
display_name: 王縉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3GCN3fta6SG6FFLuDWr4Ln
        subject_person_id: p_bbY6BksPxzNen3V4KcsgPd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ivv1w1SK7D7BtFiz38wgTv
          claim_id: c_3GCN3fta6SG6FFLuDWr4Ln
          source_id: s_ANa69h7m5VMpB6sWRkobkq
          stance: supports
          locator: CBDB:269709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269709）
          source: &a1
            id: s_ANa69h7m5VMpB6sWRkobkq
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 269709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269709&o=json
            external_identifier: CBDB:269709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cg34MhYBe5d4HN3WJGFyyL
        subject_person_id: p_bbY6BksPxzNen3V4KcsgPd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉，明人物。弘治九年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 269709）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cd7hwBBsk1yZsMTW_D09IE
          claim_id: c_cg34MhYBe5d4HN3WJGFyyL
          source_id: s_ANa69h7m5VMpB6sWRkobkq
          stance: supports
          locator: CBDB:269709
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

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| bio.summary | 王縉，明人物。弘治九年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 269709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 269709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269709&o=json)
