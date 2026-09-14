---
schema: wang-person/v1
id: p_yRJKVCAcaprLGzLsBDsGAb
status: active
merged_into: null
display_name: 王僖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1GhXdBWLNLqTbauzJ1HM1a
        subject_person_id: p_yRJKVCAcaprLGzLsBDsGAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E6YtDYEqrRY1WQ8vzcYx5M
          claim_id: c_1GhXdBWLNLqTbauzJ1HM1a
          source_id: s_svppKfPctF5NngnEDJMrAa
          stance: supports
          locator: CBDB:322382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322382）
          source: &a1
            id: s_svppKfPctF5NngnEDJMrAa
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 322382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322382&o=json
            external_identifier: CBDB:322382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jQo9DTDKzojrSCpr3VSCBW
        subject_person_id: p_yRJKVCAcaprLGzLsBDsGAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僖，明人物。宣德五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 322382）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kJJkrVsDlJV_ycJjW7myrU
          claim_id: c_jQo9DTDKzojrSCpr3VSCBW
          source_id: s_svppKfPctF5NngnEDJMrAa
          stance: supports
          locator: CBDB:322382
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xU5rdrXzs2_0LiKbLi5mdl
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yRJKVCAcaprLGzLsBDsGAb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FbLSySq36smeHHb5ubuUqJ
          claim_id: c_xU5rdrXzs2_0LiKbLi5mdl
          source_id: s_zJJaeIvHw9KmEjKu_0a9cD
          stance: supports
          locator: CBDB：兄弟 王偡（204670）之父／母 王彥禎
          quotation: null
          interpretation_note: 由兄弟关系推断：王僖 与 王偡 为同胞（CBDB 记「兄」），王偡 之父／母即 王僖 之父／母。
          source:
            id: s_zJJaeIvHw9KmEjKu_0a9cD
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 322382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322382&o=json
            external_identifier: CBDB:322382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pY4bR9vVd19RvXkc3AZrMW
        status: active
        display_name: 王彥禎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_b1UvzDKVHvQNe7BurAfkbw
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yRJKVCAcaprLGzLsBDsGAb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ywbcBNCU5yM0UZifcdGNeb
          claim_id: c_b1UvzDKVHvQNe7BurAfkbw
          source_id: s_zJJaeIvHw9KmEjKu_0a9cD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204670 王偡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zJJaeIvHw9KmEjKu_0a9cD
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 322382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322382&o=json
            external_identifier: CBDB:322382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lt4MQ464DWHGJk9hxD73Kf
        status: active
        display_name: 王偡
        merged_into_person_id: null
---

# 王僖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僖 | accepted |
| bio.summary | 王僖，明人物。宣德五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 322382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pY4bR9vVd19RvXkc3AZrMW | 王彥禎 | accepted |
| other | p_Lt4MQ464DWHGJk9hxD73Kf | 王偡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僖（CBDB 322382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322382&o=json)
