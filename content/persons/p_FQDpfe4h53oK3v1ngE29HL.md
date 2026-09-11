---
schema: wang-person/v1
id: p_FQDpfe4h53oK3v1ngE29HL
status: active
merged_into: null
display_name: 王曦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QuZqEyD3ipGJC8XQHxUx7P
        subject_person_id: p_FQDpfe4h53oK3v1ngE29HL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k7rjcRmrDPzze75kZzq4nN
          claim_id: c_QuZqEyD3ipGJC8XQHxUx7P
          source_id: s_VMdGN41LUuFjhxThQdFA1N
          stance: supports
          locator: CBDB:55220
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55220）
          source: &a1
            id: s_VMdGN41LUuFjhxThQdFA1N
            source_type: api_record
            title: 中国历代人物传记资料库：王曦（CBDB 55220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55220&o=json
            external_identifier: CBDB:55220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jam8JD3XMeknAS3odvmZFx
        subject_person_id: p_FQDpfe4h53oK3v1ngE29HL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1796年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Tv3BEEaAFQE8wfw7PFuBs
          claim_id: c_jam8JD3XMeknAS3odvmZFx
          source_id: s_VMdGN41LUuFjhxThQdFA1N
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
        id: c_KFg3FL4BQrbNbuAJwQ2VSz
        subject_person_id: p_FQDpfe4h53oK3v1ngE29HL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1847年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aAKTKUFY2hnUWVVfNyZsm8
          claim_id: c_KFg3FL4BQrbNbuAJwQ2VSz
          source_id: s_VMdGN41LUuFjhxThQdFA1N
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
        id: c_TGk6KPx9Er9fJXEqJ9z6pq
        subject_person_id: p_FQDpfe4h53oK3v1ngE29HL
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
        - id: cs_FDf6QGxrufX2tyGuJdbJAZ
          claim_id: c_TGk6KPx9Er9fJXEqJ9z6pq
          source_id: s_VMdGN41LUuFjhxThQdFA1N
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
  spouses:
    - claim:
        id: c__4ZLeGfF-8j4jIWvBZsO18
        subject_person_id: p_FQDpfe4h53oK3v1ngE29HL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ycdfcKEECVQw1EfiReeC2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9-FzJw_UxnlGrZauXbC-Yp
          claim_id: c__4ZLeGfF-8j4jIWvBZsO18
          source_id: s_y1lBLaLBCry88DDWnFSAvi
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1919, HuWenKai #517：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y1lBLaLBCry88DDWnFSAvi
            source_type: api_record
            title: 中国历代人物传记资料库：張紈英（CBDB 55144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55144&o=json
            external_identifier: CBDB:55144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ycdfcKEECVQw1EfiReeC2v
        status: active
        display_name: 張紈英
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王曦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曦 | accepted |
| birth.date | 1796年 | accepted |
| death.date | 1847年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ycdfcKEECVQw1EfiReeC2v | 張紈英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曦（CBDB 55220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55220&o=json)
- [中国历代人物传记资料库：張紈英（CBDB 55144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55144&o=json)
