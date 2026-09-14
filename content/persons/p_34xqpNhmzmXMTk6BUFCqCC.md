---
schema: wang-person/v1
id: p_34xqpNhmzmXMTk6BUFCqCC
status: active
merged_into: null
display_name: 王玲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XVkhUgzqf6wUygMRYma4n7
        subject_person_id: p_34xqpNhmzmXMTk6BUFCqCC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RUHFjAiS7FcFZwPzj2PEN6
          claim_id: c_XVkhUgzqf6wUygMRYma4n7
          source_id: s_mmQMTWmUZWciJkMVYyBmcg
          stance: supports
          locator: CBDB:294337
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294337）
          source: &a1
            id: s_mmQMTWmUZWciJkMVYyBmcg
            source_type: api_record
            title: 中国历代人物传记资料库：王玲（CBDB 294337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294337&o=json
            external_identifier: CBDB:294337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_96JYtUFRaAUQxZZZQCNn9N
        subject_person_id: p_34xqpNhmzmXMTk6BUFCqCC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玲，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294337）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sBUdYIxh3PwTjqOWM3pHtK
          claim_id: c_96JYtUFRaAUQxZZZQCNn9N
          source_id: s_mmQMTWmUZWciJkMVYyBmcg
          stance: supports
          locator: CBDB:294337
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1BjNxZby-YfNjbPfyesU_H
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_34xqpNhmzmXMTk6BUFCqCC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z2Hs3n-OuCqU_MHBP9lL_E
          claim_id: c_1BjNxZby-YfNjbPfyesU_H
          source_id: s_Ia8IrBd6XE9mEIleyiBNxf
          stance: supports
          locator: CBDB：兄弟 王瑛（126750）之父／母 王浦
          quotation: null
          interpretation_note: 由兄弟关系推断：王玲 与 王瑛 为同胞（CBDB 记「兄」），王瑛 之父／母即 王玲 之父／母。
          source:
            id: s_Ia8IrBd6XE9mEIleyiBNxf
            source_type: api_record
            title: 中国历代人物传记资料库：王玲（CBDB 294337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294337&o=json
            external_identifier: CBDB:294337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Akvhk7vb2JMfzgR2hpBTHy
        status: active
        display_name: 王浦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_A8S-HIRwS7Vr0bdetgD3ET
        subject_person_id: p_34xqpNhmzmXMTk6BUFCqCC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wrSi9t0CqDb1p_sPU6nX31
          claim_id: c_A8S-HIRwS7Vr0bdetgD3ET
          source_id: s_Ia8IrBd6XE9mEIleyiBNxf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126750 王瑛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ia8IrBd6XE9mEIleyiBNxf
            source_type: api_record
            title: 中国历代人物传记资料库：王玲（CBDB 294337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294337&o=json
            external_identifier: CBDB:294337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AKiZ73AHqEtzATAkDq6m9S
        status: active
        display_name: 王瑛
        merged_into_person_id: null
---

# 王玲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玲 | accepted |
| bio.summary | 王玲，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294337） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Akvhk7vb2JMfzgR2hpBTHy | 王浦 | accepted |
| other | p_AKiZ73AHqEtzATAkDq6m9S | 王瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玲（CBDB 294337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294337&o=json)
