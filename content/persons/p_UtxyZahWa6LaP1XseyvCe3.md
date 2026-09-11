---
schema: wang-person/v1
id: p_UtxyZahWa6LaP1XseyvCe3
status: active
merged_into: null
display_name: 王得象
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G2MaGg9anDEYkvuYnSqTR5
        subject_person_id: p_UtxyZahWa6LaP1XseyvCe3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得象
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tdKy8CUhanVKnFuxGt7SUj
          claim_id: c_G2MaGg9anDEYkvuYnSqTR5
          source_id: s_P53btTDjbkVw2QTjRL7tZz
          stance: supports
          locator: CBDB:695613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695613）
          source: &a1
            id: s_P53btTDjbkVw2QTjRL7tZz
            source_type: api_record
            title: 中国历代人物传记资料库：王得象（CBDB 695613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695613&o=json
            external_identifier: CBDB:695613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CaYuzidfkkNgqXmkvUT2Se
        subject_person_id: p_UtxyZahWa6LaP1XseyvCe3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得象，史料所见人物。本项目依据《中国历代人物传记资料库：王得象（CBDB 695613）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oEx2iOjVzS35muh9RPvOJZ
          claim_id: c_CaYuzidfkkNgqXmkvUT2Se
          source_id: s_P53btTDjbkVw2QTjRL7tZz
          stance: supports
          locator: CBDB:695613
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
        id: c_dFG9SChG7z0VZK2dB8FpI4
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UtxyZahWa6LaP1XseyvCe3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Q95CmbjkL9LSnAVYm-fi-
          claim_id: c_dFG9SChG7z0VZK2dB8FpI4
          source_id: s_P53btTDjbkVw2QTjRL7tZz
          stance: supports
          locator: 鄖溪集，右侍禁贈工部侍郎王公墓志銘：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tmq6Wnq1CjinFj62NTxvnd
        status: active
        display_name: 王师颜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王得象

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得象 | accepted |
| bio.summary | 王得象，史料所见人物。本项目依据《中国历代人物传记资料库：王得象（CBDB 695613）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_tmq6Wnq1CjinFj62NTxvnd | 王师颜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得象（CBDB 695613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695613&o=json)
