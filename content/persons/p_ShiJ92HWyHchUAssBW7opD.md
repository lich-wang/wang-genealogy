---
schema: wang-person/v1
id: p_ShiJ92HWyHchUAssBW7opD
status: active
merged_into: null
display_name: 王達
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b7iuG4cYd5oYoG8z2CNBiD
        subject_person_id: p_ShiJ92HWyHchUAssBW7opD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BqGcWCaG1HrpwQbtiCBR62
          claim_id: c_b7iuG4cYd5oYoG8z2CNBiD
          source_id: s_bQP6g3cvDzbzQwegMcCAP4
          stance: supports
          locator: CBDB:140409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140409）
          source: &a1
            id: s_bQP6g3cvDzbzQwegMcCAP4
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 140409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140409&o=json
            external_identifier: CBDB:140409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5mXj7w5wkB9XSRR7iS7B6c
        subject_person_id: p_ShiJ92HWyHchUAssBW7opD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 637年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mLRVsntV3kBcMr9zYe53fd
          claim_id: c_5mXj7w5wkB9XSRR7iS7B6c
          source_id: s_bQP6g3cvDzbzQwegMcCAP4
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
        id: c_johZVs2wfc4Cc9m7rPC85Y
        subject_person_id: p_ShiJ92HWyHchUAssBW7opD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 687年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMsM4GzqNWmHKbx61eLnp9
          claim_id: c_johZVs2wfc4Cc9m7rPC85Y
          source_id: s_bQP6g3cvDzbzQwegMcCAP4
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
        id: c_a9auddRmnG63pkA3WmX646
        subject_person_id: p_ShiJ92HWyHchUAssBW7opD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y56aKAm5ztk2c9dF1R624J
          claim_id: c_a9auddRmnG63pkA3WmX646
          source_id: s_bQP6g3cvDzbzQwegMcCAP4
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

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| birth.date | 637年 | accepted |
| death.date | 687年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 140409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140409&o=json)
