---
schema: wang-person/v1
id: p_aS4oPbQ6onmxdLtHcM6aRy
status: active
merged_into: null
display_name: 王慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ucELWgsjHNTSaeCsBxcnYm
        subject_person_id: p_aS4oPbQ6onmxdLtHcM6aRy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LnCuPNWT3aTfYhgCv2d9DV
          claim_id: c_ucELWgsjHNTSaeCsBxcnYm
          source_id: s_fkYoMRpWBFANnFxw9yoZcv
          stance: supports
          locator: CBDB:139734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139734）
          source: &a1
            id: s_fkYoMRpWBFANnFxw9yoZcv
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 139734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139734&o=json
            external_identifier: CBDB:139734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mGtM3wRPeRvCJNgPGeX8x9
        subject_person_id: p_aS4oPbQ6onmxdLtHcM6aRy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 608年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_21X2MQZUzbPsiPwRqBBfJ7
          claim_id: c_mGtM3wRPeRvCJNgPGeX8x9
          source_id: s_fkYoMRpWBFANnFxw9yoZcv
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
        id: c_ZEj78MKis8KehgFmUK1U16
        subject_person_id: p_aS4oPbQ6onmxdLtHcM6aRy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 679年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5SMvh5cuNZ2BEfh9P9swDh
          claim_id: c_ZEj78MKis8KehgFmUK1U16
          source_id: s_fkYoMRpWBFANnFxw9yoZcv
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
        id: c_FbbjFokP2ofobp37TtpFuM
        subject_person_id: p_aS4oPbQ6onmxdLtHcM6aRy
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
        - id: cs_hcWb8nMUUFw3Edrsh3i2v7
          claim_id: c_FbbjFokP2ofobp37TtpFuM
          source_id: s_fkYoMRpWBFANnFxw9yoZcv
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

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| birth.date | 608年 | accepted |
| death.date | 679年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 139734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139734&o=json)
