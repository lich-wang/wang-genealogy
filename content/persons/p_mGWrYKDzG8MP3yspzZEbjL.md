---
schema: wang-person/v1
id: p_mGWrYKDzG8MP3yspzZEbjL
status: active
merged_into: null
display_name: 王湘嬃
cbdb_id: 121021
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EsLqC24yHiis1ciNDpqkRF
        subject_person_id: p_mGWrYKDzG8MP3yspzZEbjL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘嬃，史料所见人物。本项目依据《中国历代人物传记资料库：王湘嬃（CBDB 121021）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_t7BKw41SU-15iTTUqEPCBD
          claim_id: c_EsLqC24yHiis1ciNDpqkRF
          source_id: s_PzSYNY1tjqS6PFR9qVVW6d
          stance: supports
          locator: CBDB:121021
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PzSYNY1tjqS6PFR9qVVW6d
            source_type: api_record
            title: 中国历代人物传记资料库：王湘嬃（CBDB 121021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121021&o=json
            external_identifier: CBDB:121021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ThcmAv2hryzivyqMfBKHM
        subject_person_id: p_mGWrYKDzG8MP3yspzZEbjL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘嬃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sSN8SgNZMMjBWbiZvW8t9R
          claim_id: c_8ThcmAv2hryzivyqMfBKHM
          source_id: s_PzSYNY1tjqS6PFR9qVVW6d
          stance: supports
          locator: CBDB:121021
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VK-9vqWd2Fjeg9oxDYmsvG
        subject_person_id: p_aNsr7zpTw5pr86NiEYQufP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mGWrYKDzG8MP3yspzZEbjL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sGYKxB92cMEGTzN59EI_PL
          claim_id: c_VK-9vqWd2Fjeg9oxDYmsvG
          source_id: s_PzSYNY1tjqS6PFR9qVVW6d
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4002, HuWenKai #241：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_PzSYNY1tjqS6PFR9qVVW6d
            source_type: api_record
            title: 中国历代人物传记资料库：王湘嬃（CBDB 121021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121021&o=json
            external_identifier: CBDB:121021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_aNsr7zpTw5pr86NiEYQufP
        status: active
        display_name: 王果
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_RV7ScOypacU_LIleE0DfIM
        subject_person_id: p_mGWrYKDzG8MP3yspzZEbjL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NbcyYvuaXAZPeebLbtb4m9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IAzaN7HatlOlMCzxmU0Qpb
          claim_id: c_RV7ScOypacU_LIleE0DfIM
          source_id: s_PzSYNY1tjqS6PFR9qVVW6d
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4002, HuWenKai #241：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_NbcyYvuaXAZPeebLbtb4m9
        status: active
        display_name: 林模
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王湘嬃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王湘嬃，史料所见人物。本项目依据《中国历代人物传记资料库：王湘嬃（CBDB 121021）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王湘嬃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aNsr7zpTw5pr86NiEYQufP | 王果 | accepted |
| spouses | p_NbcyYvuaXAZPeebLbtb4m9 | 林模 | accepted |

## 外部来源

- [中国历代人物传记资料库：王湘嬃（CBDB 121021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121021&o=json)
