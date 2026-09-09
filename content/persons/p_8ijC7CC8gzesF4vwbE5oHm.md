---
schema: wang-person/v1
id: p_8ijC7CC8gzesF4vwbE5oHm
status: active
merged_into: null
display_name: 王義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2bWyGaQPPggpbjV4NZ245U
        subject_person_id: p_8ijC7CC8gzesF4vwbE5oHm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GBmev5Trh51LctfwrphMRq
          claim_id: c_2bWyGaQPPggpbjV4NZ245U
          source_id: s_bby57SduSivRTz5wLboQLP
          stance: supports
          locator: CBDB:149686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149686）
          source: &a1
            id: s_bby57SduSivRTz5wLboQLP
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 149686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149686&o=json
            external_identifier: CBDB:149686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VRuMWq4DRog8ru93GLFbMg
        subject_person_id: p_8ijC7CC8gzesF4vwbE5oHm
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
        - id: cs_7fX7PaG75UBGKGAEy4BBaJ
          claim_id: c_VRuMWq4DRog8ru93GLFbMg
          source_id: s_bby57SduSivRTz5wLboQLP
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

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 149686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149686&o=json)
