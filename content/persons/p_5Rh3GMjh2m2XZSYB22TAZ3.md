---
schema: wang-person/v1
id: p_5Rh3GMjh2m2XZSYB22TAZ3
status: active
merged_into: null
display_name: 王通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PYZAuMSmNmGJCm8vYENjLR
        subject_person_id: p_5Rh3GMjh2m2XZSYB22TAZ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B6fwGcn3mVEGDNAU85aMT8
          claim_id: c_PYZAuMSmNmGJCm8vYENjLR
          source_id: s_NUj3TDGANdJEXxmB2G1PjC
          stance: supports
          locator: CBDB:36863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36863）
          source: &a1
            id: s_NUj3TDGANdJEXxmB2G1PjC
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 36863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36863&o=json
            external_identifier: CBDB:36863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A8vpUxh8vnFCmtTM3v5GwV
        subject_person_id: p_5Rh3GMjh2m2XZSYB22TAZ3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通，宋人物。籍贯開封，身份为早卒(未成年而卒)、未婚而卒。（中国历代人物传记资料库 CBDB 36863）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G8hCbLBFukIDpQ42iknVFl
          claim_id: c_A8vpUxh8vnFCmtTM3v5GwV
          source_id: s_NUj3TDGANdJEXxmB2G1PjC
          stance: supports
          locator: CBDB:36863
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

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | 王通，宋人物。籍贯開封，身份为早卒(未成年而卒)、未婚而卒。（中国历代人物传记资料库 CBDB 36863） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 36863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36863&o=json)
