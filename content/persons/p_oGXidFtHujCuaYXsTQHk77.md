---
schema: wang-person/v1
id: p_oGXidFtHujCuaYXsTQHk77
status: active
merged_into: null
display_name: 王之燦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jd5Hx2BLg6Poh6Gw4ya1j9
        subject_person_id: p_oGXidFtHujCuaYXsTQHk77
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VsXCQYfa3JRF3apYL6ghy5
          claim_id: c_jd5Hx2BLg6Poh6Gw4ya1j9
          source_id: s_mmGxccTwiqChZtDDvCc8H8
          stance: supports
          locator: CBDB:635800
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635800）
          source: &a1
            id: s_mmGxccTwiqChZtDDvCc8H8
            source_type: api_record
            title: 中国历代人物传记资料库：王之燦（CBDB 635800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635800&o=json
            external_identifier: CBDB:635800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d7BhgSimYE2S7U9ezyVp5a
        subject_person_id: p_oGXidFtHujCuaYXsTQHk77
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之燦，清人物。籍贯武昌，曾任訓導。（中国历代人物传记资料库 CBDB 635800）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2KiUdQQATDjG7BvdSHJsqa
          claim_id: c_d7BhgSimYE2S7U9ezyVp5a
          source_id: s_mmGxccTwiqChZtDDvCc8H8
          stance: supports
          locator: CBDB:635800
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

# 王之燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之燦 | accepted |
| bio.summary | 王之燦，清人物。籍贯武昌，曾任訓導。（中国历代人物传记资料库 CBDB 635800） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之燦（CBDB 635800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635800&o=json)
