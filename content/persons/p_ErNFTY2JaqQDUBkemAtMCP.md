---
schema: wang-person/v1
id: p_ErNFTY2JaqQDUBkemAtMCP
status: active
merged_into: null
display_name: 王玉峯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HzCeaQdc4TmN33mgDBSSWo
        subject_person_id: p_ErNFTY2JaqQDUBkemAtMCP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉峯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VLs6GSgNCZY63D83tvwQ68
          claim_id: c_HzCeaQdc4TmN33mgDBSSWo
          source_id: s_9hJ6LafNZgu2hMLk1qkBrY
          stance: supports
          locator: CBDB:690999
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690999）
          source: &a1
            id: s_9hJ6LafNZgu2hMLk1qkBrY
            source_type: api_record
            title: 中国历代人物传记资料库：王玉峯（CBDB 690999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690999&o=json
            external_identifier: CBDB:690999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mcPYJV2bPTxJxfYoLLt15R
        subject_person_id: p_ErNFTY2JaqQDUBkemAtMCP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉峯，明人物。籍贯松江守禦千戶所，身份为戲曲作家。（中国历代人物传记资料库 CBDB 690999）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hQRbZsKx2UhM7PFTY43DKa
          claim_id: c_mcPYJV2bPTxJxfYoLLt15R
          source_id: s_9hJ6LafNZgu2hMLk1qkBrY
          stance: supports
          locator: CBDB:690999
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

# 王玉峯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉峯 | accepted |
| bio.summary | 王玉峯，明人物。籍贯松江守禦千戶所，身份为戲曲作家。（中国历代人物传记资料库 CBDB 690999） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉峯（CBDB 690999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690999&o=json)
