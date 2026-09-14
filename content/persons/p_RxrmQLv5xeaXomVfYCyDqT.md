---
schema: wang-person/v1
id: p_RxrmQLv5xeaXomVfYCyDqT
status: active
merged_into: null
display_name: 王家纘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ncQo6fC9xQCFT2bntFwAh4
        subject_person_id: p_RxrmQLv5xeaXomVfYCyDqT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家纘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LLDt9t6zuMz98EJVHzVhuY
          claim_id: c_ncQo6fC9xQCFT2bntFwAh4
          source_id: s_TYvJVTZX4ESh1DiZsAmoF9
          stance: supports
          locator: CBDB:697664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697664）
          source: &a1
            id: s_TYvJVTZX4ESh1DiZsAmoF9
            source_type: api_record
            title: 中国历代人物传记资料库：王家纘（CBDB 697664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697664&o=json
            external_identifier: CBDB:697664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dQ2HzQzEqL8z47JtTaLtqb
        subject_person_id: p_RxrmQLv5xeaXomVfYCyDqT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家纘，清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 697664）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zcnqq8jjH8rdQUFC82V25P
          claim_id: c_dQ2HzQzEqL8z47JtTaLtqb
          source_id: s_TYvJVTZX4ESh1DiZsAmoF9
          stance: supports
          locator: CBDB:697664
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
        id: c_bDhm4i2tRwyxNJor-MmEJg
        subject_person_id: p_25SPDVVij3RxARUutz98V5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RxrmQLv5xeaXomVfYCyDqT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sCWyHQVLqpemDiQZRw7Gq6
          claim_id: c_bDhm4i2tRwyxNJor-MmEJg
          source_id: s_hMUPO7Twp2tNSu7MnjyJUT
          stance: supports
          locator: CBDB 亲属：兄弟（KinPerson 697664 王家纘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hMUPO7Twp2tNSu7MnjyJUT
            source_type: api_record
            title: 中国历代人物传记资料库：王家勤（CBDB 697659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697659&o=json
            external_identifier: CBDB:697659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_25SPDVVij3RxARUutz98V5
        status: active
        display_name: 王家勤
        merged_into_person_id: null
---

# 王家纘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家纘 | accepted |
| bio.summary | 王家纘，清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 697664） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_25SPDVVij3RxARUutz98V5 | 王家勤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家勤（CBDB 697659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697659&o=json)
- [中国历代人物传记资料库：王家纘（CBDB 697664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697664&o=json)
