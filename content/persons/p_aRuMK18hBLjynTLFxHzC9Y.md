---
schema: wang-person/v1
id: p_aRuMK18hBLjynTLFxHzC9Y
status: active
merged_into: null
display_name: 王國安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h72UZPtPLCijbPJ7GjbQ2z
        subject_person_id: p_aRuMK18hBLjynTLFxHzC9Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aP2M7ZJjRzscwXRwNGBWEz
          claim_id: c_h72UZPtPLCijbPJ7GjbQ2z
          source_id: s_9nBv1Fe9RNKh4BJonBSotx
          stance: supports
          locator: CBDB:69360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69360）
          source: &a1
            id: s_9nBv1Fe9RNKh4BJonBSotx
            source_type: api_record
            title: 中国历代人物传记资料库：王國安（CBDB 69360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69360&o=json
            external_identifier: CBDB:69360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_31mWsofWcYrPZk8Rfj1MnC
        subject_person_id: p_aRuMK18hBLjynTLFxHzC9Y
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1862年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oH2ersjDdEr53LSDge2Jjv
          claim_id: c_31mWsofWcYrPZk8Rfj1MnC
          source_id: s_9nBv1Fe9RNKh4BJonBSotx
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
        id: c_hcz8ivBcFAuGPgZSEr1sx6
        subject_person_id: p_aRuMK18hBLjynTLFxHzC9Y
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
        - id: cs_sR5PMBGfKgqE3WALiUuaLa
          claim_id: c_hcz8ivBcFAuGPgZSEr1sx6
          source_id: s_9nBv1Fe9RNKh4BJonBSotx
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

# 王國安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國安 | accepted |
| death.date | 1862年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國安（CBDB 69360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69360&o=json)
