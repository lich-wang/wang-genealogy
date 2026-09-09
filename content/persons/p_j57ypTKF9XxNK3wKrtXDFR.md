---
schema: wang-person/v1
id: p_j57ypTKF9XxNK3wKrtXDFR
status: active
merged_into: null
display_name: 王維德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_suyi9QtwYsaYhKQnGEG3PY
        subject_person_id: p_j57ypTKF9XxNK3wKrtXDFR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iEXGc7vKr4SLGe4ZsDEyQk
          claim_id: c_suyi9QtwYsaYhKQnGEG3PY
          source_id: s_fQZgALzv4efevJjuZwahVk
          stance: supports
          locator: CBDB:338299
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338299）
          source: &a1
            id: s_fQZgALzv4efevJjuZwahVk
            source_type: api_record
            title: 中国历代人物传记资料库：王維德（CBDB 338299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338299&o=json
            external_identifier: CBDB:338299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GCcNgpkRgFcfGnU4Logj9j
        subject_person_id: p_j57ypTKF9XxNK3wKrtXDFR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1850年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qTXsNMwfCK1FLEHH3WUaSw
          claim_id: c_GCcNgpkRgFcfGnU4Logj9j
          source_id: s_fQZgALzv4efevJjuZwahVk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a3XZpA7xGqf6SJRefVkuKf
        subject_person_id: p_j57ypTKF9XxNK3wKrtXDFR
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
        - id: cs_v8BTKVVeeNreygdEwFTRAR
          claim_id: c_a3XZpA7xGqf6SJRefVkuKf
          source_id: s_fQZgALzv4efevJjuZwahVk
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

# 王維德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維德 | accepted |
| birth.date | 1850年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維德（CBDB 338299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338299&o=json)
