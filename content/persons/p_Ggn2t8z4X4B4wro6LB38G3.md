---
schema: wang-person/v1
id: p_Ggn2t8z4X4B4wro6LB38G3
status: active
merged_into: null
display_name: 王虔暢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YHy3WroDNnLZ3ZM6fCPD2B
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虔暢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HZ9F6JiotoPCknBeNocXqF
          claim_id: c_YHy3WroDNnLZ3ZM6fCPD2B
          source_id: s_9QaQbwhKmgQpuZ6DSsqNNd
          stance: supports
          locator: CBDB:142008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142008）
          source: &a1
            id: s_9QaQbwhKmgQpuZ6DSsqNNd
            source_type: api_record
            title: 中国历代人物传记资料库：王虔暢（CBDB 142008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142008&o=json
            external_identifier: CBDB:142008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UN86JnLSQZqnFvQ7VKrKZ5
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 801年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5NsN3y7SQdyQVDwiXBh4Dq
          claim_id: c_UN86JnLSQZqnFvQ7VKrKZ5
          source_id: s_9QaQbwhKmgQpuZ6DSsqNNd
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
        id: c_ZAaZGaF748GmWpjo7pTN3R
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 866年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QgyJ71cJxRh1dsZskZEhF8
          claim_id: c_ZAaZGaF748GmWpjo7pTN3R
          source_id: s_9QaQbwhKmgQpuZ6DSsqNNd
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
        id: c_WhwLGuu4MeJhTH8Exrkjmp
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
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
        - id: cs_6mN3ShaB2fvX3iAfc2q5rk
          claim_id: c_WhwLGuu4MeJhTH8Exrkjmp
          source_id: s_9QaQbwhKmgQpuZ6DSsqNNd
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
        id: c_LbD1Yf5DjeRPkGFZCjlSTy
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4FYUq8fdEyD1ykW4CP1nsJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jKdIvo7skFgPOklvruVhP_
          claim_id: c_LbD1Yf5DjeRPkGFZCjlSTy
          source_id: s_K7GzGB34y9LV38gWsSGe88
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 56：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K7GzGB34y9LV38gWsSGe88
            source_type: api_record
            title: 中国历代人物传记资料库：王處溫（CBDB 160572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160572&o=json
            external_identifier: CBDB:160572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4FYUq8fdEyD1ykW4CP1nsJ
        status: active
        display_name: 王處溫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王虔暢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王虔暢 | accepted |
| birth.date | 801年 | accepted |
| death.date | 866年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4FYUq8fdEyD1ykW4CP1nsJ | 王處溫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處溫（CBDB 160572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160572&o=json)
- [中国历代人物传记资料库：王虔暢（CBDB 142008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142008&o=json)
