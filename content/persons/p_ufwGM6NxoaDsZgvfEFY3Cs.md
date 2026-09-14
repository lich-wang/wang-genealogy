---
schema: wang-person/v1
id: p_ufwGM6NxoaDsZgvfEFY3Cs
status: active
merged_into: null
display_name: 王居修
cbdb_id: 119739
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rLi87NQn14mu2GSR19JauK
        subject_person_id: p_ufwGM6NxoaDsZgvfEFY3Cs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居修，史料所见人物。本项目依据《中国历代人物传记资料库：王居修（CBDB 119739）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_8jmd0aoRzbEgCLd4vOkEww
          claim_id: c_rLi87NQn14mu2GSR19JauK
          source_id: s_dsKz3yMrKeh48B6MxCPXPY
          stance: supports
          locator: CBDB:119739
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_dsKz3yMrKeh48B6MxCPXPY
            source_type: api_record
            title: 中国历代人物传记资料库：王居修（CBDB 119739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119739&o=json
            external_identifier: CBDB:119739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dgj58rvR9XXFp49JkwJqNJ
        subject_person_id: p_ufwGM6NxoaDsZgvfEFY3Cs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZWdhps43WQNuHeLBWSZGH6
          claim_id: c_dgj58rvR9XXFp49JkwJqNJ
          source_id: s_dsKz3yMrKeh48B6MxCPXPY
          stance: supports
          locator: CBDB:119739
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w635Xy8lZSEDeNqv0cBfBp
        subject_person_id: p_rxyMJpi4DYL3V342yLAuaM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ufwGM6NxoaDsZgvfEFY3Cs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_teSYXXLkrn44yQv1N1MDIG
          claim_id: c_w635Xy8lZSEDeNqv0cBfBp
          source_id: s_KEFM_IFPZCzcY_3ngqux-y
          stance: supports
          locator: CBDB：兄弟 王居正（22000）之父／母 王幾
          quotation: null
          interpretation_note: 由兄弟关系推断：王居修 与 王居正 为同胞（CBDB 记「兄」），王居正 之父／母即 王居修 之父／母。
          source:
            id: s_KEFM_IFPZCzcY_3ngqux-y
            source_type: api_record
            title: 中国历代人物传记资料库：王居修（CBDB 119739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119739&o=json
            external_identifier: CBDB:119739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rxyMJpi4DYL3V342yLAuaM
        status: active
        display_name: 王幾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jjNcGVg1CUid6vgV8eJjEH
        subject_person_id: p_ufwGM6NxoaDsZgvfEFY3Cs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_urfcgqW6JdMhzi59mL1W3n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j06lJAz9PRUjNKVW7RJOkm
          claim_id: c_jjNcGVg1CUid6vgV8eJjEH
          source_id: s_KEFM_IFPZCzcY_3ngqux-y
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 22000 王居正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KEFM_IFPZCzcY_3ngqux-y
            source_type: api_record
            title: 中国历代人物传记资料库：王居修（CBDB 119739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119739&o=json
            external_identifier: CBDB:119739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_urfcgqW6JdMhzi59mL1W3n
        status: active
        display_name: 王居正
        merged_into_person_id: null
---

# 王居修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王居修，史料所见人物。本项目依据《中国历代人物传记资料库：王居修（CBDB 119739）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王居修 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rxyMJpi4DYL3V342yLAuaM | 王幾 | accepted |
| other | p_urfcgqW6JdMhzi59mL1W3n | 王居正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王居修（CBDB 119739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119739&o=json)
