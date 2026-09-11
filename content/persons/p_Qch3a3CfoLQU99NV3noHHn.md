---
schema: wang-person/v1
id: p_Qch3a3CfoLQU99NV3noHHn
status: active
merged_into: null
display_name: 王樹薰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NQiMFGv58ZCXpWg64b6wya
        subject_person_id: p_Qch3a3CfoLQU99NV3noHHn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹薰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fQVe7PRmfLBjWNyhmKDfih
          claim_id: c_NQiMFGv58ZCXpWg64b6wya
          source_id: s_8C4NdNtCy2SPukwWJEgJph
          stance: supports
          locator: CBDB:478873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478873）
          source: &a1
            id: s_8C4NdNtCy2SPukwWJEgJph
            source_type: api_record
            title: 中国历代人物传记资料库：王樹薰（CBDB 478873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478873&o=json
            external_identifier: CBDB:478873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qb74WkFQQERqNX3aDHm4rx
        subject_person_id: p_Qch3a3CfoLQU99NV3noHHn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹薰，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 478873）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QyCKVCkulBq-zzDegX4gri
          claim_id: c_Qb74WkFQQERqNX3aDHm4rx
          source_id: s_8C4NdNtCy2SPukwWJEgJph
          stance: supports
          locator: CBDB:478873
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

# 王樹薰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹薰 | accepted |
| bio.summary | 王樹薰，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 478873） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹薰（CBDB 478873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478873&o=json)
