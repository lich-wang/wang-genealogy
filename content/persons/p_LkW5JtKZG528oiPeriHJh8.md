---
schema: wang-person/v1
id: p_LkW5JtKZG528oiPeriHJh8
status: active
merged_into: null
display_name: 王章
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DzKZN9fe5QKA2xMW12H4UZ
        subject_person_id: p_LkW5JtKZG528oiPeriHJh8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aBa9i7z9eaPju27RGhJn9d
          claim_id: c_DzKZN9fe5QKA2xMW12H4UZ
          source_id: s_HAKbfFMqmKX328biEfp6JV
          stance: supports
          locator: CBDB:244064
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244064）
          source: &a1
            id: s_HAKbfFMqmKX328biEfp6JV
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 244064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244064&o=json
            external_identifier: CBDB:244064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aVpiY3nbZ6AA1vYkpm5F69
        subject_person_id: p_LkW5JtKZG528oiPeriHJh8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244064）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3PjS-PQqfp47DcI2hx4SEF
          claim_id: c_aVpiY3nbZ6AA1vYkpm5F69
          source_id: s_HAKbfFMqmKX328biEfp6JV
          stance: supports
          locator: CBDB:244064
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_baxd6PEL4s7jOnbdinz4Jg
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LkW5JtKZG528oiPeriHJh8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h820xI7eS917Hd23IfEcSg
          claim_id: c_baxd6PEL4s7jOnbdinz4Jg
          source_id: s_q6dnKO2061EPRAKC_nwr0U
          stance: supports
          locator: CBDB：兄弟 王舟（199369）之父／母 王騶虞
          quotation: null
          interpretation_note: 由兄弟关系推断：王章 与 王舟 为同胞（CBDB 记「兄」），王舟 之父／母即 王章 之父／母。
          source:
            id: s_q6dnKO2061EPRAKC_nwr0U
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 244064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244064&o=json
            external_identifier: CBDB:244064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PssJzEL6PmniEjHiumeCwT
        status: active
        display_name: 王騶虞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Sa7jyIxpb_V0z8zpbqM8Vc
        subject_person_id: p_LkW5JtKZG528oiPeriHJh8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ssHCamLoW9z4YOjJ7Ns8Br
          claim_id: c_Sa7jyIxpb_V0z8zpbqM8Vc
          source_id: s_q6dnKO2061EPRAKC_nwr0U
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199369 王舟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_q6dnKO2061EPRAKC_nwr0U
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 244064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244064&o=json
            external_identifier: CBDB:244064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wGeqMr94XHkQUokME5FCJ3
        status: active
        display_name: 王舟
        merged_into_person_id: null
---

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| bio.summary | 王章，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244064） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PssJzEL6PmniEjHiumeCwT | 王騶虞 | accepted |
| other | p_wGeqMr94XHkQUokME5FCJ3 | 王舟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王章（CBDB 244064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244064&o=json)
