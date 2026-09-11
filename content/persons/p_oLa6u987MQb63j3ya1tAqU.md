---
schema: wang-person/v1
id: p_oLa6u987MQb63j3ya1tAqU
status: active
merged_into: null
display_name: 王德素
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cM9HgzPHDm4bNQMLQiKCUY
        subject_person_id: p_oLa6u987MQb63j3ya1tAqU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_om43tmMZeqMXi5V7m3e8Wb
          claim_id: c_cM9HgzPHDm4bNQMLQiKCUY
          source_id: s_ggHXBc79NXCebBG2oHeKbN
          stance: supports
          locator: CBDB:153383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153383）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HbTJzHqKnDKNyggRdxNVg7
        subject_person_id: p_oLa6u987MQb63j3ya1tAqU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为隋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m61PJ15zw68FTNbY2ud7uK
          claim_id: c_HbTJzHqKnDKNyggRdxNVg7
          source_id: s_ggHXBc79NXCebBG2oHeKbN
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
        id: c_mBcCCxfG6wGrdKBr7Y4_xg
        subject_person_id: p_oLa6u987MQb63j3ya1tAqU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CfDJLGeQRm5GT5pz7Re9pe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__pk_7s6lvHqCv_rLwt3MtY
          claim_id: c_mBcCCxfG6wGrdKBr7Y4_xg
          source_id: s_K6K9AHDcPZNSVWq15nKQK6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K6K9AHDcPZNSVWq15nKQK6
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 175678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175678&o=json
            external_identifier: CBDB:175678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CfDJLGeQRm5GT5pz7Re9pe
        status: active
        display_name: 王瑜
        merged_into_person_id: null
    - claim:
        id: c_NbOqcdz2hxy7mzl44X1gn-
        subject_person_id: p_oLa6u987MQb63j3ya1tAqU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cyb8Y4r2NXehBqbUsk4xci
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5rqTbEODX6480dVpA9MpvG
          claim_id: c_NbOqcdz2hxy7mzl44X1gn-
          source_id: s_Fu1pivLGeCJWD1DdxNp78z
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Fu1pivLGeCJWD1DdxNp78z
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 175676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175676&o=json
            external_identifier: CBDB:175676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Cyb8Y4r2NXehBqbUsk4xci
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德素 | accepted |
| bio.summary | CBDB 记载为隋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CfDJLGeQRm5GT5pz7Re9pe | 王瑜 | accepted |
| children | p_Cyb8Y4r2NXehBqbUsk4xci | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德素（CBDB 153383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153383&o=json)
- [中国历代人物传记资料库：王鼎（CBDB 175676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175676&o=json)
- [中国历代人物传记资料库：王瑜（CBDB 175678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175678&o=json)
