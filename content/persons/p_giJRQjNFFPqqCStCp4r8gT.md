---
schema: wang-person/v1
id: p_giJRQjNFFPqqCStCp4r8gT
status: active
merged_into: null
display_name: 王奪標
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fMoEYXpAgDjvrAaejgU5Jc
        subject_person_id: p_giJRQjNFFPqqCStCp4r8gT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奪標
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CZHM4QdPbuuhAUR8RQjhBL
          claim_id: c_fMoEYXpAgDjvrAaejgU5Jc
          source_id: s_A1UYJLEGFYBgjGz6rrbDQ1
          stance: supports
          locator: CBDB:71535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71535）
          source: &a1
            id: s_A1UYJLEGFYBgjGz6rrbDQ1
            source_type: api_record
            title: 中国历代人物传记资料库：王奪標（CBDB 71535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71535&o=json
            external_identifier: CBDB:71535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.738Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E1X4otubPuUzqWHiBg6Dyi
        subject_person_id: p_giJRQjNFFPqqCStCp4r8gT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1633年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DBJYuLa4yF9uobB2N3eVQ9
          claim_id: c_E1X4otubPuUzqWHiBg6Dyi
          source_id: s_A1UYJLEGFYBgjGz6rrbDQ1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_48kovk5UvoQfvGoEAJhMAJ
        subject_person_id: p_giJRQjNFFPqqCStCp4r8gT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x4NNFqM3qMRB9CgKqJS9WG
          claim_id: c_48kovk5UvoQfvGoEAJhMAJ
          source_id: s_A1UYJLEGFYBgjGz6rrbDQ1
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

# 王奪標

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奪標 | accepted |
| birth.date | 1633年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奪標（CBDB 71535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71535&o=json)
