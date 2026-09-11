---
schema: wang-person/v1
id: p_9BthKoJ2tXgHihN1qNXn5B
status: active
merged_into: null
display_name: 王盛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A6o45qkXpZy8FYGkMwYDbx
        subject_person_id: p_9BthKoJ2tXgHihN1qNXn5B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z4LjUmCyFMAY7BubMuJnZK
          claim_id: c_A6o45qkXpZy8FYGkMwYDbx
          source_id: s_7Q7RHxEPfJrSMt8XURZiJ5
          stance: supports
          locator: CBDB:247202
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247202）
          source: &a1
            id: s_7Q7RHxEPfJrSMt8XURZiJ5
            source_type: api_record
            title: 中国历代人物传记资料库：王盛（CBDB 247202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247202&o=json
            external_identifier: CBDB:247202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kaAwssfBaUxA9P1C4Z1p3L
        subject_person_id: p_9BthKoJ2tXgHihN1qNXn5B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛，明人物。成化八年進士，籍贯安化，曾任巡檢。（中国历代人物传记资料库 CBDB 247202）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VSjteZZJnz0DA6gqwvXehe
          claim_id: c_kaAwssfBaUxA9P1C4Z1p3L
          source_id: s_7Q7RHxEPfJrSMt8XURZiJ5
          stance: supports
          locator: CBDB:247202
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WJCJIidsX6ZepoVuuAKbcN
        subject_person_id: p_9BthKoJ2tXgHihN1qNXn5B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SiRDDsb57pG6VTfrkJRXut
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6UXgjcYaPBylgle14AJL4n
          claim_id: c_WJCJIidsX6ZepoVuuAKbcN
          source_id: s_7Q7RHxEPfJrSMt8XURZiJ5
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SiRDDsb57pG6VTfrkJRXut
        status: active
        display_name: 王紳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王盛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盛 | accepted |
| bio.summary | 王盛，明人物。成化八年進士，籍贯安化，曾任巡檢。（中国历代人物传记资料库 CBDB 247202） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_SiRDDsb57pG6VTfrkJRXut | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王盛（CBDB 247202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247202&o=json)
