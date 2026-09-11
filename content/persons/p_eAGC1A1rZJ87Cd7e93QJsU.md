---
schema: wang-person/v1
id: p_eAGC1A1rZJ87Cd7e93QJsU
status: active
merged_into: null
display_name: 王大義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q1btwv6oA8RiGfnrYyQ23N
        subject_person_id: p_eAGC1A1rZJ87Cd7e93QJsU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7HTNvMBp4Ha6aYGPJdTzVm
          claim_id: c_Q1btwv6oA8RiGfnrYyQ23N
          source_id: s_APRgwvUc96iFixGqw6nCNL
          stance: supports
          locator: CBDB:147586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147586）
          source: &a1
            id: s_APRgwvUc96iFixGqw6nCNL
            source_type: api_record
            title: 中国历代人物传记资料库：王大義（CBDB 147586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147586&o=json
            external_identifier: CBDB:147586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K5maCLRUL18QdsbeQ3NFH6
        subject_person_id: p_eAGC1A1rZJ87Cd7e93QJsU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大義，史料所见人物。本项目依据《中国历代人物传记资料库：王大義（CBDB 147586）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FhnzrkSp7uXT9Tz1HhEiya
          claim_id: c_K5maCLRUL18QdsbeQ3NFH6
          source_id: s_APRgwvUc96iFixGqw6nCNL
          stance: supports
          locator: CBDB:147586
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gLiAliAo03o7iEisQxndfL
        subject_person_id: p_uXFJE4D57JtN6isVFHL2bP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eAGC1A1rZJ87Cd7e93QJsU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JIyXonxj3aDNecx9MXX71V
          claim_id: c_gLiAliAo03o7iEisQxndfL
          source_id: s_APRgwvUc96iFixGqw6nCNL
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 123：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uXFJE4D57JtN6isVFHL2bP
        status: active
        display_name: 王進
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大義 | accepted |
| bio.summary | 王大義，史料所见人物。本项目依据《中国历代人物传记资料库：王大義（CBDB 147586）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uXFJE4D57JtN6isVFHL2bP | 王進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大義（CBDB 147586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147586&o=json)
