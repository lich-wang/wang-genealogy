---
schema: wang-person/v1
id: p_t5bYFZ1u3mM3Gh1hHimQP7
status: active
merged_into: null
display_name: 王國華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kJSXWpC73LupuJnYu2i73d
        subject_person_id: p_t5bYFZ1u3mM3Gh1hHimQP7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ieA5hC2tszJ9y6nqJPp578
          claim_id: c_kJSXWpC73LupuJnYu2i73d
          source_id: s_EGYMerEodFi9KRAT4cW3LB
          stance: supports
          locator: CBDB:92034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92034）
          source: &a1
            id: s_EGYMerEodFi9KRAT4cW3LB
            source_type: api_record
            title: 中国历代人物传记资料库：王國華（CBDB 92034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92034&o=json
            external_identifier: CBDB:92034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WgaMv7UuJQK9RjQQq8VHbQ
        subject_person_id: p_t5bYFZ1u3mM3Gh1hHimQP7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJfs5MZY8WUNFCq87pA8Nm
          claim_id: c_WgaMv7UuJQK9RjQQq8VHbQ
          source_id: s_EGYMerEodFi9KRAT4cW3LB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王國華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國華 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國華（CBDB 92034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92034&o=json)
