---
schema: wang-person/v1
id: p_wr25g7bgwivCydFVhTHc9D
status: active
merged_into: null
display_name: 王松喬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EUQC868DS73hHtL6hywpoM
        subject_person_id: p_wr25g7bgwivCydFVhTHc9D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松喬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K3gJo8xZ9rbj1LbA7H9DvQ
          claim_id: c_EUQC868DS73hHtL6hywpoM
          source_id: s_yCpmBqnFqC6bendCro5zcG
          stance: supports
          locator: CBDB:638677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638677）
          source: &a1
            id: s_yCpmBqnFqC6bendCro5zcG
            source_type: api_record
            title: 中国历代人物传记资料库：王松喬（CBDB 638677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638677&o=json
            external_identifier: CBDB:638677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XmwcTV5Ht7fEignGCvng6c
        subject_person_id: p_wr25g7bgwivCydFVhTHc9D
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
        - id: cs_43m5JptyXpmP45GQerkPye
          claim_id: c_XmwcTV5Ht7fEignGCvng6c
          source_id: s_yCpmBqnFqC6bendCro5zcG
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

# 王松喬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松喬 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王松喬（CBDB 638677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638677&o=json)
