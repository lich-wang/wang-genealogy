---
schema: wang-person/v1
id: p_wMj1NaYxMfphPsDq4AdPox
status: active
merged_into: null
display_name: 王藻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qr7EsePZ7Gytr1P1NJi6Cc
        subject_person_id: p_wMj1NaYxMfphPsDq4AdPox
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MzMHBB2NM6EcQ36Ma68x4M
          claim_id: c_Qr7EsePZ7Gytr1P1NJi6Cc
          source_id: s_xU3T2EuKdp6HCfPrSCBAVM
          stance: supports
          locator: CBDB:473706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473706）
          source: &a1
            id: s_xU3T2EuKdp6HCfPrSCBAVM
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 473706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473706&o=json
            external_identifier: CBDB:473706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mQq6sc5L7CvmYEATvxgvdY
        subject_person_id: p_wMj1NaYxMfphPsDq4AdPox
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 473706）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0fdtPa3HaksZN1EWDgoO_X
          claim_id: c_mQq6sc5L7CvmYEATvxgvdY
          source_id: s_xU3T2EuKdp6HCfPrSCBAVM
          stance: supports
          locator: CBDB:473706
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

# 王藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藻 | accepted |
| bio.summary | 王藻，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 473706） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藻（CBDB 473706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473706&o=json)
