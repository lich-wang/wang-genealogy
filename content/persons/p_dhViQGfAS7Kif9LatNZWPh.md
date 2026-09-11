---
schema: wang-person/v1
id: p_dhViQGfAS7Kif9LatNZWPh
status: active
merged_into: null
display_name: 王瑞昌
cbdb_id: 304146
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cFcCvKDuJCcHkNddpqh6wx
        subject_person_id: p_dhViQGfAS7Kif9LatNZWPh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞昌，明人物。中国历代人物传记资料库（CBDB）以人物编号 304146 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_-408RVEr0kSThzI6RB6Pi4
          claim_id: c_cFcCvKDuJCcHkNddpqh6wx
          source_id: s_DFGGuZ3eoThNFGBmCAx152
          stance: supports
          locator: CBDB:304146
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DFGGuZ3eoThNFGBmCAx152
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞昌（CBDB 304146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304146&o=json
            external_identifier: CBDB:304146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FQxN4DoDe5UQhEZpoUf4ZQ
        subject_person_id: p_dhViQGfAS7Kif9LatNZWPh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VvLKPg9XvnL14ChANd7MRj
          claim_id: c_FQxN4DoDe5UQhEZpoUf4ZQ
          source_id: s_DFGGuZ3eoThNFGBmCAx152
          stance: supports
          locator: CBDB:304146
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_DFGGuZ3eoThNFGBmCAx152
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞昌（CBDB 304146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304146&o=json
            external_identifier: CBDB:304146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_fSpcvdKjWpZ3bv2aCune6j
        subject_person_id: p_dhViQGfAS7Kif9LatNZWPh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jGYWVHHdNg7POwwmA82xQ5
          claim_id: c_fSpcvdKjWpZ3bv2aCune6j
          source_id: s_DFGGuZ3eoThNFGBmCAx152
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百零六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V5Z6bC9P1YiqepVeP78NQA
        status: active
        display_name: 王惟中
        merged_into_person_id: null
  other: []
---

# 王瑞昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑞昌，明人物。中国历代人物传记资料库（CBDB）以人物编号 304146 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王瑞昌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_V5Z6bC9P1YiqepVeP78NQA | 王惟中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑞昌（CBDB 304146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304146&o=json)
