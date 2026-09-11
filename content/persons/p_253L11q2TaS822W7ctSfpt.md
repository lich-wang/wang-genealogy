---
schema: wang-person/v1
id: p_253L11q2TaS822W7ctSfpt
status: merged
merged_into: p_qCFGm193BBRnE82CUPasCQ
display_name: 王承元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XwXzrMmzCjMQpQqJL3yTZ1
        subject_person_id: p_253L11q2TaS822W7ctSfpt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lk4R4vLte3gjcB58PSD3Bb
          claim_id: c_XwXzrMmzCjMQpQqJL3yTZ1
          source_id: s_2sTBbuS9tBS1nvLfRRyN7S
          stance: supports
          locator: CBDB:169027
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169027）
          source: &a1
            id: s_2sTBbuS9tBS1nvLfRRyN7S
            source_type: api_record
            title: 中国历代人物传记资料库：王承元（CBDB 169027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169027&o=json
            external_identifier: CBDB:169027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mqYRmJviG7UoMD2cqoJnTm
        subject_person_id: p_253L11q2TaS822W7ctSfpt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 801年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qAAnsEefiYnWAeJQjhKy3t
          claim_id: c_mqYRmJviG7UoMD2cqoJnTm
          source_id: s_2sTBbuS9tBS1nvLfRRyN7S
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
        id: c_j2nHDqRLJ2qg1JbV6koFt2
        subject_person_id: p_253L11q2TaS822W7ctSfpt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 833年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QHk2KNajr1b9h8oSecCGRV
          claim_id: c_j2nHDqRLJ2qg1JbV6koFt2
          source_id: s_2sTBbuS9tBS1nvLfRRyN7S
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
        id: c_hSzD4ouz6LEzjk5iuKjByQ
        subject_person_id: p_253L11q2TaS822W7ctSfpt
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
        - id: cs_1cGPy93GNhB2V1iu368SxJ
          claim_id: c_hSzD4ouz6LEzjk5iuKjByQ
          source_id: s_2sTBbuS9tBS1nvLfRRyN7S
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

# 王承元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承元 | accepted |
| birth.date | 801年 | accepted |
| death.date | 833年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承元（CBDB 169027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169027&o=json)
