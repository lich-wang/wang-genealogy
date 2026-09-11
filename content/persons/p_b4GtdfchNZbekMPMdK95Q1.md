---
schema: wang-person/v1
id: p_b4GtdfchNZbekMPMdK95Q1
status: active
merged_into: null
display_name: 王元俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CGvbZnwQavHeiDK3kzps5P
        subject_person_id: p_b4GtdfchNZbekMPMdK95Q1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QprGQE9juoWBWGZrDiotgo
          claim_id: c_CGvbZnwQavHeiDK3kzps5P
          source_id: s_2WnXHwASUY3Sn261y8HCfE
          stance: supports
          locator: CBDB:164876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（164876）
          source: &a1
            id: s_2WnXHwASUY3Sn261y8HCfE
            source_type: api_record
            title: 中国历代人物传记资料库：王元俊（CBDB 164876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164876&o=json
            external_identifier: CBDB:164876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RAmbqAVVSvuFAvwVaV7pBT
        subject_person_id: p_b4GtdfchNZbekMPMdK95Q1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元俊，史料所见人物。本项目依据《中国历代人物传记资料库：王元俊（CBDB 164876）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VCLwAWXaI6jvrkI_xmYc-O
          claim_id: c_RAmbqAVVSvuFAvwVaV7pBT
          source_id: s_2WnXHwASUY3Sn261y8HCfE
          stance: supports
          locator: CBDB:164876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i06crNmtNSidz27ZwYUdCQ
        subject_person_id: p_bupKiVr68PqXVERhZYa1QZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b4GtdfchNZbekMPMdK95Q1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GXNfsRbKjOF2P7GNmKCSbd
          claim_id: c_i06crNmtNSidz27ZwYUdCQ
          source_id: s_2WnXHwASUY3Sn261y8HCfE
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao87：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bupKiVr68PqXVERhZYa1QZ
        status: active
        display_name: 王守節
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元俊 | accepted |
| bio.summary | 王元俊，史料所见人物。本项目依据《中国历代人物传记资料库：王元俊（CBDB 164876）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bupKiVr68PqXVERhZYa1QZ | 王守節 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元俊（CBDB 164876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164876&o=json)
