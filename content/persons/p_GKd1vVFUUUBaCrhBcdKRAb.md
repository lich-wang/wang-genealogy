---
schema: wang-person/v1
id: p_GKd1vVFUUUBaCrhBcdKRAb
status: active
merged_into: null
display_name: 王機
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tV8BWSWfoFNJv5gSpudh6b
        subject_person_id: p_GKd1vVFUUUBaCrhBcdKRAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zFdyZzqL8QDz1g22N3Qdjc
          claim_id: c_tV8BWSWfoFNJv5gSpudh6b
          source_id: s_pk2LBpSg67MDNJ5SeU244L
          stance: supports
          locator: CBDB:71058
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71058）
          source: &a1
            id: s_pk2LBpSg67MDNJ5SeU244L
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 71058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71058&o=json
            external_identifier: CBDB:71058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5EyRGEu5A3F1wKH95Dzn2f
        subject_person_id: p_GKd1vVFUUUBaCrhBcdKRAb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1699年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ead7zRPGyWFnUyKQUrZHNp
          claim_id: c_5EyRGEu5A3F1wKH95Dzn2f
          source_id: s_pk2LBpSg67MDNJ5SeU244L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JFAPMXdd83VkQU1KX65SMB
        subject_person_id: p_GKd1vVFUUUBaCrhBcdKRAb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1773年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yk13bLFazBuSre7rcMmq5Z
          claim_id: c_JFAPMXdd83VkQU1KX65SMB
          source_id: s_pk2LBpSg67MDNJ5SeU244L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6RoxMHm3D37S9cdu36vBLp
        subject_person_id: p_GKd1vVFUUUBaCrhBcdKRAb
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
        - id: cs_ncoY5R22h6LBzrGcxMqcdJ
          claim_id: c_6RoxMHm3D37S9cdu36vBLp
          source_id: s_pk2LBpSg67MDNJ5SeU244L
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

# 王機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王機 | accepted |
| birth.date | 1699年 | accepted |
| death.date | 1773年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王機（CBDB 71058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71058&o=json)
