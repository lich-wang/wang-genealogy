---
schema: wang-person/v1
id: p_yw8Ldi3TsRvFBDPd73FPjN
status: active
merged_into: null
display_name: 王玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G638vD18WeWeKQ5kiwGAp6
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AMGBVdknWYfpEya4dfKVUK
          claim_id: c_G638vD18WeWeKQ5kiwGAp6
          source_id: s_k2JpvCpagP4WeB4NWMHH41
          stance: supports
          locator: CBDB:143515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143515）
          source: &a1
            id: s_k2JpvCpagP4WeB4NWMHH41
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 143515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143515&o=json
            external_identifier: CBDB:143515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iacdTUqSYDq5Ea6kUTnX2d
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 769年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXxJ6fuYfgEW79Jy1ZGmTC
          claim_id: c_iacdTUqSYDq5Ea6kUTnX2d
          source_id: s_k2JpvCpagP4WeB4NWMHH41
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
        id: c_fNz3kXNLzeqcfriW5113T9
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68cQ19DzidFCzLQiEj4ZHR
          claim_id: c_fNz3kXNLzeqcfriW5113T9
          source_id: s_k2JpvCpagP4WeB4NWMHH41
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
        id: c_Z917u69WcvdeHEALbwY1JB
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
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
        - id: cs_za8jemWp7FynCZkRHcDC4B
          claim_id: c_Z917u69WcvdeHEALbwY1JB
          source_id: s_k2JpvCpagP4WeB4NWMHH41
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

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| birth.date | 769年 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 143515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143515&o=json)
