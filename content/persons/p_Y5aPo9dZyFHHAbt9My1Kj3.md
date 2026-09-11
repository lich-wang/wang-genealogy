---
schema: wang-person/v1
id: p_Y5aPo9dZyFHHAbt9My1Kj3
status: active
merged_into: null
display_name: 王澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AHKgFgKQamc11UkRDzM2AL
        subject_person_id: p_Y5aPo9dZyFHHAbt9My1Kj3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_soFHi9DyVAAcHa3ZRLQdDA
          claim_id: c_AHKgFgKQamc11UkRDzM2AL
          source_id: s_EiUtkjQFTL1grNSBjziLdM
          stance: supports
          locator: CBDB:342767
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342767）
          source: &a1
            id: s_EiUtkjQFTL1grNSBjziLdM
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 342767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342767&o=json
            external_identifier: CBDB:342767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NhZGvEGLoXDmoH6FnKFC1v
        subject_person_id: p_Y5aPo9dZyFHHAbt9My1Kj3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤，清人物。明清進士進士，籍贯蕪湖，入仕進士，曾任編修、鄉試考官。（中国历代人物传记资料库 CBDB 342767）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k-d8Zqrr1OqpIXIkY0yT2s
          claim_id: c_NhZGvEGLoXDmoH6FnKFC1v
          source_id: s_EiUtkjQFTL1grNSBjziLdM
          stance: supports
          locator: CBDB:342767
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

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | 王澤，清人物。明清進士進士，籍贯蕪湖，入仕進士，曾任編修、鄉試考官。（中国历代人物传记资料库 CBDB 342767） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 342767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342767&o=json)
