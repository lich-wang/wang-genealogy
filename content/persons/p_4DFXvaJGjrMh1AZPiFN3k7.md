---
schema: wang-person/v1
id: p_4DFXvaJGjrMh1AZPiFN3k7
status: active
merged_into: null
display_name: 王淵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dD4dFv8R8XE7XdN2WY2E2d
        subject_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MtGBv3bNi7B8bPgAExp7xC
          claim_id: c_dD4dFv8R8XE7XdN2WY2E2d
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
          stance: supports
          locator: CBDB:8156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8156）
          source: &a1
            id: s_NU9snLL9YRryUoX5Cw8uxa
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 8156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8156&o=json
            external_identifier: CBDB:8156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6YpJgC36ZAjZUVXunZY2so
        subject_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1077年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y5uNPPxcye5BWS8jgCFc1K
          claim_id: c_6YpJgC36ZAjZUVXunZY2so
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5RAMhi1HK7KmCoL6ChG9Ps
        subject_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bsaLsbkvB6aLKQTXNjwaQG
          claim_id: c_5RAMhi1HK7KmCoL6ChG9Ps
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
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
        id: c_rg4Eb8WGKoyxrNgLWb9pPF
        subject_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
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
        - id: cs_8FGMTQMdzTLtMMqcZ8w4K3
          claim_id: c_rg4Eb8WGKoyxrNgLWb9pPF
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
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

# 王淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淵 | accepted |
| birth.date | 1077年 | accepted |
| death.date | 1129年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淵（CBDB 8156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8156&o=json)
