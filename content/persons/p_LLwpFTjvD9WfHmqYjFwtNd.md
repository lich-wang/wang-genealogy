---
schema: wang-person/v1
id: p_LLwpFTjvD9WfHmqYjFwtNd
status: active
merged_into: null
display_name: 王咸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qUES3mcrjCBmAejneuuGYG
        subject_person_id: p_LLwpFTjvD9WfHmqYjFwtNd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咸
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AEe58A6sK2hDsf9qCtq3P2
          claim_id: c_qUES3mcrjCBmAejneuuGYG
          source_id: s_Rz6ScNwvvFhKQV6kvN9VrB
          stance: supports
          locator: CBDB:189363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189363）
          source: &a1
            id: s_Rz6ScNwvvFhKQV6kvN9VrB
            source_type: api_record
            title: 中国历代人物传记资料库：王咸（CBDB 189363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189363&o=json
            external_identifier: CBDB:189363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wRYrxML583HCyNzQfvEVpo
        subject_person_id: p_LLwpFTjvD9WfHmqYjFwtNd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 779年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ztpmz17s5bVyUrgJmeMcUx
          claim_id: c_wRYrxML583HCyNzQfvEVpo
          source_id: s_Rz6ScNwvvFhKQV6kvN9VrB
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
        id: c_aHeJg9yb15dG945LJRsFQF
        subject_person_id: p_LLwpFTjvD9WfHmqYjFwtNd
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
        - id: cs_iugPPuYBXXBFQMq6Nr88bn
          claim_id: c_aHeJg9yb15dG945LJRsFQF
          source_id: s_Rz6ScNwvvFhKQV6kvN9VrB
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

# 王咸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王咸 | accepted |
| death.date | 779年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王咸（CBDB 189363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189363&o=json)
