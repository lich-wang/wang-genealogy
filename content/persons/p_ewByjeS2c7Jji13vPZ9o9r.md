---
schema: wang-person/v1
id: p_ewByjeS2c7Jji13vPZ9o9r
status: active
merged_into: null
display_name: 王同治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EGL8W2fUf2Ya3pwaJ1FCDE
        subject_person_id: p_ewByjeS2c7Jji13vPZ9o9r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sxqq2mZG8LHfedpxXyc7Nk
          claim_id: c_EGL8W2fUf2Ya3pwaJ1FCDE
          source_id: s_zjCckLiY3EXa1d72SqcFoY
          stance: supports
          locator: CBDB:71549
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71549）
          source: &a1
            id: s_zjCckLiY3EXa1d72SqcFoY
            source_type: api_record
            title: 中国历代人物传记资料库：王同治（CBDB 71549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71549&o=json
            external_identifier: CBDB:71549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_g3xx7VuoPKcAuhWd3B3EpQ
        subject_person_id: p_ewByjeS2c7Jji13vPZ9o9r
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1790年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9HzNPMiErEEmpfybA3jvNQ
          claim_id: c_g3xx7VuoPKcAuhWd3B3EpQ
          source_id: s_zjCckLiY3EXa1d72SqcFoY
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
        id: c_NDpuTn77jjqjmBZVGW7fom
        subject_person_id: p_ewByjeS2c7Jji13vPZ9o9r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同治（生于1790年），清人物。籍贯海寧州。（中国历代人物传记资料库 CBDB 71549）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I5prHV_a382eSt1MXr3zT3
          claim_id: c_NDpuTn77jjqjmBZVGW7fom
          source_id: s_zjCckLiY3EXa1d72SqcFoY
          stance: supports
          locator: CBDB:71549
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

# 王同治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同治 | accepted |
| birth.date | 1790年 | accepted |
| bio.summary | 王同治（生于1790年），清人物。籍贯海寧州。（中国历代人物传记资料库 CBDB 71549） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同治（CBDB 71549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71549&o=json)
