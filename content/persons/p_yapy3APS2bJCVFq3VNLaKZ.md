---
schema: wang-person/v1
id: p_yapy3APS2bJCVFq3VNLaKZ
status: active
merged_into: null
display_name: 王次翁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7XpsKNtodNxT14Kj95Zh8T
        subject_person_id: p_yapy3APS2bJCVFq3VNLaKZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王次翁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bzapnus2u4cdYzYQPVdwJF
          claim_id: c_7XpsKNtodNxT14Kj95Zh8T
          source_id: s_ymqi6ZHHg3tJx4LDRgLWxh
          stance: supports
          locator: CBDB:1908
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1908）
          source: &a1
            id: s_ymqi6ZHHg3tJx4LDRgLWxh
            source_type: api_record
            title: 中国历代人物传记资料库：王次翁（CBDB 1908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1908&o=json
            external_identifier: CBDB:1908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.388Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QZNRkzCNLwYG42zzpNteLQ
        subject_person_id: p_yapy3APS2bJCVFq3VNLaKZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1079年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MDR2Zc6mWPfAtQqbz4XNVs
          claim_id: c_QZNRkzCNLwYG42zzpNteLQ
          source_id: s_ymqi6ZHHg3tJx4LDRgLWxh
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
        id: c_ecaZ9qHeRSk1ZsN2NbfLoH
        subject_person_id: p_yapy3APS2bJCVFq3VNLaKZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1149年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kXNNLjGsYJB7yUaqLCT5Az
          claim_id: c_ecaZ9qHeRSk1ZsN2NbfLoH
          source_id: s_ymqi6ZHHg3tJx4LDRgLWxh
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
        id: c_BmCh4J4iGQHqNEdmKRZxJf
        subject_person_id: p_yapy3APS2bJCVFq3VNLaKZ
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
        - id: cs_PQoszeoRXaJ7Ymrf6NGmTk
          claim_id: c_BmCh4J4iGQHqNEdmKRZxJf
          source_id: s_ymqi6ZHHg3tJx4LDRgLWxh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_uHgXHBx1O6hFLV5NQir-9Y
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yapy3APS2bJCVFq3VNLaKZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UOYb1WNGO78JuF4iqSG4yZ
          claim_id: c_uHgXHBx1O6hFLV5NQir-9Y
          source_id: s_L33bdWsQPTsnWG6UgxsBXb
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L33bdWsQPTsnWG6UgxsBXb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王异（17423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17423&o=json
            external_identifier: CBDB:17423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_C5gdwEP6JshLSxPa5isWtq
        status: active
        display_name: 王异
        merged_into_person_id: null
    - claim:
        id: c_w1GNI6CzdV8oolrUfIkR8T
        subject_person_id: p_HN9dL1QZo7ng1X3WPN8EcR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yapy3APS2bJCVFq3VNLaKZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O_0xHUpbRa3fEgZGG5CXXt
          claim_id: c_w1GNI6CzdV8oolrUfIkR8T
          source_id: s_phx6v1WRRw5pRY98qUnDbm
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1517;1523：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_phx6v1WRRw5pRY98qUnDbm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：丘氏（38574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38574&o=json
            external_identifier: CBDB:38574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_HN9dL1QZo7ng1X3WPN8EcR
        status: active
        display_name: 丘氏
        merged_into_person_id: null
    - claim:
        id: c_RxTDRMGaQSG3z3E-Y9i3eF
        subject_person_id: p_L2ifCRAMx2TbJz5vSmeM6T
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yapy3APS2bJCVFq3VNLaKZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QIHB_IxKwAbAsbCW-TiHCk
          claim_id: c_RxTDRMGaQSG3z3E-Y9i3eF
          source_id: s_inp2TgyDeUUZJ8Zq2rkTe5
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1517;1522：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_inp2TgyDeUUZJ8Zq2rkTe5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：趙氏（38569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38569&o=json
            external_identifier: CBDB:38569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_L2ifCRAMx2TbJz5vSmeM6T
        status: active
        display_name: 赵氏
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王次翁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王次翁 | accepted |
| birth.date | 1079年 | accepted |
| death.date | 1149年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_C5gdwEP6JshLSxPa5isWtq | 王异 | accepted |
| ancestors | p_HN9dL1QZo7ng1X3WPN8EcR | 丘氏 | accepted |
| ancestors | p_L2ifCRAMx2TbJz5vSmeM6T | 赵氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王次翁（CBDB 1908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1908&o=json)
- [CBDB 中国历代人物传记资料库：丘氏（38574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38574&o=json)
- [CBDB 中国历代人物传记资料库：王异（17423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17423&o=json)
- [CBDB 中国历代人物传记资料库：趙氏（38569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38569&o=json)
