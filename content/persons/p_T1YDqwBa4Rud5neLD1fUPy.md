---
schema: wang-person/v1
id: p_T1YDqwBa4Rud5neLD1fUPy
status: active
merged_into: null
display_name: 王簵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a3h45FC44AUGcHuD4ySNKT
        subject_person_id: p_T1YDqwBa4Rud5neLD1fUPy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LmidbHmEYaBdf68EbjmcTz
          claim_id: c_a3h45FC44AUGcHuD4ySNKT
          source_id: s_QwRKPvEvh2Je5XmEK4LuzD
          stance: supports
          locator: CBDB:639727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639727）
          source: &a1
            id: s_QwRKPvEvh2Je5XmEK4LuzD
            source_type: api_record
            title: 中国历代人物传记资料库：王簵（CBDB 639727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639727&o=json
            external_identifier: CBDB:639727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jDs5425K1hHEq1yPSZiMHH
        subject_person_id: p_T1YDqwBa4Rud5neLD1fUPy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簵，清人物。籍贯太原，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639727）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jPoGfmnQlGSZrZ_mAaB8da
          claim_id: c_jDs5425K1hHEq1yPSZiMHH
          source_id: s_QwRKPvEvh2Je5XmEK4LuzD
          stance: supports
          locator: CBDB:639727
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

# 王簵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簵 | accepted |
| bio.summary | 王簵，清人物。籍贯太原，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639727） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王簵（CBDB 639727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639727&o=json)
