---
schema: wang-person/v1
id: p_dRmajZMi4CLBg7x1fJXP17
status: active
merged_into: null
display_name: 王講
cbdb_id: 238058
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LMbZ2uKFo37TyKwAnRNz9A
        subject_person_id: p_dRmajZMi4CLBg7x1fJXP17
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王講，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238058）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TPqxeIye1yckNCemhAmPA6
          claim_id: c_LMbZ2uKFo37TyKwAnRNz9A
          source_id: s_p1Ux7bg1DonDLcGWUPjM2f
          stance: supports
          locator: CBDB:238058
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_p1Ux7bg1DonDLcGWUPjM2f
            source_type: api_record
            title: 中国历代人物传记资料库：王講（CBDB 238058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238058&o=json
            external_identifier: CBDB:238058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AhAavT3SE18g68mPcFWMyG
        subject_person_id: p_dRmajZMi4CLBg7x1fJXP17
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王講
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TNnBDqiYTPBFn2j1UfZuhp
          claim_id: c_AhAavT3SE18g68mPcFWMyG
          source_id: s_p1Ux7bg1DonDLcGWUPjM2f
          stance: supports
          locator: CBDB:238058
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S3PjyS288BsP3VxoMnsu7T
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dRmajZMi4CLBg7x1fJXP17
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7z5XaDzidyfso_wELnnGx8
          claim_id: c_S3PjyS288BsP3VxoMnsu7T
          source_id: s_C0yOeKxjequCHQZX_MqIp3
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王講 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王講 之父／母。
          source:
            id: s_C0yOeKxjequCHQZX_MqIp3
            source_type: api_record
            title: 中国历代人物传记资料库：王講（CBDB 238058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238058&o=json
            external_identifier: CBDB:238058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zr3cc57cGmUXGbD4psHLyS
        status: active
        display_name: 王仕復
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_n2Nhvlh1zlcd8ndX1iXBmB
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dRmajZMi4CLBg7x1fJXP17
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YiLr30zcsQAhuWssfQpP8A
          claim_id: c_n2Nhvlh1zlcd8ndX1iXBmB
          source_id: s_C0yOeKxjequCHQZX_MqIp3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C0yOeKxjequCHQZX_MqIp3
            source_type: api_record
            title: 中国历代人物传记资料库：王講（CBDB 238058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238058&o=json
            external_identifier: CBDB:238058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Sfy82F6BmihArAucn9Vuw
        status: active
        display_name: 王詔
        merged_into_person_id: null
---

# 王講

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王講，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238058） | accepted |
| name.primary | 王講 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zr3cc57cGmUXGbD4psHLyS | 王仕復 | accepted |
| other | p_8Sfy82F6BmihArAucn9Vuw | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王講（CBDB 238058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238058&o=json)
