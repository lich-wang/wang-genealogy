---
schema: wang-person/v1
id: p_h4KiDfoz1Rry8HF9USJYJv
status: active
merged_into: null
display_name: 王為珩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o6Y58JAnK6s7MfpW6dKyoo
        subject_person_id: p_h4KiDfoz1Rry8HF9USJYJv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王為珩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QC3CS1TQJWCTiVxafRebEZ
          claim_id: c_o6Y58JAnK6s7MfpW6dKyoo
          source_id: s_5qzSj6FBdSMm5C38hp7gwV
          stance: supports
          locator: CBDB:683302
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683302）
          source: &a1
            id: s_5qzSj6FBdSMm5C38hp7gwV
            source_type: api_record
            title: 中国历代人物传记资料库：王為珩（CBDB 683302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683302&o=json
            external_identifier: CBDB:683302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MonhL4zAwNxEn2qpM1A2TL
        subject_person_id: p_h4KiDfoz1Rry8HF9USJYJv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王為珩，清人物。籍贯歙縣，身份为義民/義官。（中国历代人物传记资料库 CBDB 683302）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NGENK7OLvc_OXTnbFtwcDL
          claim_id: c_MonhL4zAwNxEn2qpM1A2TL
          source_id: s_5qzSj6FBdSMm5C38hp7gwV
          stance: supports
          locator: CBDB:683302
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

# 王為珩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王為珩 | accepted |
| bio.summary | 王為珩，清人物。籍贯歙縣，身份为義民/義官。（中国历代人物传记资料库 CBDB 683302） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王為珩（CBDB 683302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683302&o=json)
