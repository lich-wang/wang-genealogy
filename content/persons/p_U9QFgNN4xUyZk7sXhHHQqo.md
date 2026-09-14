---
schema: wang-person/v1
id: p_U9QFgNN4xUyZk7sXhHHQqo
status: active
merged_into: null
display_name: 王良學
cbdb_id: 22229
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AU1wMh6iKdKovwy8SuZSmG
        subject_person_id: p_U9QFgNN4xUyZk7sXhHHQqo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良學，元人物。籍贯鄞縣，身份为士人。（中国历代人物传记资料库 CBDB 22229）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_cOiaKDynflbK3cIwXx3cDM
          claim_id: c_AU1wMh6iKdKovwy8SuZSmG
          source_id: s_Szya4R7c3r8AJaoyuu6UwN
          stance: supports
          locator: CBDB:22229
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Szya4R7c3r8AJaoyuu6UwN
            source_type: api_record
            title: 中国历代人物传记资料库：王良學（CBDB 22229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22229&o=json
            external_identifier: CBDB:22229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WB5vrN9BMfi5akViQA6tcx
        subject_person_id: p_U9QFgNN4xUyZk7sXhHHQqo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nAt9gBsT2wQDF1P23gwxsG
          claim_id: c_WB5vrN9BMfi5akViQA6tcx
          source_id: s_Szya4R7c3r8AJaoyuu6UwN
          stance: supports
          locator: CBDB:22229
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 元
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZFPQE6XbhfvzwC9I2Cdu32
        subject_person_id: p_pyiMMQeppjms8sZr1Bh4Pc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U9QFgNN4xUyZk7sXhHHQqo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TiF_732cWOqrA7wE_RnrvP
          claim_id: c_ZFPQE6XbhfvzwC9I2Cdu32
          source_id: s_yFatirQFI9XirZaZ6CM1CP
          stance: supports
          locator: CBDB 亲属：父（KinPerson 19880）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_yFatirQFI9XirZaZ6CM1CP
            source_type: api_record
            title: 中国历代人物传记资料库：王良學（CBDB 22229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22229&o=json
            external_identifier: CBDB:22229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pyiMMQeppjms8sZr1Bh4Pc
        status: active
        display_name: 王應麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王良學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良學，元人物。籍贯鄞縣，身份为士人。（中国历代人物传记资料库 CBDB 22229） | accepted |
| name.primary | 王良學 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pyiMMQeppjms8sZr1Bh4Pc | 王應麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良學（CBDB 22229）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22229&o=json)
