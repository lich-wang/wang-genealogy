---
schema: wang-person/v1
id: p_PUwSvm6VCGMAxDdpiw7qhx
status: active
merged_into: null
display_name: 王師順
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PKPsCbEKDGCyzexiNQQ5x8
        subject_person_id: p_PUwSvm6VCGMAxDdpiw7qhx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kL7HjFCw7ggEXauAVKuvmp
          claim_id: c_PKPsCbEKDGCyzexiNQQ5x8
          source_id: s_hFxvXXnwSz6Av4dF7xiZWo
          stance: supports
          locator: CBDB:382782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382782）
          source: &a1
            id: s_hFxvXXnwSz6Av4dF7xiZWo
            source_type: api_record
            title: 中国历代人物传记资料库：王師順（CBDB 382782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382782&o=json
            external_identifier: CBDB:382782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qN2cc2o89NRwBK2488jAz8
        subject_person_id: p_PUwSvm6VCGMAxDdpiw7qhx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師順，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382782）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MC8f-rbgm3Z6ztZ2eIAik2
          claim_id: c_qN2cc2o89NRwBK2488jAz8
          source_id: s_hFxvXXnwSz6Av4dF7xiZWo
          stance: supports
          locator: CBDB:382782
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

# 王師順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師順 | accepted |
| bio.summary | 王師順，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382782） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師順（CBDB 382782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382782&o=json)
