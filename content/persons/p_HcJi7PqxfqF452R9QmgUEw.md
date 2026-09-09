---
schema: wang-person/v1
id: p_HcJi7PqxfqF452R9QmgUEw
status: active
merged_into: null
display_name: 王文叡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K9pvVHSxkzswJuLuGur2dp
        subject_person_id: p_HcJi7PqxfqF452R9QmgUEw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文叡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c3HumFPf4hQGtwG9KSbhJY
          claim_id: c_K9pvVHSxkzswJuLuGur2dp
          source_id: s_pYQ17GZSy2Rbj29545ersx
          stance: supports
          locator: CBDB:142356
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142356）
          source: &a1
            id: s_pYQ17GZSy2Rbj29545ersx
            source_type: api_record
            title: 中国历代人物传记资料库：王文叡（CBDB 142356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142356&o=json
            external_identifier: CBDB:142356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LW5UN5YYQ77nLPKFLerLiC
        subject_person_id: p_HcJi7PqxfqF452R9QmgUEw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 642年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6uEewbycAgvenAFwXZNLDW
          claim_id: c_LW5UN5YYQ77nLPKFLerLiC
          source_id: s_pYQ17GZSy2Rbj29545ersx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KffWrE8S8KFe3r7ZUbJ27N
        subject_person_id: p_HcJi7PqxfqF452R9QmgUEw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 706年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bGDE4JdBJ7pTJgeCkVeprt
          claim_id: c_KffWrE8S8KFe3r7ZUbJ27N
          source_id: s_pYQ17GZSy2Rbj29545ersx
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
        id: c_wA4Ns2qB67JaJX59PYWVTz
        subject_person_id: p_HcJi7PqxfqF452R9QmgUEw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bmiZMJpMa3noKwiyG3oC88
          claim_id: c_wA4Ns2qB67JaJX59PYWVTz
          source_id: s_pYQ17GZSy2Rbj29545ersx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王文叡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文叡 | accepted |
| birth.date | 642年 | accepted |
| death.date | 706年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文叡（CBDB 142356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142356&o=json)
