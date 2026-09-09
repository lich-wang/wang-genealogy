---
schema: wang-person/v1
id: p_6ezuFcCP9M43QTPSk7tw3L
status: active
merged_into: null
display_name: 王侑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5DY7JHjcxuPN3iyLExoMq5
        subject_person_id: p_6ezuFcCP9M43QTPSk7tw3L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5KdewZtXuhzq5DScYnETLW
          claim_id: c_5DY7JHjcxuPN3iyLExoMq5
          source_id: s_834xm7BW95z2Bo1xiJaqAB
          stance: supports
          locator: CBDB:39530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39530）
          source: &a1
            id: s_834xm7BW95z2Bo1xiJaqAB
            source_type: api_record
            title: 中国历代人物传记资料库：王侑（CBDB 39530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39530&o=json
            external_identifier: CBDB:39530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gSHiHTm4GDTCduptibXgdF
        subject_person_id: p_6ezuFcCP9M43QTPSk7tw3L
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
        - id: cs_hYV2Sb2NzgVxT94KSMXMFc
          claim_id: c_gSHiHTm4GDTCduptibXgdF
          source_id: s_834xm7BW95z2Bo1xiJaqAB
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

# 王侑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侑 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王侑（CBDB 39530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39530&o=json)
