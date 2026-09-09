---
schema: wang-person/v1
id: p_K3n9PZ2ssZUacHBjPMaC6V
status: active
merged_into: null
display_name: 王皙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wdNCQds8HCqQaqjXwkQPJi
        subject_person_id: p_K3n9PZ2ssZUacHBjPMaC6V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jEjWNErBCg5S3h5gTX7PQK
          claim_id: c_wdNCQds8HCqQaqjXwkQPJi
          source_id: s_ewJm6kqG3G99SUWJp3rCzP
          stance: supports
          locator: CBDB:38388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38388）
          source: &a1
            id: s_ewJm6kqG3G99SUWJp3rCzP
            source_type: api_record
            title: 中国历代人物传记资料库：王皙（CBDB 38388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38388&o=json
            external_identifier: CBDB:38388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8LV8S1PhbphGc9fp9xG8Lp
        subject_person_id: p_K3n9PZ2ssZUacHBjPMaC6V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k33tVxMyWsgiazDXBhxTDw
          claim_id: c_8LV8S1PhbphGc9fp9xG8Lp
          source_id: s_ewJm6kqG3G99SUWJp3rCzP
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

# 王皙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王皙 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王皙（CBDB 38388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38388&o=json)
