---
schema: wang-person/v1
id: p_3P7MMurQD6yAUfxDy6dUEQ
status: active
merged_into: null
display_name: 王達
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iEJGG3gt6b89AKZtSQ89t6
        subject_person_id: p_3P7MMurQD6yAUfxDy6dUEQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZMwrnkJEDTXDy9SLBViG3n
          claim_id: c_iEJGG3gt6b89AKZtSQ89t6
          source_id: s_cR9bN1d58sbx16Jq6BPTn7
          stance: supports
          locator: CBDB:304454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304454）
          source: &a1
            id: s_cR9bN1d58sbx16Jq6BPTn7
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 304454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304454&o=json
            external_identifier: CBDB:304454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dJuh2vQLs1v8uqNfypEmVs
        subject_person_id: p_3P7MMurQD6yAUfxDy6dUEQ
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
        - id: cs_GDPJmX5S9bKWeQYicTKAKy
          claim_id: c_dJuh2vQLs1v8uqNfypEmVs
          source_id: s_cR9bN1d58sbx16Jq6BPTn7
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

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 304454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304454&o=json)
