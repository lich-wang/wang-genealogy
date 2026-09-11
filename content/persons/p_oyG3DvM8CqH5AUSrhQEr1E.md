---
schema: wang-person/v1
id: p_oyG3DvM8CqH5AUSrhQEr1E
status: active
merged_into: null
display_name: 王慎言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sx1tmFaLHuKsXoSEM1JeAY
        subject_person_id: p_oyG3DvM8CqH5AUSrhQEr1E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xXZrnnFuF4oBcP6MZpVGLg
          claim_id: c_Sx1tmFaLHuKsXoSEM1JeAY
          source_id: s_YmeKbeM61YAKETbNSdTApg
          stance: supports
          locator: CBDB:163054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（163054）
          source: &a1
            id: s_YmeKbeM61YAKETbNSdTApg
            source_type: api_record
            title: 中国历代人物传记资料库：王慎言（CBDB 163054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163054&o=json
            external_identifier: CBDB:163054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JAEr6YLJrNQKQzsq65JnJJ
        subject_person_id: p_oyG3DvM8CqH5AUSrhQEr1E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎言，史料所见人物。本项目依据《中国历代人物传记资料库：王慎言（CBDB 163054）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wkM_xAIEPQoz1dXoOxX4gI
          claim_id: c_JAEr6YLJrNQKQzsq65JnJJ
          source_id: s_YmeKbeM61YAKETbNSdTApg
          stance: supports
          locator: CBDB:163054
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JKP8qu08Cy5cRcT3RwRN4N
        subject_person_id: p_WCcFvorTFKfjPtd9oWtWEc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oyG3DvM8CqH5AUSrhQEr1E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z9Ziv7xtQeN7ypZgVJJnvM
          claim_id: c_JKP8qu08Cy5cRcT3RwRN4N
          source_id: s_YmeKbeM61YAKETbNSdTApg
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Changshou3：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WCcFvorTFKfjPtd9oWtWEc
        status: active
        display_name: 王感
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慎言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慎言 | accepted |
| bio.summary | 王慎言，史料所见人物。本项目依据《中国历代人物传记资料库：王慎言（CBDB 163054）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WCcFvorTFKfjPtd9oWtWEc | 王感 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慎言（CBDB 163054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163054&o=json)
