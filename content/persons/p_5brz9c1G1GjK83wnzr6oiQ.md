---
schema: wang-person/v1
id: p_5brz9c1G1GjK83wnzr6oiQ
status: active
merged_into: null
display_name: 王敷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cCw7bjXPtAjCrMHMM9dL1f
        subject_person_id: p_5brz9c1G1GjK83wnzr6oiQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LfGP145tb1uF2Z4nCQe4qF
          claim_id: c_cCw7bjXPtAjCrMHMM9dL1f
          source_id: s_eWYJkm3aY98rny7Xxcigw6
          stance: supports
          locator: CBDB:232608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232608）
          source: &a1
            id: s_eWYJkm3aY98rny7Xxcigw6
            source_type: api_record
            title: 中国历代人物传记资料库：王敷（CBDB 232608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232608&o=json
            external_identifier: CBDB:232608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kBJeT8XvTfF2QatB3V6AzX
        subject_person_id: p_5brz9c1G1GjK83wnzr6oiQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敷，史料所见人物。本项目依据《中国历代人物传记资料库：王敷（CBDB 232608）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A1QtcG7P3p23MbOgSSP5Pi
          claim_id: c_kBJeT8XvTfF2QatB3V6AzX
          source_id: s_eWYJkm3aY98rny7Xxcigw6
          stance: supports
          locator: CBDB:232608
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
        id: c_rvmrAiUkDAjS1wzZddEwI5
        subject_person_id: p_5brz9c1G1GjK83wnzr6oiQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VFz621JQvzkevtvTagNpXa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P0fGRE1CERGuW4fA5GUhhX
          claim_id: c_rvmrAiUkDAjS1wzZddEwI5
          source_id: s_eWYJkm3aY98rny7Xxcigw6
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第二甲第十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VFz621JQvzkevtvTagNpXa
        status: active
        display_name: 王編
        merged_into_person_id: null
  other: []
---

# 王敷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敷 | accepted |
| bio.summary | 王敷，史料所见人物。本项目依据《中国历代人物传记资料库：王敷（CBDB 232608）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_VFz621JQvzkevtvTagNpXa | 王編 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敷（CBDB 232608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232608&o=json)
