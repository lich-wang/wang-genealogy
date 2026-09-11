---
schema: wang-person/v1
id: p_Z2dzASTzEFzCvxNk31CAkL
status: active
merged_into: null
display_name: 王緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H86S5KWyE9DHqQ36EhAceJ
        subject_person_id: p_Z2dzASTzEFzCvxNk31CAkL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WbfF55sQLnTMtBfUYn6fyT
          claim_id: c_H86S5KWyE9DHqQ36EhAceJ
          source_id: s_Vgy6AxS3CqmoX9zdpQH71F
          stance: supports
          locator: CBDB:327948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327948）
          source: &a1
            id: s_Vgy6AxS3CqmoX9zdpQH71F
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 327948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327948&o=json
            external_identifier: CBDB:327948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c2eNnS7PBqgrx3dv3W61N8
        subject_person_id: p_Z2dzASTzEFzCvxNk31CAkL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緒，明人物。嘉靖四十一年進士，籍贯文安，曾任倉副使。（中国历代人物传记资料库 CBDB 327948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-g3QpC1CUse0pnyzGvJR83
          claim_id: c_c2eNnS7PBqgrx3dv3W61N8
          source_id: s_Vgy6AxS3CqmoX9zdpQH71F
          stance: supports
          locator: CBDB:327948
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緒 | accepted |
| bio.summary | 王緒，明人物。嘉靖四十一年進士，籍贯文安，曾任倉副使。（中国历代人物传记资料库 CBDB 327948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緒（CBDB 327948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327948&o=json)
