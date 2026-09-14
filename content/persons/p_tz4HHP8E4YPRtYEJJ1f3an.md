---
schema: wang-person/v1
id: p_tz4HHP8E4YPRtYEJJ1f3an
status: active
merged_into: null
display_name: 王俊姑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3phWxLBu1gYpHTC86FdSBm
        subject_person_id: p_tz4HHP8E4YPRtYEJJ1f3an
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊姑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GiC6R97VSK93H2mQwcoa59
          claim_id: c_3phWxLBu1gYpHTC86FdSBm
          source_id: s_5f9dWV6FDjdAJQv3dG8SRr
          stance: supports
          locator: CBDB:696243
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696243）
          source: &a1
            id: s_5f9dWV6FDjdAJQv3dG8SRr
            source_type: api_record
            title: 中国历代人物传记资料库：王俊姑（CBDB 696243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696243&o=json
            external_identifier: CBDB:696243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jV7WkqcKTrC4vRfE4VN98f
        subject_person_id: p_tz4HHP8E4YPRtYEJJ1f3an
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊姑，清人物。籍贯海鹽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 696243）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O4g_s0o9AnbNuF2JPNtKEo
          claim_id: c_jV7WkqcKTrC4vRfE4VN98f
          source_id: s_5f9dWV6FDjdAJQv3dG8SRr
          stance: supports
          locator: CBDB:696243
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Q5c5cuVA_I0MHhdcou9qmX
        subject_person_id: p_nZf7KsUUhHjJyziJmgaFwd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tz4HHP8E4YPRtYEJJ1f3an
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4zVagSIUAkaonztRR1lEnY
          claim_id: c_Q5c5cuVA_I0MHhdcou9qmX
          source_id: s_c1soWVpfu5mVCRhZkBcai-
          stance: supports
          locator: CBDB 亲属：妹（KinPerson 696243 王俊姑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_c1soWVpfu5mVCRhZkBcai-
            source_type: api_record
            title: 中国历代人物传记资料库：王學蘇（CBDB 696242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696242&o=json
            external_identifier: CBDB:696242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nZf7KsUUhHjJyziJmgaFwd
        status: active
        display_name: 王學蘇
        merged_into_person_id: null
---

# 王俊姑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊姑 | accepted |
| bio.summary | 王俊姑，清人物。籍贯海鹽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 696243） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_nZf7KsUUhHjJyziJmgaFwd | 王學蘇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊姑（CBDB 696243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696243&o=json)
- [中国历代人物传记资料库：王學蘇（CBDB 696242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696242&o=json)
