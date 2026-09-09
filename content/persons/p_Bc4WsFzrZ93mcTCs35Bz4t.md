---
schema: wang-person/v1
id: p_Bc4WsFzrZ93mcTCs35Bz4t
status: active
merged_into: null
display_name: 王秋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uxYC8QpZ4G7Z6hWW6sCj9X
        subject_person_id: p_Bc4WsFzrZ93mcTCs35Bz4t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yXpFKDhPv48hfeLxDeeGVy
          claim_id: c_uxYC8QpZ4G7Z6hWW6sCj9X
          source_id: s_AENAtp8QZYdbAsLA48uaCC
          stance: supports
          locator: CBDB:166890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166890）
          source: &a1
            id: s_AENAtp8QZYdbAsLA48uaCC
            source_type: api_record
            title: 中国历代人物传记资料库：王秋（CBDB 166890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166890&o=json
            external_identifier: CBDB:166890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nfXqUmM1tyHH7dKeubq85A
        subject_person_id: p_Bc4WsFzrZ93mcTCs35Bz4t
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
        - id: cs_7hhuBeDJipN9VPQ2NUevkR
          claim_id: c_nfXqUmM1tyHH7dKeubq85A
          source_id: s_AENAtp8QZYdbAsLA48uaCC
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

# 王秋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秋 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秋（CBDB 166890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166890&o=json)
