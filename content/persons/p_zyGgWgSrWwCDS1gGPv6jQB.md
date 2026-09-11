---
schema: wang-person/v1
id: p_zyGgWgSrWwCDS1gGPv6jQB
status: active
merged_into: null
display_name: 王近光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NPM18Fbuim7rTzbPTQWFM2
        subject_person_id: p_zyGgWgSrWwCDS1gGPv6jQB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王近光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PMDJ7dD5EgCM6WJGAsPpKn
          claim_id: c_NPM18Fbuim7rTzbPTQWFM2
          source_id: s_ET8qBkVuTG1cdWZcvYPtQZ
          stance: supports
          locator: CBDB:308159
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308159）
          source: &a1
            id: s_ET8qBkVuTG1cdWZcvYPtQZ
            source_type: api_record
            title: 中国历代人物传记资料库：王近光（CBDB 308159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308159&o=json
            external_identifier: CBDB:308159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RVX4GMvJzgQpM1gtjDALxw
        subject_person_id: p_zyGgWgSrWwCDS1gGPv6jQB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王近光，明人物。嘉靖二十三年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 308159）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aKOEb4RClL6osbXSvIkmj_
          claim_id: c_RVX4GMvJzgQpM1gtjDALxw
          source_id: s_ET8qBkVuTG1cdWZcvYPtQZ
          stance: supports
          locator: CBDB:308159
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

# 王近光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王近光 | accepted |
| bio.summary | 王近光，明人物。嘉靖二十三年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 308159） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王近光（CBDB 308159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308159&o=json)
