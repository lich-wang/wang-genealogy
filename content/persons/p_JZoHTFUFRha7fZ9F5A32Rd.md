---
schema: wang-person/v1
id: p_JZoHTFUFRha7fZ9F5A32Rd
status: active
merged_into: null
display_name: 王叔達
cbdb_id: 35946
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vH2YwF2Ky7DtJvPwwDjfSx
        subject_person_id: p_JZoHTFUFRha7fZ9F5A32Rd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔達，宋人物。籍贯餘姚。（中国历代人物传记资料库 CBDB 35946）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_EBqbtWX4_xLuXLaqK-NMMw
          claim_id: c_vH2YwF2Ky7DtJvPwwDjfSx
          source_id: s_ee5EJ6DmDd4ocJGebg3Mi2
          stance: supports
          locator: CBDB:35946
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ee5EJ6DmDd4ocJGebg3Mi2
            source_type: api_record
            title: 中国历代人物传记资料库：王叔達（CBDB 35946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35946&o=json
            external_identifier: CBDB:35946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A6v9BHaCgN51dp9kGfQpu4
        subject_person_id: p_JZoHTFUFRha7fZ9F5A32Rd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XHWRnu1R9H1c17atnXDypc
          claim_id: c_A6v9BHaCgN51dp9kGfQpu4
          source_id: s_ee5EJ6DmDd4ocJGebg3Mi2
          stance: supports
          locator: CBDB:35946
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LRSijzvFYKoL-raGy4bRyq
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JZoHTFUFRha7fZ9F5A32Rd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2sYK-9TXGA5OCOOVDpdBD-
          claim_id: c_LRSijzvFYKoL-raGy4bRyq
          source_id: s_4QAcEqn4mQ1o5QfLcRFPW7
          stance: supports
          locator: CBDB 亲属：父（KinPerson 3942）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_4QAcEqn4mQ1o5QfLcRFPW7
            source_type: api_record
            title: 中国历代人物传记资料库：王叔達（CBDB 35946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35946&o=json
            external_identifier: CBDB:35946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zPJV9uPvg66nyW635J36Ep
        status: active
        display_name: 王中行
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王叔達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔達，宋人物。籍贯餘姚。（中国历代人物传记资料库 CBDB 35946） | accepted |
| name.primary | 王叔達 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zPJV9uPvg66nyW635J36Ep | 王中行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔達（CBDB 35946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35946&o=json)
