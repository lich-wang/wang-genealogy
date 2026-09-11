---
schema: wang-person/v1
id: p_nNRumws24z3JkuCP3ChPAX
status: active
merged_into: null
display_name: 王本義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HVCzYDwBMMMGVs5LTd6zoo
        subject_person_id: p_nNRumws24z3JkuCP3ChPAX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yYf9HokLxC2LynieYqPeM5
          claim_id: c_HVCzYDwBMMMGVs5LTd6zoo
          source_id: s_w7mqGy4a9FTzcUf7bJrzBs
          stance: supports
          locator: CBDB:461830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（461830）
          source: &a1
            id: s_w7mqGy4a9FTzcUf7bJrzBs
            source_type: api_record
            title: 中国历代人物传记资料库：王本義（CBDB 461830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461830&o=json
            external_identifier: CBDB:461830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bx5KPMUSEYu9jaCbrXLFeA
        subject_person_id: p_nNRumws24z3JkuCP3ChPAX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本義，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 461830）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mQrJggkrKlFZBN6UXz2VMr
          claim_id: c_bx5KPMUSEYu9jaCbrXLFeA
          source_id: s_w7mqGy4a9FTzcUf7bJrzBs
          stance: supports
          locator: CBDB:461830
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

# 王本義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本義 | accepted |
| bio.summary | 王本義，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 461830） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本義（CBDB 461830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461830&o=json)
