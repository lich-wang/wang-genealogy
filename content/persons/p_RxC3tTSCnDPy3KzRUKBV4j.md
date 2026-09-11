---
schema: wang-person/v1
id: p_RxC3tTSCnDPy3KzRUKBV4j
status: active
merged_into: null
display_name: 王𡵓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fwi3W6z218j9Dg8Y9Bz1QD
        subject_person_id: p_RxC3tTSCnDPy3KzRUKBV4j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𡵓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_62eM7KmGaAUkki6432G1aC
          claim_id: c_fwi3W6z218j9Dg8Y9Bz1QD
          source_id: s_HBH2h4bXxbLPsNDtdG3CNE
          stance: supports
          locator: CBDB:572642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572642）
          source: &a1
            id: s_HBH2h4bXxbLPsNDtdG3CNE
            source_type: api_record
            title: 中国历代人物传记资料库：王𡵓（CBDB 572642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572642&o=json
            external_identifier: CBDB:572642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SQMu69WQJUPDpEHQyfgzr2
        subject_person_id: p_RxC3tTSCnDPy3KzRUKBV4j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𡵓，宋人物。曾任大理寺丞。（中国历代人物传记资料库 CBDB 572642）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_udEiMHVw4emxsTK7FT6c0f
          claim_id: c_SQMu69WQJUPDpEHQyfgzr2
          source_id: s_HBH2h4bXxbLPsNDtdG3CNE
          stance: supports
          locator: CBDB:572642
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

# 王𡵓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王𡵓 | accepted |
| bio.summary | 王𡵓，宋人物。曾任大理寺丞。（中国历代人物传记资料库 CBDB 572642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王𡵓（CBDB 572642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572642&o=json)
