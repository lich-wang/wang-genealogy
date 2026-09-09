---
schema: wang-person/v1
id: p_q9Y1gvKhU9rBtKZedDBpwp
status: active
merged_into: null
display_name: 王敳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G6AmBiQeUM54mz8Aw4RqrA
        subject_person_id: p_q9Y1gvKhU9rBtKZedDBpwp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oJwLzN5rdXdXPyVdmvGGso
          claim_id: c_G6AmBiQeUM54mz8Aw4RqrA
          source_id: s_rm1YGCubDMLoMekH7Nbf4S
          stance: supports
          locator: CBDB:638206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638206）
          source: &a1
            id: s_rm1YGCubDMLoMekH7Nbf4S
            source_type: api_record
            title: 中国历代人物传记资料库：王敳（CBDB 638206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638206&o=json
            external_identifier: CBDB:638206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dhxY6C5D7gWMDNs2z4Wek2
        subject_person_id: p_q9Y1gvKhU9rBtKZedDBpwp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wp1JNfMfSf7Y7pZmx2MvXA
          claim_id: c_dhxY6C5D7gWMDNs2z4Wek2
          source_id: s_rm1YGCubDMLoMekH7Nbf4S
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

# 王敳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敳（CBDB 638206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638206&o=json)
