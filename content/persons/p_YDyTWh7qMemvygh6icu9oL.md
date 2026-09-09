---
schema: wang-person/v1
id: p_YDyTWh7qMemvygh6icu9oL
status: active
merged_into: null
display_name: 王善量
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bw2755W2zgZbcKVSmXe1Ek
        subject_person_id: p_YDyTWh7qMemvygh6icu9oL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善量
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CQ3cg8fM4u3ZE6cuKZDE1V
          claim_id: c_bw2755W2zgZbcKVSmXe1Ek
          source_id: s_Aa5KnrRQqz1PfM5LShj8MF
          stance: supports
          locator: CBDB:636581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636581）
          source: &a1
            id: s_Aa5KnrRQqz1PfM5LShj8MF
            source_type: api_record
            title: 中国历代人物传记资料库：王善量（CBDB 636581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636581&o=json
            external_identifier: CBDB:636581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AVU78NrLypCZpvThZJQYv6
        subject_person_id: p_YDyTWh7qMemvygh6icu9oL
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
        - id: cs_yFR8e81Q2ArGmp2ZLDZ5rd
          claim_id: c_AVU78NrLypCZpvThZJQYv6
          source_id: s_Aa5KnrRQqz1PfM5LShj8MF
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

# 王善量

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王善量 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王善量（CBDB 636581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636581&o=json)
