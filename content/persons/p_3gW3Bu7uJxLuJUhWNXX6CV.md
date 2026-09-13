---
schema: wang-person/v1
id: p_3gW3Bu7uJxLuJUhWNXX6CV
status: active
merged_into: null
display_name: 王防
cbdb_id: 100236
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g4nQoQrY2NkhrrGEc8Gc9Z
        subject_person_id: p_3gW3Bu7uJxLuJUhWNXX6CV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王防，史料所见人物。本项目依据《中国历代人物传记资料库：王防（CBDB 100236）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_FwWRAMVoPxw0eDvaqrSgH8
          claim_id: c_g4nQoQrY2NkhrrGEc8Gc9Z
          source_id: s_mCo2JGXvG5T76AFjU3DuXG
          stance: supports
          locator: CBDB:100236
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mCo2JGXvG5T76AFjU3DuXG
            source_type: api_record
            title: 中国历代人物传记资料库：王防（CBDB 100236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100236&o=json
            external_identifier: CBDB:100236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AiEcEHxc6eQS3W1iKL3XPW
        subject_person_id: p_3gW3Bu7uJxLuJUhWNXX6CV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王防
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ky8e9JUSkgmGWvxKMvsgok
          claim_id: c_AiEcEHxc6eQS3W1iKL3XPW
          source_id: s_mCo2JGXvG5T76AFjU3DuXG
          stance: supports
          locator: CBDB:100236
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 宋
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
        id: c_7WmIPZKTvigy9y_PGGmPwJ
        subject_person_id: p_3gW3Bu7uJxLuJUhWNXX6CV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cHoJBvqjK4okHUzxSaieT1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ocryq9eFwzUosT2Wo_KgpM
          claim_id: c_7WmIPZKTvigy9y_PGGmPwJ
          source_id: s_NUcbuaau16197lQxj0rFSn
          stance: supports
          locator: 宋人傳記資料索引(電子版)，15720：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NUcbuaau16197lQxj0rFSn
            source_type: api_record
            title: 中国历代人物传记资料库：黃淑（CBDB 48605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=48605&o=json
            external_identifier: CBDB:48605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cHoJBvqjK4okHUzxSaieT1
        status: active
        display_name: 黃淑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王防

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王防，史料所见人物。本项目依据《中国历代人物传记资料库：王防（CBDB 100236）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王防 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cHoJBvqjK4okHUzxSaieT1 | 黃淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃淑（CBDB 48605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=48605&o=json)
- [中国历代人物传记资料库：王防（CBDB 100236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100236&o=json)
