---
schema: wang-person/v1
id: p_ypLYSjdE5JVFCds8U7Cu2R
status: active
merged_into: null
display_name: 王意娘子
cbdb_id: 158869
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CNqiGRj31JmCehgiaq7JLX
        subject_person_id: p_ypLYSjdE5JVFCds8U7Cu2R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王意娘子，史料所见人物。本项目依据《中国历代人物传记资料库：王意娘子（CBDB 158869）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_pUefezGoIgLicspKXbXry3
          claim_id: c_CNqiGRj31JmCehgiaq7JLX
          source_id: s_GSD4Xsb56SGCRGJrHuzcWV
          stance: supports
          locator: CBDB:158869
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_GSD4Xsb56SGCRGJrHuzcWV
            source_type: api_record
            title: 中国历代人物传记资料库：王意娘子（CBDB 158869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158869&o=json
            external_identifier: CBDB:158869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AU7fZST9Ena5r9VJQMLmGY
        subject_person_id: p_ypLYSjdE5JVFCds8U7Cu2R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王意娘子
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P5APwGKzxfWxU89QNPoaWJ
          claim_id: c_AU7fZST9Ena5r9VJQMLmGY
          source_id: s_GSD4Xsb56SGCRGJrHuzcWV
          stance: supports
          locator: CBDB:158869
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J2a5kXGDe7N-OZkBk3hKL0
        subject_person_id: p_JbrJcaN3MdnZ95DCfhnHwS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ypLYSjdE5JVFCds8U7Cu2R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bx-LFIVG4PfoKQnF3xPCk3
          claim_id: c_J2a5kXGDe7N-OZkBk3hKL0
          source_id: s_GSD4Xsb56SGCRGJrHuzcWV
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 56：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GSD4Xsb56SGCRGJrHuzcWV
            source_type: api_record
            title: 中国历代人物传记资料库：王意娘子（CBDB 158869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158869&o=json
            external_identifier: CBDB:158869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JbrJcaN3MdnZ95DCfhnHwS
        status: active
        display_name: 王惲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王意娘子

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王意娘子，史料所见人物。本项目依据《中国历代人物传记资料库：王意娘子（CBDB 158869）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王意娘子 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JbrJcaN3MdnZ95DCfhnHwS | 王惲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王意娘子（CBDB 158869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158869&o=json)
