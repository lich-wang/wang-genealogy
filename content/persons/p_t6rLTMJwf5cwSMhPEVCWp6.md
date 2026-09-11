---
schema: wang-person/v1
id: p_t6rLTMJwf5cwSMhPEVCWp6
status: active
merged_into: null
display_name: 王士安
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vKsE88S2AFwdWFMxGHqhbu
        subject_person_id: p_t6rLTMJwf5cwSMhPEVCWp6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nVGYGGuMNBgruUp9XmHabK
          claim_id: c_vKsE88S2AFwdWFMxGHqhbu
          source_id: s_qfB2UWkXtGnqcsvHTru3oL
          stance: supports
          locator: CBDB:21967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21967）
          source: &a1
            id: s_qfB2UWkXtGnqcsvHTru3oL
            source_type: api_record
            title: 中国历代人物传记资料库：王士安（CBDB 21967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21967&o=json
            external_identifier: CBDB:21967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_frmU6pTCYqPbcP6GJgAutw
        subject_person_id: p_t6rLTMJwf5cwSMhPEVCWp6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士安，宋人物。籍贯濟陰，入仕封贈。（中国历代人物传记资料库 CBDB 21967）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GfLudmuWdQNaL0Os-UU9Js
          claim_id: c_frmU6pTCYqPbcP6GJgAutw
          source_id: s_qfB2UWkXtGnqcsvHTru3oL
          stance: supports
          locator: CBDB:21967
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DJcK0L2pvIDnqW8X8gDgIh
        subject_person_id: p_p62jpgbjq4YmTP2P3TcH54
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t6rLTMJwf5cwSMhPEVCWp6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SqtJY7y-7CIevbTwucStVK
          claim_id: c_DJcK0L2pvIDnqW8X8gDgIh
          source_id: s_AoASzPKGRp4M3DsPWWLtoR
          stance: supports
          locator: CBDB 双向互证（子 王士安 ⇄ 父 王諫）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_AoASzPKGRp4M3DsPWWLtoR
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 21966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21966&o=json
            external_identifier: CBDB:21966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_p62jpgbjq4YmTP2P3TcH54
        status: active
        display_name: 王諫
        merged_into_person_id: null
  children:
    - claim:
        id: c_R9_lLWn_3ohsh4wyUwMhl1
        subject_person_id: p_t6rLTMJwf5cwSMhPEVCWp6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7YfpL25vUrnwFFcc6SBg38
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x0RZUqmM28-CQuUaMygwfi
          claim_id: c_R9_lLWn_3ohsh4wyUwMhl1
          source_id: s_mQaAmDqENzDB2HX8BBBFyG
          stance: supports
          locator: CBDB 双向互证（父 王士安 ⇄ 子 王博文）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_mQaAmDqENzDB2HX8BBBFyG
            source_type: api_record
            title: 中国历代人物传记资料库：王博文（CBDB 1860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json
            external_identifier: CBDB:1860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7YfpL25vUrnwFFcc6SBg38
        status: active
        display_name: 王博文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士安 | accepted |
| bio.summary | 王士安，宋人物。籍贯濟陰，入仕封贈。（中国历代人物传记资料库 CBDB 21967） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_p62jpgbjq4YmTP2P3TcH54 | 王諫 | accepted |
| children | p_7YfpL25vUrnwFFcc6SBg38 | 王博文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王博文（CBDB 1860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json)
- [中国历代人物传记资料库：王諫（CBDB 21966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21966&o=json)
- [中国历代人物传记资料库：王士安（CBDB 21967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21967&o=json)
