---
schema: wang-person/v1
id: p_ZSE8kmngjt379mTqfKV1GZ
status: active
merged_into: null
display_name: 王振世
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tweVEzj5T1Qw1qL3XdVZQF
        subject_person_id: p_ZSE8kmngjt379mTqfKV1GZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振世
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y2DFVYSf7VdaHoNNsAN9X8
          claim_id: c_tweVEzj5T1Qw1qL3XdVZQF
          source_id: s_pmPPY3375nAPuXFCjoYE4L
          stance: supports
          locator: CBDB:71946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71946）
          source: &a1
            id: s_pmPPY3375nAPuXFCjoYE4L
            source_type: api_record
            title: 中国历代人物传记资料库：王振世（CBDB 71946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71946&o=json
            external_identifier: CBDB:71946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AVjvr7ivTdiJBWZzBncGUM
        subject_person_id: p_ZSE8kmngjt379mTqfKV1GZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1684年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hhk8JmJDxoLm1yhx6ekMsQ
          claim_id: c_AVjvr7ivTdiJBWZzBncGUM
          source_id: s_pmPPY3375nAPuXFCjoYE4L
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
        id: c_R1GySBipYEPkxsCC6mmPk4
        subject_person_id: p_ZSE8kmngjt379mTqfKV1GZ
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
        - id: cs_6nimH65SM624e7Vxp6EkPU
          claim_id: c_R1GySBipYEPkxsCC6mmPk4
          source_id: s_pmPPY3375nAPuXFCjoYE4L
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

# 王振世

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振世 | accepted |
| birth.date | 1684年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振世（CBDB 71946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71946&o=json)
