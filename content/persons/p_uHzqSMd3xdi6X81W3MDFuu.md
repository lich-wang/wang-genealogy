---
schema: wang-person/v1
id: p_uHzqSMd3xdi6X81W3MDFuu
status: active
merged_into: null
display_name: 王昱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c568LyAb84oqcQ2nnXM6bL
        subject_person_id: p_uHzqSMd3xdi6X81W3MDFuu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cDq2RQcRdyMfdrG4NvdQ2K
          claim_id: c_c568LyAb84oqcQ2nnXM6bL
          source_id: s_md2KMc3VRAn1DYS4Gqjnx8
          stance: supports
          locator: CBDB:175828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175828）
          source: &a1
            id: s_md2KMc3VRAn1DYS4Gqjnx8
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 175828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175828&o=json
            external_identifier: CBDB:175828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zuL6kkjNbek2VKnQX2E147
        subject_person_id: p_uHzqSMd3xdi6X81W3MDFuu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 744年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xaEr82uccRC73cYV7K8JQT
          claim_id: c_zuL6kkjNbek2VKnQX2E147
          source_id: s_md2KMc3VRAn1DYS4Gqjnx8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hnDZ3FRVufyNiThQUVeKEg
        subject_person_id: p_uHzqSMd3xdi6X81W3MDFuu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CXhhwGha7WbSrH2spi1NX9
          claim_id: c_hnDZ3FRVufyNiThQUVeKEg
          source_id: s_md2KMc3VRAn1DYS4Gqjnx8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fXm_3X8CgL75aOqweXQIk_
        subject_person_id: p_jMYAaLX224kkaoLQQBC5fY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uHzqSMd3xdi6X81W3MDFuu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ctS7Pr5Z3Hqti1-ObWOmyz
          claim_id: c_fXm_3X8CgL75aOqweXQIk_
          source_id: s_md2KMc3VRAn1DYS4Gqjnx8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jMYAaLX224kkaoLQQBC5fY
        status: active
        display_name: 王溫之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昱 | accepted |
| death.date | 744年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jMYAaLX224kkaoLQQBC5fY | 王溫之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昱（CBDB 175828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175828&o=json)
