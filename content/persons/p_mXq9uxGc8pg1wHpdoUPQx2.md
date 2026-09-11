---
schema: wang-person/v1
id: p_mXq9uxGc8pg1wHpdoUPQx2
status: active
merged_into: null
display_name: 王坊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rNP7zGKpmkNwJ6wLzJXvbC
        subject_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VLWZndW9eqnHJRcmwPvqFj
          claim_id: c_rNP7zGKpmkNwJ6wLzJXvbC
          source_id: s_4SkWq6uYYWjkowxuTzuZDA
          stance: supports
          locator: CBDB:201535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201535）
          source: &a1
            id: s_4SkWq6uYYWjkowxuTzuZDA
            source_type: api_record
            title: 中国历代人物传记资料库：王坊（CBDB 201535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201535&o=json
            external_identifier: CBDB:201535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o9DU45Q5Cwugw1EncuB1fU
        subject_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1475年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_njXHAvXVUqS3eQRL4LpWXa
          claim_id: c_o9DU45Q5Cwugw1EncuB1fU
          source_id: s_4SkWq6uYYWjkowxuTzuZDA
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
        id: c_G7tXU7aMGQyt6SjK4eWMdn
        subject_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
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
        - id: cs_MJrwjG7t7Gcz5496gxYhgE
          claim_id: c_G7tXU7aMGQyt6SjK4eWMdn
          source_id: s_4SkWq6uYYWjkowxuTzuZDA
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
        id: c_nSU79ISorauI45iTBW6Xj8
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXMiZF0nIWzKIf41pRReNh
          claim_id: c_nSU79ISorauI45iTBW6Xj8
          source_id: s_4SkWq6uYYWjkowxuTzuZDA
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w5pNEVYCVJAEuFuR4sLpcJ
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Jv4WXAuZbbxC2Fr1jTjD_J
        subject_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xz7KsYdG5DrtX1vqRMunMu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t-iPmqWAxeZyt0uqAPSRvH
          claim_id: c_Jv4WXAuZbbxC2Fr1jTjD_J
          source_id: s_txegU9ne62zyv7CkYCFXLm
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_txegU9ne62zyv7CkYCFXLm
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王坊妻)（CBDB 273950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273950&o=json
            external_identifier: CBDB:273950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xz7KsYdG5DrtX1vqRMunMu
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Srrb79qIb_6RxS8IQ8E77C
        subject_person_id: p_phyDGrQTZ9iggp1mhKH2M9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZNUHHbuYXbYJUNxeIJ3ZOS
          claim_id: c_Srrb79qIb_6RxS8IQ8E77C
          source_id: s_4SkWq6uYYWjkowxuTzuZDA
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_phyDGrQTZ9iggp1mhKH2M9
        status: active
        display_name: 王宗民
        merged_into_person_id: null
    - claim:
        id: c_xuuSRfvNu3LXnxfbxM__SJ
        subject_person_id: p_Rq57SXL2c2xsAR1iorsD3H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_maNippd4sf0G4w6p6KrUwX
          claim_id: c_xuuSRfvNu3LXnxfbxM__SJ
          source_id: s_4SkWq6uYYWjkowxuTzuZDA
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rq57SXL2c2xsAR1iorsD3H
        status: active
        display_name: 王秬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王坊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坊 | accepted |
| birth.date | 1475年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w5pNEVYCVJAEuFuR4sLpcJ | 王弼 | accepted |
| spouses | p_xz7KsYdG5DrtX1vqRMunMu | 孫氏 | accepted |
| ancestors | p_phyDGrQTZ9iggp1mhKH2M9 | 王宗民 | accepted |
| ancestors | p_Rq57SXL2c2xsAR1iorsD3H | 王秬 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王坊妻)（CBDB 273950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273950&o=json)
- [中国历代人物传记资料库：王坊（CBDB 201535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201535&o=json)
