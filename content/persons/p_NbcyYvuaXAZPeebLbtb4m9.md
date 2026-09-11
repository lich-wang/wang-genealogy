---
schema: wang-person/v1
id: p_NbcyYvuaXAZPeebLbtb4m9
status: active
merged_into: null
display_name: 林模
revision: 2
cbdb_id: 121034
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZzFIWAZRdc8rOpyDYAYVt7
        subject_person_id: p_NbcyYvuaXAZPeebLbtb4m9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林模，史料所见人物。本项目依据《中国历代人物传记资料库：林模（CBDB 121034）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eaLnu6EtyIdCr86I-9TVy9
          claim_id: c_ZzFIWAZRdc8rOpyDYAYVt7
          source_id: s_mzOBGhCx80WS3xB_39n0np
          stance: supports
          locator: CBDB:121034
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mzOBGhCx80WS3xB_39n0np
            source_type: api_record
            title: 中国历代人物传记资料库：林模（CBDB 121034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121034&o=json
            external_identifier: CBDB:121034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e3aPa7P2M-KImu3OUrQvc4
        subject_person_id: p_NbcyYvuaXAZPeebLbtb4m9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林模
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EI4fBwjFdonKzXlb7itvRF
          claim_id: c_e3aPa7P2M-KImu3OUrQvc4
          source_id: s_mzOBGhCx80WS3xB_39n0np
          stance: supports
          locator: CBDB:121034
          quotation: null
          interpretation_note: CBDB 明确记录的王湘娥配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NJcnJmd1SJvctztNQ7aZf8
        subject_person_id: p_jHw1ZP6CKrMSaDwjpFt5do
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
        - id: cs_9SBGyYrb_hrIFBY83n_2jT
          claim_id: c_NJcnJmd1SJvctztNQ7aZf8
          source_id: s_mzOBGhCx80WS3xB_39n0np
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4002, HuWenKai #241：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jHw1ZP6CKrMSaDwjpFt5do
        status: active
        display_name: 王湘娥
        merged_into_person_id: null
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
          source:
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
        id: p_mGWrYKDzG8MP3yspzZEbjL
        status: active
        display_name: 王湘嬃
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 林模

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 林模，史料所见人物。本项目依据《中国历代人物传记资料库：林模（CBDB 121034）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 林模 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jHw1ZP6CKrMSaDwjpFt5do | 王湘娥 | accepted |
| spouses | p_mGWrYKDzG8MP3yspzZEbjL | 王湘嬃 | accepted |

## 外部来源

- [中国历代人物传记资料库：林模（CBDB 121034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121034&o=json)
- [中国历代人物传记资料库：王湘嬃（CBDB 121021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121021&o=json)
