---
schema: wang-person/v1
id: p_Rbe8EfV2Kk1u1FzFBGv57m
status: active
merged_into: null
display_name: 王士捷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DdGprRB6uKbGywuGcPzEhT
        subject_person_id: p_Rbe8EfV2Kk1u1FzFBGv57m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士捷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FN7wTnAeD3wgPo4y8Q8fyr
          claim_id: c_DdGprRB6uKbGywuGcPzEhT
          source_id: s_JFJDNktsJs4SEHEukJk7UG
          stance: supports
          locator: CBDB:342940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342940）
          source: &a1
            id: s_JFJDNktsJs4SEHEukJk7UG
            source_type: api_record
            title: 中国历代人物传记资料库：王士捷（CBDB 342940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342940&o=json
            external_identifier: CBDB:342940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5VhCguKZPbewVNoEdgJ6Ca
        subject_person_id: p_Rbe8EfV2Kk1u1FzFBGv57m
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
        - id: cs_Mg36qKddxSrmZaez7WQ3wJ
          claim_id: c_5VhCguKZPbewVNoEdgJ6Ca
          source_id: s_JFJDNktsJs4SEHEukJk7UG
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

# 王士捷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士捷 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士捷（CBDB 342940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342940&o=json)
