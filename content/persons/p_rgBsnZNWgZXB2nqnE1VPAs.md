---
schema: wang-person/v1
id: p_rgBsnZNWgZXB2nqnE1VPAs
status: active
merged_into: null
display_name: 王沔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_53FNQiAMaBt2fTnj8yV8zN
        subject_person_id: p_rgBsnZNWgZXB2nqnE1VPAs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EBF2fvqJn2yjKWU95JHXm2
          claim_id: c_53FNQiAMaBt2fTnj8yV8zN
          source_id: s_Kvn16JoaQv7TueGoYiexNM
          stance: supports
          locator: CBDB:211378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211378）
          source: &a1
            id: s_Kvn16JoaQv7TueGoYiexNM
            source_type: api_record
            title: 中国历代人物传记资料库：王沔（CBDB 211378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211378&o=json
            external_identifier: CBDB:211378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sQjLEcj2wFpMYNzzU8Kqjk
        subject_person_id: p_rgBsnZNWgZXB2nqnE1VPAs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沔，明人物。隆慶五年進士，籍贯富順。（中国历代人物传记资料库 CBDB 211378）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ozVLAtY_YUncQm8IuKgPdP
          claim_id: c_sQjLEcj2wFpMYNzzU8Kqjk
          source_id: s_Kvn16JoaQv7TueGoYiexNM
          stance: supports
          locator: CBDB:211378
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_o2FxTKFNMNh3cqVP8LITLW
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rgBsnZNWgZXB2nqnE1VPAs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cmyGb8t8Rthkcc4MIRGDE-
          claim_id: c_o2FxTKFNMNh3cqVP8LITLW
          source_id: s_JyARlV0J3vkRQMs42Oxk9B
          stance: supports
          locator: CBDB：兄弟 王湘（205964）之父／母 王三至
          quotation: null
          interpretation_note: 由兄弟关系推断：王沔 与 王湘 为同胞（CBDB 记「弟」），王湘 之父／母即 王沔 之父／母。
          source:
            id: s_JyARlV0J3vkRQMs42Oxk9B
            source_type: api_record
            title: 中国历代人物传记资料库：王沔（CBDB 211378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211378&o=json
            external_identifier: CBDB:211378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LfFs8i9gooDeZuUy7XnMeR
        status: active
        display_name: 王三至
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_E3vMTM3IWjdtMSJTqHlSYP
        subject_person_id: p_JpKAwvv1MK7gdEG1QmEGyd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rgBsnZNWgZXB2nqnE1VPAs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5y1rM14-pMea8AgBPvfKIr
          claim_id: c_E3vMTM3IWjdtMSJTqHlSYP
          source_id: s_JyARlV0J3vkRQMs42Oxk9B
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205964 王湘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JyARlV0J3vkRQMs42Oxk9B
            source_type: api_record
            title: 中国历代人物传记资料库：王沔（CBDB 211378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211378&o=json
            external_identifier: CBDB:211378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JpKAwvv1MK7gdEG1QmEGyd
        status: active
        display_name: 王湘
        merged_into_person_id: null
---

# 王沔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沔 | accepted |
| bio.summary | 王沔，明人物。隆慶五年進士，籍贯富順。（中国历代人物传记资料库 CBDB 211378） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LfFs8i9gooDeZuUy7XnMeR | 王三至 | accepted |
| other | p_JpKAwvv1MK7gdEG1QmEGyd | 王湘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沔（CBDB 211378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211378&o=json)
