---
schema: wang-person/v1
id: p_tWBxX7VaCGKK1MzsjcMUPe
status: active
merged_into: null
display_name: 王俅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kaQVjWJEzKkLMT7NMCAJxw
        subject_person_id: p_tWBxX7VaCGKK1MzsjcMUPe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2dEWkhGdYier9r7YjkLQa1
          claim_id: c_kaQVjWJEzKkLMT7NMCAJxw
          source_id: s_9d8eFvARZS39BtPnnXhoo6
          stance: supports
          locator: CBDB:126618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126618）
          source: &a1
            id: s_9d8eFvARZS39BtPnnXhoo6
            source_type: api_record
            title: 中国历代人物传记资料库：王俅（CBDB 126618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126618&o=json
            external_identifier: CBDB:126618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_F7r1wg72Q5AQKrUZLCzBZr
        subject_person_id: p_tWBxX7VaCGKK1MzsjcMUPe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1445年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7BJNHcDEYxuFVRQi8fLq2X
          claim_id: c_F7r1wg72Q5AQKrUZLCzBZr
          source_id: s_9d8eFvARZS39BtPnnXhoo6
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
        id: c_1NFQA8NFxXj1WbtTgb9vhA
        subject_person_id: p_tWBxX7VaCGKK1MzsjcMUPe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2fjFzTLh6TvqNwdEEqrtgt
          claim_id: c_1NFQA8NFxXj1WbtTgb9vhA
          source_id: s_9d8eFvARZS39BtPnnXhoo6
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
        id: c_edfsYTNGEeJ8GP4kfdS2Xn
        subject_person_id: p_tWBxX7VaCGKK1MzsjcMUPe
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
        - id: cs_3k969mbGaiYtF8faKZrDPU
          claim_id: c_edfsYTNGEeJ8GP4kfdS2Xn
          source_id: s_9d8eFvARZS39BtPnnXhoo6
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

# 王俅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俅 | accepted |
| birth.date | 1445年 | accepted |
| death.date | 1507年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俅（CBDB 126618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126618&o=json)
