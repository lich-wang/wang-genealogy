---
schema: wang-person/v1
id: p_aTCFQaKgQwpPaDAdFNGP4c
status: active
merged_into: null
display_name: 王持
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dyUA9uEmzwivtYRH4MqQUo
        subject_person_id: p_aTCFQaKgQwpPaDAdFNGP4c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王持
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C5gLkyzjzrmZ2GUZtSAFJN
          claim_id: c_dyUA9uEmzwivtYRH4MqQUo
          source_id: s_dDCGXQQk6AGkbp41zCERTW
          stance: supports
          locator: CBDB:38173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38173）
          source: &a1
            id: s_dDCGXQQk6AGkbp41zCERTW
            source_type: api_record
            title: 中国历代人物传记资料库：王持（CBDB 38173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38173&o=json
            external_identifier: CBDB:38173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZoGKmc6vmG1LWP8sCwiUXT
        subject_person_id: p_aTCFQaKgQwpPaDAdFNGP4c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王持，宋人物。籍贯長安，身份为畫家。（中国历代人物传记资料库 CBDB 38173）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ICO0V-WuihU4-qBeXxl9tt
          claim_id: c_ZoGKmc6vmG1LWP8sCwiUXT
          source_id: s_dDCGXQQk6AGkbp41zCERTW
          stance: supports
          locator: CBDB:38173
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

# 王持

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王持 | accepted |
| bio.summary | 王持，宋人物。籍贯長安，身份为畫家。（中国历代人物传记资料库 CBDB 38173） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王持（CBDB 38173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38173&o=json)
