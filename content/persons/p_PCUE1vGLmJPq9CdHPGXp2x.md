---
schema: wang-person/v1
id: p_PCUE1vGLmJPq9CdHPGXp2x
status: active
merged_into: null
display_name: 王曰高
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eBpLFKn7F1pU5vii8MDCJU
        subject_person_id: p_PCUE1vGLmJPq9CdHPGXp2x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VjCNZmF7Kc1Ppr3Gfdqftp
          claim_id: c_eBpLFKn7F1pU5vii8MDCJU
          source_id: s_hSsyLPxzTjru9duF4aZCTs
          stance: supports
          locator: CBDB:71398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71398）
          source: &a1
            id: s_hSsyLPxzTjru9duF4aZCTs
            source_type: api_record
            title: 中国历代人物传记资料库：王曰高（CBDB 71398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71398&o=json
            external_identifier: CBDB:71398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NxM4dKXtju8VXBPntQ2GCM
        subject_person_id: p_PCUE1vGLmJPq9CdHPGXp2x
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1628年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DHvrfpNCN79dQueTEBzBhi
          claim_id: c_NxM4dKXtju8VXBPntQ2GCM
          source_id: s_hSsyLPxzTjru9duF4aZCTs
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
        id: c_ZqDSEC35woNWDHgrGiyYQw
        subject_person_id: p_PCUE1vGLmJPq9CdHPGXp2x
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1678年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dUB7889R41m7SRMa6CbZ46
          claim_id: c_ZqDSEC35woNWDHgrGiyYQw
          source_id: s_hSsyLPxzTjru9duF4aZCTs
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
        id: c_G3YzdT22mEiqGt5u4Y3cBB
        subject_person_id: p_PCUE1vGLmJPq9CdHPGXp2x
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
        - id: cs_HqeRKKdKJKY84Ly3o7ojPo
          claim_id: c_G3YzdT22mEiqGt5u4Y3cBB
          source_id: s_hSsyLPxzTjru9duF4aZCTs
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

# 王曰高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰高 | accepted |
| birth.date | 1628年 | accepted |
| death.date | 1678年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曰高（CBDB 71398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71398&o=json)
