---
schema: wang-person/v1
id: p_dyMAGguYseEqauvPXY6QCm
status: active
merged_into: null
display_name: 王大綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MViYDVfHrDfZPPq8kMzAJs
        subject_person_id: p_dyMAGguYseEqauvPXY6QCm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bz3CAzATHgyJwuK3Bk628v
          claim_id: c_MViYDVfHrDfZPPq8kMzAJs
          source_id: s_egMAYcQFbAqynMHdMey6fx
          stance: supports
          locator: CBDB:240372
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240372）
          source: &a1
            id: s_egMAYcQFbAqynMHdMey6fx
            source_type: api_record
            title: 中国历代人物传记资料库：王大綸（CBDB 240372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240372&o=json
            external_identifier: CBDB:240372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x9KjsmHf5KrfDwEA8nyxvz
        subject_person_id: p_dyMAGguYseEqauvPXY6QCm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大綸，明人物。正統十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 240372）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S6ZuL5QkzokSZ8fRK1dGil
          claim_id: c_x9KjsmHf5KrfDwEA8nyxvz
          source_id: s_egMAYcQFbAqynMHdMey6fx
          stance: supports
          locator: CBDB:240372
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

# 王大綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大綸 | accepted |
| bio.summary | 王大綸，明人物。正統十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 240372） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大綸（CBDB 240372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240372&o=json)
