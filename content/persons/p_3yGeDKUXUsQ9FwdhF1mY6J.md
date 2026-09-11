---
schema: wang-person/v1
id: p_3yGeDKUXUsQ9FwdhF1mY6J
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 299912
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ki_uwqajyZmXrS-2Ss2a93
        subject_person_id: p_3yGeDKUXUsQ9FwdhF1mY6J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZECKWx4Zbv5R2s6Z0KcMYA
          claim_id: c_ki_uwqajyZmXrS-2Ss2a93
          source_id: s_pGrVi-L_u6oav2A7eJPCxp
          stance: supports
          locator: CBDB:299912
          quotation: null
          interpretation_note: CBDB 明确记录的王士翹配偶
          source: &a1
            id: s_pGrVi-L_u6oav2A7eJPCxp
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王士翹妻)（CBDB 299912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299912&o=json
            external_identifier: CBDB:299912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_nQJq5MiSE3lss2tJZwCesx
        subject_person_id: p_acwBn4E2ueYuXmC3T9fy34
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3yGeDKUXUsQ9FwdhF1mY6J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Oi2BQYN9uEqrJYYKa2LfF
          claim_id: c_nQJq5MiSE3lss2tJZwCesx
          source_id: s_pGrVi-L_u6oav2A7eJPCxp
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_acwBn4E2ueYuXmC3T9fy34
        status: active
        display_name: 王士翹
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_acwBn4E2ueYuXmC3T9fy34 | 王士翹 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王士翹妻)（CBDB 299912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299912&o=json)
