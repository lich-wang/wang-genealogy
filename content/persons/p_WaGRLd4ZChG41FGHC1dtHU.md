---
schema: wang-person/v1
id: p_WaGRLd4ZChG41FGHC1dtHU
status: active
merged_into: null
display_name: 王永
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N27d8fWkHf8M3rZf4RPXrK
        subject_person_id: p_WaGRLd4ZChG41FGHC1dtHU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g4htW9j2M8Gd1mKjm6Fik1
          claim_id: c_N27d8fWkHf8M3rZf4RPXrK
          source_id: s_Z6RHoxLaXGiQj5FgDtdXjS
          stance: supports
          locator: CBDB:141350
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141350）
          source: &a1
            id: s_Z6RHoxLaXGiQj5FgDtdXjS
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 141350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141350&o=json
            external_identifier: CBDB:141350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5q8PYv5MGam8kLMTXsW9vu
        subject_person_id: p_WaGRLd4ZChG41FGHC1dtHU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 749年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zt6iror8RUWChTFTtkEu8K
          claim_id: c_5q8PYv5MGam8kLMTXsW9vu
          source_id: s_Z6RHoxLaXGiQj5FgDtdXjS
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
        id: c_fnMjj7vgji24qCLcyCtjHd
        subject_person_id: p_WaGRLd4ZChG41FGHC1dtHU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 800年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hoJ1SPZze1FywtKvVXRK4z
          claim_id: c_fnMjj7vgji24qCLcyCtjHd
          source_id: s_Z6RHoxLaXGiQj5FgDtdXjS
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
        id: c_Xgwfn83S3akBYF1EM2YCx3
        subject_person_id: p_WaGRLd4ZChG41FGHC1dtHU
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
        - id: cs_yGT31sy5a9JUHmvqvYaELd
          claim_id: c_Xgwfn83S3akBYF1EM2YCx3
          source_id: s_Z6RHoxLaXGiQj5FgDtdXjS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yOTJh4DhyEFyh0TG7yngvN
        subject_person_id: p_hGqH395C56YfcZLKCC7BLV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WaGRLd4ZChG41FGHC1dtHU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dWti7wJq3gG2ZUIrcWkipZ
          claim_id: c_yOTJh4DhyEFyh0TG7yngvN
          source_id: s_CJkUYh6HwM9uQ9L4VtgWVk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 100：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CJkUYh6HwM9uQ9L4VtgWVk
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 155951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155951&o=json
            external_identifier: CBDB:155951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hGqH395C56YfcZLKCC7BLV
        status: active
        display_name: 王震
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永 | accepted |
| birth.date | 749年 | accepted |
| death.date | 800年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hGqH395C56YfcZLKCC7BLV | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永（CBDB 141350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141350&o=json)
- [中国历代人物传记资料库：王震（CBDB 155951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155951&o=json)
