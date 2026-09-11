---
schema: wang-person/v1
id: p_QCJxb8h3NRibHtxuQi519v
status: active
merged_into: null
display_name: 王銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Tj8qumrqBxo8BjFeJp7QU
        subject_person_id: p_QCJxb8h3NRibHtxuQi519v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_byz5vriSZ8oSEJjL9AiBfc
          claim_id: c_6Tj8qumrqBxo8BjFeJp7QU
          source_id: s_5nMhoeL63MTbC1efZmNSWH
          stance: supports
          locator: CBDB:477522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477522）
          source: &a1
            id: s_5nMhoeL63MTbC1efZmNSWH
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 477522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477522&o=json
            external_identifier: CBDB:477522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9oGPm1KXDW8LFCBfvTStoJ
        subject_person_id: p_QCJxb8h3NRibHtxuQi519v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘，明人物。入仕監生，曾任吏目。（中国历代人物传记资料库 CBDB 477522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aPiE0l_eM3sH8QcpG_xuRc
          claim_id: c_9oGPm1KXDW8LFCBfvTStoJ
          source_id: s_5nMhoeL63MTbC1efZmNSWH
          stance: supports
          locator: CBDB:477522
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

# 王銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘 | accepted |
| bio.summary | 王銘，明人物。入仕監生，曾任吏目。（中国历代人物传记资料库 CBDB 477522） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銘（CBDB 477522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477522&o=json)
