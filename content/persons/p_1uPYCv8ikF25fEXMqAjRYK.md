---
schema: wang-person/v1
id: p_1uPYCv8ikF25fEXMqAjRYK
status: active
merged_into: null
display_name: 王廷詔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cVpW1ptCta9PFReNoiq5rq
        subject_person_id: p_1uPYCv8ikF25fEXMqAjRYK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sSWkPRNPEKkkpXUN7iEAPM
          claim_id: c_cVpW1ptCta9PFReNoiq5rq
          source_id: s_maZ53jgcANXHZQtaTNPx3C
          stance: supports
          locator: CBDB:60040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60040）
          source: &a1
            id: s_maZ53jgcANXHZQtaTNPx3C
            source_type: api_record
            title: 中国历代人物传记资料库：王廷詔（CBDB 60040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60040&o=json
            external_identifier: CBDB:60040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Covobuk2vPkPeh9s7Wfzii
        subject_person_id: p_1uPYCv8ikF25fEXMqAjRYK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1736年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dUEFnfj2m699ShT6W1JA9f
          claim_id: c_Covobuk2vPkPeh9s7Wfzii
          source_id: s_maZ53jgcANXHZQtaTNPx3C
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g9Z6nR22qPowBJuM9r2ruC
        subject_person_id: p_1uPYCv8ikF25fEXMqAjRYK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷詔（卒于1736年），清人物。籍贯四川省，入仕武舉人，曾任副將、鎮總兵官。（中国历代人物传记资料库 CBDB 60040）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rh1kqNN6QoFGpFNfYsAQW5
          claim_id: c_g9Z6nR22qPowBJuM9r2ruC
          source_id: s_maZ53jgcANXHZQtaTNPx3C
          stance: supports
          locator: CBDB:60040
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

# 王廷詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷詔 | accepted |
| death.date | 1736年 | accepted |
| bio.summary | 王廷詔（卒于1736年），清人物。籍贯四川省，入仕武舉人，曾任副將、鎮總兵官。（中国历代人物传记资料库 CBDB 60040） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷詔（CBDB 60040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60040&o=json)
