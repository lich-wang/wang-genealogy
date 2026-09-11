---
schema: wang-person/v1
id: p_2f9Px3AmwTjD5MzhZdGLDE
status: active
merged_into: null
display_name: 王日新
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dg44QfoVfKgQ2uMq2jqoQm
        subject_person_id: p_2f9Px3AmwTjD5MzhZdGLDE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DpDw1NCHPaYMNe1NRFeiL9
          claim_id: c_Dg44QfoVfKgQ2uMq2jqoQm
          source_id: s_Dd1EszA4xnUfyF9YKR1pe2
          stance: supports
          locator: CBDB:149929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149929）
          source: &a1
            id: s_Dd1EszA4xnUfyF9YKR1pe2
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 149929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149929&o=json
            external_identifier: CBDB:149929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_seDdDj5wiSsuhQQ7oPTuke
        subject_person_id: p_2f9Px3AmwTjD5MzhZdGLDE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新，史料所见人物。本项目依据《中国历代人物传记资料库：王日新（CBDB 149929）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KQWx_c7G5uJNmJVvN4dLFq
          claim_id: c_seDdDj5wiSsuhQQ7oPTuke
          source_id: s_Dd1EszA4xnUfyF9YKR1pe2
          stance: supports
          locator: CBDB:149929
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
  ancestors:
    - claim:
        id: c_6C-DcRr5YlyWMTdMuv9ZOO
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2f9Px3AmwTjD5MzhZdGLDE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8B2O3nXOoBD6yvB8qTllgq
          claim_id: c_6C-DcRr5YlyWMTdMuv9ZOO
          source_id: s_Dd1EszA4xnUfyF9YKR1pe2
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wansuitongtian 18：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uPsdzDMGQe5JCzP3cXbxt2
        status: active
        display_name: 王智本
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王日新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日新 | accepted |
| bio.summary | 王日新，史料所见人物。本项目依据《中国历代人物传记资料库：王日新（CBDB 149929）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_uPsdzDMGQe5JCzP3cXbxt2 | 王智本 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日新（CBDB 149929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149929&o=json)
