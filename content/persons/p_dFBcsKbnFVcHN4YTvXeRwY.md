---
schema: wang-person/v1
id: p_dFBcsKbnFVcHN4YTvXeRwY
status: active
merged_into: null
display_name: 王麟
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pGLuwhHobES9F1Ptp7GL8P
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，明人物。CBDB 记录其曾任都察院右副都御史、戶部主事。中国历代人物传记资料库（CBDB）以人物编号 220261 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5494Kqae9FdXQAF8tqSKF4
          claim_id: c_pGLuwhHobES9F1Ptp7GL8P
          source_id: s_WQuJfewNt1rKQX9Pq57QHd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_WQuJfewNt1rKQX9Pq57QHd
            source_type: api_record
            title: 维基数据：王麟（Q45450873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450873
            external_identifier: Q45450873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_dkRj5Z5gD6yCskjS6iV2rG
          claim_id: c_pGLuwhHobES9F1Ptp7GL8P
          source_id: s_3zCeacwcDkrZyMjH7kCBJZ
          stance: supports
          locator: CBDB:220261
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3zCeacwcDkrZyMjH7kCBJZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王麟（220261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220261&o=json
            external_identifier: CBDB:220261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:09.445Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_os2RZc3BC6SB9Kd9KZtWEX
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YkHDUzRTEMdNfa54tQeVmx
          claim_id: c_os2RZc3BC6SB9Kd9KZtWEX
          source_id: s_WQuJfewNt1rKQX9Pq57QHd
          stance: supports
          locator: Q45450873
          quotation: null
          interpretation_note: null
          source:
            id: s_WQuJfewNt1rKQX9Pq57QHd
            source_type: api_record
            title: 维基数据：王麟（Q45450873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450873
            external_identifier: Q45450873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_bK6XAdUgLCVn4rjrPR7E1U
          claim_id: c_os2RZc3BC6SB9Kd9KZtWEX
          source_id: s_3zCeacwcDkrZyMjH7kCBJZ
          stance: supports
          locator: Q45450873
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Nw61d7HJToYHaXgVDnf18a
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CwrPUqKsuoEL4C5dNUuhKS
          claim_id: c_Nw61d7HJToYHaXgVDnf18a
          source_id: s_WQuJfewNt1rKQX9Pq57QHd
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_WQuJfewNt1rKQX9Pq57QHd
            source_type: api_record
            title: 维基数据：王麟（Q45450873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450873
            external_identifier: Q45450873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_stD4KTJQYPCcozLam7NEjU
          claim_id: c_Nw61d7HJToYHaXgVDnf18a
          source_id: s_8v97D6aRgy5zRhLaWeAPgN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8v97D6aRgy5zRhLaWeAPgN
            source_type: api_record
            title: 维基数据：王重光（Q15935070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935070
            external_identifier: Q15935070
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王麟，明人物。CBDB 记录其曾任都察院右副都御史、戶部主事。中国历代人物传记资料库（CBDB）以人物编号 220261 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王麟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |

## 外部来源

- [维基数据：王麟（Q45450873）](https://www.wikidata.org/wiki/Q45450873)
- [维基数据：王重光（Q15935070）](https://www.wikidata.org/wiki/Q15935070)
- [CBDB 中国历代人物传记资料库：王麟（220261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220261&o=json)
