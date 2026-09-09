---
schema: wang-person/v1
id: p_dAJ7FbdQhc2KnbhXAj2A8Q
status: active
merged_into: null
display_name: 王正誼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dUV51dPPmuRkw8YRYoKadU
        subject_person_id: p_dAJ7FbdQhc2KnbhXAj2A8Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正誼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FUTmaB7GdFnBA5Vme5B2fs
          claim_id: c_dUV51dPPmuRkw8YRYoKadU
          source_id: s_qRGg2T8Pjys1aQWR4CXfdT
          stance: supports
          locator: CBDB:61471
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61471）
          source: &a1
            id: s_qRGg2T8Pjys1aQWR4CXfdT
            source_type: api_record
            title: 中国历代人物传记资料库：王正誼（CBDB 61471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61471&o=json
            external_identifier: CBDB:61471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YR2QKoDBHXjw3HTAmLS3ub
        subject_person_id: p_dAJ7FbdQhc2KnbhXAj2A8Q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1799年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7k1BsSBVMU4jHt8X7vPGwg
          claim_id: c_YR2QKoDBHXjw3HTAmLS3ub
          source_id: s_qRGg2T8Pjys1aQWR4CXfdT
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
        id: c_FeKkPFAPQns53LNFxgpraM
        subject_person_id: p_dAJ7FbdQhc2KnbhXAj2A8Q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1870年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mrJsGYWmnwR1KbLqJm1wMq
          claim_id: c_FeKkPFAPQns53LNFxgpraM
          source_id: s_qRGg2T8Pjys1aQWR4CXfdT
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
        id: c_t5CsznBUeKESwo32jvTR7C
        subject_person_id: p_dAJ7FbdQhc2KnbhXAj2A8Q
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
        - id: cs_CFwPkbDAZQP9gFt8Fio5qc
          claim_id: c_t5CsznBUeKESwo32jvTR7C
          source_id: s_qRGg2T8Pjys1aQWR4CXfdT
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

# 王正誼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正誼 | accepted |
| birth.date | 1799年 | accepted |
| death.date | 1870年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正誼（CBDB 61471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61471&o=json)
