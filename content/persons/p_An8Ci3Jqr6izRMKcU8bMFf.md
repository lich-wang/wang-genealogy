---
schema: wang-person/v1
id: p_An8Ci3Jqr6izRMKcU8bMFf
status: active
merged_into: null
display_name: 王志
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jbxnL7Zm78RWgttcWCmFLA
        subject_person_id: p_An8Ci3Jqr6izRMKcU8bMFf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GP57M97NUUqiK2hwd7HHuo
          claim_id: c_jbxnL7Zm78RWgttcWCmFLA
          source_id: s_yAFb4ZTX6oawAfCN79XJ9y
          stance: supports
          locator: CBDB:66395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66395）
          source: &a1
            id: s_yAFb4ZTX6oawAfCN79XJ9y
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 66395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66395&o=json
            external_identifier: CBDB:66395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LAFiJ7897JGpW5xYNV2ahu
        subject_person_id: p_An8Ci3Jqr6izRMKcU8bMFf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1335年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bAUoVphtkDNsfP5V1LHjWE
          claim_id: c_LAFiJ7897JGpW5xYNV2ahu
          source_id: s_yAFb4ZTX6oawAfCN79XJ9y
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
        id: c_B1CK9ixXDvbzRDuCpsHZDE
        subject_person_id: p_An8Ci3Jqr6izRMKcU8bMFf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1386年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EdC5AdwMSdEv4k5iDSK8Q4
          claim_id: c_B1CK9ixXDvbzRDuCpsHZDE
          source_id: s_yAFb4ZTX6oawAfCN79XJ9y
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
        id: c_nFLDJ6jYrW45NLm31swb1Q
        subject_person_id: p_An8Ci3Jqr6izRMKcU8bMFf
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
        - id: cs_9k84yHmGPKFtvPM8BD44C1
          claim_id: c_nFLDJ6jYrW45NLm31swb1Q
          source_id: s_yAFb4ZTX6oawAfCN79XJ9y
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
        id: c_bRkHhe_rpiBSmwopGwOpeO
        subject_person_id: p_An8Ci3Jqr6izRMKcU8bMFf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TBNa1ZLvYFvMXjUg1ANwNe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DMlGMWzwNiE2nZ1NMZVo9G
          claim_id: c_bRkHhe_rpiBSmwopGwOpeO
          source_id: s_yAFb4ZTX6oawAfCN79XJ9y
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9953：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TBNa1ZLvYFvMXjUg1ANwNe
        status: active
        display_name: 王琙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志 | accepted |
| birth.date | 1335年 | accepted |
| death.date | 1386年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TBNa1ZLvYFvMXjUg1ANwNe | 王琙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志（CBDB 66395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66395&o=json)
