---
schema: wang-person/v1
id: p_cNPQCRESnHPNJBxvhHBfT4
status: active
merged_into: null
display_name: 王就聘
cbdb_id: 226713
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k6QBkJyCL1qHqtAJp7XoJD
        subject_person_id: p_cNPQCRESnHPNJBxvhHBfT4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王就聘，明人物。萬曆丙戌科進士進士，籍贯武進。（中国历代人物传记资料库 CBDB 226713）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KoO2Ask8BZX-LdtdvewXXO
          claim_id: c_k6QBkJyCL1qHqtAJp7XoJD
          source_id: s_TCxQPJu9ACwGR1cEn9qePf
          stance: supports
          locator: CBDB:226713
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_TCxQPJu9ACwGR1cEn9qePf
            source_type: api_record
            title: 中国历代人物传记资料库：王就聘（CBDB 226713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226713&o=json
            external_identifier: CBDB:226713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yXxRvwYCmwoGfQkyji2cLE
        subject_person_id: p_cNPQCRESnHPNJBxvhHBfT4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王就聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9Lds7GsE9oS19z9PGMmHbV
          claim_id: c_yXxRvwYCmwoGfQkyji2cLE
          source_id: s_TCxQPJu9ACwGR1cEn9qePf
          stance: supports
          locator: CBDB:226713
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OjidB2eVaKrJmqaufX6sAI
        subject_person_id: p_17jUtXnoMjU3kpESe25w4v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cNPQCRESnHPNJBxvhHBfT4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SNfdMlExoC8DqcR1L4uKTt
          claim_id: c_OjidB2eVaKrJmqaufX6sAI
          source_id: s_vdPChfbtmoNDWpsP7KYyJI
          stance: supports
          locator: CBDB：兄弟 王就學（126705）之父／母 王道生
          quotation: null
          interpretation_note: 由兄弟关系推断：王就聘 与 王就學 为同胞（CBDB 记「兄」），王就學 之父／母即 王就聘 之父／母。
          source:
            id: s_vdPChfbtmoNDWpsP7KYyJI
            source_type: api_record
            title: 中国历代人物传记资料库：王就聘（CBDB 226713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226713&o=json
            external_identifier: CBDB:226713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_17jUtXnoMjU3kpESe25w4v
        status: active
        display_name: 王道生
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DAGnuu-UZeovzQPcOFms5V
        subject_person_id: p_Wgw4bGM6hG66ToMF6agV3N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cNPQCRESnHPNJBxvhHBfT4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q0-Fl4FL_453vz2J7-gLMR
          claim_id: c_DAGnuu-UZeovzQPcOFms5V
          source_id: s_vdPChfbtmoNDWpsP7KYyJI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126705 王就學）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vdPChfbtmoNDWpsP7KYyJI
            source_type: api_record
            title: 中国历代人物传记资料库：王就聘（CBDB 226713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226713&o=json
            external_identifier: CBDB:226713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wgw4bGM6hG66ToMF6agV3N
        status: active
        display_name: 王就學
        merged_into_person_id: null
---

# 王就聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王就聘，明人物。萬曆丙戌科進士進士，籍贯武進。（中国历代人物传记资料库 CBDB 226713） | accepted |
| name.primary | 王就聘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_17jUtXnoMjU3kpESe25w4v | 王道生 | accepted |
| other | p_Wgw4bGM6hG66ToMF6agV3N | 王就學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王就聘（CBDB 226713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226713&o=json)
