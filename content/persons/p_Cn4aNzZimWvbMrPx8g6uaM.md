---
schema: wang-person/v1
id: p_Cn4aNzZimWvbMrPx8g6uaM
status: active
merged_into: null
display_name: 王材任
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FQF5c35YVksb5YzAy64vL2
        subject_person_id: p_Cn4aNzZimWvbMrPx8g6uaM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BSRgGTWSMgaA2DriL2i7iG
          claim_id: c_FQF5c35YVksb5YzAy64vL2
          source_id: s_T9AuyjuPUi8NprhdAv9vGy
          stance: supports
          locator: CBDB:71663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71663）
          source: &a1
            id: s_T9AuyjuPUi8NprhdAv9vGy
            source_type: api_record
            title: 中国历代人物传记资料库：王材任（CBDB 71663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71663&o=json
            external_identifier: CBDB:71663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_j6CRfLzkKago6go2a3aqwd
        subject_person_id: p_Cn4aNzZimWvbMrPx8g6uaM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1653年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BpNRchk9hQuLF3LNL2h5gm
          claim_id: c_j6CRfLzkKago6go2a3aqwd
          source_id: s_T9AuyjuPUi8NprhdAv9vGy
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
        id: c_D6RyyGvFvwWtx1vBT7BEB5
        subject_person_id: p_Cn4aNzZimWvbMrPx8g6uaM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1739年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uTqqj3Qppp9dCRGHyKrLAF
          claim_id: c_D6RyyGvFvwWtx1vBT7BEB5
          source_id: s_T9AuyjuPUi8NprhdAv9vGy
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
        id: c_Ne61gixeAoJGcFdQnftj1K
        subject_person_id: p_Cn4aNzZimWvbMrPx8g6uaM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材任（1653年—1739年），清人物。明清進士進士，籍贯黃岡，入仕進士，曾任僉都御史。（中国历代人物传记资料库 CBDB 71663）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6JkmHWQQXRNS7wOT8P_VSc
          claim_id: c_Ne61gixeAoJGcFdQnftj1K
          source_id: s_T9AuyjuPUi8NprhdAv9vGy
          stance: supports
          locator: CBDB:71663
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

# 王材任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材任 | accepted |
| birth.date | 1653年 | accepted |
| death.date | 1739年 | accepted |
| bio.summary | 王材任（1653年—1739年），清人物。明清進士進士，籍贯黃岡，入仕進士，曾任僉都御史。（中国历代人物传记资料库 CBDB 71663） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王材任（CBDB 71663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71663&o=json)
