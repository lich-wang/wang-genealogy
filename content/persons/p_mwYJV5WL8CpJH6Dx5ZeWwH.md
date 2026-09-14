---
schema: wang-person/v1
id: p_mwYJV5WL8CpJH6Dx5ZeWwH
status: active
merged_into: null
display_name: 王諫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jbcus1NH7HyjU1Cf7N4Jcs
        subject_person_id: p_mwYJV5WL8CpJH6Dx5ZeWwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AQFTbmw8rB93whXTJKVo4o
          claim_id: c_Jbcus1NH7HyjU1Cf7N4Jcs
          source_id: s_E8SCDJCATmG6Vgs6EA39TF
          stance: supports
          locator: CBDB:318546
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318546）
          source: &a1
            id: s_E8SCDJCATmG6Vgs6EA39TF
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 318546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318546&o=json
            external_identifier: CBDB:318546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CA6Y39YPBdTwd3Gaausr1o
        subject_person_id: p_mwYJV5WL8CpJH6Dx5ZeWwH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫，明人物。嘉靖三十二年進士，籍贯定州。（中国历代人物传记资料库 CBDB 318546）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kgfIWu-qRtoOJCUg8x9_yw
          claim_id: c_CA6Y39YPBdTwd3Gaausr1o
          source_id: s_E8SCDJCATmG6Vgs6EA39TF
          stance: supports
          locator: CBDB:318546
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V9LKQZDdjXPXxklIiW-FwI
        subject_person_id: p_MB8Wi2HK7aBdXDCP3oVD5L
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mwYJV5WL8CpJH6Dx5ZeWwH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I09dzciCxAiXFb2e7vD_T-
          claim_id: c_V9LKQZDdjXPXxklIiW-FwI
          source_id: s_DOkAfTnjafnh4tAxk0CyvR
          stance: supports
          locator: CBDB：兄弟 王詠（204396）之父／母 王拱極
          quotation: null
          interpretation_note: 由兄弟关系推断：王諫 与 王詠 为同胞（CBDB 记「兄」），王詠 之父／母即 王諫 之父／母。
          source:
            id: s_DOkAfTnjafnh4tAxk0CyvR
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 318546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318546&o=json
            external_identifier: CBDB:318546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MB8Wi2HK7aBdXDCP3oVD5L
        status: active
        display_name: 王拱極
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0lHLLlmv3pUJ96luAGCYF3
        subject_person_id: p_Qw3e91Q9f7u3SKikYg5LD7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mwYJV5WL8CpJH6Dx5ZeWwH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RAFc01ibTEAhmO5a4xuhUL
          claim_id: c_0lHLLlmv3pUJ96luAGCYF3
          source_id: s_DOkAfTnjafnh4tAxk0CyvR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204396 王詠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DOkAfTnjafnh4tAxk0CyvR
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 318546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318546&o=json
            external_identifier: CBDB:318546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Qw3e91Q9f7u3SKikYg5LD7
        status: active
        display_name: 王詠
        merged_into_person_id: null
---

# 王諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諫 | accepted |
| bio.summary | 王諫，明人物。嘉靖三十二年進士，籍贯定州。（中国历代人物传记资料库 CBDB 318546） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MB8Wi2HK7aBdXDCP3oVD5L | 王拱極 | accepted |
| other | p_Qw3e91Q9f7u3SKikYg5LD7 | 王詠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諫（CBDB 318546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318546&o=json)
