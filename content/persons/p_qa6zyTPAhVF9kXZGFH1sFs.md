---
schema: wang-person/v1
id: p_qa6zyTPAhVF9kXZGFH1sFs
status: active
merged_into: null
display_name: 王言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFiravN5RG51w8aQYDA9rv
        subject_person_id: p_qa6zyTPAhVF9kXZGFH1sFs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qwovFkqNqugJnA8j29SA9h
          claim_id: c_hFiravN5RG51w8aQYDA9rv
          source_id: s_VPcLLRefUUEFco2evQoAKq
          stance: supports
          locator: CBDB:301987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301987）
          source: &a1
            id: s_VPcLLRefUUEFco2evQoAKq
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 301987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301987&o=json
            external_identifier: CBDB:301987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oNDunTnK9CcgRChanGT242
        subject_person_id: p_qa6zyTPAhVF9kXZGFH1sFs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言，明人物。嘉靖十七年進士，籍贯定海。（中国历代人物传记资料库 CBDB 301987）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KCuWcXUFi3oH6ibnfeEjTY
          claim_id: c_oNDunTnK9CcgRChanGT242
          source_id: s_VPcLLRefUUEFco2evQoAKq
          stance: supports
          locator: CBDB:301987
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

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | 王言，明人物。嘉靖十七年進士，籍贯定海。（中国历代人物传记资料库 CBDB 301987） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 301987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301987&o=json)
