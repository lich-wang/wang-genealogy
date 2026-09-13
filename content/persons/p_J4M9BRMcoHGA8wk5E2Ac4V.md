---
schema: wang-person/v1
id: p_J4M9BRMcoHGA8wk5E2Ac4V
status: active
merged_into: null
display_name: 王某禮
cbdb_id: 276412
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HAkaQk3aHXuvxk61tGaeha
        subject_person_id: p_J4M9BRMcoHGA8wk5E2Ac4V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某禮，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 276412）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IcPKxH8V5NDx_v7YZUHPKj
          claim_id: c_HAkaQk3aHXuvxk61tGaeha
          source_id: s_oDe4npP7BoQ9t6yfCudZpi
          stance: supports
          locator: CBDB:276412
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oDe4npP7BoQ9t6yfCudZpi
            source_type: api_record
            title: 中国历代人物传记资料库：王某禮（CBDB 276412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276412&o=json
            external_identifier: CBDB:276412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_21LjDJJTxx2APAMUEEMKjW
        subject_person_id: p_J4M9BRMcoHGA8wk5E2Ac4V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_69zDVFYQ4B2ZXjPT9PfUxt
          claim_id: c_21LjDJJTxx2APAMUEEMKjW
          source_id: s_oDe4npP7BoQ9t6yfCudZpi
          stance: supports
          locator: CBDB:276412
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Z3OwQ_zJPTi94UPXcq46Hv
        subject_person_id: p_J4M9BRMcoHGA8wk5E2Ac4V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YsUS-8uwwUfKq5SQRcpHim
          claim_id: c_Z3OwQ_zJPTi94UPXcq46Hv
          source_id: s_oDe4npP7BoQ9t6yfCudZpi
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第六十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oDe4npP7BoQ9t6yfCudZpi
            source_type: api_record
            title: 中国历代人物传记资料库：王某禮（CBDB 276412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276412&o=json
            external_identifier: CBDB:276412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_eQSeau4TnN2P1YHAKu1a3t
        status: active
        display_name: 王道
        merged_into_person_id: null
  other: []
---

# 王某禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某禮，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 276412） | accepted |
| name.primary | 王某禮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_eQSeau4TnN2P1YHAKu1a3t | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王某禮（CBDB 276412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276412&o=json)
