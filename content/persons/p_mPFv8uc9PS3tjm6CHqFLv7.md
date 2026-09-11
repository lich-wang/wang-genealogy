---
schema: wang-person/v1
id: p_mPFv8uc9PS3tjm6CHqFLv7
status: active
merged_into: null
display_name: 王褘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dLyAsNJcSpDWPUF1LhTw2y
        subject_person_id: p_mPFv8uc9PS3tjm6CHqFLv7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王褘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DGsKLPXyyQYTHkxuj9CiMn
          claim_id: c_dLyAsNJcSpDWPUF1LhTw2y
          source_id: s_meTG5FJbK3AQgxy2rZHZtg
          stance: supports
          locator: CBDB:147627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147627）
          source: &a1
            id: s_meTG5FJbK3AQgxy2rZHZtg
            source_type: api_record
            title: 中国历代人物传记资料库：王褘（CBDB 147627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147627&o=json
            external_identifier: CBDB:147627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fv7y4dWsQWEdGQN61Nz9Qd
        subject_person_id: p_mPFv8uc9PS3tjm6CHqFLv7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QXEFvDdAQehgNdbQn4cycC
          claim_id: c_fv7y4dWsQWEdGQN61Nz9Qd
          source_id: s_meTG5FJbK3AQgxy2rZHZtg
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
        id: c_Zjai8SUsVRC4GJkuV2YKUK
        subject_person_id: p_mPFv8uc9PS3tjm6CHqFLv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E6npEtnMZpEDx79AVK39VM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PKIvJT-lRbArmEoHhc1SQf
          claim_id: c_Zjai8SUsVRC4GJkuV2YKUK
          source_id: s_meTG5FJbK3AQgxy2rZHZtg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 138：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E6npEtnMZpEDx79AVK39VM
        status: active
        display_name: 王力士
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王褘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王褘 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_E6npEtnMZpEDx79AVK39VM | 王力士 | accepted |

## 外部来源

- [中国历代人物传记资料库：王褘（CBDB 147627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147627&o=json)
