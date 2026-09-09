---
schema: wang-person/v1
id: p_ByHYu8sP64xpWmyVhoYZVc
status: active
merged_into: null
display_name: 王樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3HCTjHfD51F75ERd5m1oWT
        subject_person_id: p_ByHYu8sP64xpWmyVhoYZVc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FvVTeAvyqiFV6RvZpny51G
          claim_id: c_3HCTjHfD51F75ERd5m1oWT
          source_id: s_sdBPgmgW8L65jXJEjjcM4C
          stance: supports
          locator: CBDB:382943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382943）
          source: &a1
            id: s_sdBPgmgW8L65jXJEjjcM4C
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 382943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382943&o=json
            external_identifier: CBDB:382943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wUbJCTC9vdJtScjQfBLNC9
        subject_person_id: p_ByHYu8sP64xpWmyVhoYZVc
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
        - id: cs_rBxt7k2iJyH9oqAb1rAPCE
          claim_id: c_wUbJCTC9vdJtScjQfBLNC9
          source_id: s_sdBPgmgW8L65jXJEjjcM4C
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

# 王樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樞 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樞（CBDB 382943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382943&o=json)
