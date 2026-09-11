---
schema: wang-person/v1
id: p_boTUM7wXrFsUe2YXj6p4au
status: active
merged_into: null
display_name: 王桂華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j44RLydzrC5y225CyDNSqW
        subject_person_id: p_boTUM7wXrFsUe2YXj6p4au
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3use8LN9Ta1QgfLiaS4g1y
          claim_id: c_j44RLydzrC5y225CyDNSqW
          source_id: s_3LKCxXnSn9EbXRHX4CjGaC
          stance: supports
          locator: CBDB:146251
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146251）
          source: &a1
            id: s_3LKCxXnSn9EbXRHX4CjGaC
            source_type: api_record
            title: 中国历代人物传记资料库：王桂華（CBDB 146251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146251&o=json
            external_identifier: CBDB:146251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nGphuGDG8LGgY2T6AZz5yZ
        subject_person_id: p_boTUM7wXrFsUe2YXj6p4au
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TzYKFNST5PGWj8Vu3dpiVK
          claim_id: c_nGphuGDG8LGgY2T6AZz5yZ
          source_id: s_3LKCxXnSn9EbXRHX4CjGaC
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
        id: c_wSxBZe7h5KtwBK6wevaGKF
        subject_person_id: p_boTUM7wXrFsUe2YXj6p4au
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 875年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KP6CiKzC3zeNx6CrdJrGcx
          claim_id: c_wSxBZe7h5KtwBK6wevaGKF
          source_id: s_3LKCxXnSn9EbXRHX4CjGaC
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
        id: c_NyAvqvEm51jgjU7iVD42QQ
        subject_person_id: p_boTUM7wXrFsUe2YXj6p4au
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂華（848年—875年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 146251）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HEdrPAfytui1_OZu8CS2GP
          claim_id: c_NyAvqvEm51jgjU7iVD42QQ
          source_id: s_3LKCxXnSn9EbXRHX4CjGaC
          stance: supports
          locator: CBDB:146251
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

# 王桂華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂華 | accepted |
| birth.date | 848年 | accepted |
| death.date | 875年 | accepted |
| bio.summary | 王桂華（848年—875年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 146251） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂華（CBDB 146251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146251&o=json)
