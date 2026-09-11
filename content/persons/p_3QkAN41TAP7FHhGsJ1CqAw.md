---
schema: wang-person/v1
id: p_3QkAN41TAP7FHhGsJ1CqAw
status: active
merged_into: null
display_name: 王銳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5sSKdRkkgDeuXwrHqPPZug
        subject_person_id: p_3QkAN41TAP7FHhGsJ1CqAw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZAXd6w59J4BRk1UicaN3n5
          claim_id: c_5sSKdRkkgDeuXwrHqPPZug
          source_id: s_qDZPK14io8kM6SMMJkJPTd
          stance: supports
          locator: CBDB:207864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207864）
          source: &a1
            id: s_qDZPK14io8kM6SMMJkJPTd
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 207864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207864&o=json
            external_identifier: CBDB:207864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dCvQS43uc42GSMh514KkLT
        subject_person_id: p_3QkAN41TAP7FHhGsJ1CqAw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1413年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XvS7ajaNX2cazHuJKP4ugY
          claim_id: c_dCvQS43uc42GSMh514KkLT
          source_id: s_qDZPK14io8kM6SMMJkJPTd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WCXGRCsYCuS85MWmRA5CC3
        subject_person_id: p_3QkAN41TAP7FHhGsJ1CqAw
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
        - id: cs_SBuJxqPh1CB7WJE4ahTkj8
          claim_id: c_WCXGRCsYCuS85MWmRA5CC3
          source_id: s_qDZPK14io8kM6SMMJkJPTd
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
        id: c_ixLMvWzDkWwMnNbW3HOo58
        subject_person_id: p_ozsYM9M4KBS15u1X5iEDSZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3QkAN41TAP7FHhGsJ1CqAw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OpsCi7lxxFPXDhKUuKtMkU
          claim_id: c_ixLMvWzDkWwMnNbW3HOo58
          source_id: s_qDZPK14io8kM6SMMJkJPTd
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第二十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ozsYM9M4KBS15u1X5iEDSZ
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wHkGWh3X-TPa2Pa7aVCzjw
        subject_person_id: p_wv6MGUHNyZUWzkTKPAt4fy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3QkAN41TAP7FHhGsJ1CqAw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9wdKfPsDRLHLwhPoFaZBOb
          claim_id: c_wHkGWh3X-TPa2Pa7aVCzjw
          source_id: s_qDZPK14io8kM6SMMJkJPTd
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第二十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wv6MGUHNyZUWzkTKPAt4fy
        status: active
        display_name: 王克中
        merged_into_person_id: null
    - claim:
        id: c_aWGrOxfFXcjC3nouOoiQgx
        subject_person_id: p_H5aneX5LaL5HbJo4gzu4TD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3QkAN41TAP7FHhGsJ1CqAw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zcmr2RakaTADGRCPwT5VoX
          claim_id: c_aWGrOxfFXcjC3nouOoiQgx
          source_id: s_qDZPK14io8kM6SMMJkJPTd
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第二十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H5aneX5LaL5HbJo4gzu4TD
        status: active
        display_name: 王可敬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| birth.date | 1413年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ozsYM9M4KBS15u1X5iEDSZ | 王通 | accepted |
| ancestors | p_wv6MGUHNyZUWzkTKPAt4fy | 王克中 | accepted |
| ancestors | p_H5aneX5LaL5HbJo4gzu4TD | 王可敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 207864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207864&o=json)
