---
schema: wang-person/v1
id: p_ZnaCSm3v5Qph1XYC7gvdB7
status: active
merged_into: null
display_name: 王兆辰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pTKwCs26sC8WyqfZfac1wQ
        subject_person_id: p_ZnaCSm3v5Qph1XYC7gvdB7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QQvtyjwDMtHrcQfKG4a2V7
          claim_id: c_pTKwCs26sC8WyqfZfac1wQ
          source_id: s_Bk6wzAhJ9ErfzZFAZ8vBr9
          stance: supports
          locator: CBDB:30036
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30036）
          source: &a1
            id: s_Bk6wzAhJ9ErfzZFAZ8vBr9
            source_type: api_record
            title: 中国历代人物传记资料库：王兆辰（CBDB 30036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30036&o=json
            external_identifier: CBDB:30036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gYBkaeKzWtsPN7gdEiGvvS
        subject_person_id: p_ZnaCSm3v5Qph1XYC7gvdB7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5nLbF3ThNgqf4MgcAAyP8s
          claim_id: c_gYBkaeKzWtsPN7gdEiGvvS
          source_id: s_Bk6wzAhJ9ErfzZFAZ8vBr9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_u6SvNS48EvLBK6N94rSy7F
        subject_person_id: p_ZnaCSm3v5Qph1XYC7gvdB7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ycGgNxfxozdfaZd69tXQfq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jBtmhkGEsOdyRWMJ-YuDPm
          claim_id: c_u6SvNS48EvLBK6N94rSy7F
          source_id: s_Bk6wzAhJ9ErfzZFAZ8vBr9
          stance: supports
          locator: CBDB 双向互证（子 王乃餘 ⇄ 父 王兆辰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ycGgNxfxozdfaZd69tXQfq
        status: active
        display_name: 王乃餘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兆辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆辰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ycGgNxfxozdfaZd69tXQfq | 王乃餘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王兆辰（CBDB 30036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30036&o=json)
