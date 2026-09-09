---
schema: wang-person/v1
id: p_tMG7KPDU3KLVpHRvgs3g63
status: active
merged_into: null
display_name: 王會
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4yhs8q9GEJP8VQRnFxUtsQ
        subject_person_id: p_tMG7KPDU3KLVpHRvgs3g63
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yE1oLfxTi8LPBQoAQ7Q2NA
          claim_id: c_4yhs8q9GEJP8VQRnFxUtsQ
          source_id: s_9PZ9aM2qNHM86NeMCMkt4e
          stance: supports
          locator: CBDB:190091
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190091）
          source: &a1
            id: s_9PZ9aM2qNHM86NeMCMkt4e
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 190091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190091&o=json
            external_identifier: CBDB:190091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QebK8wqWXvFn8yFTEAMuYv
        subject_person_id: p_tMG7KPDU3KLVpHRvgs3g63
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 831年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ckb5R4oVZZc3vMNm3jY6AF
          claim_id: c_QebK8wqWXvFn8yFTEAMuYv
          source_id: s_9PZ9aM2qNHM86NeMCMkt4e
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
        id: c_jG4TZ3F2Fx59LmC2DLK99X
        subject_person_id: p_tMG7KPDU3KLVpHRvgs3g63
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
        - id: cs_VhyNtRwYgWK8xhYEio7BF8
          claim_id: c_jG4TZ3F2Fx59LmC2DLK99X
          source_id: s_9PZ9aM2qNHM86NeMCMkt4e
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

# 王會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會 | accepted |
| death.date | 831年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會（CBDB 190091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190091&o=json)
