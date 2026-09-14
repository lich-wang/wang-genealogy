---
schema: wang-person/v1
id: p_5nrs4oow6V92GspyB8sxJV
status: active
merged_into: null
display_name: 王訓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xrRfYLuf3oBSrZue3joj4s
        subject_person_id: p_5nrs4oow6V92GspyB8sxJV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zvW3XuXMieBrfPngQ4BoGz
          claim_id: c_xrRfYLuf3oBSrZue3joj4s
          source_id: s_7U8xJ9c8R3pVKNL2viUQLt
          stance: supports
          locator: CBDB:327291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327291）
          source: &a1
            id: s_7U8xJ9c8R3pVKNL2viUQLt
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 327291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327291&o=json
            external_identifier: CBDB:327291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_beox9yNj2bRNpDk96HEL9r
        subject_person_id: p_5nrs4oow6V92GspyB8sxJV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓，明人物。嘉靖四十一年進士，籍贯東平州。（中国历代人物传记资料库 CBDB 327291）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6r4PPAnXfV1C2uw2m6CvaK
          claim_id: c_beox9yNj2bRNpDk96HEL9r
          source_id: s_7U8xJ9c8R3pVKNL2viUQLt
          stance: supports
          locator: CBDB:327291
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lKUon8nLIp_n8tKgIPhfjw
        subject_person_id: p_CiJPDmrHnjH3i1SjFztPki
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5nrs4oow6V92GspyB8sxJV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rkxmlH1XzKIBfTb2gBOBY6
          claim_id: c_lKUon8nLIp_n8tKgIPhfjw
          source_id: s_vHXRRfNoEaLQck9oh1Cb9w
          stance: supports
          locator: CBDB：兄弟 王謨（126858）之父／母 王邦益
          quotation: null
          interpretation_note: 由兄弟关系推断：王訓 与 王謨 为同胞（CBDB 记「兄」），王謨 之父／母即 王訓 之父／母。
          source:
            id: s_vHXRRfNoEaLQck9oh1Cb9w
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 327291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327291&o=json
            external_identifier: CBDB:327291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CiJPDmrHnjH3i1SjFztPki
        status: active
        display_name: 王邦益
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_u1BIvMd96Q2fSZBL2TXZZH
        subject_person_id: p_5nrs4oow6V92GspyB8sxJV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SUOku9EU7SWbBEom1DCPU2
          claim_id: c_u1BIvMd96Q2fSZBL2TXZZH
          source_id: s_vHXRRfNoEaLQck9oh1Cb9w
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126858 王謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vHXRRfNoEaLQck9oh1Cb9w
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 327291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327291&o=json
            external_identifier: CBDB:327291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wi1semPtGkaEHz1tXWTdxD
        status: active
        display_name: 王謨
        merged_into_person_id: null
---

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| bio.summary | 王訓，明人物。嘉靖四十一年進士，籍贯東平州。（中国历代人物传记资料库 CBDB 327291） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CiJPDmrHnjH3i1SjFztPki | 王邦益 | accepted |
| other | p_Wi1semPtGkaEHz1tXWTdxD | 王謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訓（CBDB 327291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327291&o=json)
