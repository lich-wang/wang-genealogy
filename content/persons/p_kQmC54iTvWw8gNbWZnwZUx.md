---
schema: wang-person/v1
id: p_kQmC54iTvWw8gNbWZnwZUx
status: active
merged_into: null
display_name: 王恩紱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iL6MH2tKH5nkxTtQiD39HP
        subject_person_id: p_kQmC54iTvWw8gNbWZnwZUx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩紱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GAZZBjrTd1nSFUhtQvc6M9
          claim_id: c_iL6MH2tKH5nkxTtQiD39HP
          source_id: s_TYkyFrYTH6ADGQt2Uc6ShV
          stance: supports
          locator: CBDB:637855
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637855）
          source: &a1
            id: s_TYkyFrYTH6ADGQt2Uc6ShV
            source_type: api_record
            title: 中国历代人物传记资料库：王恩紱（CBDB 637855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637855&o=json
            external_identifier: CBDB:637855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iMcLv9PbYcwpKFUACtGwrL
        subject_person_id: p_kQmC54iTvWw8gNbWZnwZUx
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
        - id: cs_tGrkDypBgNMjz63KrxZL6t
          claim_id: c_iMcLv9PbYcwpKFUACtGwrL
          source_id: s_TYkyFrYTH6ADGQt2Uc6ShV
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

# 王恩紱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩紱 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩紱（CBDB 637855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637855&o=json)
