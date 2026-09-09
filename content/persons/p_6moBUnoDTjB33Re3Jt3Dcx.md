---
schema: wang-person/v1
id: p_6moBUnoDTjB33Re3Jt3Dcx
status: active
merged_into: null
display_name: 王朝佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G1qFCcK7RDt5TEA3d6B9YA
        subject_person_id: p_6moBUnoDTjB33Re3Jt3Dcx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MbYNSZhA9BeLxqzNFVufPr
          claim_id: c_G1qFCcK7RDt5TEA3d6B9YA
          source_id: s_KfMu5AaHM8abpxqz2eXy7x
          stance: supports
          locator: CBDB:126719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126719）
          source: &a1
            id: s_KfMu5AaHM8abpxqz2eXy7x
            source_type: api_record
            title: 中国历代人物传记资料库：王朝佐（CBDB 126719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126719&o=json
            external_identifier: CBDB:126719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g3Z6od7tiuG9sGdDXvH2C6
        subject_person_id: p_6moBUnoDTjB33Re3Jt3Dcx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FHU174P68SBc86Te2gtoqM
          claim_id: c_g3Z6od7tiuG9sGdDXvH2C6
          source_id: s_KfMu5AaHM8abpxqz2eXy7x
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

# 王朝佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝佐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝佐（CBDB 126719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126719&o=json)
