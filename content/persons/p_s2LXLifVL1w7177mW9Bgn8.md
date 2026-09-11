---
schema: wang-person/v1
id: p_s2LXLifVL1w7177mW9Bgn8
status: active
merged_into: null
display_name: 王成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eXFFo9nPvguYnkBRE2Tyd7
        subject_person_id: p_s2LXLifVL1w7177mW9Bgn8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kGA5CMSqZKHh1hZVyTo3Gf
          claim_id: c_eXFFo9nPvguYnkBRE2Tyd7
          source_id: s_vrKo3n8wTwzA2S7aPodtdY
          stance: supports
          locator: CBDB:460922
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460922）
          source: &a1
            id: s_vrKo3n8wTwzA2S7aPodtdY
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 460922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460922&o=json
            external_identifier: CBDB:460922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HN1KgR2EF1ceCwJVdrRJ9V
        subject_person_id: p_s2LXLifVL1w7177mW9Bgn8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 460922）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j_QC1O9oITqFJavcX4dET_
          claim_id: c_HN1KgR2EF1ceCwJVdrRJ9V
          source_id: s_vrKo3n8wTwzA2S7aPodtdY
          stance: supports
          locator: CBDB:460922
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

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | 王成，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 460922） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 460922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460922&o=json)
