---
schema: wang-person/v1
id: p_FoG33WZRA2VaDZVLo9UXti
status: active
merged_into: null
display_name: 王仙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HmL73aAPzAZJfwC9zQGhMb
        subject_person_id: p_FoG33WZRA2VaDZVLo9UXti
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bH1Sr7GvrfdQM8ncN9izvP
          claim_id: c_HmL73aAPzAZJfwC9zQGhMb
          source_id: s_89BhHxXG23hFEMuMB8PUmh
          stance: supports
          locator: CBDB:169042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169042）
          source: &a1
            id: s_89BhHxXG23hFEMuMB8PUmh
            source_type: api_record
            title: 中国历代人物传记资料库：王仙（CBDB 169042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169042&o=json
            external_identifier: CBDB:169042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7i6H14t2sgjAjsBBHePFr5
        subject_person_id: p_FoG33WZRA2VaDZVLo9UXti
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙，史料所见人物。本项目依据《中国历代人物传记资料库：王仙（CBDB 169042）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0Y2bBFGVBgUIyu3hVKDO65
          claim_id: c_7i6H14t2sgjAjsBBHePFr5
          source_id: s_89BhHxXG23hFEMuMB8PUmh
          stance: supports
          locator: CBDB:169042
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_IJx6xU88-OqLpBe5UaurDl
        subject_person_id: p_FoG33WZRA2VaDZVLo9UXti
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s5yHq8SbS8AfVgHLyJNWkN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9nb8OrADtlpQdnBhH47jaR
          claim_id: c_IJx6xU88-OqLpBe5UaurDl
          source_id: s_89BhHxXG23hFEMuMB8PUmh
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s5yHq8SbS8AfVgHLyJNWkN
        status: active
        display_name: 王羔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_MwlCcEyycPjBHdMjofxdPt
        subject_person_id: p_FoG33WZRA2VaDZVLo9UXti
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DPUzPRH4C7z282uoi5MQ6a
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ogG_hlfjDuHzD8AxRLU0tk
          claim_id: c_MwlCcEyycPjBHdMjofxdPt
          source_id: s_89BhHxXG23hFEMuMB8PUmh
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaicheng13：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DPUzPRH4C7z282uoi5MQ6a
        status: active
        display_name: 王志用
        merged_into_person_id: null
  other: []
---

# 王仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仙 | accepted |
| bio.summary | 王仙，史料所见人物。本项目依据《中国历代人物传记资料库：王仙（CBDB 169042）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_s5yHq8SbS8AfVgHLyJNWkN | 王羔 | accepted |
| descendants | p_DPUzPRH4C7z282uoi5MQ6a | 王志用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仙（CBDB 169042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169042&o=json)
