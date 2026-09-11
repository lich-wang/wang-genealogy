---
schema: wang-person/v1
id: p_z758p62G9wuA7woA2EyEaE
status: active
merged_into: null
display_name: 王天賦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NK411C4hMXABYQjZtxw1TH
        subject_person_id: p_z758p62G9wuA7woA2EyEaE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天賦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yAUGGv4DvgqPJqYQKLk7RX
          claim_id: c_NK411C4hMXABYQjZtxw1TH
          source_id: s_ut2oSZzBuEvhec4sVEkhmJ
          stance: supports
          locator: CBDB:507836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（507836）
          source: &a1
            id: s_ut2oSZzBuEvhec4sVEkhmJ
            source_type: api_record
            title: 中国历代人物传记资料库：王天賦（CBDB 507836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507836&o=json
            external_identifier: CBDB:507836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HPPhtXUeL8MBWaxdGmhacF
        subject_person_id: p_z758p62G9wuA7woA2EyEaE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天賦，元人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 507836）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0Ewwt1xX0G-y9Bk5dfwDPh
          claim_id: c_HPPhtXUeL8MBWaxdGmhacF
          source_id: s_ut2oSZzBuEvhec4sVEkhmJ
          stance: supports
          locator: CBDB:507836
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

# 王天賦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天賦 | accepted |
| bio.summary | 王天賦，元人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 507836） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天賦（CBDB 507836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507836&o=json)
