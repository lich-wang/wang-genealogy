---
schema: wang-person/v1
id: p_maKWGqbbp6R9PCCNrE8KNy
status: active
merged_into: null
display_name: 王良驂
cbdb_id: 210732
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8sEJVQC2Di8tW3eFD5YqZ5
        subject_person_id: p_maKWGqbbp6R9PCCNrE8KNy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良驂，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210732）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Vi2_BPSqy5pmltiB8MVsdl
          claim_id: c_8sEJVQC2Di8tW3eFD5YqZ5
          source_id: s_PDPsH2HdNG8vRPZ1oiEWy9
          stance: supports
          locator: CBDB:210732
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PDPsH2HdNG8vRPZ1oiEWy9
            source_type: api_record
            title: 中国历代人物传记资料库：王良驂（CBDB 210732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210732&o=json
            external_identifier: CBDB:210732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G6oNp8gRkbATjnAoozV5F5
        subject_person_id: p_maKWGqbbp6R9PCCNrE8KNy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良驂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dM14sxVKzc3uVGfxPRADKB
          claim_id: c_G6oNp8gRkbATjnAoozV5F5
          source_id: s_PDPsH2HdNG8vRPZ1oiEWy9
          stance: supports
          locator: CBDB:210732
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DmRl5DYSJbEeHN2UV4XFhr
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_maKWGqbbp6R9PCCNrE8KNy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ozciXeFI4cFJ5T86IT7HyH
          claim_id: c_DmRl5DYSJbEeHN2UV4XFhr
          source_id: s_Akkouqpgo4lcgp1N9e95MT
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良驂 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王良驂 之父／母。
          source:
            id: s_Akkouqpgo4lcgp1N9e95MT
            source_type: api_record
            title: 中国历代人物传记资料库：王良驂（CBDB 210732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210732&o=json
            external_identifier: CBDB:210732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dXbTkC8fTHTjd8NRUY9aDL
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_j7LqnxMweNfUACwVhfI8E_
        subject_person_id: p_maKWGqbbp6R9PCCNrE8KNy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JFody9X-CZ7tN3ftTc8zSe
          claim_id: c_j7LqnxMweNfUACwVhfI8E_
          source_id: s_Akkouqpgo4lcgp1N9e95MT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Akkouqpgo4lcgp1N9e95MT
            source_type: api_record
            title: 中国历代人物传记资料库：王良驂（CBDB 210732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210732&o=json
            external_identifier: CBDB:210732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sAZUvMC7u8bMFh2JrU8PMj
        status: active
        display_name: 王良心
        merged_into_person_id: null
---

# 王良驂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良驂，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210732） | accepted |
| name.primary | 王良驂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dXbTkC8fTHTjd8NRUY9aDL | 王弼 | accepted |
| other | p_sAZUvMC7u8bMFh2JrU8PMj | 王良心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良驂（CBDB 210732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210732&o=json)
