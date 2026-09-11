---
schema: wang-person/v1
id: p_tSpXqwBE33pVWfFPYz5gPg
status: active
merged_into: null
display_name: 王士麟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mkr2hsPoktCiFdqfQoEbmo
        subject_person_id: p_tSpXqwBE33pVWfFPYz5gPg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XAbdNKaBkrySA7uMgn32o4
          claim_id: c_Mkr2hsPoktCiFdqfQoEbmo
          source_id: s_y7FNEsGonfjXi7PPEnWuXe
          stance: supports
          locator: CBDB:101037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101037）
          source: &a1
            id: s_y7FNEsGonfjXi7PPEnWuXe
            source_type: api_record
            title: 中国历代人物传记资料库：王士麟（CBDB 101037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101037&o=json
            external_identifier: CBDB:101037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UEUzFSsmAvjrX9aJrCqV1o
        subject_person_id: p_tSpXqwBE33pVWfFPYz5gPg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1312年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TVkKc1rX27WrRvNpHHL9Gc
          claim_id: c_UEUzFSsmAvjrX9aJrCqV1o
          source_id: s_y7FNEsGonfjXi7PPEnWuXe
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
        id: c_joDzJLCnp42ZiKpRqbeH32
        subject_person_id: p_tSpXqwBE33pVWfFPYz5gPg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1389年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66Uiq3Evx4qzdcBLTa9HU8
          claim_id: c_joDzJLCnp42ZiKpRqbeH32
          source_id: s_y7FNEsGonfjXi7PPEnWuXe
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
        id: c_r36vuzJUS1PbB4qW2i5ctF
        subject_person_id: p_tSpXqwBE33pVWfFPYz5gPg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nVsQ6h7LC8xyFW5BxyzDSo
          claim_id: c_r36vuzJUS1PbB4qW2i5ctF
          source_id: s_y7FNEsGonfjXi7PPEnWuXe
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
        id: c_PBQ6Z6ofsh1iPpY8Gy_nM5
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tSpXqwBE33pVWfFPYz5gPg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1T1lW6tgr92n7HZCS5Cvae
          claim_id: c_PBQ6Z6ofsh1iPpY8Gy_nM5
          source_id: s_y7FNEsGonfjXi7PPEnWuXe
          stance: supports
          locator: 元人傳記資料索引，870：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vM6985QJehceoGJD1bbJKF
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children: []
  adoptive_parents:
    - claim:
        id: c_UwxKkDuh21CwFaYDxAe_Jy
        subject_person_id: p_1oC2qMk3qZtNNJEcLaYnhz
        claim_kind: relationship
        predicate: kinship.adoptive_father_of
        object_person_id: p_tSpXqwBE33pVWfFPYz5gPg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UMh4KPTjmD-akhbJ73mPEA
          claim_id: c_UwxKkDuh21CwFaYDxAe_Jy
          source_id: s_5GHnvLiEPe9GvE8cxarqQo
          stance: supports
          locator: 宋濂全集，1606：過繼的嗣子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5GHnvLiEPe9GvE8cxarqQo
            source_type: api_record
            title: 中国历代人物传记资料库：王汶（CBDB 134165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134165&o=json
            external_identifier: CBDB:134165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1oC2qMk3qZtNNJEcLaYnhz
        status: active
        display_name: 王汶
        merged_into_person_id: null
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士麟 | accepted |
| birth.date | 1312年 | accepted |
| death.date | 1389年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vM6985QJehceoGJD1bbJKF | 王澄 | accepted |
| adoptive_parents | p_1oC2qMk3qZtNNJEcLaYnhz | 王汶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士麟（CBDB 101037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101037&o=json)
- [中国历代人物传记资料库：王汶（CBDB 134165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134165&o=json)
