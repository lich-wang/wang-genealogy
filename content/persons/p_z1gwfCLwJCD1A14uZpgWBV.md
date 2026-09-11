---
schema: wang-person/v1
id: p_z1gwfCLwJCD1A14uZpgWBV
status: active
merged_into: null
display_name: 王仲武
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w9ayfnpSXBMmZNQofoUS6E
        subject_person_id: p_z1gwfCLwJCD1A14uZpgWBV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_92j2uDQCU31GbTzbkzUqjV
          claim_id: c_w9ayfnpSXBMmZNQofoUS6E
          source_id: s_crEVDQNUZJcW27vKy3f9xV
          stance: supports
          locator: CBDB:193213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193213）
          source: &a1
            id: s_crEVDQNUZJcW27vKy3f9xV
            source_type: api_record
            title: 中国历代人物传记资料库：王仲武（CBDB 193213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193213&o=json
            external_identifier: CBDB:193213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JtQBrtgMTiU8Zt2iVNSu1Y
        subject_person_id: p_z1gwfCLwJCD1A14uZpgWBV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 843年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DeN6XzK2vt11hmbj6XZuFE
          claim_id: c_JtQBrtgMTiU8Zt2iVNSu1Y
          source_id: s_crEVDQNUZJcW27vKy3f9xV
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
        id: c_i39Kb5aReq3Vpm1cQdW82W
        subject_person_id: p_z1gwfCLwJCD1A14uZpgWBV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲武（卒于843年），唐人物。籍贯丹徒，曾任縣令。（中国历代人物传记资料库 CBDB 193213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oVQjsqZmJ__mOLHwA5xQfH
          claim_id: c_i39Kb5aReq3Vpm1cQdW82W
          source_id: s_crEVDQNUZJcW27vKy3f9xV
          stance: supports
          locator: CBDB:193213
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mGrFK6Qts53mfk8wQy3KBQ
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z1gwfCLwJCD1A14uZpgWBV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x5PMeSnIAFZ69wgW9MiLon
          claim_id: c_mGrFK6Qts53mfk8wQy3KBQ
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
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
      object_person:
        id: p_3JQhJ6V1PYArAt9hMRD7UM
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲武 | accepted |
| death.date | 843年 | accepted |
| bio.summary | 王仲武（卒于843年），唐人物。籍贯丹徒，曾任縣令。（中国历代人物传记资料库 CBDB 193213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3JQhJ6V1PYArAt9hMRD7UM | 王鍊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍊（CBDB 145376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145376&o=json)
- [中国历代人物传记资料库：王仲武（CBDB 193213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193213&o=json)
