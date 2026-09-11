---
schema: wang-person/v1
id: p_NqHgsnsYevf1TErwyrtucr
status: active
merged_into: null
display_name: 王履道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cez6YJMLDmqbDwTeb4364o
        subject_person_id: p_NqHgsnsYevf1TErwyrtucr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jXvHVs7n6DMoLJPHVKMQhh
          claim_id: c_cez6YJMLDmqbDwTeb4364o
          source_id: s_A2JPHMmNy428bpkC9eE6Rt
          stance: supports
          locator: CBDB:152947
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152947）
          source: &a1
            id: s_A2JPHMmNy428bpkC9eE6Rt
            source_type: api_record
            title: 中国历代人物传记资料库：王履道（CBDB 152947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152947&o=json
            external_identifier: CBDB:152947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RDGrNH7M9FHaUYqMHcp6pW
        subject_person_id: p_NqHgsnsYevf1TErwyrtucr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履道，史料所见人物。本项目依据《中国历代人物传记资料库：王履道（CBDB 152947）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZDlDjztFPBFeY01BioE2MM
          claim_id: c_RDGrNH7M9FHaUYqMHcp6pW
          source_id: s_A2JPHMmNy428bpkC9eE6Rt
          stance: supports
          locator: CBDB:152947
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7_r_BR38OJow0Ma3yBdDqk
        subject_person_id: p_Bopp5kWFJqDkzpcYhwiZ4z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NqHgsnsYevf1TErwyrtucr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NaXBiAvnvLiAYxxyeQ-HVL
          claim_id: c_7_r_BR38OJow0Ma3yBdDqk
          source_id: s_A2JPHMmNy428bpkC9eE6Rt
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 473：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Bopp5kWFJqDkzpcYhwiZ4z
        status: active
        display_name: 王忌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王履道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履道 | accepted |
| bio.summary | 王履道，史料所见人物。本项目依据《中国历代人物传记资料库：王履道（CBDB 152947）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Bopp5kWFJqDkzpcYhwiZ4z | 王忌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王履道（CBDB 152947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152947&o=json)
