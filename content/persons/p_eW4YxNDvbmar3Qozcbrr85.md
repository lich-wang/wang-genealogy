---
schema: wang-person/v1
id: p_eW4YxNDvbmar3Qozcbrr85
status: active
merged_into: null
display_name: 王暉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F59PscDucj1qCW9iaXvLjp
        subject_person_id: p_eW4YxNDvbmar3Qozcbrr85
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VcJ2SZY6t16BUvBTo5oPxz
          claim_id: c_F59PscDucj1qCW9iaXvLjp
          source_id: s_899fSj2oqVwHDzgUgPmogW
          stance: supports
          locator: CBDB:149314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149314）
          source: &a1
            id: s_899fSj2oqVwHDzgUgPmogW
            source_type: api_record
            title: 中国历代人物传记资料库：王暉（CBDB 149314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149314&o=json
            external_identifier: CBDB:149314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bFTAYBZZFzbqgn3B1nMEPH
        subject_person_id: p_eW4YxNDvbmar3Qozcbrr85
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暉，隋人物。曾任司倉。（中国历代人物传记资料库 CBDB 149314）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vW9PUYfZaeegXQ5f15lNS8
          claim_id: c_bFTAYBZZFzbqgn3B1nMEPH
          source_id: s_899fSj2oqVwHDzgUgPmogW
          stance: supports
          locator: CBDB:149314
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

# 王暉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暉 | accepted |
| bio.summary | 王暉，隋人物。曾任司倉。（中国历代人物传记资料库 CBDB 149314） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暉（CBDB 149314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149314&o=json)
