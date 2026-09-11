---
schema: wang-person/v1
id: p_cMQviMRAuTPKuF6Fy9h5Dx
status: active
merged_into: null
display_name: 王之政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4y4may9unLSZKCEjWd15sF
        subject_person_id: p_cMQviMRAuTPKuF6Fy9h5Dx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L68GuYK2uzfuBtSmP75nvV
          claim_id: c_4y4may9unLSZKCEjWd15sF
          source_id: s_gKBft95fwhxuPWbxBbzs1h
          stance: supports
          locator: CBDB:71355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71355）
          source: &a1
            id: s_gKBft95fwhxuPWbxBbzs1h
            source_type: api_record
            title: 中国历代人物传记资料库：王之政（CBDB 71355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71355&o=json
            external_identifier: CBDB:71355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vDTWPWUpPk2rWkX6GDv4kk
        subject_person_id: p_cMQviMRAuTPKuF6Fy9h5Dx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1753年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MqARsLBJGRBdzNwEggT8E3
          claim_id: c_vDTWPWUpPk2rWkX6GDv4kk
          source_id: s_gKBft95fwhxuPWbxBbzs1h
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
        id: c_hiNM26PbyDyzJ4J8uhGNAx
        subject_person_id: p_cMQviMRAuTPKuF6Fy9h5Dx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1821年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2qwtQh5wTbNWcpR9HGmiF
          claim_id: c_hiNM26PbyDyzJ4J8uhGNAx
          source_id: s_gKBft95fwhxuPWbxBbzs1h
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
        id: c_rrV3PUAN8cAviFBpXqVkg6
        subject_person_id: p_cMQviMRAuTPKuF6Fy9h5Dx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之政（1753年—1821年），清人物。籍贯丹徒。（中国历代人物传记资料库 CBDB 71355）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fhaI4t9DCXE-t2eZgKAi-m
          claim_id: c_rrV3PUAN8cAviFBpXqVkg6
          source_id: s_gKBft95fwhxuPWbxBbzs1h
          stance: supports
          locator: CBDB:71355
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

# 王之政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之政 | accepted |
| birth.date | 1753年 | accepted |
| death.date | 1821年 | accepted |
| bio.summary | 王之政（1753年—1821年），清人物。籍贯丹徒。（中国历代人物传记资料库 CBDB 71355） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之政（CBDB 71355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71355&o=json)
