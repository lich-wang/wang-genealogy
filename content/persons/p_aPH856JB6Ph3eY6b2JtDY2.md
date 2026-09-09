---
schema: wang-person/v1
id: p_aPH856JB6Ph3eY6b2JtDY2
status: active
merged_into: null
display_name: 王倫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gnjy6C68wsoGikjWDsLBiF
        subject_person_id: p_aPH856JB6Ph3eY6b2JtDY2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6y68XseoEWzYypVdpYjuDp
          claim_id: c_gnjy6C68wsoGikjWDsLBiF
          source_id: s_CU63iog422hUj7Lt31szhq
          stance: supports
          locator: CBDB:445543
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445543）
          source: &a1
            id: s_CU63iog422hUj7Lt31szhq
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 445543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445543&o=json
            external_identifier: CBDB:445543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8MDqHVga8t3TTH1FLagK6G
        subject_person_id: p_aPH856JB6Ph3eY6b2JtDY2
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
        - id: cs_gq5HMwGPVRLY1CyHsWL9y8
          claim_id: c_8MDqHVga8t3TTH1FLagK6G
          source_id: s_CU63iog422hUj7Lt31szhq
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

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 445543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445543&o=json)
