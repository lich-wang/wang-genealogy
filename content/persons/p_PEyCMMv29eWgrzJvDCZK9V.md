---
schema: wang-person/v1
id: p_PEyCMMv29eWgrzJvDCZK9V
status: active
merged_into: null
display_name: 王掄秀
cbdb_id: 30059
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SDg1TYHcMexPd8S7goEfhs
        subject_person_id: p_PEyCMMv29eWgrzJvDCZK9V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掄秀，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30059）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zOsuXj68VG4H_7NyKmcsQs
          claim_id: c_SDg1TYHcMexPd8S7goEfhs
          source_id: s_MmzEfKef9BnXVDBdQmUiih
          stance: supports
          locator: CBDB:30059
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MmzEfKef9BnXVDBdQmUiih
            source_type: api_record
            title: 中国历代人物传记资料库：王掄秀（CBDB 30059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30059&o=json
            external_identifier: CBDB:30059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_s4rEn23xzhQUza4Bg7ciC1
        subject_person_id: p_PEyCMMv29eWgrzJvDCZK9V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掄秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yRGSQcQyyFHiBGzTuZ6ur7
          claim_id: c_s4rEn23xzhQUza4Bg7ciC1
          source_id: s_MmzEfKef9BnXVDBdQmUiih
          stance: supports
          locator: CBDB:30059
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IcbA_2pgV-2bHDxKwlKX3u
        subject_person_id: p_riETjcz3yNBDDQpRwnut7q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PEyCMMv29eWgrzJvDCZK9V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NZm9WOYGFErbXlo01tSU1k
          claim_id: c_IcbA_2pgV-2bHDxKwlKX3u
          source_id: s_kcILRbomnba0b_1Gpt8Csn
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30050）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kcILRbomnba0b_1Gpt8Csn
            source_type: api_record
            title: 中国历代人物传记资料库：王掄秀（CBDB 30059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30059&o=json
            external_identifier: CBDB:30059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_riETjcz3yNBDDQpRwnut7q
        status: active
        display_name: 王振翮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王掄秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王掄秀，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30059） | accepted |
| name.primary | 王掄秀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_riETjcz3yNBDDQpRwnut7q | 王振翮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王掄秀（CBDB 30059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30059&o=json)
