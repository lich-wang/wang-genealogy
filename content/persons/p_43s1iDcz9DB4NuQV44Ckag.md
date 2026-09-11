---
schema: wang-person/v1
id: p_43s1iDcz9DB4NuQV44Ckag
status: active
merged_into: null
display_name: 袁淑
revision: 1
cbdb_id: 120572
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X_MKhNsWR0nxQ-Fldym5Hh
        subject_person_id: p_43s1iDcz9DB4NuQV44Ckag
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 袁淑，史料所见人物。本项目依据《中国历代人物传记资料库：袁淑（CBDB 120572）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ppjtq2l-01HQulMKIgN1No
          claim_id: c_X_MKhNsWR0nxQ-Fldym5Hh
          source_id: s_1LbbGT0r64QeQbhtPMZ2J8
          stance: supports
          locator: CBDB:120572
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1LbbGT0r64QeQbhtPMZ2J8
            source_type: api_record
            title: 中国历代人物传记资料库：袁淑（CBDB 120572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120572&o=json
            external_identifier: CBDB:120572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TWdwnFk0MPo7wJzTuEpZIs
        subject_person_id: p_43s1iDcz9DB4NuQV44Ckag
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 袁淑
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BCtUopZGKLNQxzIyPZsc2U
          claim_id: c_TWdwnFk0MPo7wJzTuEpZIs
          source_id: s_1LbbGT0r64QeQbhtPMZ2J8
          stance: supports
          locator: CBDB:120572
          quotation: null
          interpretation_note: CBDB 明确记录的王豫齋配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_imAXbB8cnafHxeBJI95G52
        subject_person_id: p_G87xWTQArnxLSXAGEJ6t3a
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_43s1iDcz9DB4NuQV44Ckag
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NoDdgYscmzteoc2TOoQnKQ
          claim_id: c_imAXbB8cnafHxeBJI95G52
          source_id: s_1LbbGT0r64QeQbhtPMZ2J8
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3574, HuWenKai #491：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G87xWTQArnxLSXAGEJ6t3a
        status: active
        display_name: 王豫齋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 袁淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 袁淑，史料所见人物。本项目依据《中国历代人物传记资料库：袁淑（CBDB 120572）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 袁淑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_G87xWTQArnxLSXAGEJ6t3a | 王豫齋 | accepted |

## 外部来源

- [中国历代人物传记资料库：袁淑（CBDB 120572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120572&o=json)
