---
schema: wang-person/v1
id: p_mLAEZyG4ZLQUsxwAs3FBPE
status: active
merged_into: null
display_name: 王承璟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zBncMiEPzh7kYACMHj9nFa
        subject_person_id: p_mLAEZyG4ZLQUsxwAs3FBPE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8q9JwDmXobZQYBRke8E93X
          claim_id: c_zBncMiEPzh7kYACMHj9nFa
          source_id: s_ZUeWeM86Jgrao9XvXgmBCN
          stance: supports
          locator: CBDB:191810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191810）
          source: &a1
            id: s_ZUeWeM86Jgrao9XvXgmBCN
            source_type: api_record
            title: 中国历代人物传记资料库：王承璟（CBDB 191810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191810&o=json
            external_identifier: CBDB:191810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kW7QJNvgC2xCqxCDaDD8Hw
        subject_person_id: p_mLAEZyG4ZLQUsxwAs3FBPE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 767年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dWoqjBv2jjbM53AAf89fHp
          claim_id: c_kW7QJNvgC2xCqxCDaDD8Hw
          source_id: s_ZUeWeM86Jgrao9XvXgmBCN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DXGA3aTmn1x3jpxiAHZD57
        subject_person_id: p_mLAEZyG4ZLQUsxwAs3FBPE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LztnPTHAML1Wo7R6kC981K
          claim_id: c_DXGA3aTmn1x3jpxiAHZD57
          source_id: s_ZUeWeM86Jgrao9XvXgmBCN
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

# 王承璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承璟 | accepted |
| death.date | 767年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承璟（CBDB 191810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191810&o=json)
