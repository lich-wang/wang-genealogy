---
schema: wang-person/v1
id: p_udhb9Ns1QKHUqcT86ApdGW
status: active
merged_into: null
display_name: 王完
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RQmc35WpTQCwKs3bX3NNKp
        subject_person_id: p_udhb9Ns1QKHUqcT86ApdGW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6PFJXcKZpd7E1UZ5m7D11z
          claim_id: c_RQmc35WpTQCwKs3bX3NNKp
          source_id: s_t2aV6z6JUVnLiTW86QG4ZP
          stance: supports
          locator: CBDB:255129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255129）
          source: &a1
            id: s_t2aV6z6JUVnLiTW86QG4ZP
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 255129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255129&o=json
            external_identifier: CBDB:255129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UFtQqxwdDTGGGkQgE4ECZ3
        subject_person_id: p_udhb9Ns1QKHUqcT86ApdGW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完，明人物。成化十七年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 255129）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sww-ziJLBfe-3MGpQ22h88
          claim_id: c_UFtQqxwdDTGGGkQgE4ECZ3
          source_id: s_t2aV6z6JUVnLiTW86QG4ZP
          stance: supports
          locator: CBDB:255129
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3xJIvHcaI463U4VHxTDLGf
        subject_person_id: p_Y1LJt1fbRrve98s4v1UUF2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_udhb9Ns1QKHUqcT86ApdGW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a9RhxOczaCX9Bk4vfEOebM
          claim_id: c_3xJIvHcaI463U4VHxTDLGf
          source_id: s_R8P3FopJFQAA6pDBb6yIVE
          stance: supports
          locator: CBDB：兄弟 王宥（200225）之父／母 王志積
          quotation: null
          interpretation_note: 由兄弟关系推断：王完 与 王宥 为同胞（CBDB 记「兄」），王宥 之父／母即 王完 之父／母。
          source:
            id: s_R8P3FopJFQAA6pDBb6yIVE
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 255129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255129&o=json
            external_identifier: CBDB:255129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y1LJt1fbRrve98s4v1UUF2
        status: active
        display_name: 王志積
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_v4Gq3JYO3Ic7SYKXSwE4Wg
        subject_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_udhb9Ns1QKHUqcT86ApdGW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pHad7L13w5yRTultwL4yno
          claim_id: c_v4Gq3JYO3Ic7SYKXSwE4Wg
          source_id: s_R8P3FopJFQAA6pDBb6yIVE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200225 王宥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R8P3FopJFQAA6pDBb6yIVE
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 255129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255129&o=json
            external_identifier: CBDB:255129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_15Nh8Xnsw6Q2WxxXdtixbY
        status: active
        display_name: 王宥
        merged_into_person_id: null
---

# 王完

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王完 | accepted |
| bio.summary | 王完，明人物。成化十七年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 255129） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y1LJt1fbRrve98s4v1UUF2 | 王志積 | accepted |
| other | p_15Nh8Xnsw6Q2WxxXdtixbY | 王宥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王完（CBDB 255129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255129&o=json)
