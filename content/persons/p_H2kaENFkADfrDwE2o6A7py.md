---
schema: wang-person/v1
id: p_H2kaENFkADfrDwE2o6A7py
status: active
merged_into: null
display_name: 王世芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jat2YfaH75sPiYVWwimWoi
        subject_person_id: p_H2kaENFkADfrDwE2o6A7py
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h2MtAicDf4J9oqY6y5aPk2
          claim_id: c_jat2YfaH75sPiYVWwimWoi
          source_id: s_qJNTBp4s9qHDhmRAK9Y88t
          stance: supports
          locator: CBDB:71456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71456）
          source: &a1
            id: s_qJNTBp4s9qHDhmRAK9Y88t
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 71456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71456&o=json
            external_identifier: CBDB:71456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o8zWocYdqA7HuHX5agyX8i
        subject_person_id: p_H2kaENFkADfrDwE2o6A7py
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1659年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yb57atRKMJHkDwEHhxFEMT
          claim_id: c_o8zWocYdqA7HuHX5agyX8i
          source_id: s_qJNTBp4s9qHDhmRAK9Y88t
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
        id: c_7ey71S29MZWw5L1DgfjUrK
        subject_person_id: p_H2kaENFkADfrDwE2o6A7py
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1775年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5BAfn71LTkpv7ZdL4LH6G6
          claim_id: c_7ey71S29MZWw5L1DgfjUrK
          source_id: s_qJNTBp4s9qHDhmRAK9Y88t
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
        id: c_V7K2hBcBr33HfPMx6tEJNZ
        subject_person_id: p_H2kaENFkADfrDwE2o6A7py
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世芳（1659年—1775年），清人物。籍贯臨海。（中国历代人物传记资料库 CBDB 71456）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MwpYRNrYh_Lf6N5l-dKHc7
          claim_id: c_V7K2hBcBr33HfPMx6tEJNZ
          source_id: s_qJNTBp4s9qHDhmRAK9Y88t
          stance: supports
          locator: CBDB:71456
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

# 王世芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世芳 | accepted |
| birth.date | 1659年 | accepted |
| death.date | 1775年 | accepted |
| bio.summary | 王世芳（1659年—1775年），清人物。籍贯臨海。（中国历代人物传记资料库 CBDB 71456） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世芳（CBDB 71456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71456&o=json)
