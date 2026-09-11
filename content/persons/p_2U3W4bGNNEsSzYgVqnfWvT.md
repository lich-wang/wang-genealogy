---
schema: wang-person/v1
id: p_2U3W4bGNNEsSzYgVqnfWvT
status: active
merged_into: null
display_name: 王仲鑰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d66QB8PCz8btgRLsJLT5LS
        subject_person_id: p_2U3W4bGNNEsSzYgVqnfWvT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲鑰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wn9RPhYDZsZAwJaoQcPqV8
          claim_id: c_d66QB8PCz8btgRLsJLT5LS
          source_id: s_4bGZS4g67Mb6mCJPoBzma7
          stance: supports
          locator: CBDB:528778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（528778）
          source: &a1
            id: s_4bGZS4g67Mb6mCJPoBzma7
            source_type: api_record
            title: 中国历代人物传记资料库：王仲鑰（CBDB 528778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528778&o=json
            external_identifier: CBDB:528778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a2BsjdFyoy7KWzEJr6gs1p
        subject_person_id: p_2U3W4bGNNEsSzYgVqnfWvT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲鑰，史料所见人物。本项目依据《中国历代人物传记资料库：王仲鑰（CBDB 528778）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lCv1cx3hP-7oMsBruQ16XB
          claim_id: c_a2BsjdFyoy7KWzEJr6gs1p
          source_id: s_4bGZS4g67Mb6mCJPoBzma7
          stance: supports
          locator: CBDB:528778
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_vo5l_2EcjJAhReCy8ZUEoh
        subject_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2U3W4bGNNEsSzYgVqnfWvT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vhg_AdBUYa5IC2wO1PI0--
          claim_id: c_vo5l_2EcjJAhReCy8ZUEoh
          source_id: s_4bGZS4g67Mb6mCJPoBzma7
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14615：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SHuk9Lfw4VDtH93mbkHP9q
        status: active
        display_name: 王遴
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王仲鑰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲鑰 | accepted |
| bio.summary | 王仲鑰，史料所见人物。本项目依据《中国历代人物传记资料库：王仲鑰（CBDB 528778）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_SHuk9Lfw4VDtH93mbkHP9q | 王遴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲鑰（CBDB 528778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528778&o=json)
