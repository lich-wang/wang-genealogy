---
schema: wang-person/v1
id: p_CaHAt6AEHAY43MH8aF32xd
status: active
merged_into: null
display_name: 王庭蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GS8MbhNJSt4t33pT2qKdkd
        subject_person_id: p_CaHAt6AEHAY43MH8aF32xd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C9nM7mL1Zb8urx9PTQUDV4
          claim_id: c_GS8MbhNJSt4t33pT2qKdkd
          source_id: s_jNRkKqtYM4yhQF9oyNHBza
          stance: supports
          locator: CBDB:69309
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69309）
          source: &a1
            id: s_jNRkKqtYM4yhQF9oyNHBza
            source_type: api_record
            title: 中国历代人物传记资料库：王庭蘭（CBDB 69309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69309&o=json
            external_identifier: CBDB:69309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.206Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7QrQ3NFwQg6QZXvveEcA5K
        subject_person_id: p_CaHAt6AEHAY43MH8aF32xd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2SANnCcqaM9qqJdmSELEdE
          claim_id: c_7QrQ3NFwQg6QZXvveEcA5K
          source_id: s_jNRkKqtYM4yhQF9oyNHBza
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
        id: c_BG2TsM9mYTUq6ugePoACVK
        subject_person_id: p_CaHAt6AEHAY43MH8aF32xd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭蘭（生于1797年），清人物。明清進士進士，籍贯固始，入仕進士，曾任鄉試考官、刑部郎中。（中国历代人物传记资料库 CBDB 69309）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wFLWxGeXEmHI0ZL1YECGzO
          claim_id: c_BG2TsM9mYTUq6ugePoACVK
          source_id: s_jNRkKqtYM4yhQF9oyNHBza
          stance: supports
          locator: CBDB:69309
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

# 王庭蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭蘭 | accepted |
| birth.date | 1797年 | accepted |
| bio.summary | 王庭蘭（生于1797年），清人物。明清進士進士，籍贯固始，入仕進士，曾任鄉試考官、刑部郎中。（中国历代人物传记资料库 CBDB 69309） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭蘭（CBDB 69309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69309&o=json)
