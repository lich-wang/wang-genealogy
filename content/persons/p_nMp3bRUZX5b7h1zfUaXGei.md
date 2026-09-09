---
schema: wang-person/v1
id: p_nMp3bRUZX5b7h1zfUaXGei
status: active
merged_into: null
display_name: 王參
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LAvaHYQF2zArqDiA8M8EMd
        subject_person_id: p_nMp3bRUZX5b7h1zfUaXGei
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王參
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7XydCGJwesGdFjLSVWaBnq
          claim_id: c_LAvaHYQF2zArqDiA8M8EMd
          source_id: s_b6TsX4ni2EVaV3Y7yHF7a3
          stance: supports
          locator: CBDB:199457
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199457）
          source: &a1
            id: s_b6TsX4ni2EVaV3Y7yHF7a3
            source_type: api_record
            title: 中国历代人物传记资料库：王參（CBDB 199457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199457&o=json
            external_identifier: CBDB:199457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CbS8ZrEXaC1AKR5Ss6XtMD
        subject_person_id: p_nMp3bRUZX5b7h1zfUaXGei
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1437年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_up7FbBwQ44G9XeocHkC8Cv
          claim_id: c_CbS8ZrEXaC1AKR5Ss6XtMD
          source_id: s_b6TsX4ni2EVaV3Y7yHF7a3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HiHUJHor9nuxQ5aVLrJKLN
        subject_person_id: p_nMp3bRUZX5b7h1zfUaXGei
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r2o2ENqTwkWShKHa3aPNrg
          claim_id: c_HiHUJHor9nuxQ5aVLrJKLN
          source_id: s_b6TsX4ni2EVaV3Y7yHF7a3
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

# 王參

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王參 | accepted |
| birth.date | 1437年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王參（CBDB 199457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199457&o=json)
