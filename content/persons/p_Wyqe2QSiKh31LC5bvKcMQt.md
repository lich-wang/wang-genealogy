---
schema: wang-person/v1
id: p_Wyqe2QSiKh31LC5bvKcMQt
status: active
merged_into: null
display_name: 王敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XSac1xNgePs7KeURfTxkDB
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t8pMCGwcfAea3ydFNHUgVB
          claim_id: c_XSac1xNgePs7KeURfTxkDB
          source_id: s_6dCU8EHZ2CAzCvNAy4v4Vf
          stance: supports
          locator: CBDB:257374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257374）
          source: &a1
            id: s_6dCU8EHZ2CAzCvNAy4v4Vf
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 257374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257374&o=json
            external_identifier: CBDB:257374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JkD97Sdp5Dhswd1fnmvunt
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。成化十七年進士，籍贯肥城。（中国历代人物传记资料库 CBDB 257374）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PP_MJ0-O1PS1nVrGpGHxb5
          claim_id: c_JkD97Sdp5Dhswd1fnmvunt
          source_id: s_6dCU8EHZ2CAzCvNAy4v4Vf
          stance: supports
          locator: CBDB:257374
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_cABDg4AGMJS98TZaoLa2HU
        status: active
        display_name: 王佑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。成化十七年進士，籍贯肥城。（中国历代人物传记资料库 CBDB 257374） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cABDg4AGMJS98TZaoLa2HU | 王佑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 257374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257374&o=json)
- [中国历代人物传记资料库：王佑（CBDB 67865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67865&o=json)
