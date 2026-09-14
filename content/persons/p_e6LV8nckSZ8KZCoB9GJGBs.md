---
schema: wang-person/v1
id: p_e6LV8nckSZ8KZCoB9GJGBs
status: active
merged_into: null
display_name: 王元卿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i5yG48q5Pwn8p1jRFPeMeM
        subject_person_id: p_e6LV8nckSZ8KZCoB9GJGBs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PwqUVuLofb2daCWE2YpGF4
          claim_id: c_i5yG48q5Pwn8p1jRFPeMeM
          source_id: s_aM9BNCznjmPgz3tyFH4aic
          stance: supports
          locator: CBDB:221930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221930）
          source: &a1
            id: s_aM9BNCznjmPgz3tyFH4aic
            source_type: api_record
            title: 中国历代人物传记资料库：王元卿（CBDB 221930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221930&o=json
            external_identifier: CBDB:221930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EtFZE17Eat1cwkDtKsvpZP
        subject_person_id: p_e6LV8nckSZ8KZCoB9GJGBs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元卿，明人物。萬曆八年進士，籍贯蒲城。（中国历代人物传记资料库 CBDB 221930）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vBzuATdrOXfy8Ef26N3XDt
          claim_id: c_EtFZE17Eat1cwkDtKsvpZP
          source_id: s_aM9BNCznjmPgz3tyFH4aic
          stance: supports
          locator: CBDB:221930
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_msz0e24k0-PoecHKno6tKT
        subject_person_id: p_SS97xGcPYDqvhXCDmF9tN7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e6LV8nckSZ8KZCoB9GJGBs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0tVWEmh5m8-TgKlg2m0QKm
          claim_id: c_msz0e24k0-PoecHKno6tKT
          source_id: s_gB7_LZD7wgTCjiclI_rBfN
          stance: supports
          locator: CBDB：兄弟 王元命（206711）之父／母 王表
          quotation: null
          interpretation_note: 由兄弟关系推断：王元卿 与 王元命 为同胞（CBDB 记「弟」），王元命 之父／母即 王元卿 之父／母。
          source:
            id: s_gB7_LZD7wgTCjiclI_rBfN
            source_type: api_record
            title: 中国历代人物传记资料库：王元卿（CBDB 221930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221930&o=json
            external_identifier: CBDB:221930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SS97xGcPYDqvhXCDmF9tN7
        status: active
        display_name: 王表
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VIG0HLLrnGvbcyZc1yLvZk
        subject_person_id: p_3aMVouUh1i5LfdSb79YgNN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e6LV8nckSZ8KZCoB9GJGBs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XdxfDPqFQKt0XPbd5nEIB9
          claim_id: c_VIG0HLLrnGvbcyZc1yLvZk
          source_id: s_gB7_LZD7wgTCjiclI_rBfN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206711 王元命）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gB7_LZD7wgTCjiclI_rBfN
            source_type: api_record
            title: 中国历代人物传记资料库：王元卿（CBDB 221930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221930&o=json
            external_identifier: CBDB:221930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3aMVouUh1i5LfdSb79YgNN
        status: active
        display_name: 王元命
        merged_into_person_id: null
---

# 王元卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元卿 | accepted |
| bio.summary | 王元卿，明人物。萬曆八年進士，籍贯蒲城。（中国历代人物传记资料库 CBDB 221930） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SS97xGcPYDqvhXCDmF9tN7 | 王表 | accepted |
| other | p_3aMVouUh1i5LfdSb79YgNN | 王元命 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元卿（CBDB 221930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221930&o=json)
