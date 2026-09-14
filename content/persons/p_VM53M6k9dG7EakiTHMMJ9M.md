---
schema: wang-person/v1
id: p_VM53M6k9dG7EakiTHMMJ9M
status: active
merged_into: null
display_name: 王凌
cbdb_id: 413982
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7x8EDHQ2hYtRiRSnCFf4UX
        subject_person_id: p_VM53M6k9dG7EakiTHMMJ9M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凌，字彥雲，太原祁人，漢司徒王允之从子。曹魏重臣，歷青兗刺史、豫州刺史、司空、太尉，都督揚州諸軍事，封南鄉侯。嘉平三年與令狐愚謀立楚王曹彪，事泄被誅（《三國志·魏書·王凌傳》）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0EMTu1z-5gw7OcHpvXWQtx
          claim_id: c_7x8EDHQ2hYtRiRSnCFf4UX
          source_id: s_uajB2KM0-UzQUZIUTN5ISp
          stance: supports
          locator: 三國志/卷28·王凌傳
          quotation: null
          interpretation_note: 依正史列传原文重写简介。
          source:
            id: s_uajB2KM0-UzQUZIUTN5ISp
            source_type: website
            title: 维基文库：三國志/卷28·王凌
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/三國志/卷28
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:01:15.894Z
            metadata_json: null
        - id: cs_2IoDC1im4aA5ihECuJlYFW
          claim_id: c_7x8EDHQ2hYtRiRSnCFf4UX
          source_id: s_uDGaJi8D7Y2qp9PaY59gXx
          stance: supports
          locator: CBDB:413982
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_uDGaJi8D7Y2qp9PaY59gXx
            source_type: api_record
            title: 中国历代人物传记资料库：王凌（CBDB 413982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413982&o=json
            external_identifier: CBDB:413982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:26.305Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aUXbNiVwwCHNoU9QBNcDmL
        subject_person_id: p_VM53M6k9dG7EakiTHMMJ9M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hT2CwaXD3gqTaBA3zSdc1g
          claim_id: c_aUXbNiVwwCHNoU9QBNcDmL
          source_id: s_uDGaJi8D7Y2qp9PaY59gXx
          stance: supports
          locator: CBDB:413982
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5101-5200）｜历史性依据：CBDB 朝代 = 三國魏
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
  descendants:
    - claim:
        id: c_HWQA-3j3JDy-dxjdIGkn_6
        subject_person_id: p_j3DWJorFZGEka54H5J8p6C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VM53M6k9dG7EakiTHMMJ9M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_-hfTi05Hxb8F8qrq-PKLyF
          claim_id: c_HWQA-3j3JDy-dxjdIGkn_6
          source_id: s_zXEbspHfsXiopf5z3hzkbp
          stance: supports
          locator: 三國志·卷二十八·王凌傳：叔父允，爲漢司徒。
          quotation: null
          interpretation_note: 王允为王凌之叔父（从父）；因 schema 无叔侄谓词，以 ancestor_of 记家族亲缘。
          source:
            id: s_zXEbspHfsXiopf5z3hzkbp
            source_type: website
            title: 维基文库：後漢書·卷六十六·王允傳
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/後漢書/卷66
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T00:28:01.027Z
            metadata_json: null
      object_person:
        id: p_j3DWJorFZGEka54H5J8p6C
        status: active
        display_name: 王允 (漢)
        merged_into_person_id: null
  other: []
---

# 王凌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王凌，字彥雲，太原祁人，漢司徒王允之从子。曹魏重臣，歷青兗刺史、豫州刺史、司空、太尉，都督揚州諸軍事，封南鄉侯。嘉平三年與令狐愚謀立楚王曹彪，事泄被誅（《三國志·魏書·王凌傳》）。 | accepted |
| name.primary | 王凌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_j3DWJorFZGEka54H5J8p6C | 王允 (漢) | accepted |

## 外部来源

- [维基文库：後漢書·卷六十六·王允傳](https://zh.wikisource.org/wiki/後漢書/卷66)
- [维基文库：三國志/卷28·王凌](https://zh.wikisource.org/wiki/三國志/卷28)
- [中国历代人物传记资料库：王凌（CBDB 413982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413982&o=json)
