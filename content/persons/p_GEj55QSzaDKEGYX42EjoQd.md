---
schema: wang-person/v1
id: p_GEj55QSzaDKEGYX42EjoQd
status: active
merged_into: null
display_name: 王晏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dvRHzqqNanz1aWX73Dz6qp
        subject_person_id: p_GEj55QSzaDKEGYX42EjoQd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_22wR9zrDoLKE2LoC1aYuYd
          claim_id: c_dvRHzqqNanz1aWX73Dz6qp
          source_id: s_5hqmXFM1SYMCMPdBoapGbk
          stance: supports
          locator: CBDB:159900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159900）
          source: &a1
            id: s_5hqmXFM1SYMCMPdBoapGbk
            source_type: api_record
            title: 中国历代人物传记资料库：王晏（CBDB 159900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159900&o=json
            external_identifier: CBDB:159900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N2v1U6fmLzpVEqtbLsP7MK
        subject_person_id: p_GEj55QSzaDKEGYX42EjoQd
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
        - id: cs_nx4tFXQWFT4trb3c3pRVDS
          claim_id: c_N2v1U6fmLzpVEqtbLsP7MK
          source_id: s_5hqmXFM1SYMCMPdBoapGbk
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
        id: c_IdAEJFqxWIc2fc9ruAXlui
        subject_person_id: p_6viHAJJvPurio788m5uDUw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GEj55QSzaDKEGYX42EjoQd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lxljyi6zaLp8w1wb2-yL7U
          claim_id: c_IdAEJFqxWIc2fc9ruAXlui
          source_id: s_B6bZAK4YtQREA5MaRmJ61F
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B6bZAK4YtQREA5MaRmJ61F
            source_type: api_record
            title: 中国历代人物传记资料库：王收（CBDB 159899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159899&o=json
            external_identifier: CBDB:159899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6viHAJJvPurio788m5uDUw
        status: active
        display_name: 王收
        merged_into_person_id: null
  children:
    - claim:
        id: c_j88TdH9etf1l2fxLhPAnOz
        subject_person_id: p_GEj55QSzaDKEGYX42EjoQd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2ZDBaU5Nwn4RbjDJocVxJb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vxkyFPqriJ0y6wwDIaUlPJ
          claim_id: c_j88TdH9etf1l2fxLhPAnOz
          source_id: s_snxK4rogo6NP8tAqs2GoDn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_snxK4rogo6NP8tAqs2GoDn
            source_type: api_record
            title: 中国历代人物传记资料库：王璡（CBDB 159904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159904&o=json
            external_identifier: CBDB:159904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2ZDBaU5Nwn4RbjDJocVxJb
        status: active
        display_name: 王璡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晏 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6viHAJJvPurio788m5uDUw | 王收 | accepted |
| children | p_2ZDBaU5Nwn4RbjDJocVxJb | 王璡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璡（CBDB 159904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159904&o=json)
- [中国历代人物传记资料库：王收（CBDB 159899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159899&o=json)
- [中国历代人物传记资料库：王晏（CBDB 159900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159900&o=json)
