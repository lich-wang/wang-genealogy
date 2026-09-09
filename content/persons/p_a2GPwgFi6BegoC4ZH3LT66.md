---
schema: wang-person/v1
id: p_a2GPwgFi6BegoC4ZH3LT66
status: active
merged_into: null
display_name: 王正雅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QSWSW8YxELic7vBSn5ZHoN
        subject_person_id: p_a2GPwgFi6BegoC4ZH3LT66
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正雅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UAi34XwDZ2Lm7yJwKBD4rC
          claim_id: c_QSWSW8YxELic7vBSn5ZHoN
          source_id: s_jRkGE9MG1o39MS8WMWnf99
          stance: supports
          locator: CBDB:378721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（378721）
          source: &a1
            id: s_jRkGE9MG1o39MS8WMWnf99
            source_type: api_record
            title: 中国历代人物传记资料库：王正雅（CBDB 378721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378721&o=json
            external_identifier: CBDB:378721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GfmpQHrKDBieguJCKKQAU1
        subject_person_id: p_a2GPwgFi6BegoC4ZH3LT66
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
        - id: cs_GcoopkDmE6D3oqyYVifaAQ
          claim_id: c_GfmpQHrKDBieguJCKKQAU1
          source_id: s_jRkGE9MG1o39MS8WMWnf99
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

# 王正雅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正雅 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正雅（CBDB 378721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378721&o=json)
