---
schema: wang-person/v1
id: p_KoV2VEL2sJmEq5epLYGxmu
status: active
merged_into: null
display_name: 王允清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TNeA51YK7ndmDL9g2wVQx7
        subject_person_id: p_KoV2VEL2sJmEq5epLYGxmu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9btpyKUvKx55WCCRcqauw9
          claim_id: c_TNeA51YK7ndmDL9g2wVQx7
          source_id: s_Cii4MMBKe15XHjqsN7bKre
          stance: supports
          locator: CBDB:636127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636127）
          source: &a1
            id: s_Cii4MMBKe15XHjqsN7bKre
            source_type: api_record
            title: 中国历代人物传记资料库：王允清（CBDB 636127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636127&o=json
            external_identifier: CBDB:636127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8fvSQwnUitq8YDLnCrx5P5
        subject_person_id: p_KoV2VEL2sJmEq5epLYGxmu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允清，清人物。籍贯大定府直轄地方，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636127）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EeM_iy-R66RQEIYavaP0ey
          claim_id: c_8fvSQwnUitq8YDLnCrx5P5
          source_id: s_Cii4MMBKe15XHjqsN7bKre
          stance: supports
          locator: CBDB:636127
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

# 王允清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允清 | accepted |
| bio.summary | 王允清，清人物。籍贯大定府直轄地方，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636127） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允清（CBDB 636127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636127&o=json)
