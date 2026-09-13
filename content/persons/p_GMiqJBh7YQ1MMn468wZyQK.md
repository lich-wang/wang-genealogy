---
schema: wang-person/v1
id: p_GMiqJBh7YQ1MMn468wZyQK
status: active
merged_into: null
display_name: 王曰然
cbdb_id: 203455
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L9T1PhFFqr2LVG9mvRTQ2o
        subject_person_id: p_GMiqJBh7YQ1MMn468wZyQK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰然（生于1513年），明人物。嘉靖二十年進士，籍贯河南衛，入仕進士。（中国历代人物传记资料库 CBDB 203455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AEeiYA8mvsno3iqr47mc-l
          claim_id: c_L9T1PhFFqr2LVG9mvRTQ2o
          source_id: s_D7zzXmbXrkaQ6mmTZ94gwF
          stance: supports
          locator: CBDB:203455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D7zzXmbXrkaQ6mmTZ94gwF
            source_type: api_record
            title: 中国历代人物传记资料库：王曰然（CBDB 203455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203455&o=json
            external_identifier: CBDB:203455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3JU9bkPi3PjLxw9Q4V5GzP
        subject_person_id: p_GMiqJBh7YQ1MMn468wZyQK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1513年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1513-01-01
            latest: 1513-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zjALHMY6CNx9Mnvn8UUa3v
          claim_id: c_3JU9bkPi3PjLxw9Q4V5GzP
          source_id: s_D7zzXmbXrkaQ6mmTZ94gwF
          stance: supports
          locator: CBDB:203455
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1513
          source:
            id: s_D7zzXmbXrkaQ6mmTZ94gwF
            source_type: api_record
            title: 中国历代人物传记资料库：王曰然（CBDB 203455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203455&o=json
            external_identifier: CBDB:203455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3r99zZdtYsLyiDkHK1j52J
        subject_person_id: p_GMiqJBh7YQ1MMn468wZyQK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰然
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8aWduhNev9PNM2tMgJkQ1o
          claim_id: c_3r99zZdtYsLyiDkHK1j52J
          source_id: s_D7zzXmbXrkaQ6mmTZ94gwF
          stance: supports
          locator: CBDB:203455
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1513
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2I08rqxR642Rg5TtoU6oiI
        subject_person_id: p_vV52ECfgKpenuD9v8Dh9jq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GMiqJBh7YQ1MMn468wZyQK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zLp9SxChFSnCJY7ljwq7YV
          claim_id: c_2I08rqxR642Rg5TtoU6oiI
          source_id: s_9MsjXKxBBi8ZVqS1wjNdbP
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9MsjXKxBBi8ZVqS1wjNdbP
            source_type: api_record
            title: 中国历代人物传记资料库：王施恩（CBDB 304956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304956&o=json
            external_identifier: CBDB:304956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vV52ECfgKpenuD9v8Dh9jq
        status: active
        display_name: 王施恩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4Wn8Mo-Ktq9eXzsuHzsnti
        subject_person_id: p_dG6mQ8rDUmkm3T8g7DgPnD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GMiqJBh7YQ1MMn468wZyQK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8eCPW2M-qLWaDjXNjdinHl
          claim_id: c_4Wn8Mo-Ktq9eXzsuHzsnti
          source_id: s_hUrucqoBAom2cjDzWxaG65
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百七十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hUrucqoBAom2cjDzWxaG65
            source_type: api_record
            title: 中国历代人物传记资料库：王素（CBDB 304954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304954&o=json
            external_identifier: CBDB:304954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.736Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dG6mQ8rDUmkm3T8g7DgPnD
        status: active
        display_name: 王素
        merged_into_person_id: null
    - claim:
        id: c_QZ1uiMegllTNNYNnEOgaNG
        subject_person_id: p_KPFBCEe2VZqm2XvkaL2TBy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GMiqJBh7YQ1MMn468wZyQK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRiJVsSDPTgjeyzl7ba80-
          claim_id: c_QZ1uiMegllTNNYNnEOgaNG
          source_id: s_HGT47b54oms6QfD2hw3Gzk
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百七十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HGT47b54oms6QfD2hw3Gzk
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 304955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304955&o=json
            external_identifier: CBDB:304955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KPFBCEe2VZqm2XvkaL2TBy
        status: active
        display_name: 王卿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王曰然

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王曰然（生于1513年），明人物。嘉靖二十年進士，籍贯河南衛，入仕進士。（中国历代人物传记资料库 CBDB 203455） | accepted |
| birth.date | 1513年 | accepted |
| name.primary | 王曰然 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vV52ECfgKpenuD9v8Dh9jq | 王施恩 | accepted |
| ancestors | p_dG6mQ8rDUmkm3T8g7DgPnD | 王素 | accepted |
| ancestors | p_KPFBCEe2VZqm2XvkaL2TBy | 王卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王卿（CBDB 304955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304955&o=json)
- [中国历代人物传记资料库：王施恩（CBDB 304956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304956&o=json)
- [中国历代人物传记资料库：王素（CBDB 304954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304954&o=json)
- [中国历代人物传记资料库：王曰然（CBDB 203455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203455&o=json)
