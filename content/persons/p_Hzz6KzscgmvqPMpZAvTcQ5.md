---
schema: wang-person/v1
id: p_Hzz6KzscgmvqPMpZAvTcQ5
status: active
merged_into: null
display_name: 王瓚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a97tHJkHcRJP5XpuQbvDRT
        subject_person_id: p_Hzz6KzscgmvqPMpZAvTcQ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GrpS74gcwrivDgVAksHAoa
          claim_id: c_a97tHJkHcRJP5XpuQbvDRT
          source_id: s_cLNMPFPx8RSrY4QwjD1RMF
          stance: supports
          locator: CBDB:144998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144998）
          source: &a1
            id: s_cLNMPFPx8RSrY4QwjD1RMF
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 144998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144998&o=json
            external_identifier: CBDB:144998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HoEduXe3US4pxUTQ7pJ6eK
        subject_person_id: p_Hzz6KzscgmvqPMpZAvTcQ5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 953年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jKF8yK8a5WpwV427WZzm8Z
          claim_id: c_HoEduXe3US4pxUTQ7pJ6eK
          source_id: s_cLNMPFPx8RSrY4QwjD1RMF
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
        id: c_qs3oDzDLrr6K189aAfSqbu
        subject_person_id: p_Hzz6KzscgmvqPMpZAvTcQ5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 984年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t4aA2RiZAwX9v86wtMjTkR
          claim_id: c_qs3oDzDLrr6K189aAfSqbu
          source_id: s_cLNMPFPx8RSrY4QwjD1RMF
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
        id: c_qam3C4ns8TVtUuebGpSUKN
        subject_person_id: p_Hzz6KzscgmvqPMpZAvTcQ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚（953年—984年），遼人物。籍贯建州，曾任上柱國、右僕射、御史大夫。（中国历代人物传记资料库 CBDB 144998）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KSw5lkdr1OE_YEZNwS5cgU
          claim_id: c_qam3C4ns8TVtUuebGpSUKN
          source_id: s_cLNMPFPx8RSrY4QwjD1RMF
          stance: supports
          locator: CBDB:144998
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e0nXWj-8n9QGRUd00m5JeJ
        subject_person_id: p_dHK6S2CF83o7bsW1omDPPe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hzz6KzscgmvqPMpZAvTcQ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MKskgAc6gwYJFQbvK1c5fK
          claim_id: c_e0nXWj-8n9QGRUd00m5JeJ
          source_id: s_V2fSUyMizNfJqvRAfkJqCX
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_V2fSUyMizNfJqvRAfkJqCX
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 144860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144860&o=json
            external_identifier: CBDB:144860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHK6S2CF83o7bsW1omDPPe
        status: active
        display_name: 王裕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| birth.date | 953年 | accepted |
| death.date | 984年 | accepted |
| bio.summary | 王瓚（953年—984年），遼人物。籍贯建州，曾任上柱國、右僕射、御史大夫。（中国历代人物传记资料库 CBDB 144998） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dHK6S2CF83o7bsW1omDPPe | 王裕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王裕（CBDB 144860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144860&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 144998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144998&o=json)
