---
schema: wang-person/v1
id: p_PPQJCnHtkdV2dd73F6PWrN
status: active
merged_into: null
display_name: 王永年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v5LvNz3ZyGoJm1KftC3f4K
        subject_person_id: p_PPQJCnHtkdV2dd73F6PWrN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wht4TuZWzFLVw1vPNkPFxU
          claim_id: c_v5LvNz3ZyGoJm1KftC3f4K
          source_id: s_j8PiioJUkcv9sTjKfErWmp
          stance: supports
          locator: CBDB:342516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342516）
          source: &a1
            id: s_j8PiioJUkcv9sTjKfErWmp
            source_type: api_record
            title: 中国历代人物传记资料库：王永年（CBDB 342516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342516&o=json
            external_identifier: CBDB:342516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w72y9LjZjKNRziBJXoDR1u
        subject_person_id: p_PPQJCnHtkdV2dd73F6PWrN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永年，清人物。明清進士進士，籍贯建水，入仕進士。（中国历代人物传记资料库 CBDB 342516）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gMGdfQgT6DF1oNxcYBqyq4
          claim_id: c_w72y9LjZjKNRziBJXoDR1u
          source_id: s_j8PiioJUkcv9sTjKfErWmp
          stance: supports
          locator: CBDB:342516
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

# 王永年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永年 | accepted |
| bio.summary | 王永年，清人物。明清進士進士，籍贯建水，入仕進士。（中国历代人物传记资料库 CBDB 342516） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永年（CBDB 342516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342516&o=json)
