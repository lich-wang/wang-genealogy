---
schema: wang-person/v1
id: p_3ByeLmfPaWMFMCjFM2ZE28
status: active
merged_into: null
display_name: 王者佑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MQkxPR3rLp66DthW1ovPKe
        subject_person_id: p_3ByeLmfPaWMFMCjFM2ZE28
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BxjfKzkiBmRkZhWVqPsh4d
          claim_id: c_MQkxPR3rLp66DthW1ovPKe
          source_id: s_rqfKgx9AH3KAD92m5d9VWM
          stance: supports
          locator: CBDB:698055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698055）
          source: &a1
            id: s_rqfKgx9AH3KAD92m5d9VWM
            source_type: api_record
            title: 中国历代人物传记资料库：王者佑（CBDB 698055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698055&o=json
            external_identifier: CBDB:698055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jrP8jDiBYM4bJDW6VrjiET
        subject_person_id: p_3ByeLmfPaWMFMCjFM2ZE28
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
        - id: cs_9UTvHg2N2QsvXwyWdUsDSU
          claim_id: c_jrP8jDiBYM4bJDW6VrjiET
          source_id: s_rqfKgx9AH3KAD92m5d9VWM
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
        id: c_J8RhaRvyE3RFIY-QI2V5oM
        subject_person_id: p_1MjGPbyTLe5tp66zzppD9m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ByeLmfPaWMFMCjFM2ZE28
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y0Aoh2izLOUKMnEh4XkJcN
          claim_id: c_J8RhaRvyE3RFIY-QI2V5oM
          source_id: s_GsVC5ZmGZnjWdQ35426cBa
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160951：次子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GsVC5ZmGZnjWdQ35426cBa
            source_type: api_record
            title: 中国历代人物传记资料库：王之憐（CBDB 698052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698052&o=json
            external_identifier: CBDB:698052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1MjGPbyTLe5tp66zzppD9m
        status: active
        display_name: 王之憐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王者佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王者佑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1MjGPbyTLe5tp66zzppD9m | 王之憐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王者佑（CBDB 698055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698055&o=json)
- [中国历代人物传记资料库：王之憐（CBDB 698052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698052&o=json)
