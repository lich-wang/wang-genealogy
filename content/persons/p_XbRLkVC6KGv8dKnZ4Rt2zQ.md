---
schema: wang-person/v1
id: p_XbRLkVC6KGv8dKnZ4Rt2zQ
status: active
merged_into: null
display_name: 王玉廷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7Qo97c83KJYy7iiCwBhWB2
        subject_person_id: p_XbRLkVC6KGv8dKnZ4Rt2zQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AXiCD9EPPBDuAsM8DTt4JM
          claim_id: c_7Qo97c83KJYy7iiCwBhWB2
          source_id: s_Q5xJNFowY2MmJPKCoiz9TC
          stance: supports
          locator: CBDB:67075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67075）
          source: &a1
            id: s_Q5xJNFowY2MmJPKCoiz9TC
            source_type: api_record
            title: 中国历代人物传记资料库：王玉廷（CBDB 67075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67075&o=json
            external_identifier: CBDB:67075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_G2fqAzmd8SJTfF2xVvFrps
        subject_person_id: p_XbRLkVC6KGv8dKnZ4Rt2zQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1768年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kkw692jHGE7sS5ptMLcFzL
          claim_id: c_G2fqAzmd8SJTfF2xVvFrps
          source_id: s_Q5xJNFowY2MmJPKCoiz9TC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKXnXhKoR3Pt25imfuXZ7g
        subject_person_id: p_XbRLkVC6KGv8dKnZ4Rt2zQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉廷（卒于1768年），清人物。籍贯武威，入仕募入軍伍，曾任副將、總兵。（中国历代人物传记资料库 CBDB 67075）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bgXWIlR9F0QJz_9Q6h-KAf
          claim_id: c_EKXnXhKoR3Pt25imfuXZ7g
          source_id: s_Q5xJNFowY2MmJPKCoiz9TC
          stance: supports
          locator: CBDB:67075
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

# 王玉廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉廷 | accepted |
| death.date | 1768年 | accepted |
| bio.summary | 王玉廷（卒于1768年），清人物。籍贯武威，入仕募入軍伍，曾任副將、總兵。（中国历代人物传记资料库 CBDB 67075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉廷（CBDB 67075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67075&o=json)
