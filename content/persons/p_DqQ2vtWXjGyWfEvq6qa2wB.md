---
schema: wang-person/v1
id: p_DqQ2vtWXjGyWfEvq6qa2wB
status: active
merged_into: null
display_name: 王詔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hyVgz9TkoRtDjYYKHf2y7D
        subject_person_id: p_DqQ2vtWXjGyWfEvq6qa2wB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZUJXkoB8jWwaqE27SfwMvz
          claim_id: c_hyVgz9TkoRtDjYYKHf2y7D
          source_id: s_6U6GF9yBuKbJ1xDhguwF91
          stance: supports
          locator: CBDB:232016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232016）
          source: &a1
            id: s_6U6GF9yBuKbJ1xDhguwF91
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 232016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232016&o=json
            external_identifier: CBDB:232016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PX7p2hTP1sFcR1CB95xE8L
        subject_person_id: p_DqQ2vtWXjGyWfEvq6qa2wB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔，史料所见人物。本项目依据《中国历代人物传记资料库：王詔（CBDB 232016）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WplnavRhrDRvchgj94xnrj
          claim_id: c_PX7p2hTP1sFcR1CB95xE8L
          source_id: s_6U6GF9yBuKbJ1xDhguwF91
          stance: supports
          locator: CBDB:232016
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
  ancestors: []
  descendants:
    - claim:
        id: c_qhjhzUjm_CulphOEQuzWvy
        subject_person_id: p_DqQ2vtWXjGyWfEvq6qa2wB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_iRFm6e1TaQGqodt29a3YWr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BeuSyT-LE5mOgbFXOxaVE6
          claim_id: c_qhjhzUjm_CulphOEQuzWvy
          source_id: s_6U6GF9yBuKbJ1xDhguwF91
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iRFm6e1TaQGqodt29a3YWr
        status: active
        display_name: 王廷錫
        merged_into_person_id: null
  other: []
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| bio.summary | 王詔，史料所见人物。本项目依据《中国历代人物传记资料库：王詔（CBDB 232016）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_iRFm6e1TaQGqodt29a3YWr | 王廷錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詔（CBDB 232016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232016&o=json)
