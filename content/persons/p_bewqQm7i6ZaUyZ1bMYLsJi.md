---
schema: wang-person/v1
id: p_bewqQm7i6ZaUyZ1bMYLsJi
status: active
merged_into: null
display_name: 王素臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s5DConK6NsD1QhJgeQmsMq
        subject_person_id: p_bewqQm7i6ZaUyZ1bMYLsJi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mr53bbqezH4FzDyGErA82x
          claim_id: c_s5DConK6NsD1QhJgeQmsMq
          source_id: s_ho952LSp6FCu3XPRScF388
          stance: supports
          locator: CBDB:140232
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140232）
          source: &a1
            id: s_ho952LSp6FCu3XPRScF388
            source_type: api_record
            title: 中国历代人物传记资料库：王素臣（CBDB 140232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140232&o=json
            external_identifier: CBDB:140232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5M93KbysBP5xQxnSufiLkT
        subject_person_id: p_bewqQm7i6ZaUyZ1bMYLsJi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 646年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ntVzNoTfYXyzbMXqp48Tc2
          claim_id: c_5M93KbysBP5xQxnSufiLkT
          source_id: s_ho952LSp6FCu3XPRScF388
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
        id: c_JMgQUMmRCPXm4TzUHx57fZ
        subject_person_id: p_bewqQm7i6ZaUyZ1bMYLsJi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 705年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f15X9zqTBPsmUMCJNZPK73
          claim_id: c_JMgQUMmRCPXm4TzUHx57fZ
          source_id: s_ho952LSp6FCu3XPRScF388
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
        id: c_3Ykv7pcxMPpspYAsKpXB5t
        subject_person_id: p_bewqQm7i6ZaUyZ1bMYLsJi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_57WKMeEYqeQxinQdpgDb4P
          claim_id: c_3Ykv7pcxMPpspYAsKpXB5t
          source_id: s_ho952LSp6FCu3XPRScF388
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
        id: c_2hUqZywolZeasA3OF32Ms8
        subject_person_id: p_X6xXCJDA9N7eA65k67tuWt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bewqQm7i6ZaUyZ1bMYLsJi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VyuFPCRymCLEm1hnvORvMO
          claim_id: c_2hUqZywolZeasA3OF32Ms8
          source_id: s_ho952LSp6FCu3XPRScF388
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 5：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_X6xXCJDA9N7eA65k67tuWt
        status: active
        display_name: 王德感
        merged_into_person_id: null
  children:
    - claim:
        id: c_RKSDOp4FZOmwHIm3rB5kb7
        subject_person_id: p_bewqQm7i6ZaUyZ1bMYLsJi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kjn91LWBHkruHxJ6AhTUwd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_73F9R2EY6OgC6fK7JW_euq
          claim_id: c_RKSDOp4FZOmwHIm3rB5kb7
          source_id: s_ho952LSp6FCu3XPRScF388
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 5：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kjn91LWBHkruHxJ6AhTUwd
        status: active
        display_name: 王無虧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王素臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王素臣 | accepted |
| birth.date | 646年 | accepted |
| death.date | 705年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X6xXCJDA9N7eA65k67tuWt | 王德感 | accepted |
| children | p_Kjn91LWBHkruHxJ6AhTUwd | 王無虧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王素臣（CBDB 140232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140232&o=json)
