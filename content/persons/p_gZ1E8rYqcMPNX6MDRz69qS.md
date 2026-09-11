---
schema: wang-person/v1
id: p_gZ1E8rYqcMPNX6MDRz69qS
status: active
merged_into: null
display_name: 王繼武
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W7wBMre4yrNQVMsHpUDXnc
        subject_person_id: p_gZ1E8rYqcMPNX6MDRz69qS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5iqEJ6nezNFnDPE4WwMBK8
          claim_id: c_W7wBMre4yrNQVMsHpUDXnc
          source_id: s_z8QeEA5HV7ix6PVHrTKLts
          stance: supports
          locator: CBDB:639801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639801）
          source: &a1
            id: s_z8QeEA5HV7ix6PVHrTKLts
            source_type: api_record
            title: 中国历代人物传记资料库：王繼武（CBDB 639801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639801&o=json
            external_identifier: CBDB:639801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3FJ43n8PRLTS7C3CJZzG3R
        subject_person_id: p_gZ1E8rYqcMPNX6MDRz69qS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼武，清人物。籍贯雲南，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e4i10btaZ8K_lmnxAB0LR5
          claim_id: c_3FJ43n8PRLTS7C3CJZzG3R
          source_id: s_z8QeEA5HV7ix6PVHrTKLts
          stance: supports
          locator: CBDB:639801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王繼武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼武 | accepted |
| bio.summary | 王繼武，清人物。籍贯雲南，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼武（CBDB 639801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639801&o=json)
