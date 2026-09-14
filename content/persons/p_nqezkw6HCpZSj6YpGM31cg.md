---
schema: wang-person/v1
id: p_nqezkw6HCpZSj6YpGM31cg
status: active
merged_into: null
display_name: 王佶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BpqGkcRYZ67K2Hjz1e8D3d
        subject_person_id: p_nqezkw6HCpZSj6YpGM31cg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L1ehvGER528e37LJViGHRZ
          claim_id: c_BpqGkcRYZ67K2Hjz1e8D3d
          source_id: s_n5EYPcmFCs2QHDDJE9xYDJ
          stance: supports
          locator: CBDB:241977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241977）
          source: &a1
            id: s_n5EYPcmFCs2QHDDJE9xYDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 241977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241977&o=json
            external_identifier: CBDB:241977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pKkNhvkMbcxH9wM1gqVXCW
        subject_person_id: p_nqezkw6HCpZSj6YpGM31cg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241977）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AV5Do0kI3Se0BCslR3rMfj
          claim_id: c_pKkNhvkMbcxH9wM1gqVXCW
          source_id: s_n5EYPcmFCs2QHDDJE9xYDJ
          stance: supports
          locator: CBDB:241977
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GCEASxZEpnz_EyafGyMG9N
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nqezkw6HCpZSj6YpGM31cg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0aGbQzs2gp1bO_ExLKRlZT
          claim_id: c_GCEASxZEpnz_EyafGyMG9N
          source_id: s_GHpuv8A_PNTVCm-xIPLhTD
          stance: supports
          locator: CBDB：兄弟 王俁（199224）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王佶 与 王俁 为同胞（CBDB 记「兄」），王俁 之父／母即 王佶 之父／母。
          source:
            id: s_GHpuv8A_PNTVCm-xIPLhTD
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 241977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241977&o=json
            external_identifier: CBDB:241977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJVHjGjKc27ATYVAuaH8nP
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ic7YHd66BXz6S0eSJzrkUq
        subject_person_id: p_nqezkw6HCpZSj6YpGM31cg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I8GNxl5xzveQDROjZzFLlu
          claim_id: c_ic7YHd66BXz6S0eSJzrkUq
          source_id: s_GHpuv8A_PNTVCm-xIPLhTD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199224 王俁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GHpuv8A_PNTVCm-xIPLhTD
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 241977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241977&o=json
            external_identifier: CBDB:241977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wzpgCTfy9H3iqMXKhqaPfp
        status: active
        display_name: 王俁
        merged_into_person_id: null
---

# 王佶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佶 | accepted |
| bio.summary | 王佶，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tJVHjGjKc27ATYVAuaH8nP | 王瑄 | accepted |
| other | p_wzpgCTfy9H3iqMXKhqaPfp | 王俁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佶（CBDB 241977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241977&o=json)
