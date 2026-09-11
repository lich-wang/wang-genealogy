---
schema: wang-person/v1
id: p_d8FbBar9uiv4sahw2JU2Ye
status: active
merged_into: null
display_name: 王修泰
cbdb_id: 526700
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2MFqwLMnmv6JCTmCQQMb2t
        subject_person_id: p_d8FbBar9uiv4sahw2JU2Ye
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修泰，清人物。中国历代人物传记资料库（CBDB）以人物编号 526700 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_98KJmjPpsL2oxv2_owaxlY
          claim_id: c_2MFqwLMnmv6JCTmCQQMb2t
          source_id: s_7pccGY8zBigaJ7AFtKYuiJ
          stance: supports
          locator: CBDB:526700
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_7pccGY8zBigaJ7AFtKYuiJ
            source_type: api_record
            title: 中国历代人物传记资料库：王修泰（CBDB 526700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526700&o=json
            external_identifier: CBDB:526700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8dd4dyjh2ncfRXN5s9LcdX
        subject_person_id: p_d8FbBar9uiv4sahw2JU2Ye
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_W9EjJXyTMPDWcKHfDDLmyC
          claim_id: c_8dd4dyjh2ncfRXN5s9LcdX
          source_id: s_7pccGY8zBigaJ7AFtKYuiJ
          stance: supports
          locator: CBDB:526700
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_7pccGY8zBigaJ7AFtKYuiJ
            source_type: api_record
            title: 中国历代人物传记资料库：王修泰（CBDB 526700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526700&o=json
            external_identifier: CBDB:526700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
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
        id: c_rLnct0io-f_CNUJTUbonCw
        subject_person_id: p_d8FbBar9uiv4sahw2JU2Ye
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bdjfnB4ngXGiLnaEFv7KV8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YviCOQr5nizk6hQaLldvMn
          claim_id: c_rLnct0io-f_CNUJTUbonCw
          source_id: s_Kb2gNMBSPpG7oSZuEwbwAB
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12803：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Kb2gNMBSPpG7oSZuEwbwAB
            source_type: api_record
            title: 中国历代人物传记资料库：王永章（CBDB 69105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69105&o=json
            external_identifier: CBDB:69105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_bdjfnB4ngXGiLnaEFv7KV8
        status: active
        display_name: 王永章
        merged_into_person_id: null
  other: []
---

# 王修泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王修泰，清人物。中国历代人物传记资料库（CBDB）以人物编号 526700 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王修泰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_bdjfnB4ngXGiLnaEFv7KV8 | 王永章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王修泰（CBDB 526700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526700&o=json)
- [中国历代人物传记资料库：王永章（CBDB 69105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69105&o=json)
