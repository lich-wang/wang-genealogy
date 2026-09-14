---
schema: wang-person/v1
id: p_N7kYmhEQq9QPwe93zBKXn2
status: active
merged_into: null
display_name: 王國
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bt3eUXCtXTWPp5MHdjbPgQ
        subject_person_id: p_N7kYmhEQq9QPwe93zBKXn2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cEjSH2BcHpihUQTi9p9cLK
          claim_id: c_Bt3eUXCtXTWPp5MHdjbPgQ
          source_id: s_iDuYiR2c5QVxqmAJNsyTd7
          stance: supports
          locator: CBDB:294868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294868）
          source: &a1
            id: s_iDuYiR2c5QVxqmAJNsyTd7
            source_type: api_record
            title: 中国历代人物传记资料库：王國（CBDB 294868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294868&o=json
            external_identifier: CBDB:294868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.478Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i2XPAcCZznF94rTdDiEz6m
        subject_person_id: p_N7kYmhEQq9QPwe93zBKXn2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國，明人物。嘉靖十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 294868）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zRoOIf8-R1JHyAm051fJhO
          claim_id: c_i2XPAcCZznF94rTdDiEz6m
          source_id: s_iDuYiR2c5QVxqmAJNsyTd7
          stance: supports
          locator: CBDB:294868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vNBgUDgNgi-JFveAqfZn6Z
        subject_person_id: p_38MrYsNYkPoBeMisQP7Sof
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_N7kYmhEQq9QPwe93zBKXn2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X4P7MmifM6g8jePJ7h8kuR
          claim_id: c_vNBgUDgNgi-JFveAqfZn6Z
          source_id: s_ymA38P29Z1bzLRlSS_Cejo
          stance: supports
          locator: CBDB：兄弟 王龙溪（126814）之父／母 王经
          quotation: null
          interpretation_note: 由兄弟关系推断：王國 与 王龙溪 为同胞（CBDB 记「弟」），王龙溪 之父／母即 王國 之父／母。
          source:
            id: s_ymA38P29Z1bzLRlSS_Cejo
            source_type: api_record
            title: 中国历代人物传记资料库：王國（CBDB 294868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294868&o=json
            external_identifier: CBDB:294868
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
        id: c_Ky1aBOKN7Yw_N6duJRqOjA
        subject_person_id: p_N7kYmhEQq9QPwe93zBKXn2
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
        - id: cs_lq76Fy4sE-Ax9lxmeRx60u
          claim_id: c_Ky1aBOKN7Yw_N6duJRqOjA
          source_id: s_ymA38P29Z1bzLRlSS_Cejo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126814 王畿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ymA38P29Z1bzLRlSS_Cejo
            source_type: api_record
            title: 中国历代人物传记资料库：王國（CBDB 294868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294868&o=json
            external_identifier: CBDB:294868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aXikAW5GmUNHUB4Mexh2vK
        status: active
        display_name: 王龙溪
        merged_into_person_id: null
---

# 王國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國 | accepted |
| bio.summary | 王國，明人物。嘉靖十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 294868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |
| other | p_aXikAW5GmUNHUB4Mexh2vK | 王龙溪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國（CBDB 294868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294868&o=json)
