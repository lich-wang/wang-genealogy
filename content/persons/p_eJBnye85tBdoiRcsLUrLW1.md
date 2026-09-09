---
schema: wang-person/v1
id: p_eJBnye85tBdoiRcsLUrLW1
status: active
merged_into: null
display_name: 王絳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QREJajVwd6jLH67vArgVE4
        subject_person_id: p_eJBnye85tBdoiRcsLUrLW1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JVvDCJz2mD4CEDAxJieBAA
          claim_id: c_QREJajVwd6jLH67vArgVE4
          source_id: s_Cz4v52JDz78Hfk2UraC4td
          stance: supports
          locator: CBDB:191190
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191190）
          source: &a1
            id: s_Cz4v52JDz78Hfk2UraC4td
            source_type: api_record
            title: 中国历代人物传记资料库：王絳（CBDB 191190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191190&o=json
            external_identifier: CBDB:191190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PL2gJ98FXjKFBVJhhWg2k1
        subject_person_id: p_eJBnye85tBdoiRcsLUrLW1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 811年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_arovEBQaM88nght2S173kQ
          claim_id: c_PL2gJ98FXjKFBVJhhWg2k1
          source_id: s_Cz4v52JDz78Hfk2UraC4td
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
        id: c_ZqJovLWQT8d7u9ZzqwAQzN
        subject_person_id: p_eJBnye85tBdoiRcsLUrLW1
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
        - id: cs_JVEBQvEXyg4Ly14fyJQLPH
          claim_id: c_ZqJovLWQT8d7u9ZzqwAQzN
          source_id: s_Cz4v52JDz78Hfk2UraC4td
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

# 王絳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王絳 | accepted |
| death.date | 811年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王絳（CBDB 191190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191190&o=json)
