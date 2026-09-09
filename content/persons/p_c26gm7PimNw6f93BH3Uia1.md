---
schema: wang-person/v1
id: p_c26gm7PimNw6f93BH3Uia1
status: active
merged_into: null
display_name: 王夫人
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5S9QHPnYcLMY7jXzcctgmb
        subject_person_id: p_c26gm7PimNw6f93BH3Uia1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夫人
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G2hPqwApvGMn6dWWoDyUEV
          claim_id: c_5S9QHPnYcLMY7jXzcctgmb
          source_id: s_uKF1m5zbMRbpcog1qN4C74
          stance: supports
          locator: CBDB:159976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159976）
          source: &a1
            id: s_uKF1m5zbMRbpcog1qN4C74
            source_type: api_record
            title: 中国历代人物传记资料库：王夫人（CBDB 159976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159976&o=json
            external_identifier: CBDB:159976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fiN7eYpzj2oANbyfJBHGp9
        subject_person_id: p_c26gm7PimNw6f93BH3Uia1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDM52gCR8VEKi5i2NfeEyc
          claim_id: c_fiN7eYpzj2oANbyfJBHGp9
          source_id: s_uKF1m5zbMRbpcog1qN4C74
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

# 王夫人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夫人 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夫人（CBDB 159976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159976&o=json)
