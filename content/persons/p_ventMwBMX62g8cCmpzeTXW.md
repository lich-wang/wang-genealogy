---
schema: wang-person/v1
id: p_ventMwBMX62g8cCmpzeTXW
status: active
merged_into: null
display_name: 王孟寬
cbdb_id: 258058
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mzZzuZkuzx7qEuL58kXnpJ
        subject_person_id: p_ventMwBMX62g8cCmpzeTXW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟寬，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 258058）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PKchrL4_2Cpo6RrxxAMVhw
          claim_id: c_mzZzuZkuzx7qEuL58kXnpJ
          source_id: s_Hf7JUUibGXPzPkJxMM8CuN
          stance: supports
          locator: CBDB:258058
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Hf7JUUibGXPzPkJxMM8CuN
            source_type: api_record
            title: 中国历代人物传记资料库：王孟寬（CBDB 258058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258058&o=json
            external_identifier: CBDB:258058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zRhFpfU99izJ1cJwHeEhr9
        subject_person_id: p_ventMwBMX62g8cCmpzeTXW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FhRmYMP4ameAxs5RutCxak
          claim_id: c_zRhFpfU99izJ1cJwHeEhr9
          source_id: s_Hf7JUUibGXPzPkJxMM8CuN
          stance: supports
          locator: CBDB:258058
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W7HEVsQ86nAsrqhHm7yimP
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ventMwBMX62g8cCmpzeTXW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_18aBJtlc2yfAo74nv_gMF_
          claim_id: c_W7HEVsQ86nAsrqhHm7yimP
          source_id: s_bQGAWoUQNleWjkCpLGiSTQ
          stance: supports
          locator: CBDB：兄弟 王中（200448）之父／母 王宗曜
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟寬 与 王中 为同胞（CBDB 记「弟」），王中 之父／母即 王孟寬 之父／母。
          source:
            id: s_bQGAWoUQNleWjkCpLGiSTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王孟寬（CBDB 258058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258058&o=json
            external_identifier: CBDB:258058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        status: active
        display_name: 王宗曜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FL_43pk4oj2RHcF8dt25h-
        subject_person_id: p_ventMwBMX62g8cCmpzeTXW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eEleMQoLumxfc2SKnbrxNV
          claim_id: c_FL_43pk4oj2RHcF8dt25h-
          source_id: s_bQGAWoUQNleWjkCpLGiSTQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200448 王中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bQGAWoUQNleWjkCpLGiSTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王孟寬（CBDB 258058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258058&o=json
            external_identifier: CBDB:258058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x8mQMeJnHp1fPict2xPV7L
        status: active
        display_name: 王中
        merged_into_person_id: null
---

# 王孟寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟寬，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 258058） | accepted |
| name.primary | 王孟寬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XAZFGAYeQkDJ8m4Kt7zkQf | 王宗曜 | accepted |
| other | p_x8mQMeJnHp1fPict2xPV7L | 王中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟寬（CBDB 258058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258058&o=json)
