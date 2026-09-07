---
schema: wang-person/v1
id: p_2BM82qbWR6RUQ3iPHoiGyM
status: active
merged_into: null
display_name: 王禧
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wWRTaSczMGoXsCGejosHR_
        subject_person_id: p_2BM82qbWR6RUQ3iPHoiGyM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧，史料所见人物。本项目依据《中文维基文库：元史/卷160》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bzKzqZJEzZx_dJpOEDUkiv
          claim_id: c_wWRTaSczMGoXsCGejosHR_
          source_id: s_DH8iKAPuTWhoMFyTTy6qYj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_DH8iKAPuTWhoMFyTTy6qYj
            source_type: book
            title: 中文维基文库：元史/卷160
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E5%85%83%E5%8F%B2%2F%E5%8D%B7160
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ca46pDdcwpMe83TsEkjdpm
        subject_person_id: p_2BM82qbWR6RUQ3iPHoiGyM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AGznwKCBhWLKJQxkiyqJDy
          claim_id: c_Ca46pDdcwpMe83TsEkjdpm
          source_id: s_DH8iKAPuTWhoMFyTTy6qYj
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_e7mFcHwe3244RUn6nsHP1E
        subject_person_id: p_2BM82qbWR6RUQ3iPHoiGyM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BiW9kfevA33s6QgmbMoAEa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8CuuktkAyarh5wdTVYDMKL
          claim_id: c_e7mFcHwe3244RUn6nsHP1E
          source_id: s_DH8iKAPuTWhoMFyTTy6qYj
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父禧，金末入財佐軍興，補進義副尉。
          interpretation_note: null
          source:
            id: s_DH8iKAPuTWhoMFyTTy6qYj
            source_type: book
            title: 中文维基文库：元史/卷160
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E5%85%83%E5%8F%B2%2F%E5%8D%B7160
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person:
        id: p_BiW9kfevA33s6QgmbMoAEa
        status: active
        display_name: 王磐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王禧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王禧，史料所见人物。本项目依据《中文维基文库：元史/卷160》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王禧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BiW9kfevA33s6QgmbMoAEa | 王磐 | accepted |

## 外部来源

- [中文维基文库：元史/卷160](https://zh.wikisource.org/wiki/%E5%85%83%E5%8F%B2%2F%E5%8D%B7160)
