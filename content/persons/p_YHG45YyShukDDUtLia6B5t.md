---
schema: wang-person/v1
id: p_YHG45YyShukDDUtLia6B5t
status: active
merged_into: null
display_name: 王漳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zrPDKJr4X8HGnNTGkqK584
        subject_person_id: p_YHG45YyShukDDUtLia6B5t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zGNLt2ZNsB2enLB71WENAu
          claim_id: c_zrPDKJr4X8HGnNTGkqK584
          source_id: s_fy26aZ3daLKiGKyXh3hJKQ
          stance: supports
          locator: CBDB:491699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491699）
          source: &a1
            id: s_fy26aZ3daLKiGKyXh3hJKQ
            source_type: api_record
            title: 中国历代人物传记资料库：王漳（CBDB 491699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491699&o=json
            external_identifier: CBDB:491699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8qo4VimTrJsQRugovCGYUv
        subject_person_id: p_YHG45YyShukDDUtLia6B5t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漳，明人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 491699）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WafRLiPRFgQOHJDePCaoKN
          claim_id: c_8qo4VimTrJsQRugovCGYUv
          source_id: s_fy26aZ3daLKiGKyXh3hJKQ
          stance: supports
          locator: CBDB:491699
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

# 王漳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漳 | accepted |
| bio.summary | 王漳，明人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 491699） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漳（CBDB 491699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491699&o=json)
