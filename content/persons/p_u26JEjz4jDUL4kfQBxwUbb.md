---
schema: wang-person/v1
id: p_u26JEjz4jDUL4kfQBxwUbb
status: active
merged_into: null
display_name: 王筌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_feSkaQGSPXiJB1imqEKk7t
        subject_person_id: p_u26JEjz4jDUL4kfQBxwUbb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wcup63m3dhkGYcKUeANVc2
          claim_id: c_feSkaQGSPXiJB1imqEKk7t
          source_id: s_ctmpnxga9HTYxSM3fCNHny
          stance: supports
          locator: CBDB:639716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639716）
          source: &a1
            id: s_ctmpnxga9HTYxSM3fCNHny
            source_type: api_record
            title: 中国历代人物传记资料库：王筌（CBDB 639716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639716&o=json
            external_identifier: CBDB:639716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GcubDqS2zLiNs2NVVH6r8e
        subject_person_id: p_u26JEjz4jDUL4kfQBxwUbb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王筌，清人物。籍贯綏陽，入仕貢生: 拔貢，曾任州判。（中国历代人物传记资料库 CBDB 639716）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8I7OMTZ8fzVKKrBmSRJlJf
          claim_id: c_GcubDqS2zLiNs2NVVH6r8e
          source_id: s_ctmpnxga9HTYxSM3fCNHny
          stance: supports
          locator: CBDB:639716
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

# 王筌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筌 | accepted |
| bio.summary | 王筌，清人物。籍贯綏陽，入仕貢生: 拔貢，曾任州判。（中国历代人物传记资料库 CBDB 639716） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王筌（CBDB 639716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639716&o=json)
