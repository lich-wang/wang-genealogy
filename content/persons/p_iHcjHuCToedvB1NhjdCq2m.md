---
schema: wang-person/v1
id: p_iHcjHuCToedvB1NhjdCq2m
status: active
merged_into: null
display_name: 王仲溫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o1tz8tPPsqSA9p22JEkB2j
        subject_person_id: p_iHcjHuCToedvB1NhjdCq2m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲溫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EB82zZFGtzkUxPKrt47QM6
          claim_id: c_o1tz8tPPsqSA9p22JEkB2j
          source_id: s_zjqbD9h9Do2B5E1U9oE9y7
          stance: supports
          locator: CBDB:239291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239291）
          source: &a1
            id: s_zjqbD9h9Do2B5E1U9oE9y7
            source_type: api_record
            title: 中国历代人物传记资料库：王仲溫（CBDB 239291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239291&o=json
            external_identifier: CBDB:239291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kx6V1cYZEKTQo57VBSfjro
        subject_person_id: p_iHcjHuCToedvB1NhjdCq2m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲溫，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239291）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ux-P1fFxzmswTHN8oUuxWT
          claim_id: c_kx6V1cYZEKTQo57VBSfjro
          source_id: s_zjqbD9h9Do2B5E1U9oE9y7
          stance: supports
          locator: CBDB:239291
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_lFIdLeRkEvwuoajdrl42Fd
        subject_person_id: p_iHcjHuCToedvB1NhjdCq2m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H841UufcMkWpzbemaqposM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A9T8ccxUHxX_R7IbgH0fmx
          claim_id: c_lFIdLeRkEvwuoajdrl42Fd
          source_id: s_88e9mqJVWV2xoBh8UzFFtc
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第四十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_88e9mqJVWV2xoBh8UzFFtc
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 208015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208015&o=json
            external_identifier: CBDB:208015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H841UufcMkWpzbemaqposM
        status: active
        display_name: 王福
        merged_into_person_id: null
  other: []
---

# 王仲溫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲溫 | accepted |
| bio.summary | 王仲溫，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239291） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_H841UufcMkWpzbemaqposM | 王福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 208015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208015&o=json)
- [中国历代人物传记资料库：王仲溫（CBDB 239291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239291&o=json)
