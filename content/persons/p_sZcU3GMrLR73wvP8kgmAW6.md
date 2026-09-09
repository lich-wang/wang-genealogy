---
schema: wang-person/v1
id: p_sZcU3GMrLR73wvP8kgmAW6
status: active
merged_into: null
display_name: 王履仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mdqNJ1DEFn6DkQCEqDCbdm
        subject_person_id: p_sZcU3GMrLR73wvP8kgmAW6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2E1uYPaaF9wNvtSza6zoh8
          claim_id: c_mdqNJ1DEFn6DkQCEqDCbdm
          source_id: s_YBCPnT1MwxwEfMWLXKL2jW
          stance: supports
          locator: CBDB:72204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72204）
          source: &a1
            id: s_YBCPnT1MwxwEfMWLXKL2jW
            source_type: api_record
            title: 中国历代人物传记资料库：王履仁（CBDB 72204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72204&o=json
            external_identifier: CBDB:72204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BF7E8C1HHBZCN7Adh4YgNr
        subject_person_id: p_sZcU3GMrLR73wvP8kgmAW6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1677年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f4bR91KR4qkYJ91PPaJEt3
          claim_id: c_BF7E8C1HHBZCN7Adh4YgNr
          source_id: s_YBCPnT1MwxwEfMWLXKL2jW
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
        id: c_xJvMYR5XEGta4oMLzt3yEy
        subject_person_id: p_sZcU3GMrLR73wvP8kgmAW6
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
        - id: cs_NJbnt4MX17fANZerffHP8H
          claim_id: c_xJvMYR5XEGta4oMLzt3yEy
          source_id: s_YBCPnT1MwxwEfMWLXKL2jW
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

# 王履仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履仁 | accepted |
| birth.date | 1677年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履仁（CBDB 72204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72204&o=json)
