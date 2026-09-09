---
schema: wang-person/v1
id: p_QGcnHNqdSRSYHdDLiizyik
status: active
merged_into: null
display_name: 王琮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pCcvW9TWYpctKZf2k3ZDM2
        subject_person_id: p_QGcnHNqdSRSYHdDLiizyik
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N31kFFJW2i6pgvHnCvCA1B
          claim_id: c_pCcvW9TWYpctKZf2k3ZDM2
          source_id: s_rooxDA3RJw2qpYzX6JEEg8
          stance: supports
          locator: CBDB:339465
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（339465）
          source: &a1
            id: s_rooxDA3RJw2qpYzX6JEEg8
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 339465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339465&o=json
            external_identifier: CBDB:339465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HqFEG3fFtNzmfF6wTrgMgc
        subject_person_id: p_QGcnHNqdSRSYHdDLiizyik
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1212年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UJQ4bytkKvzeJGtWKrSFB2
          claim_id: c_HqFEG3fFtNzmfF6wTrgMgc
          source_id: s_rooxDA3RJw2qpYzX6JEEg8
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
        id: c_qZkgU74LNTcFYx7R5G89gy
        subject_person_id: p_QGcnHNqdSRSYHdDLiizyik
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
        - id: cs_5yWuSNJuNUF52uESjQZ7he
          claim_id: c_qZkgU74LNTcFYx7R5G89gy
          source_id: s_rooxDA3RJw2qpYzX6JEEg8
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

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| birth.date | 1212年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 339465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339465&o=json)
