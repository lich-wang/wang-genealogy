---
schema: wang-person/v1
id: p_j3DWJorFZGEka54H5J8p6C
status: active
merged_into: null
display_name: 王允 (漢)
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gD-dJ69fwX73V1Yiq6bUCJ
        subject_person_id: p_j3DWJorFZGEka54H5J8p6C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允 (漢)
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4SB1zr5JnTAh-2iXZRqfBA
          claim_id: c_gD-dJ69fwX73V1Yiq6bUCJ
          source_id: s_zXEbspHfsXiopf5z3hzkbp
          stance: supports
          locator: 後漢書·卷六十六·王允傳
          quotation: null
          interpretation_note: 依据《后汉书·王允传》正史原文补录。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G99XgwNfRnrmtMZ3ZLZzy6
        subject_person_id: p_j3DWJorFZGEka54H5J8p6C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允，字子師，太原祁人。東漢末重臣，官至司徒、尚書令，设计诛杀董卓，后为李傕、郭汜所杀。三國志·王凌傳載王凌为允之从子（叔父允）。《後漢書·王允傳》有传。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W6WfC432dVslI4QlW1TzeM
          claim_id: c_G99XgwNfRnrmtMZ3ZLZzy6
          source_id: s_zXEbspHfsXiopf5z3hzkbp
          stance: supports
          locator: 後漢書·卷六十六·王允傳
          quotation: null
          interpretation_note: 依据《后汉书·王允传》正史原文补录。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
        id: p_VM53M6k9dG7EakiTHMMJ9M
        status: active
        display_name: 王凌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王允 (漢)

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允 (漢) | accepted |
| bio.summary | 王允，字子師，太原祁人。東漢末重臣，官至司徒、尚書令，设计诛杀董卓，后为李傕、郭汜所杀。三國志·王凌傳載王凌为允之从子（叔父允）。《後漢書·王允傳》有传。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_VM53M6k9dG7EakiTHMMJ9M | 王凌 | accepted |

## 外部来源

- [维基文库：後漢書·卷六十六·王允傳](https://zh.wikisource.org/wiki/後漢書/卷66)
