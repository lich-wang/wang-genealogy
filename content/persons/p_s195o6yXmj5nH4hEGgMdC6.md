---
schema: wang-person/v1
id: p_s195o6yXmj5nH4hEGgMdC6
status: active
merged_into: null
display_name: 王萬齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mt6XHb5fQ5JrczfBNyA5DP
        subject_person_id: p_s195o6yXmj5nH4hEGgMdC6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sYSVnmkznjJCEUkaRp44iz
          claim_id: c_mt6XHb5fQ5JrczfBNyA5DP
          source_id: s_5wx3i46ydVUtb9BYHb7zb2
          stance: supports
          locator: CBDB:640129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640129）
          source: &a1
            id: s_5wx3i46ydVUtb9BYHb7zb2
            source_type: api_record
            title: 中国历代人物传记资料库：王萬齢（CBDB 640129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640129&o=json
            external_identifier: CBDB:640129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EEW3imX8gHpDSXR1vPGbJ2
        subject_person_id: p_s195o6yXmj5nH4hEGgMdC6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬齢，清人物。籍贯涿州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 640129）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JYrXhO0sGAwI-4g4H04VWK
          claim_id: c_EEW3imX8gHpDSXR1vPGbJ2
          source_id: s_5wx3i46ydVUtb9BYHb7zb2
          stance: supports
          locator: CBDB:640129
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

# 王萬齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬齢 | accepted |
| bio.summary | 王萬齢，清人物。籍贯涿州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 640129） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬齢（CBDB 640129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640129&o=json)
