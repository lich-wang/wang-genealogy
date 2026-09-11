---
schema: wang-person/v1
id: p_cABDg4AGMJS98TZaoLa2HU
status: active
merged_into: null
display_name: 王佑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KFfJMy72rVd7PksNzUuUbU
        subject_person_id: p_cABDg4AGMJS98TZaoLa2HU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MN1FUhR3ik5273VGsX9eRS
          claim_id: c_KFfJMy72rVd7PksNzUuUbU
          source_id: s_56Pt143yiZ578FsUUdFHTb
          stance: supports
          locator: CBDB:67865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67865）
          source: &a1
            id: s_56Pt143yiZ578FsUUdFHTb
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 67865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67865&o=json
            external_identifier: CBDB:67865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jHrfHNZQYQXwTXWD1hcwZP
        subject_person_id: p_cABDg4AGMJS98TZaoLa2HU
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
        - id: cs_WrPs2F6ED2SBvtzXMbksxG
          claim_id: c_jHrfHNZQYQXwTXWD1hcwZP
          source_id: s_56Pt143yiZ578FsUUdFHTb
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
        id: c_DlDNd3N0USEPI8FHrTW4u9
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cABDg4AGMJS98TZaoLa2HU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJJ0CaD13OFLRowvBQGDsO
          claim_id: c_DlDNd3N0USEPI8FHrTW4u9
          source_id: s_56Pt143yiZ578FsUUdFHTb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Wyqe2QSiKh31LC5bvKcMQt
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_BCiw2ERALZOYFap5wu0UXb
        subject_person_id: p_jMxby9DRySDmWrADAt51uc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cABDg4AGMJS98TZaoLa2HU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jwhqy2maFeilgwVoC_axjd
          claim_id: c_BCiw2ERALZOYFap5wu0UXb
          source_id: s_56Pt143yiZ578FsUUdFHTb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jMxby9DRySDmWrADAt51uc
        status: active
        display_name: 王新
        merged_into_person_id: null
    - claim:
        id: c_p6xY8LL2x4prQRxhjqqAVR
        subject_person_id: p_gJBDbRBCxbnfxx3U6Meh48
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cABDg4AGMJS98TZaoLa2HU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JRQW3d5WhLnec0UMTWEgqg
          claim_id: c_p6xY8LL2x4prQRxhjqqAVR
          source_id: s_56Pt143yiZ578FsUUdFHTb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gJBDbRBCxbnfxx3U6Meh48
        status: active
        display_name: 王士賢
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wyqe2QSiKh31LC5bvKcMQt | 王敬 | accepted |
| ancestors | p_jMxby9DRySDmWrADAt51uc | 王新 | accepted |
| ancestors | p_gJBDbRBCxbnfxx3U6Meh48 | 王士賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佑（CBDB 67865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67865&o=json)
