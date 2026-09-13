---
schema: wang-person/v1
id: p_rscuZ99UH4mmZJEjmK295Z
status: active
merged_into: null
display_name: 王朝獻
cbdb_id: 285771
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PzM4QtLvCyzCckNQUsmaVw
        subject_person_id: p_rscuZ99UH4mmZJEjmK295Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝獻，明人物。正德十六年進士，籍贯南充。（中国历代人物传记资料库 CBDB 285771）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IKDuop1zx2kT2tJ7J-HOg5
          claim_id: c_PzM4QtLvCyzCckNQUsmaVw
          source_id: s_VvCgmYs5ZS5CC3DmWWHwjm
          stance: supports
          locator: CBDB:285771
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VvCgmYs5ZS5CC3DmWWHwjm
            source_type: api_record
            title: 中国历代人物传记资料库：王朝獻（CBDB 285771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285771&o=json
            external_identifier: CBDB:285771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UNwCx9dxTmCdRpCCTi4Az6
        subject_person_id: p_rscuZ99UH4mmZJEjmK295Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tsk1Qo9bWQ2Si1y1fQDU7C
          claim_id: c_UNwCx9dxTmCdRpCCTi4Az6
          source_id: s_VvCgmYs5ZS5CC3DmWWHwjm
          stance: supports
          locator: CBDB:285771
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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

# 王朝獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝獻，明人物。正德十六年進士，籍贯南充。（中国历代人物传记资料库 CBDB 285771） | accepted |
| name.primary | 王朝獻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝獻（CBDB 285771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285771&o=json)
