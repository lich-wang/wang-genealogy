---
schema: wang-person/v1
id: p_atbWt1QiJYHZH74QED29Eu
status: active
merged_into: null
display_name: 王札
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uf8WH3DXfNCgpDLGGDknHS
        subject_person_id: p_atbWt1QiJYHZH74QED29Eu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王札
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M6G99E9DFAQ7gV9a2FP15M
          claim_id: c_uf8WH3DXfNCgpDLGGDknHS
          source_id: s_jg4DSMF5qRpEwW9wzAVFgF
          stance: supports
          locator: CBDB:38631
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38631）
          source: &a1
            id: s_jg4DSMF5qRpEwW9wzAVFgF
            source_type: api_record
            title: 中国历代人物传记资料库：王札（CBDB 38631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38631&o=json
            external_identifier: CBDB:38631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ni1xDq6RZBsRsHiGae3kHG
        subject_person_id: p_atbWt1QiJYHZH74QED29Eu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王札，宋人物。籍贯臨江軍，曾任通判。（中国历代人物传记资料库 CBDB 38631）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fgV1WVKeNXgNyuQcRAwzaw
          claim_id: c_Ni1xDq6RZBsRsHiGae3kHG
          source_id: s_jg4DSMF5qRpEwW9wzAVFgF
          stance: supports
          locator: CBDB:38631
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

# 王札

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王札 | accepted |
| bio.summary | 王札，宋人物。籍贯臨江軍，曾任通判。（中国历代人物传记资料库 CBDB 38631） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王札（CBDB 38631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38631&o=json)
