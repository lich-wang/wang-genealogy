---
schema: wang-person/v1
id: p_3EBS8HbhM3rQ4WGjjbGBpH
status: active
merged_into: null
display_name: 王元壽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v2LqvuNGRJWr1zJdgaswJV
        subject_person_id: p_3EBS8HbhM3rQ4WGjjbGBpH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LYQYpGihD8qyA3iPEjaKVu
          claim_id: c_v2LqvuNGRJWr1zJdgaswJV
          source_id: s_FMpSJFdUa7wkaK1F6NJuzY
          stance: supports
          locator: CBDB:514395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（514395）
          source: &a1
            id: s_FMpSJFdUa7wkaK1F6NJuzY
            source_type: api_record
            title: 中国历代人物传记资料库：王元壽（CBDB 514395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514395&o=json
            external_identifier: CBDB:514395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AkxCAHjMAxErvtxqK5QvxS
        subject_person_id: p_3EBS8HbhM3rQ4WGjjbGBpH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元壽，史料所见人物。本项目依据《中国历代人物传记资料库：王元壽（CBDB 514395）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CmQwaG_o1CckHLtudIwsfb
          claim_id: c_AkxCAHjMAxErvtxqK5QvxS
          source_id: s_FMpSJFdUa7wkaK1F6NJuzY
          stance: supports
          locator: CBDB:514395
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RCRcyxqnVRsEwW3594cpJF
        subject_person_id: p_G6PYESGzqirPe5FH9niZ5p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3EBS8HbhM3rQ4WGjjbGBpH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LtWsAQiHvnAE1xwZap8fTK
          claim_id: c_RCRcyxqnVRsEwW3594cpJF
          source_id: s_FMpSJFdUa7wkaK1F6NJuzY
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），400：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G6PYESGzqirPe5FH9niZ5p
        status: active
        display_name: 王紹蘭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元壽 | accepted |
| bio.summary | 王元壽，史料所见人物。本项目依据《中国历代人物传记资料库：王元壽（CBDB 514395）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_G6PYESGzqirPe5FH9niZ5p | 王紹蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元壽（CBDB 514395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514395&o=json)
