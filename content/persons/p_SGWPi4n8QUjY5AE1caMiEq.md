---
schema: wang-person/v1
id: p_SGWPi4n8QUjY5AE1caMiEq
status: active
merged_into: null
display_name: 王傑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pGYUYanQXTztK7xAcELN9W
        subject_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HXPuoHtZNNxk6wZ9GoDzHq
          claim_id: c_pGYUYanQXTztK7xAcELN9W
          source_id: s_eFGLzDAVuuNao9ZLPcjNaj
          stance: supports
          locator: CBDB:204108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204108）
          source: &a1
            id: s_eFGLzDAVuuNao9ZLPcjNaj
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 204108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204108&o=json
            external_identifier: CBDB:204108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UKYUYH8thAUk3EXiM4TQHB
        subject_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CatzzAmiXXKcDTMknqLu1g
          claim_id: c_UKYUYH8thAUk3EXiM4TQHB
          source_id: s_eFGLzDAVuuNao9ZLPcjNaj
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
        id: c_pGFTpb1n5WkWrE3dZLYRNv
        subject_person_id: p_SGWPi4n8QUjY5AE1caMiEq
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
        - id: cs_2r6TLpv4RZuTBuvEiRJN3x
          claim_id: c_pGFTpb1n5WkWrE3dZLYRNv
          source_id: s_eFGLzDAVuuNao9ZLPcjNaj
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
        id: c_ynRVn8ABpi6Rsq3XUMUGrT
        subject_person_id: p_3EE7i32dLDmsve95JNsPmg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vfla_krs8BkGa7Kid9TY2N
          claim_id: c_ynRVn8ABpi6Rsq3XUMUGrT
          source_id: s_ULVtcr5CrszB6k2sEGJKie
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ULVtcr5CrszB6k2sEGJKie
            source_type: api_record
            title: 中国历代人物传记资料库：王盤（CBDB 314531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314531&o=json
            external_identifier: CBDB:314531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3EE7i32dLDmsve95JNsPmg
        status: active
        display_name: 王盤
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| birth.date | 1515年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_3EE7i32dLDmsve95JNsPmg | 王盤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 204108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204108&o=json)
- [中国历代人物传记资料库：王盤（CBDB 314531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314531&o=json)
