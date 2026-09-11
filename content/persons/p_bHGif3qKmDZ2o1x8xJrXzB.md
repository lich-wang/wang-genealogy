---
schema: wang-person/v1
id: p_bHGif3qKmDZ2o1x8xJrXzB
status: active
merged_into: null
display_name: 王寬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V3KTr1fdpV8Ef8UfLwnZyR
        subject_person_id: p_bHGif3qKmDZ2o1x8xJrXzB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H967AQFdha57CHQn5EqYyX
          claim_id: c_V3KTr1fdpV8Ef8UfLwnZyR
          source_id: s_wx1ri5FGHSMJFSoEndi1u8
          stance: supports
          locator: CBDB:245405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245405）
          source: &a1
            id: s_wx1ri5FGHSMJFSoEndi1u8
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 245405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245405&o=json
            external_identifier: CBDB:245405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PrGLf1ASSn1MfDCFqyQBa6
        subject_person_id: p_bHGif3qKmDZ2o1x8xJrXzB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬，明人物。成化八年進士，籍贯新淦。（中国历代人物传记资料库 CBDB 245405）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eniBFWLJxHhZ--Hqed0iUJ
          claim_id: c_PrGLf1ASSn1MfDCFqyQBa6
          source_id: s_wx1ri5FGHSMJFSoEndi1u8
          stance: supports
          locator: CBDB:245405
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

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | 王寬，明人物。成化八年進士，籍贯新淦。（中国历代人物传记资料库 CBDB 245405） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 245405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245405&o=json)
