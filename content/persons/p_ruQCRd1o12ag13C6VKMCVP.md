---
schema: wang-person/v1
id: p_ruQCRd1o12ag13C6VKMCVP
status: active
merged_into: null
display_name: 王錚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_94TiobjkEySLarEf5nyEez
        subject_person_id: p_ruQCRd1o12ag13C6VKMCVP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M2gPQN2w35LTkMVhXU1vEW
          claim_id: c_94TiobjkEySLarEf5nyEez
          source_id: s_3cY8vVq9pzFawpbBxGDwj4
          stance: supports
          locator: CBDB:260522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260522）
          source: &a1
            id: s_3cY8vVq9pzFawpbBxGDwj4
            source_type: api_record
            title: 中国历代人物传记资料库：王錚（CBDB 260522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260522&o=json
            external_identifier: CBDB:260522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PNCYxKreL239PR7Ku2DK81
        subject_person_id: p_ruQCRd1o12ag13C6VKMCVP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錚，明人物。成化二十三年進士，籍贯天台。（中国历代人物传记资料库 CBDB 260522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JYag_bAjx2sgnLrwYi2DfC
          claim_id: c_PNCYxKreL239PR7Ku2DK81
          source_id: s_3cY8vVq9pzFawpbBxGDwj4
          stance: supports
          locator: CBDB:260522
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5AszJDUR2fFYVOTJLC_aN2
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ruQCRd1o12ag13C6VKMCVP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gh0WMZueWvWi_5UoOobouR
          claim_id: c_5AszJDUR2fFYVOTJLC_aN2
          source_id: s_V2pn6pDd3KyFTjvdq1ens0
          stance: supports
          locator: CBDB：兄弟 王鐶（200621）之父／母 王公權
          quotation: null
          interpretation_note: 由兄弟关系推断：王錚 与 王鐶 为同胞（CBDB 记「弟」），王鐶 之父／母即 王錚 之父／母。
          source:
            id: s_V2pn6pDd3KyFTjvdq1ens0
            source_type: api_record
            title: 中国历代人物传记资料库：王錚（CBDB 260522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260522&o=json
            external_identifier: CBDB:260522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rFTZAq6ze35imaHPVmA96A
        status: active
        display_name: 王公權
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_G9luzYhTJm7WlArg6gVIt_
        subject_person_id: p_ruQCRd1o12ag13C6VKMCVP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X48MMTZl_jZGEc2OxHENc-
          claim_id: c_G9luzYhTJm7WlArg6gVIt_
          source_id: s_V2pn6pDd3KyFTjvdq1ens0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200621 王鐶）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V2pn6pDd3KyFTjvdq1ens0
            source_type: api_record
            title: 中国历代人物传记资料库：王錚（CBDB 260522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260522&o=json
            external_identifier: CBDB:260522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uxPkZUqsvSYKoUuB2wuXGH
        status: active
        display_name: 王鐶
        merged_into_person_id: null
---

# 王錚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錚 | accepted |
| bio.summary | 王錚，明人物。成化二十三年進士，籍贯天台。（中国历代人物传记资料库 CBDB 260522） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rFTZAq6ze35imaHPVmA96A | 王公權 | accepted |
| other | p_uxPkZUqsvSYKoUuB2wuXGH | 王鐶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錚（CBDB 260522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260522&o=json)
