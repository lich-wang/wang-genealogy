---
schema: wang-person/v1
id: p_evPMtWkxcE9dxjhsarkDVi
status: active
merged_into: null
display_name: 王子訓
cbdb_id: 267623
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bSp5Tdp6Nkt429Hu1K9gPt
        subject_person_id: p_evPMtWkxcE9dxjhsarkDVi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子訓，明人物。弘治九年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 267623）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xN60utaB3ASuGw_AbykFjz
          claim_id: c_bSp5Tdp6Nkt429Hu1K9gPt
          source_id: s_96EEEdNSpSuczS7J18hAhq
          stance: supports
          locator: CBDB:267623
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_96EEEdNSpSuczS7J18hAhq
            source_type: api_record
            title: 中国历代人物传记资料库：王子訓（CBDB 267623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267623&o=json
            external_identifier: CBDB:267623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xqf3y3ZDWp9VNDBc4KRPCv
        subject_person_id: p_evPMtWkxcE9dxjhsarkDVi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Qk9sJkVFL5f4tn2z4ApeKN
          claim_id: c_Xqf3y3ZDWp9VNDBc4KRPCv
          source_id: s_96EEEdNSpSuczS7J18hAhq
          stance: supports
          locator: CBDB:267623
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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
        id: c_DsAoamNvxhFpiVjqmdz1hh
        subject_person_id: p_Syc31fNwi32wruZuRYZrtu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_evPMtWkxcE9dxjhsarkDVi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GHumljl165KCpalrF1dolk
          claim_id: c_DsAoamNvxhFpiVjqmdz1hh
          source_id: s_eeFOXzT4at4_gXX17kW0K-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201131 王子言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eeFOXzT4at4_gXX17kW0K-
            source_type: api_record
            title: 中国历代人物传记资料库：王子訓（CBDB 267623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267623&o=json
            external_identifier: CBDB:267623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Syc31fNwi32wruZuRYZrtu
        status: active
        display_name: 王子言
        merged_into_person_id: null
    - claim:
        id: c_BXqFavaLJG2IxzX5IR9GTO
        subject_person_id: p_TTQ9DBgLuTWCqCSppicxY6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_evPMtWkxcE9dxjhsarkDVi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1pnTF29JVug2wXuQMczpn9
          claim_id: c_BXqFavaLJG2IxzX5IR9GTO
          source_id: s_eeFOXzT4at4_gXX17kW0K-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201582 王子謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eeFOXzT4at4_gXX17kW0K-
            source_type: api_record
            title: 中国历代人物传记资料库：王子訓（CBDB 267623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267623&o=json
            external_identifier: CBDB:267623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TTQ9DBgLuTWCqCSppicxY6
        status: active
        display_name: 王子謨
        merged_into_person_id: null
---

# 王子訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子訓，明人物。弘治九年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 267623） | accepted |
| name.primary | 王子訓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_Syc31fNwi32wruZuRYZrtu | 王子言 | accepted |
| other | p_TTQ9DBgLuTWCqCSppicxY6 | 王子謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子訓（CBDB 267623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267623&o=json)
