---
schema: wang-person/v1
id: p_847Q6d3vmxYABFNWz66oyZ
status: active
merged_into: null
display_name: 王維鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oa3sRBRbkgAbFtgXoHHJbQ
        subject_person_id: p_847Q6d3vmxYABFNWz66oyZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4VtqwcKhXU5MbDnHuMJMsw
          claim_id: c_oa3sRBRbkgAbFtgXoHHJbQ
          source_id: s_WRqoA8ANPVs1mBeJkXMPBa
          stance: supports
          locator: CBDB:696203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696203）
          source: &a1
            id: s_WRqoA8ANPVs1mBeJkXMPBa
            source_type: api_record
            title: 中国历代人物传记资料库：王維鳳（CBDB 696203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696203&o=json
            external_identifier: CBDB:696203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vV6VSCWi1P3HG4T2ehnMDV
        subject_person_id: p_847Q6d3vmxYABFNWz66oyZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維鳳，清人物。入仕武舉進士，曾任守備。（中国历代人物传记资料库 CBDB 696203）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z4dYxknJ6TWDsrEWS-YN7q
          claim_id: c_vV6VSCWi1P3HG4T2ehnMDV
          source_id: s_WRqoA8ANPVs1mBeJkXMPBa
          stance: supports
          locator: CBDB:696203
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

# 王維鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維鳳 | accepted |
| bio.summary | 王維鳳，清人物。入仕武舉進士，曾任守備。（中国历代人物传记资料库 CBDB 696203） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維鳳（CBDB 696203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696203&o=json)
