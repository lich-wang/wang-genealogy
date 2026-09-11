---
schema: wang-person/v1
id: p_H841UufcMkWpzbemaqposM
status: active
merged_into: null
display_name: 王福
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j25M6sY7CffaMVwEeeipdG
        subject_person_id: p_H841UufcMkWpzbemaqposM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ukd22PHAg9ouy4RmHypHGb
          claim_id: c_j25M6sY7CffaMVwEeeipdG
          source_id: s_88e9mqJVWV2xoBh8UzFFtc
          stance: supports
          locator: CBDB:208015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208015）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4P8UgAdA8RGo8wEHfrEso4
        subject_person_id: p_H841UufcMkWpzbemaqposM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1406年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DEqzvQmPHGDC57dBdobCno
          claim_id: c_4P8UgAdA8RGo8wEHfrEso4
          source_id: s_88e9mqJVWV2xoBh8UzFFtc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sgnKJQJM9DYd9j5H8h3LUj
        subject_person_id: p_H841UufcMkWpzbemaqposM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLVjWGGi4Z5AWy6Aa3Y1wn
          claim_id: c_sgnKJQJM9DYd9j5H8h3LUj
          source_id: s_88e9mqJVWV2xoBh8UzFFtc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HEyi5XBq1FqAVLHglO2eM5
        subject_person_id: p_UKmnBNaYcR6Y5ExUHqMqA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H841UufcMkWpzbemaqposM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GxdO02j--WpwyYaH13cwxW
          claim_id: c_HEyi5XBq1FqAVLHglO2eM5
          source_id: s_88e9mqJVWV2xoBh8UzFFtc
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第四十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UKmnBNaYcR6Y5ExUHqMqA5
        status: active
        display_name: 王意
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_YmRsc-7uzVuL3OIDcb6NUi
        subject_person_id: p_H841UufcMkWpzbemaqposM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xUKLxcqEvvZveDhNaaFU4z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qTe4z_OwkhiIcitikkIS74
          claim_id: c_YmRsc-7uzVuL3OIDcb6NUi
          source_id: s_XA-I_udPL0Mrdq1_YDfOAu
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第四十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XA-I_udPL0Mrdq1_YDfOAu
            source_type: api_record
            title: 中国历代人物传记资料库：牛氏(王福妻)（CBDB 239295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239295&o=json
            external_identifier: CBDB:239295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xUKLxcqEvvZveDhNaaFU4z
        status: active
        display_name: 牛氏
        merged_into_person_id: null
  ancestors:
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
          source: *a1
      object_person:
        id: p_iHcjHuCToedvB1NhjdCq2m
        status: active
        display_name: 王仲溫
        merged_into_person_id: null
    - claim:
        id: c_Nkk9_SKeUX17Hs3tQmhLNC
        subject_person_id: p_KYAQt8BQX5rvNUx1tWjb6x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H841UufcMkWpzbemaqposM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xRiT2S8U1GDCzX38g74aGw
          claim_id: c_Nkk9_SKeUX17Hs3tQmhLNC
          source_id: s_88e9mqJVWV2xoBh8UzFFtc
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第四十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KYAQt8BQX5rvNUx1tWjb6x
        status: active
        display_name: 王志道
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| birth.date | 1406年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UKmnBNaYcR6Y5ExUHqMqA5 | 王意 | accepted |
| spouses | p_xUKLxcqEvvZveDhNaaFU4z | 牛氏 | accepted |
| ancestors | p_iHcjHuCToedvB1NhjdCq2m | 王仲溫 | accepted |
| ancestors | p_KYAQt8BQX5rvNUx1tWjb6x | 王志道 | accepted |

## 外部来源

- [中国历代人物传记资料库：牛氏(王福妻)（CBDB 239295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239295&o=json)
- [中国历代人物传记资料库：王福（CBDB 208015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208015&o=json)
