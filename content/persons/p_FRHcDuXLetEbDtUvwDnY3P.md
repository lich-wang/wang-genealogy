---
schema: wang-person/v1
id: p_FRHcDuXLetEbDtUvwDnY3P
status: active
merged_into: null
display_name: 王環
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iXKa3CRjno5RVeTMTQ8B87
        subject_person_id: p_FRHcDuXLetEbDtUvwDnY3P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王環
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MLUS1W6AbZuFi1ugG8gsiD
          claim_id: c_iXKa3CRjno5RVeTMTQ8B87
          source_id: s_ctDib8XrqCfwnoKi8ataip
          stance: supports
          locator: CBDB:491391
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491391）
          source: &a1
            id: s_ctDib8XrqCfwnoKi8ataip
            source_type: api_record
            title: 中国历代人物传记资料库：王環（CBDB 491391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491391&o=json
            external_identifier: CBDB:491391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k8VjgBcAecSZenBTsBopTw
        subject_person_id: p_FRHcDuXLetEbDtUvwDnY3P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王環，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 491391）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qEgqnh2dFvcvIKi011K_P_
          claim_id: c_k8VjgBcAecSZenBTsBopTw
          source_id: s_ctDib8XrqCfwnoKi8ataip
          stance: supports
          locator: CBDB:491391
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

# 王環

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王環 | accepted |
| bio.summary | 王環，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 491391） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王環（CBDB 491391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491391&o=json)
