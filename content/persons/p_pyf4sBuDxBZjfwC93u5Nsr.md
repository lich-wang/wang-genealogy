---
schema: wang-person/v1
id: p_pyf4sBuDxBZjfwC93u5Nsr
status: active
merged_into: null
display_name: 王明德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3MgdTfHduWc4AAFwgsEWNV
        subject_person_id: p_pyf4sBuDxBZjfwC93u5Nsr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2KAC5NLHdMY2EjGKfBV2he
          claim_id: c_3MgdTfHduWc4AAFwgsEWNV
          source_id: s_hiuGfMjg4Kh9ATFSaABAWk
          stance: supports
          locator: CBDB:154993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154993）
          source: &a1
            id: s_hiuGfMjg4Kh9ATFSaABAWk
            source_type: api_record
            title: 中国历代人物传记资料库：王明德（CBDB 154993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154993&o=json
            external_identifier: CBDB:154993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5BJ2eCvvSixNmYDBFuwQYg
        subject_person_id: p_pyf4sBuDxBZjfwC93u5Nsr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明德，史料所见人物。本项目依据《中国历代人物传记资料库：王明德（CBDB 154993）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7bhTAKHLRU9LJGKlJL8RKy
          claim_id: c_5BJ2eCvvSixNmYDBFuwQYg
          source_id: s_hiuGfMjg4Kh9ATFSaABAWk
          stance: supports
          locator: CBDB:154993
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f-6qU39UVC5DR3h0VOJ1P3
        subject_person_id: p_Ns13EDRf3NQqio4T1cuSE8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pyf4sBuDxBZjfwC93u5Nsr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YcpVH7nHkqL91puP0aB_sK
          claim_id: c_f-6qU39UVC5DR3h0VOJ1P3
          source_id: s_hiuGfMjg4Kh9ATFSaABAWk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 48：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ns13EDRf3NQqio4T1cuSE8
        status: active
        display_name: 王景秀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王明德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明德 | accepted |
| bio.summary | 王明德，史料所见人物。本项目依据《中国历代人物传记资料库：王明德（CBDB 154993）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ns13EDRf3NQqio4T1cuSE8 | 王景秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明德（CBDB 154993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154993&o=json)
