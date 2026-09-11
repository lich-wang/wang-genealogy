---
schema: wang-person/v1
id: p_UwZvH1aPY49nLSrzpV3j2s
status: active
merged_into: null
display_name: 王多慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8GZ96KNaE2CMAYAdBsb92x
        subject_person_id: p_UwZvH1aPY49nLSrzpV3j2s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王多慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6iVpivLSAK7Z8TKuF9LNpA
          claim_id: c_8GZ96KNaE2CMAYAdBsb92x
          source_id: s_fcD9EMARgp83gynVnaUvgL
          stance: supports
          locator: CBDB:568712
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568712）
          source: &a1
            id: s_fcD9EMARgp83gynVnaUvgL
            source_type: api_record
            title: 中国历代人物传记资料库：王多慶（CBDB 568712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568712&o=json
            external_identifier: CBDB:568712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bJvAYe1cXjpvML2q7ySTxK
        subject_person_id: p_UwZvH1aPY49nLSrzpV3j2s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王多慶，史料所见人物。本项目依据《中国历代人物传记资料库：王多慶（CBDB 568712）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SgP4mezv8G7jcx3FfykdD0
          claim_id: c_bJvAYe1cXjpvML2q7ySTxK
          source_id: s_fcD9EMARgp83gynVnaUvgL
          stance: supports
          locator: CBDB:568712
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
  ancestors: []
  descendants: []
  other: []
---

# 王多慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王多慶 | accepted |
| bio.summary | 王多慶，史料所见人物。本项目依据《中国历代人物传记资料库：王多慶（CBDB 568712）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王多慶（CBDB 568712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568712&o=json)
