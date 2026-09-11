---
schema: wang-person/v1
id: p_nQkKRPULWaG56VNQYwtQnL
status: active
merged_into: null
display_name: 王道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sVA8WkGkitZqxTesnVEnKH
        subject_person_id: p_nQkKRPULWaG56VNQYwtQnL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5NAwoaXKtD9xbsVMB6WjMy
          claim_id: c_sVA8WkGkitZqxTesnVEnKH
          source_id: s_cs212HKDGJkhLMowyR4MfB
          stance: supports
          locator: CBDB:98039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98039）
          source: &a1
            id: s_cs212HKDGJkhLMowyR4MfB
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 98039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98039&o=json
            external_identifier: CBDB:98039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GtLFYZ1f1Q9qv51NDmPxHT
        subject_person_id: p_nQkKRPULWaG56VNQYwtQnL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道，宋人物。曾任殿中省丞。（中国历代人物传记资料库 CBDB 98039）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E86ww83OWraUAK_IU4XQdb
          claim_id: c_GtLFYZ1f1Q9qv51NDmPxHT
          source_id: s_cs212HKDGJkhLMowyR4MfB
          stance: supports
          locator: CBDB:98039
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

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| bio.summary | 王道，宋人物。曾任殿中省丞。（中国历代人物传记资料库 CBDB 98039） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 98039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98039&o=json)
