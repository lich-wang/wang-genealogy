---
schema: wang-person/v1
id: p_1uvJqysBoq41UhfvmKzjPi
status: active
merged_into: null
display_name: 王質
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bUwVnogtRRN7eyrrm8MkjH
        subject_person_id: p_1uvJqysBoq41UhfvmKzjPi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fg1pfFPtZxKH8TsHVjPoFp
          claim_id: c_bUwVnogtRRN7eyrrm8MkjH
          source_id: s_K8gZhSoUsTLfHBzfqix29Z
          stance: supports
          locator: CBDB:561697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561697）
          source: &a1
            id: s_K8gZhSoUsTLfHBzfqix29Z
            source_type: api_record
            title: 中国历代人物传记资料库：王質（CBDB 561697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561697&o=json
            external_identifier: CBDB:561697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2g6EMz2cNcXEywGgvkHPhN
        subject_person_id: p_1uvJqysBoq41UhfvmKzjPi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L4czQHoKatSwjSMu31e1vD
          claim_id: c_2g6EMz2cNcXEywGgvkHPhN
          source_id: s_K8gZhSoUsTLfHBzfqix29Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Pw3ti-ZVy0Yvl4UofudRpK
        subject_person_id: p_1uvJqysBoq41UhfvmKzjPi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K15VUgSog5DMrxM8PwEUZL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Hx2y9-IQUTYl18GrkzH-M
          claim_id: c_Pw3ti-ZVy0Yvl4UofudRpK
          source_id: s_K8gZhSoUsTLfHBzfqix29Z
          stance: supports
          locator: 紹興府志:八十卷，Igid=316438：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_K15VUgSog5DMrxM8PwEUZL
        status: active
        display_name: 王嗣忠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王質 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_K15VUgSog5DMrxM8PwEUZL | 王嗣忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王質（CBDB 561697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561697&o=json)
