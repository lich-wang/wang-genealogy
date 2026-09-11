---
schema: wang-person/v1
id: p_oVGxgeqgB52Zexa9NQq2Wt
status: active
merged_into: null
display_name: 王續
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u1XNMzFdC8b72F9CKwXyCr
        subject_person_id: p_oVGxgeqgB52Zexa9NQq2Wt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AHe7p85JYfeB2U6dPXLz8c
          claim_id: c_u1XNMzFdC8b72F9CKwXyCr
          source_id: s_pRAsobtmvbmDSpdAh6tAoD
          stance: supports
          locator: CBDB:152187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152187）
          source: &a1
            id: s_pRAsobtmvbmDSpdAh6tAoD
            source_type: api_record
            title: 中国历代人物传记资料库：王續（CBDB 152187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152187&o=json
            external_identifier: CBDB:152187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cy9evWiS8G38X4FzhkCq2G
        subject_person_id: p_oVGxgeqgB52Zexa9NQq2Wt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KGU41MtJ26jR6CyqSS7Sii
          claim_id: c_cy9evWiS8G38X4FzhkCq2G
          source_id: s_pRAsobtmvbmDSpdAh6tAoD
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
        id: c_u0LFAwSk2Qcr3DNvo6biR6
        subject_person_id: p_GKQhdXFztLtPL7bohPvpcw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oVGxgeqgB52Zexa9NQq2Wt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jqGKAZaZ89pR0C8Z5M6tii
          claim_id: c_u0LFAwSk2Qcr3DNvo6biR6
          source_id: s_hjv4vhKBr5cWXCtBcBEfSR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hjv4vhKBr5cWXCtBcBEfSR
            source_type: api_record
            title: 中国历代人物传记资料库：王猛（CBDB 175662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175662&o=json
            external_identifier: CBDB:175662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GKQhdXFztLtPL7bohPvpcw
        status: active
        display_name: 王猛
        merged_into_person_id: null
  children:
    - claim:
        id: c_KO-1ErvFeEyv7Y8HQiHp_8
        subject_person_id: p_oVGxgeqgB52Zexa9NQq2Wt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ee4jhwpKMUeV9pY9CQ4y7w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivR1KEhXWWmlZIvTmSwB7i
          claim_id: c_KO-1ErvFeEyv7Y8HQiHp_8
          source_id: s_v3aDqyKbTDo5JRrHEV3vFn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v3aDqyKbTDo5JRrHEV3vFn
            source_type: api_record
            title: 中国历代人物传记资料库：王德本（CBDB 175680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175680&o=json
            external_identifier: CBDB:175680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.054Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ee4jhwpKMUeV9pY9CQ4y7w
        status: active
        display_name: 王德本
        merged_into_person_id: null
    - claim:
        id: c_9Ocm6eZpKTj4ZJSDt2-lDW
        subject_person_id: p_oVGxgeqgB52Zexa9NQq2Wt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oLa6u987MQb63j3ya1tAqU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FFqPTmhBEJvQXO965e7xVZ
          claim_id: c_9Ocm6eZpKTj4ZJSDt2-lDW
          source_id: s_ggHXBc79NXCebBG2oHeKbN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ggHXBc79NXCebBG2oHeKbN
            source_type: api_record
            title: 中国历代人物传记资料库：王德素（CBDB 153383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153383&o=json
            external_identifier: CBDB:153383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oLa6u987MQb63j3ya1tAqU
        status: active
        display_name: 王德素
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王續

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王續 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GKQhdXFztLtPL7bohPvpcw | 王猛 | accepted |
| children | p_Ee4jhwpKMUeV9pY9CQ4y7w | 王德本 | accepted |
| children | p_oLa6u987MQb63j3ya1tAqU | 王德素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德本（CBDB 175680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175680&o=json)
- [中国历代人物传记资料库：王德素（CBDB 153383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153383&o=json)
- [中国历代人物传记资料库：王猛（CBDB 175662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175662&o=json)
- [中国历代人物传记资料库：王續（CBDB 152187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152187&o=json)
