---
schema: wang-person/v1
id: p_rRx92rsgj5B1Dfj7HhD6jF
status: active
merged_into: null
display_name: 王拱臣
cbdb_id: 282045
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5iYk9hwNtqAZQNcwKjLv7o
        subject_person_id: p_rRx92rsgj5B1Dfj7HhD6jF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱臣，明人物。正德十二年進士，籍贯渠縣。（中国历代人物传记资料库 CBDB 282045）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UcqbBgYDGnY9HIj84ZMcLt
          claim_id: c_5iYk9hwNtqAZQNcwKjLv7o
          source_id: s_qhZbxdSgM7DMPkYwXjcYUt
          stance: supports
          locator: CBDB:282045
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qhZbxdSgM7DMPkYwXjcYUt
            source_type: api_record
            title: 中国历代人物传记资料库：王拱臣（CBDB 282045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282045&o=json
            external_identifier: CBDB:282045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rubp4mztxa8oWsuW2XEM53
        subject_person_id: p_rRx92rsgj5B1Dfj7HhD6jF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aHdG8KQggXGAaEqGHc6C7M
          claim_id: c_rubp4mztxa8oWsuW2XEM53
          source_id: s_qhZbxdSgM7DMPkYwXjcYUt
          stance: supports
          locator: CBDB:282045
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__2FrIfHm8NGA0TNj9LxaR4
        subject_person_id: p_sp87Q8ktX7kHeJfazKTe3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rRx92rsgj5B1Dfj7HhD6jF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uII8aYib6m-nRpPQDWkaRK
          claim_id: c__2FrIfHm8NGA0TNj9LxaR4
          source_id: s_6gwtvM5bNLQPmxbdih9gTu
          stance: supports
          locator: CBDB：兄弟 王翰臣（202016）之父／母 王琛
          quotation: null
          interpretation_note: 由兄弟关系推断：王拱臣 与 王翰臣 为同胞（CBDB 记「兄」），王翰臣 之父／母即 王拱臣 之父／母。
          source:
            id: s_6gwtvM5bNLQPmxbdih9gTu
            source_type: api_record
            title: 中国历代人物传记资料库：王拱臣（CBDB 282045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282045&o=json
            external_identifier: CBDB:282045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sp87Q8ktX7kHeJfazKTe3u
        status: active
        display_name: 王琛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iHfJztjaMgJAkJhu_dhzPj
        subject_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rRx92rsgj5B1Dfj7HhD6jF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OhuGxJuLN2CZOhpaDqclMb
          claim_id: c_iHfJztjaMgJAkJhu_dhzPj
          source_id: s_6gwtvM5bNLQPmxbdih9gTu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202016 王翰臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6gwtvM5bNLQPmxbdih9gTu
            source_type: api_record
            title: 中国历代人物传记资料库：王拱臣（CBDB 282045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282045&o=json
            external_identifier: CBDB:282045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Mm4Feno3TMRLDtespKCU2Q
        status: active
        display_name: 王翰臣
        merged_into_person_id: null
---

# 王拱臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王拱臣，明人物。正德十二年進士，籍贯渠縣。（中国历代人物传记资料库 CBDB 282045） | accepted |
| name.primary | 王拱臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sp87Q8ktX7kHeJfazKTe3u | 王琛 | accepted |
| other | p_Mm4Feno3TMRLDtespKCU2Q | 王翰臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王拱臣（CBDB 282045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282045&o=json)
