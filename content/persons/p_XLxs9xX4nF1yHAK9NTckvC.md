---
schema: wang-person/v1
id: p_XLxs9xX4nF1yHAK9NTckvC
status: active
merged_into: null
display_name: 王興滿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PcdKUZ2Q6qPG1mXWsHVtCb
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興滿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ueZpuZbdgXV1JACyNJvAmf
          claim_id: c_PcdKUZ2Q6qPG1mXWsHVtCb
          source_id: s_a2E38NyACYiaaotxNFsRg6
          stance: supports
          locator: CBDB:145578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145578）
          source: &a1
            id: s_a2E38NyACYiaaotxNFsRg6
            source_type: api_record
            title: 中国历代人物传记资料库：王興滿（CBDB 145578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145578&o=json
            external_identifier: CBDB:145578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4a9LoAbHkN9rLWAHoXLBDx
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 730年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CTEg3Ans6wM4JjUaosm2t5
          claim_id: c_4a9LoAbHkN9rLWAHoXLBDx
          source_id: s_a2E38NyACYiaaotxNFsRg6
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
        id: c_Xm3kmJq965XReuQM5F7Hw3
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 787年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7LnzX1bH2KBmd8f19eJrNZ
          claim_id: c_Xm3kmJq965XReuQM5F7Hw3
          source_id: s_a2E38NyACYiaaotxNFsRg6
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
        id: c_6mDnfmKUJJGDuv2V85XmfQ
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
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
        - id: cs_Z4yteo84oHVT3XVWVrVQS9
          claim_id: c_6mDnfmKUJJGDuv2V85XmfQ
          source_id: s_a2E38NyACYiaaotxNFsRg6
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

# 王興滿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興滿 | accepted |
| birth.date | 730年 | accepted |
| death.date | 787年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興滿（CBDB 145578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145578&o=json)
