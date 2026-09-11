---
schema: wang-person/v1
id: p_5MSHM6VVUGim7r4vGJPUzu
status: active
merged_into: null
display_name: 王清源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LjpzRT4ZaVUQckgqZm13Te
        subject_person_id: p_5MSHM6VVUGim7r4vGJPUzu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gVe3sh3s6HPM6cLwuoJCg2
          claim_id: c_LjpzRT4ZaVUQckgqZm13Te
          source_id: s_NQS2wdptAjjVGLCmeNbvFJ
          stance: supports
          locator: CBDB:639144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639144）
          source: &a1
            id: s_NQS2wdptAjjVGLCmeNbvFJ
            source_type: api_record
            title: 中国历代人物传记资料库：王清源（CBDB 639144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639144&o=json
            external_identifier: CBDB:639144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xtLJrw9X2vVZ7gPf7GmG2W
        subject_person_id: p_5MSHM6VVUGim7r4vGJPUzu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清源，清人物。籍贯獲嘉，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-t_GrVcsHhsFcRcMoyi6Wl
          claim_id: c_xtLJrw9X2vVZ7gPf7GmG2W
          source_id: s_NQS2wdptAjjVGLCmeNbvFJ
          stance: supports
          locator: CBDB:639144
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

# 王清源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清源 | accepted |
| bio.summary | 王清源，清人物。籍贯獲嘉，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639144） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清源（CBDB 639144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639144&o=json)
