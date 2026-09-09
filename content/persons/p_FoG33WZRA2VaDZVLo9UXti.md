---
schema: wang-person/v1
id: p_FoG33WZRA2VaDZVLo9UXti
status: active
merged_into: null
display_name: 王仙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HmL73aAPzAZJfwC9zQGhMb
        subject_person_id: p_FoG33WZRA2VaDZVLo9UXti
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bH1Sr7GvrfdQM8ncN9izvP
          claim_id: c_HmL73aAPzAZJfwC9zQGhMb
          source_id: s_89BhHxXG23hFEMuMB8PUmh
          stance: supports
          locator: CBDB:169042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169042）
          source: &a1
            id: s_89BhHxXG23hFEMuMB8PUmh
            source_type: api_record
            title: 中国历代人物传记资料库：王仙（CBDB 169042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169042&o=json
            external_identifier: CBDB:169042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7i6H14t2sgjAjsBBHePFr5
        subject_person_id: p_FoG33WZRA2VaDZVLo9UXti
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
        - id: cs_2aBmzt2Qkd6gSTUm6LKNXD
          claim_id: c_7i6H14t2sgjAjsBBHePFr5
          source_id: s_89BhHxXG23hFEMuMB8PUmh
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

# 王仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仙 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仙（CBDB 169042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169042&o=json)
