---
schema: wang-person/v1
id: p_4UbRK7w6DiK7iFYWsav6v1
status: active
merged_into: null
display_name: 王都
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_23MbqcEM8dPnpdX422dxJM
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王都
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SfcZrqPvQift8So4jzVNDu
          claim_id: c_23MbqcEM8dPnpdX422dxJM
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
          stance: supports
          locator: CBDB:207078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207078）
          source: &a1
            id: s_avnRdC5KtG8zzfeDZxHPY8
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 207078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207078&o=json
            external_identifier: CBDB:207078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_w9VvfbNDkCrPwFq6cCtEQ8
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1556年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BxKmHkvEJJaFpmjR7jEskF
          claim_id: c_w9VvfbNDkCrPwFq6cCtEQ8
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
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
        id: c_iN4zf14W4xpVzEpPD79KwF
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8FNKBhuNKjr8Ut27KUC5Zy
          claim_id: c_iN4zf14W4xpVzEpPD79KwF
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
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

# 王都

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王都 | accepted |
| birth.date | 1556年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王都（CBDB 207078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207078&o=json)
