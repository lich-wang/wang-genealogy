---
schema: wang-person/v1
id: p_piBEtpxCPcE6cD4cxEkNE5
status: active
merged_into: null
display_name: 王克脩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZMm73m2VqKVyGJsTm9opao
        subject_person_id: p_piBEtpxCPcE6cD4cxEkNE5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克脩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HEWZWDURGYtCQTYZr4KdSE
          claim_id: c_ZMm73m2VqKVyGJsTm9opao
          source_id: s_5H5vtEVPMVu3W2ZpPyWyer
          stance: supports
          locator: CBDB:413957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（413957）
          source: &a1
            id: s_5H5vtEVPMVu3W2ZpPyWyer
            source_type: api_record
            title: 中国历代人物传记资料库：王克脩（CBDB 413957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413957&o=json
            external_identifier: CBDB:413957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zwmQUpvNvcotiei3MFQ8H6
        subject_person_id: p_piBEtpxCPcE6cD4cxEkNE5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克脩，明人物。曾任知州。（中国历代人物传记资料库 CBDB 413957）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kauw9gbykvMqKPLxtNuM_G
          claim_id: c_zwmQUpvNvcotiei3MFQ8H6
          source_id: s_5H5vtEVPMVu3W2ZpPyWyer
          stance: supports
          locator: CBDB:413957
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

# 王克脩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克脩 | accepted |
| bio.summary | 王克脩，明人物。曾任知州。（中国历代人物传记资料库 CBDB 413957） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克脩（CBDB 413957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413957&o=json)
