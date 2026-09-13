---
schema: wang-person/v1
id: p_yUp8hcQibPozQZh5EKEyeF
status: active
merged_into: null
display_name: 王元煒
cbdb_id: 118049
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qwmo5hTL9FNH7AGuD6ARnD
        subject_person_id: p_yUp8hcQibPozQZh5EKEyeF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元煒，史料所见人物。本项目依据《中国历代人物传记资料库：王元煒（CBDB 118049）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_fNi0fQ7P7BmLI3hTkUU-wg
          claim_id: c_Qwmo5hTL9FNH7AGuD6ARnD
          source_id: s_2GANtNuiAT3JFics5TdJt5
          stance: supports
          locator: CBDB:118049
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_2GANtNuiAT3JFics5TdJt5
            source_type: api_record
            title: 中国历代人物传记资料库：王元煒（CBDB 118049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118049&o=json
            external_identifier: CBDB:118049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LVFPWQ6FwLRrjAkaToZCpz
        subject_person_id: p_yUp8hcQibPozQZh5EKEyeF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bsRkkna7N2F6UyB5cJ4V2F
          claim_id: c_LVFPWQ6FwLRrjAkaToZCpz
          source_id: s_2GANtNuiAT3JFics5TdJt5
          stance: supports
          locator: CBDB:118049
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 清
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
        id: c_6LI_BG1aRg3XVoASTDp4hi
        subject_person_id: p_yUp8hcQibPozQZh5EKEyeF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4qFsnAGdR8eGmHBHoa22UG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uL7J36Zq4Z0jdzXps0Fjle
          claim_id: c_6LI_BG1aRg3XVoASTDp4hi
          source_id: s_jZeVLb9gIHcDTU4OFM3NpD
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1639, HuWenKai #489：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jZeVLb9gIHcDTU4OFM3NpD
            source_type: api_record
            title: 中国历代人物传记资料库：袁希謝（CBDB 118048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118048&o=json
            external_identifier: CBDB:118048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4qFsnAGdR8eGmHBHoa22UG
        status: active
        display_name: 袁希謝
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王元煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元煒，史料所见人物。本项目依据《中国历代人物传记资料库：王元煒（CBDB 118049）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王元煒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4qFsnAGdR8eGmHBHoa22UG | 袁希謝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元煒（CBDB 118049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118049&o=json)
- [中国历代人物传记资料库：袁希謝（CBDB 118048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118048&o=json)
