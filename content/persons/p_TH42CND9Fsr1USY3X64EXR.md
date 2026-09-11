---
schema: wang-person/v1
id: p_TH42CND9Fsr1USY3X64EXR
status: active
merged_into: null
display_name: 王宗賀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gVxwbWB21AFHJGP27X1xDs
        subject_person_id: p_TH42CND9Fsr1USY3X64EXR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗賀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_55LGBccMN6fvX7s6T5PPav
          claim_id: c_gVxwbWB21AFHJGP27X1xDs
          source_id: s_x5oEVCp9wvWKqioYo7qNHW
          stance: supports
          locator: CBDB:382982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382982）
          source: &a1
            id: s_x5oEVCp9wvWKqioYo7qNHW
            source_type: api_record
            title: 中国历代人物传记资料库：王宗賀（CBDB 382982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382982&o=json
            external_identifier: CBDB:382982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZJxQ2Lhc7MBRWXKeop1Zaj
        subject_person_id: p_TH42CND9Fsr1USY3X64EXR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗賀，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382982）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TsYH9WvnSiKwYBDH1ttoa2
          claim_id: c_ZJxQ2Lhc7MBRWXKeop1Zaj
          source_id: s_x5oEVCp9wvWKqioYo7qNHW
          stance: supports
          locator: CBDB:382982
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

# 王宗賀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗賀 | accepted |
| bio.summary | 王宗賀，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗賀（CBDB 382982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382982&o=json)
