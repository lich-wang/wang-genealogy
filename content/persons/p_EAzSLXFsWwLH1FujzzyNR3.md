---
schema: wang-person/v1
id: p_EAzSLXFsWwLH1FujzzyNR3
status: active
merged_into: null
display_name: 王和
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FZeCAEF9td8Kag42iMxck3
        subject_person_id: p_EAzSLXFsWwLH1FujzzyNR3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tH6eqnKLUoqP4B1veR1XVE
          claim_id: c_FZeCAEF9td8Kag42iMxck3
          source_id: s_8KijfB26Gs8eD8h4dvPEFq
          stance: supports
          locator: CBDB:284476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284476）
          source: &a1
            id: s_8KijfB26Gs8eD8h4dvPEFq
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 284476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284476&o=json
            external_identifier: CBDB:284476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mpx6WWbTYNUZLQWBscmLWR
        subject_person_id: p_EAzSLXFsWwLH1FujzzyNR3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和，明人物。正德十六年進士，籍贯涉縣，曾任總旗。（中国历代人物传记资料库 CBDB 284476）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c2vJ_hQqxKxA2FIcSMn3iU
          claim_id: c_Mpx6WWbTYNUZLQWBscmLWR
          source_id: s_8KijfB26Gs8eD8h4dvPEFq
          stance: supports
          locator: CBDB:284476
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zXX7VvsgmNJkKyaLfPQMTT
        subject_person_id: p_pJdaVPhyGhcWDbCJM3HLms
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EAzSLXFsWwLH1FujzzyNR3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yAWVr4hSYnziSV3WqJqVhQ
          claim_id: c_zXX7VvsgmNJkKyaLfPQMTT
          source_id: s_g5Q4N6DTA4o-XvvSAbuC5v
          stance: supports
          locator: CBDB：兄弟 王科（68373）之父／母 王澍
          quotation: null
          interpretation_note: 由兄弟关系推断：王和 与 王科 为同胞（CBDB 记「弟」），王科 之父／母即 王和 之父／母。
          source:
            id: s_g5Q4N6DTA4o-XvvSAbuC5v
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 284476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284476&o=json
            external_identifier: CBDB:284476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pJdaVPhyGhcWDbCJM3HLms
        status: active
        display_name: 王澍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BlXdwriC1oWfcTU3DHw2bA
        subject_person_id: p_EAzSLXFsWwLH1FujzzyNR3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YjqDvH1b52eQK3xtYDboFp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4TVtr-uZW4EbaQdl_Biql
          claim_id: c_BlXdwriC1oWfcTU3DHw2bA
          source_id: s_g5Q4N6DTA4o-XvvSAbuC5v
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68373 王科）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g5Q4N6DTA4o-XvvSAbuC5v
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 284476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284476&o=json
            external_identifier: CBDB:284476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YjqDvH1b52eQK3xtYDboFp
        status: active
        display_name: 王科
        merged_into_person_id: null
---

# 王和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和 | accepted |
| bio.summary | 王和，明人物。正德十六年進士，籍贯涉縣，曾任總旗。（中国历代人物传记资料库 CBDB 284476） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pJdaVPhyGhcWDbCJM3HLms | 王澍 | accepted |
| other | p_YjqDvH1b52eQK3xtYDboFp | 王科 | accepted |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 284476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284476&o=json)
