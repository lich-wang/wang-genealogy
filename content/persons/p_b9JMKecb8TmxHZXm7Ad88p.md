---
schema: wang-person/v1
id: p_b9JMKecb8TmxHZXm7Ad88p
status: active
merged_into: null
display_name: 王儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gFEJ5YWL4wVmw1uBFHzAdw
        subject_person_id: p_b9JMKecb8TmxHZXm7Ad88p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h2Cb8LPN8dgxBdUBmzBsSh
          claim_id: c_gFEJ5YWL4wVmw1uBFHzAdw
          source_id: s_49jStaEAvsEypfAgM56vhH
          stance: supports
          locator: CBDB:692899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692899）
          source: &a1
            id: s_49jStaEAvsEypfAgM56vhH
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 692899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692899&o=json
            external_identifier: CBDB:692899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2gVh3jiFADdVFzhmDeQJzm
        subject_person_id: p_b9JMKecb8TmxHZXm7Ad88p
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
        - id: cs_U5WkeQro8EGPyVu4hz7v3z
          claim_id: c_2gVh3jiFADdVFzhmDeQJzm
          source_id: s_49jStaEAvsEypfAgM56vhH
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

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 692899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692899&o=json)
