---
schema: wang-person/v1
id: p_AJCYLtsEnxmy7z8Af7QxSM
status: active
merged_into: null
display_name: 王與
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qrm9L2aBc3YxHN8h1KmGnx
        subject_person_id: p_AJCYLtsEnxmy7z8Af7QxSM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nhQA9484gSFJ3M1Wk2f8W7
          claim_id: c_Qrm9L2aBc3YxHN8h1KmGnx
          source_id: s_ihvRRgiwpdikPuWKe7HFAA
          stance: supports
          locator: CBDB:685431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685431）
          source: &a1
            id: s_ihvRRgiwpdikPuWKe7HFAA
            source_type: api_record
            title: 中国历代人物传记资料库：王與（CBDB 685431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685431&o=json
            external_identifier: CBDB:685431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Txfi2tAjBbwz8xN8Hrn2nG
        subject_person_id: p_AJCYLtsEnxmy7z8Af7QxSM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與，宋人物。籍贯晉江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 685431）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EpexMuNGyfvRy0nLS04pcv
          claim_id: c_Txfi2tAjBbwz8xN8Hrn2nG
          source_id: s_ihvRRgiwpdikPuWKe7HFAA
          stance: supports
          locator: CBDB:685431
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

# 王與

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王與 | accepted |
| bio.summary | 王與，宋人物。籍贯晉江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 685431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王與（CBDB 685431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685431&o=json)
