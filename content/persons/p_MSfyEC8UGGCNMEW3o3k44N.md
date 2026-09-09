---
schema: wang-person/v1
id: p_MSfyEC8UGGCNMEW3o3k44N
status: active
merged_into: null
display_name: 王義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2U5P2WfwfgoA6CWt8eELrz
        subject_person_id: p_MSfyEC8UGGCNMEW3o3k44N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p4t3KZasbgiqY8SmwvNpLK
          claim_id: c_2U5P2WfwfgoA6CWt8eELrz
          source_id: s_JAaP6D7kRe6hpa6typMrNA
          stance: supports
          locator: CBDB:313038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313038）
          source: &a1
            id: s_JAaP6D7kRe6hpa6typMrNA
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 313038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313038&o=json
            external_identifier: CBDB:313038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BUTjS5MsGMZF7tuXZYApwm
        subject_person_id: p_MSfyEC8UGGCNMEW3o3k44N
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
        - id: cs_2NZwJf2K5QH7yF8b4FFWEi
          claim_id: c_BUTjS5MsGMZF7tuXZYApwm
          source_id: s_JAaP6D7kRe6hpa6typMrNA
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

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 313038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313038&o=json)
