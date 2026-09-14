---
schema: wang-person/v1
id: p_ywaE99cf2hJGTekVqCNHGE
status: active
merged_into: null
display_name: 王寵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sKKKa6iGXqnpSaKArFY1r8
        subject_person_id: p_ywaE99cf2hJGTekVqCNHGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Erj4i15QfLKv6uUgMaQgRK
          claim_id: c_sKKKa6iGXqnpSaKArFY1r8
          source_id: s_KPrQcuBsKGvFPZJwKRgKtw
          stance: supports
          locator: CBDB:327533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327533）
          source: &a1
            id: s_KPrQcuBsKGvFPZJwKRgKtw
            source_type: api_record
            title: 中国历代人物传记资料库：王寵（CBDB 327533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327533&o=json
            external_identifier: CBDB:327533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.249Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hxnxadpFdsFSBf7sTvMEiu
        subject_person_id: p_ywaE99cf2hJGTekVqCNHGE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵，明人物。嘉靖四十一年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 327533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rqmz7z-6IbItU_BpXAw3SS
          claim_id: c_hxnxadpFdsFSBf7sTvMEiu
          source_id: s_KPrQcuBsKGvFPZJwKRgKtw
          stance: supports
          locator: CBDB:327533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_498N9OKN0Lix5ctn03vALt
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ywaE99cf2hJGTekVqCNHGE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZttyLklkKYHIYgRh_vtCHO
          claim_id: c_498N9OKN0Lix5ctn03vALt
          source_id: s_ZlyW04NvWWBkDTMy6bVRiL
          stance: supports
          locator: CBDB：兄弟 王宇（205042）之父／母 王繼德
          quotation: null
          interpretation_note: 由兄弟关系推断：王寵 与 王宇 为同胞（CBDB 记「兄」），王宇 之父／母即 王寵 之父／母。
          source:
            id: s_ZlyW04NvWWBkDTMy6bVRiL
            source_type: api_record
            title: 中国历代人物传记资料库：王寵（CBDB 327533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327533&o=json
            external_identifier: CBDB:327533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kmpABikpWftaJACcFD3yJ1
        status: active
        display_name: 王繼德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Eb9CUXjz0A95crlSe8_olr
        subject_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ywaE99cf2hJGTekVqCNHGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZqsmJzFn1cvBG9nAGyymE2
          claim_id: c_Eb9CUXjz0A95crlSe8_olr
          source_id: s_ZlyW04NvWWBkDTMy6bVRiL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205042 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZlyW04NvWWBkDTMy6bVRiL
            source_type: api_record
            title: 中国历代人物传记资料库：王寵（CBDB 327533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327533&o=json
            external_identifier: CBDB:327533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DhXJg1QUSd5Fvqo5eHzd45
        status: active
        display_name: 王宇
        merged_into_person_id: null
---

# 王寵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寵 | accepted |
| bio.summary | 王寵，明人物。嘉靖四十一年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 327533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kmpABikpWftaJACcFD3yJ1 | 王繼德 | accepted |
| other | p_DhXJg1QUSd5Fvqo5eHzd45 | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寵（CBDB 327533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327533&o=json)
