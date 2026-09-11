---
schema: wang-person/v1
id: p_7S4B4z9q1NDW2gDRtngvD7
status: active
merged_into: null
display_name: 王澤深
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L6NZLhxMMmAUH19DDEBkYg
        subject_person_id: p_7S4B4z9q1NDW2gDRtngvD7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XqskNwKgm9k1oqnZBQn497
          claim_id: c_L6NZLhxMMmAUH19DDEBkYg
          source_id: s_oPbw37bKVC3QP16xyPq1si
          stance: supports
          locator: CBDB:639234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639234）
          source: &a1
            id: s_oPbw37bKVC3QP16xyPq1si
            source_type: api_record
            title: 中国历代人物传记资料库：王澤深（CBDB 639234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639234&o=json
            external_identifier: CBDB:639234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Tp3aMczLetsX3WNNYZoEn
        subject_person_id: p_7S4B4z9q1NDW2gDRtngvD7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤深，清人物。籍贯修文，入仕廩貢生，曾任知州。（中国历代人物传记资料库 CBDB 639234）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GDZU-R1fgzogul-3GRmVr7
          claim_id: c_8Tp3aMczLetsX3WNNYZoEn
          source_id: s_oPbw37bKVC3QP16xyPq1si
          stance: supports
          locator: CBDB:639234
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

# 王澤深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤深 | accepted |
| bio.summary | 王澤深，清人物。籍贯修文，入仕廩貢生，曾任知州。（中国历代人物传记资料库 CBDB 639234） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤深（CBDB 639234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639234&o=json)
