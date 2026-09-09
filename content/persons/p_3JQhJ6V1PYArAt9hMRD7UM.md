---
schema: wang-person/v1
id: p_3JQhJ6V1PYArAt9hMRD7UM
status: active
merged_into: null
display_name: 王鍊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U9aGZuWs1RTDUFYbVFXE1B
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_erEU4u9J51ZzZUU8HVaPRi
          claim_id: c_U9aGZuWs1RTDUFYbVFXE1B
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
          stance: supports
          locator: CBDB:145376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145376）
          source: &a1
            id: s_9cH4Wz7cVkGPVnRJQsf5ei
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 145376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145376&o=json
            external_identifier: CBDB:145376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_J1bNtpjB1JpnT1R7V8F4k3
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 747年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gkv7ptjeyc1cuiJ4LYB34L
          claim_id: c_J1bNtpjB1JpnT1R7V8F4k3
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
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
        id: c_ZnKMw6GadLf1o1h52VHg1V
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 801年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ur4L4qnTr9NQWtajC1toLM
          claim_id: c_ZnKMw6GadLf1o1h52VHg1V
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
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
        id: c_zF26h3MS7wZAwXWwA48Ax4
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
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
        - id: cs_7RM3WY3y8guVMCvm9ibiVC
          claim_id: c_zF26h3MS7wZAwXWwA48Ax4
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
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

# 王鍊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍊 | accepted |
| birth.date | 747年 | accepted |
| death.date | 801年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍊（CBDB 145376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145376&o=json)
