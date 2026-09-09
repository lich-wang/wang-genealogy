---
schema: wang-person/v1
id: p_bEJ6zpyrnLKEfRt5W2BBn8
status: active
merged_into: null
display_name: 王及德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cKsKESQZyLRTTV8KXxGo1o
        subject_person_id: p_bEJ6zpyrnLKEfRt5W2BBn8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王及德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bHGEmXGSByRk9Utnm6coFx
          claim_id: c_cKsKESQZyLRTTV8KXxGo1o
          source_id: s_8zGcRhvW69VwTi7Cc3csTG
          stance: supports
          locator: CBDB:140183
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140183）
          source: &a1
            id: s_8zGcRhvW69VwTi7Cc3csTG
            source_type: api_record
            title: 中国历代人物传记资料库：王及德（CBDB 140183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140183&o=json
            external_identifier: CBDB:140183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NwAdJ2nix2WCdUvuwV2hJK
        subject_person_id: p_bEJ6zpyrnLKEfRt5W2BBn8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 647年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W8Fs7Ri2Lm2n5fmKri9DoV
          claim_id: c_NwAdJ2nix2WCdUvuwV2hJK
          source_id: s_8zGcRhvW69VwTi7Cc3csTG
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
        id: c_6YqkQ2CfqYwZ4wDJ3vtX8D
        subject_person_id: p_bEJ6zpyrnLKEfRt5W2BBn8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 705年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DaiVQKawrXdicrr5WcoAD9
          claim_id: c_6YqkQ2CfqYwZ4wDJ3vtX8D
          source_id: s_8zGcRhvW69VwTi7Cc3csTG
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
        id: c_WwDWjHiogjyUA3BMr2HeL1
        subject_person_id: p_bEJ6zpyrnLKEfRt5W2BBn8
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
        - id: cs_DgwcCrZJtF9SQ53K8PWcD8
          claim_id: c_WwDWjHiogjyUA3BMr2HeL1
          source_id: s_8zGcRhvW69VwTi7Cc3csTG
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

# 王及德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王及德 | accepted |
| birth.date | 647年 | accepted |
| death.date | 705年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王及德（CBDB 140183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140183&o=json)
