---
schema: wang-person/v1
id: p_PdDMryFZEE3ih5YpawBYLs
status: active
merged_into: null
display_name: 王朝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T1orcFF7JcZ9i1jV2RgdiL
        subject_person_id: p_PdDMryFZEE3ih5YpawBYLs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3FCa2Jt7wiL7bMZkZ6Uutr
          claim_id: c_T1orcFF7JcZ9i1jV2RgdiL
          source_id: s_5vtFdybAvHMGTuvy1fwv9q
          stance: supports
          locator: CBDB:294866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294866）
          source: &a1
            id: s_5vtFdybAvHMGTuvy1fwv9q
            source_type: api_record
            title: 中国历代人物传记资料库：王朝（CBDB 294866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294866&o=json
            external_identifier: CBDB:294866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HwZNwU8TkVY8BZ1RUq5FQW
        subject_person_id: p_PdDMryFZEE3ih5YpawBYLs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝，明人物。嘉靖十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 294866）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nueFw1Sioy4xeJ-xcx6IVD
          claim_id: c_HwZNwU8TkVY8BZ1RUq5FQW
          source_id: s_5vtFdybAvHMGTuvy1fwv9q
          stance: supports
          locator: CBDB:294866
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yBVgTUNKqbm1pkIu2IZjFj
        subject_person_id: p_38MrYsNYkPoBeMisQP7Sof
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_PdDMryFZEE3ih5YpawBYLs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O9TNmE0306ZGDK4OBGgxFT
          claim_id: c_yBVgTUNKqbm1pkIu2IZjFj
          source_id: s_MAwZgy6T3p7C3wpmNsQXur
          stance: supports
          locator: CBDB：兄弟 王龙溪（126814）之父／母 王经
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝 与 王龙溪 为同胞（CBDB 记「弟」），王龙溪 之父／母即 王朝 之父／母。
          source:
            id: s_MAwZgy6T3p7C3wpmNsQXur
            source_type: api_record
            title: 中国历代人物传记资料库：王朝（CBDB 294866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294866&o=json
            external_identifier: CBDB:294866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_38MrYsNYkPoBeMisQP7Sof
        status: active
        display_name: 王经
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tMsAQNgUi8OwAzTqQ2WvpR
        subject_person_id: p_PdDMryFZEE3ih5YpawBYLs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PLGLqzeSYlIRXhGGWdcupb
          claim_id: c_tMsAQNgUi8OwAzTqQ2WvpR
          source_id: s_MAwZgy6T3p7C3wpmNsQXur
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126814 王畿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MAwZgy6T3p7C3wpmNsQXur
            source_type: api_record
            title: 中国历代人物传记资料库：王朝（CBDB 294866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294866&o=json
            external_identifier: CBDB:294866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aXikAW5GmUNHUB4Mexh2vK
        status: active
        display_name: 王龙溪
        merged_into_person_id: null
---

# 王朝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝 | accepted |
| bio.summary | 王朝，明人物。嘉靖十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 294866） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |
| other | p_aXikAW5GmUNHUB4Mexh2vK | 王龙溪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝（CBDB 294866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294866&o=json)
