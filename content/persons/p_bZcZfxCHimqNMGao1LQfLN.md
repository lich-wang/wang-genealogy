---
schema: wang-person/v1
id: p_bZcZfxCHimqNMGao1LQfLN
status: active
merged_into: null
display_name: 王蘋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bRWqN95WVJ6YfvNXLnnsqJ
        subject_person_id: p_bZcZfxCHimqNMGao1LQfLN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8NRnHxFagtqHCLsiTF9dWv
          claim_id: c_bRWqN95WVJ6YfvNXLnnsqJ
          source_id: s_LofCYCda2stWd8D7hGgchb
          stance: supports
          locator: CBDB:7381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7381）
          source: &a1
            id: s_LofCYCda2stWd8D7hGgchb
            source_type: api_record
            title: 中国历代人物传记资料库：王蘋（CBDB 7381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7381&o=json
            external_identifier: CBDB:7381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LU5BZKrxS9iLEVy94KZNkn
        subject_person_id: p_bZcZfxCHimqNMGao1LQfLN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1082年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U1j3B6fTkoUQb8KrxLoETB
          claim_id: c_LU5BZKrxS9iLEVy94KZNkn
          source_id: s_LofCYCda2stWd8D7hGgchb
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
        id: c_ZZFrHa4Hvk5ZXaimGgvxCb
        subject_person_id: p_bZcZfxCHimqNMGao1LQfLN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1153年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JgKajUjfo918PKvN8kA9hL
          claim_id: c_ZZFrHa4Hvk5ZXaimGgvxCb
          source_id: s_LofCYCda2stWd8D7hGgchb
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
        id: c_45s3bZ8iY9jCfzv7EcxHqe
        subject_person_id: p_bZcZfxCHimqNMGao1LQfLN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1BiKCvsPJTEYCeXWfP2WwM
          claim_id: c_45s3bZ8iY9jCfzv7EcxHqe
          source_id: s_LofCYCda2stWd8D7hGgchb
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

# 王蘋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘋 | accepted |
| birth.date | 1082年 | accepted |
| death.date | 1153年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘋（CBDB 7381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7381&o=json)
