---
schema: wang-person/v1
id: p_HMktRtGYMLSEF7vMVAogdN
status: active
merged_into: null
display_name: 王儼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3utbZqjCE7iYhZTvCKRhDX
        subject_person_id: p_HMktRtGYMLSEF7vMVAogdN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fJdkGsgvHNzKSdvbSxLL9m
          claim_id: c_3utbZqjCE7iYhZTvCKRhDX
          source_id: s_vaPCdEssGGSQCuK71NJJpB
          stance: supports
          locator: CBDB:474248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474248）
          source: &a1
            id: s_vaPCdEssGGSQCuK71NJJpB
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 474248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474248&o=json
            external_identifier: CBDB:474248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XcB6bEZGsu6jagg1FT3QpJ
        subject_person_id: p_HMktRtGYMLSEF7vMVAogdN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 474248）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7MEr87e2Uwa3oRDM7H4Nl0
          claim_id: c_XcB6bEZGsu6jagg1FT3QpJ
          source_id: s_vaPCdEssGGSQCuK71NJJpB
          stance: supports
          locator: CBDB:474248
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

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 474248） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 474248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474248&o=json)
