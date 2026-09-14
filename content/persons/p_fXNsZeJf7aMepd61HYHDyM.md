---
schema: wang-person/v1
id: p_fXNsZeJf7aMepd61HYHDyM
status: active
merged_into: null
display_name: 王子謙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P293vGE7a7Cua4Fdj2TV8K
        subject_person_id: p_fXNsZeJf7aMepd61HYHDyM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B7qHavSrLb1Y6EqPFubYwv
          claim_id: c_P293vGE7a7Cua4Fdj2TV8K
          source_id: s_JJuP1CvLYqK9GCpDArB938
          stance: supports
          locator: CBDB:231335
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231335）
          source: &a1
            id: s_JJuP1CvLYqK9GCpDArB938
            source_type: api_record
            title: 中国历代人物传记资料库：王子謙（CBDB 231335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231335&o=json
            external_identifier: CBDB:231335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KmrGM5m2RA23QGGAawBRMp
        subject_person_id: p_fXNsZeJf7aMepd61HYHDyM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子謙，明人物。宣德八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 231335）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zsq3y07C-fkH1la7H8rUy9
          claim_id: c_KmrGM5m2RA23QGGAawBRMp
          source_id: s_JJuP1CvLYqK9GCpDArB938
          stance: supports
          locator: CBDB:231335
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VeInvJditm5t0fdBJbFgG7
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fXNsZeJf7aMepd61HYHDyM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YtovVhDKY1mHoag9AlV3Kb
          claim_id: c_VeInvJditm5t0fdBJbFgG7
          source_id: s_ppnOZW6YBRfe_qGHzELFi0
          stance: supports
          locator: CBDB：兄弟 王鐸（126884）之父／母 王希仙
          quotation: null
          interpretation_note: 由兄弟关系推断：王子謙 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王子謙 之父／母。
          source:
            id: s_ppnOZW6YBRfe_qGHzELFi0
            source_type: api_record
            title: 中国历代人物传记资料库：王子謙（CBDB 231335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231335&o=json
            external_identifier: CBDB:231335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tmHpBVPPGJeDHKDFHFAyWx
        status: active
        display_name: 王希仙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OoDbZrGRjpA4NaJ8w55i4r
        subject_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fXNsZeJf7aMepd61HYHDyM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C-s0Bzz_2qU0rqXKnWqMBC
          claim_id: c_OoDbZrGRjpA4NaJ8w55i4r
          source_id: s_ppnOZW6YBRfe_qGHzELFi0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126884 王鐸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ppnOZW6YBRfe_qGHzELFi0
            source_type: api_record
            title: 中国历代人物传记资料库：王子謙（CBDB 231335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231335&o=json
            external_identifier: CBDB:231335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VVkAYnQtUyWdWCpmXePbBp
        status: active
        display_name: 王鐸
        merged_into_person_id: null
---

# 王子謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子謙 | accepted |
| bio.summary | 王子謙，明人物。宣德八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 231335） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tmHpBVPPGJeDHKDFHFAyWx | 王希仙 | accepted |
| other | p_VVkAYnQtUyWdWCpmXePbBp | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子謙（CBDB 231335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231335&o=json)
