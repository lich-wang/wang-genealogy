---
schema: wang-person/v1
id: p_7GKNA3uyknJPNe6oZhNnPz
status: active
merged_into: null
display_name: 王保隆
cbdb_id: 25839
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vkP2Wu4D6D74VMDFGMBKcH
        subject_person_id: p_7GKNA3uyknJPNe6oZhNnPz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保隆，宋人物。籍贯莆田。（中国历代人物传记资料库 CBDB 25839）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_osSf_DT609QUpF7waaYWjq
          claim_id: c_vkP2Wu4D6D74VMDFGMBKcH
          source_id: s_e8Dv8XJs8NfeyHn6p1Wttw
          stance: supports
          locator: CBDB:25839
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_e8Dv8XJs8NfeyHn6p1Wttw
            source_type: api_record
            title: 中国历代人物传记资料库：王保隆（CBDB 25839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25839&o=json
            external_identifier: CBDB:25839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZbFngUcKoGZDZS7f9NNU2n
        subject_person_id: p_7GKNA3uyknJPNe6oZhNnPz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7ywNkC7iDLThdvAacqMjEP
          claim_id: c_ZbFngUcKoGZDZS7f9NNU2n
          source_id: s_e8Dv8XJs8NfeyHn6p1Wttw
          stance: supports
          locator: CBDB:25839
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ry3x9NsSTk5GczDlsiJhVy
        subject_person_id: p_gohk4shQYYHJwX9EN3AvbS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7GKNA3uyknJPNe6oZhNnPz
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bg64bp8duk4SvmPY9633Fc
          claim_id: c_ry3x9NsSTk5GczDlsiJhVy
          source_id: s_ZJ5vmMhE4sU9NXz7iEs8pm
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王保隆 ⇄ 高祖;四世祖 王審邽）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ZJ5vmMhE4sU9NXz7iEs8pm
            source_type: api_record
            title: 中国历代人物传记资料库：王審邽（CBDB 25838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25838&o=json
            external_identifier: CBDB:25838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gohk4shQYYHJwX9EN3AvbS
        status: active
        display_name: 王審邽
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王保隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王保隆，宋人物。籍贯莆田。（中国历代人物传记资料库 CBDB 25839） | accepted |
| name.primary | 王保隆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_gohk4shQYYHJwX9EN3AvbS | 王審邽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保隆（CBDB 25839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25839&o=json)
- [中国历代人物传记资料库：王審邽（CBDB 25838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25838&o=json)
