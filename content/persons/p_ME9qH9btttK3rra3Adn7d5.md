---
schema: wang-person/v1
id: p_ME9qH9btttK3rra3Adn7d5
status: active
merged_into: null
display_name: 王志叔
cbdb_id: 38990
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HeicAJsHbqMVLGcaL3Em7U
        subject_person_id: p_ME9qH9btttK3rra3Adn7d5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志叔，金人物。籍贯金壇，曾任散騎常侍。（中国历代人物传记资料库 CBDB 38990）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_SZoJvGrwjF0Gut4Ftw4R5I
          claim_id: c_HeicAJsHbqMVLGcaL3Em7U
          source_id: s_tURRaVJVMzE9Vkx2PmUNyE
          stance: supports
          locator: CBDB:38990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tURRaVJVMzE9Vkx2PmUNyE
            source_type: api_record
            title: 中国历代人物传记资料库：王志叔（CBDB 38990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38990&o=json
            external_identifier: CBDB:38990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5TWYrka9uHXgt1YX44Zg4Q
        subject_person_id: p_ME9qH9btttK3rra3Adn7d5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志叔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AZ5qTYMtrtHVLEvpDC59oW
          claim_id: c_5TWYrka9uHXgt1YX44Zg4Q
          source_id: s_tURRaVJVMzE9Vkx2PmUNyE
          stance: supports
          locator: CBDB:38990
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 金
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
        id: c_aNYffmfwCJfpWwCWa9xXnv
        subject_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ME9qH9btttK3rra3Adn7d5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-hEKm2_cM9QU5ADyDAZ8XB
          claim_id: c_aNYffmfwCJfpWwCWa9xXnv
          source_id: s_-VTadVqTh6g8O2g0KjWTzg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 12053 王遂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-VTadVqTh6g8O2g0KjWTzg
            source_type: api_record
            title: 中国历代人物传记资料库：王志叔（CBDB 38990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38990&o=json
            external_identifier: CBDB:38990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DCTkDfQk8qHYiFjuEH45Mr
        status: active
        display_name: 王遂
        merged_into_person_id: null
---

# 王志叔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志叔，金人物。籍贯金壇，曾任散騎常侍。（中国历代人物传记资料库 CBDB 38990） | accepted |
| name.primary | 王志叔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_DCTkDfQk8qHYiFjuEH45Mr | 王遂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志叔（CBDB 38990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38990&o=json)
