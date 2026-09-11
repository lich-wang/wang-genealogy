---
schema: wang-person/v1
id: p_g1ByKENJEMLrjANJPXYqGZ
status: active
merged_into: null
display_name: 王雲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7mcSabeeuVMQSoytHyH97i
        subject_person_id: p_g1ByKENJEMLrjANJPXYqGZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yruAr27av28fNKAfDHcEwm
          claim_id: c_7mcSabeeuVMQSoytHyH97i
          source_id: s_QkUDzYNx7nBZTA4f1h9gDF
          stance: supports
          locator: CBDB:14305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（14305）
          source: &a1
            id: s_QkUDzYNx7nBZTA4f1h9gDF
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 14305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14305&o=json
            external_identifier: CBDB:14305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1VRAoPbeLsB7ut9igVGKHr
        subject_person_id: p_g1ByKENJEMLrjANJPXYqGZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9vt4XjCS344eyTTcQBRP4f
          claim_id: c_1VRAoPbeLsB7ut9igVGKHr
          source_id: s_QkUDzYNx7nBZTA4f1h9gDF
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
        id: c_To5iG2Dm33Z2xCE3VFL5E4
        subject_person_id: p_g1ByKENJEMLrjANJPXYqGZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4TnNQiKsSKvpuP91WZb1BD
          claim_id: c_To5iG2Dm33Z2xCE3VFL5E4
          source_id: s_QkUDzYNx7nBZTA4f1h9gDF
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
        id: c_0_yHaU35Em2g4ER1Qjuk-u
        subject_person_id: p_iL53NuuSgA33Ht2KRWRfLu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g1ByKENJEMLrjANJPXYqGZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fD8djFQiR3E51HWiubR_1B
          claim_id: c_0_yHaU35Em2g4ER1Qjuk-u
          source_id: s_QkUDzYNx7nBZTA4f1h9gDF
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2077：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iL53NuuSgA33Ht2KRWRfLu
        status: active
        display_name: 王獻可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲 | accepted |
| death.date | 1126年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iL53NuuSgA33Ht2KRWRfLu | 王獻可 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雲（CBDB 14305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14305&o=json)
