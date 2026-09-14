---
schema: wang-person/v1
id: p_8frUJ3LrDhGKx8fT6HKVXg
status: active
merged_into: null
display_name: 王祉
cbdb_id: 282824
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yGUDNmKJDv4oqYwe7Cg8Dv
        subject_person_id: p_8frUJ3LrDhGKx8fT6HKVXg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祉，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282824）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_aWzZPSrQAWTAVFCz3Uedzv
          claim_id: c_yGUDNmKJDv4oqYwe7Cg8Dv
          source_id: s_tsZabfWudZsxhjBt69gtpB
          stance: supports
          locator: CBDB:282824
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tsZabfWudZsxhjBt69gtpB
            source_type: api_record
            title: 中国历代人物传记资料库：王祉（CBDB 282824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282824&o=json
            external_identifier: CBDB:282824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_d7RDZNZQyeNScoJa2W44Ad
        subject_person_id: p_8frUJ3LrDhGKx8fT6HKVXg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NRMnaX7BF79FpnuJ9LzAkE
          claim_id: c_d7RDZNZQyeNScoJa2W44Ad
          source_id: s_tsZabfWudZsxhjBt69gtpB
          stance: supports
          locator: CBDB:282824
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AqyhvJcmcjBFWSjgZPESEq
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8frUJ3LrDhGKx8fT6HKVXg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h7Jr8XHOk38nbyT_bCzQT-
          claim_id: c_AqyhvJcmcjBFWSjgZPESEq
          source_id: s_trO5HfTRAzCPMm1Men-Gf-
          stance: supports
          locator: CBDB：兄弟 王祐（202067）之父／母 王璲
          quotation: null
          interpretation_note: 由兄弟关系推断：王祉 与 王祐 为同胞（CBDB 记「兄」），王祐 之父／母即 王祉 之父／母。
          source:
            id: s_trO5HfTRAzCPMm1Men-Gf-
            source_type: api_record
            title: 中国历代人物传记资料库：王祉（CBDB 282824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282824&o=json
            external_identifier: CBDB:282824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rMH6azHPPfCWNVYvRKv58F
        status: active
        display_name: 王璲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_19I-vwrv3zZI4pbe9sP50i
        subject_person_id: p_8frUJ3LrDhGKx8fT6HKVXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bLVKezSQcjeeXv8UWltuAm
          claim_id: c_19I-vwrv3zZI4pbe9sP50i
          source_id: s_trO5HfTRAzCPMm1Men-Gf-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202067 王祐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_trO5HfTRAzCPMm1Men-Gf-
            source_type: api_record
            title: 中国历代人物传记资料库：王祉（CBDB 282824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282824&o=json
            external_identifier: CBDB:282824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fVVctU3oARvj93SKk81Eji
        status: active
        display_name: 王祐
        merged_into_person_id: null
---

# 王祉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祉，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282824） | accepted |
| name.primary | 王祉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rMH6azHPPfCWNVYvRKv58F | 王璲 | accepted |
| other | p_fVVctU3oARvj93SKk81Eji | 王祐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祉（CBDB 282824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282824&o=json)
