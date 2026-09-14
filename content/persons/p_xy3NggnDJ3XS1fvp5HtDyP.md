---
schema: wang-person/v1
id: p_xy3NggnDJ3XS1fvp5HtDyP
status: active
merged_into: null
display_name: 王子清
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xFsHDgJGUC5wQiCFLPNehA
        subject_person_id: p_xy3NggnDJ3XS1fvp5HtDyP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h7iRosFfLf75R7JEG8Rs84
          claim_id: c_xFsHDgJGUC5wQiCFLPNehA
          source_id: s_U8EWGS7Fa7bFHYZixyMCVL
          stance: supports
          locator: CBDB:329984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329984）
          source: &a1
            id: s_U8EWGS7Fa7bFHYZixyMCVL
            source_type: api_record
            title: 中国历代人物传记资料库：王子清（CBDB 329984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329984&o=json
            external_identifier: CBDB:329984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DVuFwCx7mbN4J4KpkQuDM1
        subject_person_id: p_xy3NggnDJ3XS1fvp5HtDyP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子清，明人物。嘉靖四十四年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329984）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wNekCt99nWDwadrxD4L0rQ
          claim_id: c_DVuFwCx7mbN4J4KpkQuDM1
          source_id: s_U8EWGS7Fa7bFHYZixyMCVL
          stance: supports
          locator: CBDB:329984
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eDXyKIrYq17ZgbPpsf5OEW
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xy3NggnDJ3XS1fvp5HtDyP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LUhVm1N69Rbbc_gJ6uqf1R
          claim_id: c_eDXyKIrYq17ZgbPpsf5OEW
          source_id: s_SBu3lXVsUc3kJw_bsWSpx5
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王子清 与 王子蕙 为同胞（CBDB 记「弟」），王子蕙 之父／母即 王子清 之父／母。
          source:
            id: s_SBu3lXVsUc3kJw_bsWSpx5
            source_type: api_record
            title: 中国历代人物传记资料库：王子清（CBDB 329984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329984&o=json
            external_identifier: CBDB:329984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ngRno3M6aBRj8xR4YNhnTD
        status: active
        display_name: 王紹先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rVRXXQghRpq_hQv34GG-sK
        subject_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xy3NggnDJ3XS1fvp5HtDyP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dgl73GzvlDbvBe8dOXn20C
          claim_id: c_rVRXXQghRpq_hQv34GG-sK
          source_id: s_SBu3lXVsUc3kJw_bsWSpx5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SBu3lXVsUc3kJw_bsWSpx5
            source_type: api_record
            title: 中国历代人物传记资料库：王子清（CBDB 329984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329984&o=json
            external_identifier: CBDB:329984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mYaz7ZtA5wiQaCjCBZf5rq
        status: active
        display_name: 王子蕙
        merged_into_person_id: null
---

# 王子清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子清 | accepted |
| bio.summary | 王子清，明人物。嘉靖四十四年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329984） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ngRno3M6aBRj8xR4YNhnTD | 王紹先 | accepted |
| other | p_mYaz7ZtA5wiQaCjCBZf5rq | 王子蕙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子清（CBDB 329984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329984&o=json)
