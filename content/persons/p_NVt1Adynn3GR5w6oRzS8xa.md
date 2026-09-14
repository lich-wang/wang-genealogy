---
schema: wang-person/v1
id: p_NVt1Adynn3GR5w6oRzS8xa
status: active
merged_into: null
display_name: 王淑同
cbdb_id: 238220
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sotTGk3JSempykTmwimJp7
        subject_person_id: p_NVt1Adynn3GR5w6oRzS8xa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑同，明人物。正统七年進士，籍贯安福。（中国历代人物传记资料库 CBDB 238220）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pc9Tv5MfYMh0B7gYFtJiB0
          claim_id: c_sotTGk3JSempykTmwimJp7
          source_id: s_JtCvfAw4tQDWzVyCjkZ5vL
          stance: supports
          locator: CBDB:238220
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JtCvfAw4tQDWzVyCjkZ5vL
            source_type: api_record
            title: 中国历代人物传记资料库：王淑同（CBDB 238220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238220&o=json
            external_identifier: CBDB:238220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Af5JPPkMa27ApmYqgw5Gp1
        subject_person_id: p_NVt1Adynn3GR5w6oRzS8xa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑同
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NLcJKqjrvJAQQNLwGA5ko9
          claim_id: c_Af5JPPkMa27ApmYqgw5Gp1
          source_id: s_JtCvfAw4tQDWzVyCjkZ5vL
          stance: supports
          locator: CBDB:238220
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l3L_YZLTGMaELz3iB1vqtR
        subject_person_id: p_nZvn7tH7hwLzHZ4aSkjukU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NVt1Adynn3GR5w6oRzS8xa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fKYPxBVhuCVjXkUOv9FncP
          claim_id: c_l3L_YZLTGMaELz3iB1vqtR
          source_id: s_AdIknxZGNJOBCB-Gq59DyG
          stance: supports
          locator: CBDB：兄弟 王理（126681）之父／母 王充榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑同 与 王理 为同胞（CBDB 记「兄」），王理 之父／母即 王淑同 之父／母。
          source:
            id: s_AdIknxZGNJOBCB-Gq59DyG
            source_type: api_record
            title: 中国历代人物传记资料库：王淑同（CBDB 238220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238220&o=json
            external_identifier: CBDB:238220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nZvn7tH7hwLzHZ4aSkjukU
        status: active
        display_name: 王充榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Kckf3Y0GI-evRo2XdXzUSu
        subject_person_id: p_NVt1Adynn3GR5w6oRzS8xa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MKjFxnljM-uweE81GirFVg
          claim_id: c_Kckf3Y0GI-evRo2XdXzUSu
          source_id: s_AdIknxZGNJOBCB-Gq59DyG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126681 王理）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AdIknxZGNJOBCB-Gq59DyG
            source_type: api_record
            title: 中国历代人物传记资料库：王淑同（CBDB 238220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238220&o=json
            external_identifier: CBDB:238220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UigxC39qu348GRPzwB2VV6
        status: active
        display_name: 王理
        merged_into_person_id: null
---

# 王淑同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑同，明人物。正统七年進士，籍贯安福。（中国历代人物传记资料库 CBDB 238220） | accepted |
| name.primary | 王淑同 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nZvn7tH7hwLzHZ4aSkjukU | 王充榮 | accepted |
| other | p_UigxC39qu348GRPzwB2VV6 | 王理 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑同（CBDB 238220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238220&o=json)
