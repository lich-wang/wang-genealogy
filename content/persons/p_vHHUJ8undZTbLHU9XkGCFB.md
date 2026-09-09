---
schema: wang-person/v1
id: p_vHHUJ8undZTbLHU9XkGCFB
status: active
merged_into: null
display_name: 王普
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BZPzvJGvC5XFKU6wY6G9Aq
        subject_person_id: p_vHHUJ8undZTbLHU9XkGCFB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7c9HjwDtDUzNc9V19Dj1j6
          claim_id: c_BZPzvJGvC5XFKU6wY6G9Aq
          source_id: s_yH3i6oubyRNQyWE6aupXyV
          stance: supports
          locator: CBDB:58601
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58601）
          source: &a1
            id: s_yH3i6oubyRNQyWE6aupXyV
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 58601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58601&o=json
            external_identifier: CBDB:58601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SqDyccjh8cYUbL3RiokEk2
        subject_person_id: p_vHHUJ8undZTbLHU9XkGCFB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1726年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xMMnoB8hjjN9eZMT57BDXw
          claim_id: c_SqDyccjh8cYUbL3RiokEk2
          source_id: s_yH3i6oubyRNQyWE6aupXyV
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
        id: c_Bsur2BooEayQgc7WBuJBpV
        subject_person_id: p_vHHUJ8undZTbLHU9XkGCFB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1796年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y1PbPUCaCN9ZCGHsvQ5ovQ
          claim_id: c_Bsur2BooEayQgc7WBuJBpV
          source_id: s_yH3i6oubyRNQyWE6aupXyV
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
        id: c_CPuuVsQS9vGiTT5VPKMTEp
        subject_person_id: p_vHHUJ8undZTbLHU9XkGCFB
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
        - id: cs_cqxp4BTNecM7RGbBY1ZzSr
          claim_id: c_CPuuVsQS9vGiTT5VPKMTEp
          source_id: s_yH3i6oubyRNQyWE6aupXyV
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

# 王普

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王普 | accepted |
| birth.date | 1726年 | accepted |
| death.date | 1796年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王普（CBDB 58601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58601&o=json)
