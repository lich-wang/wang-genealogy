---
schema: wang-person/v1
id: p_HaSYEFbv2gMuCnteK5wK2d
status: active
merged_into: null
display_name: 王彥弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tiC1EmJgKd4bTnnsbCw3iz
        subject_person_id: p_HaSYEFbv2gMuCnteK5wK2d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_52o1dxr8sLQcHZRt8oe3FE
          claim_id: c_tiC1EmJgKd4bTnnsbCw3iz
          source_id: s_TeoruSAkudczby5W3SmV2C
          stance: supports
          locator: CBDB:414515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414515）
          source: &a1
            id: s_TeoruSAkudczby5W3SmV2C
            source_type: api_record
            title: 中国历代人物传记资料库：王彥弼（CBDB 414515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414515&o=json
            external_identifier: CBDB:414515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pWrR1HN9oNCQNuHmpm67ne
        subject_person_id: p_HaSYEFbv2gMuCnteK5wK2d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YcgaZNK3dHDKaQtLByW41Z
          claim_id: c_pWrR1HN9oNCQNuHmpm67ne
          source_id: s_TeoruSAkudczby5W3SmV2C
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王彥弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥弼 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥弼（CBDB 414515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414515&o=json)
