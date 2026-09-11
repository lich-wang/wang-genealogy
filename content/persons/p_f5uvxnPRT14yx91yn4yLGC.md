---
schema: wang-person/v1
id: p_f5uvxnPRT14yx91yn4yLGC
status: active
merged_into: null
display_name: 王韶
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QVC7eQvdrMHZGksocy5Gu2
        subject_person_id: p_f5uvxnPRT14yx91yn4yLGC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LTFBPFW4MNtsePoPsFP6pQ
          claim_id: c_QVC7eQvdrMHZGksocy5Gu2
          source_id: s_poLeh8kpxwPjbXaE8MdYZh
          stance: supports
          locator: CBDB:1865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1865）
          source: &a1
            id: s_poLeh8kpxwPjbXaE8MdYZh
            source_type: api_record
            title: 中国历代人物传记资料库：王韶（CBDB 1865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1865&o=json
            external_identifier: CBDB:1865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tJ8KHoiiPz7XaVYqF59zAU
        subject_person_id: p_f5uvxnPRT14yx91yn4yLGC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1030年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHoLmxbAHNnid3an5UfWBB
          claim_id: c_tJ8KHoiiPz7XaVYqF59zAU
          source_id: s_poLeh8kpxwPjbXaE8MdYZh
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
        id: c_Q5gTTYRdLavt2vAhA56azH
        subject_person_id: p_f5uvxnPRT14yx91yn4yLGC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1081年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fNHzBCXMiF3zAwj7xXmLHv
          claim_id: c_Q5gTTYRdLavt2vAhA56azH
          source_id: s_poLeh8kpxwPjbXaE8MdYZh
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
        id: c_QQymRYqB5SVCM9TBoMhKCb
        subject_person_id: p_f5uvxnPRT14yx91yn4yLGC
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
        - id: cs_zib89yQZfvvDMNqnCZGbtP
          claim_id: c_QQymRYqB5SVCM9TBoMhKCb
          source_id: s_poLeh8kpxwPjbXaE8MdYZh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3lIVjO6v_sT4Kpqti14c39
        subject_person_id: p_f5uvxnPRT14yx91yn4yLGC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j7cTzgP8kPH4PuJJT6Phja
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KIHBTZ4KCsp_ktFg-VD4Oh
          claim_id: c_3lIVjO6v_sT4Kpqti14c39
          source_id: s_qcX1VjDMhbTXr7Psa249QR
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qcX1VjDMhbTXr7Psa249QR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宷（119740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119740&o=json
            external_identifier: CBDB:119740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:05.048Z
            metadata_json: null
      object_person:
        id: p_j7cTzgP8kPH4PuJJT6Phja
        status: active
        display_name: 王宷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_XO8_GYeepXSmZ-d_VSLAK0
        subject_person_id: p_f5uvxnPRT14yx91yn4yLGC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gVqCXVicYP0bCstTcSSyb0
          claim_id: c_XO8_GYeepXSmZ-d_VSLAK0
          source_id: s_4z3F8MMmD2S1em5Hn7hH1H
          stance: supports
          locator: 宋史：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4z3F8MMmD2S1em5Hn7hH1H
            source_type: api_record
            title: 中国历代人物传记资料库：王遂（CBDB 12053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12053&o=json
            external_identifier: CBDB:12053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DCTkDfQk8qHYiFjuEH45Mr
        status: active
        display_name: 王遂
        merged_into_person_id: null
    - claim:
        id: c_gQs2rSgXMnMIJF4BtcRIFT
        subject_person_id: p_f5uvxnPRT14yx91yn4yLGC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jj-YVsjUzEaUdz__op241l
          claim_id: c_gQs2rSgXMnMIJF4BtcRIFT
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JiBcFyQDVHFNQoKUexCzy3
            source_type: api_record
            title: 中国历代人物传记资料库：王萬樞（CBDB 12051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12051&o=json
            external_identifier: CBDB:12051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i5579JHLY2cRuS7YHKZJ5T
        status: active
        display_name: 王萬樞
        merged_into_person_id: null
  other: []
---

# 王韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韶 | accepted |
| birth.date | 1030年 | accepted |
| death.date | 1081年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_j7cTzgP8kPH4PuJJT6Phja | 王宷 | accepted |
| descendants | p_DCTkDfQk8qHYiFjuEH45Mr | 王遂 | accepted |
| descendants | p_i5579JHLY2cRuS7YHKZJ5T | 王萬樞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王韶（CBDB 1865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1865&o=json)
- [中国历代人物传记资料库：王遂（CBDB 12053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12053&o=json)
- [中国历代人物传记资料库：王萬樞（CBDB 12051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12051&o=json)
- [CBDB 中国历代人物传记资料库：王宷（119740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119740&o=json)
