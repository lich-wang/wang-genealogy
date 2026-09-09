---
schema: wang-person/v1
id: p_EBfbydRv4JZEiVZULEada1
status: active
merged_into: null
display_name: 王寬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KVysZKVF1AxCuRfaqGUQsL
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UdHS36Jsn3235D6XkwAizp
          claim_id: c_KVysZKVF1AxCuRfaqGUQsL
          source_id: s_jQthmMXgRSS42CkS1uY4BB
          stance: supports
          locator: CBDB:299909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（299909）
          source: &a1
            id: s_jQthmMXgRSS42CkS1uY4BB
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 299909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299909&o=json
            external_identifier: CBDB:299909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YfmBnuvyeC8TCpZSg3aEMW
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
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
        - id: cs_NVwXxafdxrAopFEM7E2Var
          claim_id: c_YfmBnuvyeC8TCpZSg3aEMW
          source_id: s_jQthmMXgRSS42CkS1uY4BB
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

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 299909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299909&o=json)
