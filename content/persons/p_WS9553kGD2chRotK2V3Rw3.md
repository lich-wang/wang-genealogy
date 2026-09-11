---
schema: wang-person/v1
id: p_WS9553kGD2chRotK2V3Rw3
status: active
merged_into: null
display_name: 王翼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LGDBhjj4vYTGtatfAxKVQF
        subject_person_id: p_WS9553kGD2chRotK2V3Rw3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HeDd8isBjNTE3Z32THXAB1
          claim_id: c_LGDBhjj4vYTGtatfAxKVQF
          source_id: s_CiLcqCYyfQHGLQMqwwtXXL
          stance: supports
          locator: CBDB:175847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175847）
          source: &a1
            id: s_CiLcqCYyfQHGLQMqwwtXXL
            source_type: api_record
            title: 中国历代人物传记资料库：王翼（CBDB 175847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175847&o=json
            external_identifier: CBDB:175847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5xNH5NXutVNJRVPfQW4Q1L
        subject_person_id: p_WS9553kGD2chRotK2V3Rw3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 778年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LDnKxBHqxGtBgH7mqM4k7H
          claim_id: c_5xNH5NXutVNJRVPfQW4Q1L
          source_id: s_CiLcqCYyfQHGLQMqwwtXXL
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
        id: c_M2dkejALv6vRHWYpqLxaFo
        subject_person_id: p_WS9553kGD2chRotK2V3Rw3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翼（卒于778年），唐人物。籍贯汝州，曾任司農少卿、令。（中国历代人物传记资料库 CBDB 175847）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DXsYIihqP2NBWcGcXi-zWg
          claim_id: c_M2dkejALv6vRHWYpqLxaFo
          source_id: s_CiLcqCYyfQHGLQMqwwtXXL
          stance: supports
          locator: CBDB:175847
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bhcqpJqSWde1S7mF4Foaov
        subject_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WS9553kGD2chRotK2V3Rw3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QxHRs30XEYb9FO68ZcUnzm
          claim_id: c_bhcqpJqSWde1S7mF4Foaov
          source_id: s_yd3oS6UgooQrEVwzqDGCU1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yd3oS6UgooQrEVwzqDGCU1
            source_type: api_record
            title: 中国历代人物传记资料库：王美暢（CBDB 150489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150489&o=json
            external_identifier: CBDB:150489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CWPBrhMiB4QhsDQzD22Bfc
        status: active
        display_name: 王美暢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翼 | accepted |
| death.date | 778年 | accepted |
| bio.summary | 王翼（卒于778年），唐人物。籍贯汝州，曾任司農少卿、令。（中国历代人物传记资料库 CBDB 175847） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CWPBrhMiB4QhsDQzD22Bfc | 王美暢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王美暢（CBDB 150489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150489&o=json)
- [中国历代人物传记资料库：王翼（CBDB 175847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175847&o=json)
