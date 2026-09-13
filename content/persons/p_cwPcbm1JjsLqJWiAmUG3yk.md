---
schema: wang-person/v1
id: p_cwPcbm1JjsLqJWiAmUG3yk
status: active
merged_into: null
display_name: 王靜巖
cbdb_id: 55857
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jhea6VBw8oEmnYZHhjz5sz
        subject_person_id: p_cwPcbm1JjsLqJWiAmUG3yk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜巖，史料所见人物。本项目依据《中国历代人物传记资料库：王靜巖（CBDB 55857）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_AkmXiAIDzhtczmoR8wf9ZD
          claim_id: c_jhea6VBw8oEmnYZHhjz5sz
          source_id: s_r23mVX7CEoD1Kg3m1rF7D8
          stance: supports
          locator: CBDB:55857
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_r23mVX7CEoD1Kg3m1rF7D8
            source_type: api_record
            title: 中国历代人物传记资料库：王靜巖（CBDB 55857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55857&o=json
            external_identifier: CBDB:55857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KkAyrx7Lxoi9EpwLY1aQuv
        subject_person_id: p_cwPcbm1JjsLqJWiAmUG3yk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜巖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_imVRMco11DPQXyBd9H8dE1
          claim_id: c_KkAyrx7Lxoi9EpwLY1aQuv
          source_id: s_r23mVX7CEoD1Kg3m1rF7D8
          stance: supports
          locator: CBDB:55857
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 清
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
        id: c_D0Dw5D01dsAp73owLDy7nW
        subject_person_id: p_cwPcbm1JjsLqJWiAmUG3yk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7zQ5KR5b6AJq6332EYyGiv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wn4ftTcpG70f4tAJloU_sE
          claim_id: c_D0Dw5D01dsAp73owLDy7nW
          source_id: s_r4sduCcxs7a0uO8LhnJsdg
          stance: supports
          locator: CBDB 双向互证（妻子 楊克順）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r4sduCcxs7a0uO8LhnJsdg
            source_type: api_record
            title: 中国历代人物传记资料库：楊克順（CBDB 55855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55855&o=json
            external_identifier: CBDB:55855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7zQ5KR5b6AJq6332EYyGiv
        status: active
        display_name: 楊克順
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王靜巖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王靜巖，史料所见人物。本项目依据《中国历代人物传记资料库：王靜巖（CBDB 55857）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王靜巖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7zQ5KR5b6AJq6332EYyGiv | 楊克順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靜巖（CBDB 55857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55857&o=json)
- [中国历代人物传记资料库：楊克順（CBDB 55855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55855&o=json)
