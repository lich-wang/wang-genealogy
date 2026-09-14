---
schema: wang-person/v1
id: p_2MNp4FiL1e2KpcmYGABrhM
status: active
merged_into: null
display_name: 王袞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bRtDdw6c1bYzRK5vRjFghb
        subject_person_id: p_2MNp4FiL1e2KpcmYGABrhM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6WXhLFNVm8vAXPgRuhe6vD
          claim_id: c_bRtDdw6c1bYzRK5vRjFghb
          source_id: s_wbXBNDW5XVVHFBLKfPgkFe
          stance: supports
          locator: CBDB:220120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220120）
          source: &a1
            id: s_wbXBNDW5XVVHFBLKfPgkFe
            source_type: api_record
            title: 中国历代人物传记资料库：王袞（CBDB 220120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220120&o=json
            external_identifier: CBDB:220120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.296Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jkrHjRAeZP1S242ymkLX39
        subject_person_id: p_2MNp4FiL1e2KpcmYGABrhM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袞，明人物。萬曆八年進士，籍贯嘉善。（中国历代人物传记资料库 CBDB 220120）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DpkxbNG8oJDAf14oMefyKM
          claim_id: c_jkrHjRAeZP1S242ymkLX39
          source_id: s_wbXBNDW5XVVHFBLKfPgkFe
          stance: supports
          locator: CBDB:220120
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__6ir0QfBgSlBRFJEaTIMsJ
        subject_person_id: p_EoXnHjFHxPjhcD8KsqKTGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2MNp4FiL1e2KpcmYGABrhM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8hy6MhDxQ1euSCRqm6gx5
          claim_id: c__6ir0QfBgSlBRFJEaTIMsJ
          source_id: s_CQzFAQZYqBduwwtBxvuWRU
          stance: supports
          locator: CBDB：兄弟 王慎德（206584）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王袞 与 王慎德 为同胞（CBDB 记「弟」），王慎德 之父／母即 王袞 之父／母。
          source:
            id: s_CQzFAQZYqBduwwtBxvuWRU
            source_type: api_record
            title: 中国历代人物传记资料库：王袞（CBDB 220120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220120&o=json
            external_identifier: CBDB:220120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EoXnHjFHxPjhcD8KsqKTGz
        status: active
        display_name: 王訪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_F7RUvDNLY5J7lysKZGtGBs
        subject_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_2MNp4FiL1e2KpcmYGABrhM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nXu2CsrJRFuRA9KrkBneXp
          claim_id: c_F7RUvDNLY5J7lysKZGtGBs
          source_id: s_CQzFAQZYqBduwwtBxvuWRU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206584 王慎德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CQzFAQZYqBduwwtBxvuWRU
            source_type: api_record
            title: 中国历代人物传记资料库：王袞（CBDB 220120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220120&o=json
            external_identifier: CBDB:220120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1NRJDMaRvyp9yNoVJiZmjE
        status: active
        display_name: 王慎德
        merged_into_person_id: null
---

# 王袞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王袞 | accepted |
| bio.summary | 王袞，明人物。萬曆八年進士，籍贯嘉善。（中国历代人物传记资料库 CBDB 220120） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EoXnHjFHxPjhcD8KsqKTGz | 王訪 | accepted |
| other | p_1NRJDMaRvyp9yNoVJiZmjE | 王慎德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王袞（CBDB 220120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220120&o=json)
