---
schema: wang-person/v1
id: p_GqEUz8dkXgBhsFhfvQbbHD
status: active
merged_into: null
display_name: 王撝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iDXzcEWZA2Fayvg4yNC6V2
        subject_person_id: p_GqEUz8dkXgBhsFhfvQbbHD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qcqvSM9MpDfFTHfFdLj6Gn
          claim_id: c_iDXzcEWZA2Fayvg4yNC6V2
          source_id: s_Kq2iwpvJ55vzccDoMi1Uoh
          stance: supports
          locator: CBDB:175681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175681）
          source: &a1
            id: s_Kq2iwpvJ55vzccDoMi1Uoh
            source_type: api_record
            title: 中国历代人物传记资料库：王撝（CBDB 175681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175681&o=json
            external_identifier: CBDB:175681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.054Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_k8YBgzgFsirdgLKw7TkMDV
        subject_person_id: p_GqEUz8dkXgBhsFhfvQbbHD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 663年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XGqnuPVMMAauv3Tf4oEhxP
          claim_id: c_k8YBgzgFsirdgLKw7TkMDV
          source_id: s_Kq2iwpvJ55vzccDoMi1Uoh
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
        id: c_M2VSxzTx9w28TVWK33spAz
        subject_person_id: p_GqEUz8dkXgBhsFhfvQbbHD
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
        - id: cs_JjFizgYFbDh21mMShp4Za6
          claim_id: c_M2VSxzTx9w28TVWK33spAz
          source_id: s_Kq2iwpvJ55vzccDoMi1Uoh
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

# 王撝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撝 | accepted |
| death.date | 663年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王撝（CBDB 175681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175681&o=json)
