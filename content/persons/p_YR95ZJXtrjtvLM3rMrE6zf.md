---
schema: wang-person/v1
id: p_YR95ZJXtrjtvLM3rMrE6zf
status: active
merged_into: null
display_name: 王淇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_63BdY3HFNF424cvJhwXrgA
        subject_person_id: p_YR95ZJXtrjtvLM3rMrE6zf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PoBvoV3bDtm49GXx1ECVBc
          claim_id: c_63BdY3HFNF424cvJhwXrgA
          source_id: s_k4pH4FZZjC1GCx2FjCAm1U
          stance: supports
          locator: CBDB:271250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271250）
          source: &a1
            id: s_k4pH4FZZjC1GCx2FjCAm1U
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 271250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271250&o=json
            external_identifier: CBDB:271250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6pPDBJPGtFgg1rJL9qCDPg
        subject_person_id: p_YR95ZJXtrjtvLM3rMrE6zf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QCeya5sNY2QcZ6u6jV9bZm
          claim_id: c_6pPDBJPGtFgg1rJL9qCDPg
          source_id: s_k4pH4FZZjC1GCx2FjCAm1U
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

# 王淇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淇（CBDB 271250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271250&o=json)
