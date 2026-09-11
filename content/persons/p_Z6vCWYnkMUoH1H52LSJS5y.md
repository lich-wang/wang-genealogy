---
schema: wang-person/v1
id: p_Z6vCWYnkMUoH1H52LSJS5y
status: active
merged_into: null
display_name: 王俸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5bee7XmTfuuiczJnZjCf37
        subject_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ceoD3XqLd1HU6sexpfPxun
          claim_id: c_5bee7XmTfuuiczJnZjCf37
          source_id: s_6K74T1tyQaEKKN5CtCjLJ7
          stance: supports
          locator: CBDB:203437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203437）
          source: &a1
            id: s_6K74T1tyQaEKKN5CtCjLJ7
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 203437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203437&o=json
            external_identifier: CBDB:203437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bJ2M1g6dx6g36JMDsrZN1b
        subject_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
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
        - id: cs_t4FJgcrZEM842L5Qc34QBt
          claim_id: c_bJ2M1g6dx6g36JMDsrZN1b
          source_id: s_6K74T1tyQaEKKN5CtCjLJ7
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
        id: c_x98L2LYkU9kvQmFM3xrssP
        subject_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
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
        - id: cs_adBNQnBpkDAYFvZQk2wWax
          claim_id: c_x98L2LYkU9kvQmFM3xrssP
          source_id: s_6K74T1tyQaEKKN5CtCjLJ7
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
        id: c_N4f5w6qE-csJzv_mqoMhbv
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LI2grqW6rhQH6tKv1bdAjA
          claim_id: c_N4f5w6qE-csJzv_mqoMhbv
          source_id: s_LCWsS3btiTdj2aM5MXxBoq
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LCWsS3btiTdj2aM5MXxBoq
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 304722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304722&o=json
            external_identifier: CBDB:304722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1vXBcYgVQiVxBH61v91xXQ
        status: active
        display_name: 王廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CKXjNBXEFxa_GIt5m32zIg
        subject_person_id: p_B9MBDhzV1N8hQ37qMA9DB5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u3vm3lO_9zP_hhfuPb8RI_
          claim_id: c_CKXjNBXEFxa_GIt5m32zIg
          source_id: s_oe7B5Gw6ApPt7ZhUTRzoV5
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百五十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oe7B5Gw6ApPt7ZhUTRzoV5
            source_type: api_record
            title: 中国历代人物传记资料库：王埜（CBDB 304721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304721&o=json
            external_identifier: CBDB:304721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B9MBDhzV1N8hQ37qMA9DB5
        status: active
        display_name: 王埜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王俸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俸 | accepted |
| birth.date | 1515年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1vXBcYgVQiVxBH61v91xXQ | 王廉 | accepted |
| ancestors | p_B9MBDhzV1N8hQ37qMA9DB5 | 王埜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俸（CBDB 203437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203437&o=json)
- [中国历代人物传记资料库：王廉（CBDB 304722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304722&o=json)
- [中国历代人物传记资料库：王埜（CBDB 304721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304721&o=json)
