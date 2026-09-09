---
schema: wang-person/v1
id: p_MXTUw2Xig2Hj8DbsUhc8Nj
status: active
merged_into: null
display_name: 王歡岳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D2XVbNgtx98PLM2HLRNHuY
        subject_person_id: p_MXTUw2Xig2Hj8DbsUhc8Nj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王歡岳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zxSzW7xFMhJRCvWvZVJFeQ
          claim_id: c_D2XVbNgtx98PLM2HLRNHuY
          source_id: s_SUQC1f1L4uHKb59hPucjwm
          stance: supports
          locator: CBDB:142283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142283）
          source: &a1
            id: s_SUQC1f1L4uHKb59hPucjwm
            source_type: api_record
            title: 中国历代人物传记资料库：王歡岳（CBDB 142283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142283&o=json
            external_identifier: CBDB:142283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qyB2FvCKngshDwnrTRuuft
        subject_person_id: p_MXTUw2Xig2Hj8DbsUhc8Nj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 582年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4G859FTRyojaQ9MUFGzJHP
          claim_id: c_qyB2FvCKngshDwnrTRuuft
          source_id: s_SUQC1f1L4uHKb59hPucjwm
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
        id: c_1KFUr5oS8SA5rG8TwtNQPs
        subject_person_id: p_MXTUw2Xig2Hj8DbsUhc8Nj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 648年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c9MALSNM2wD9x94nn3QX2H
          claim_id: c_1KFUr5oS8SA5rG8TwtNQPs
          source_id: s_SUQC1f1L4uHKb59hPucjwm
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
        id: c_xYgTFgeuqnwrboCA1Di2SL
        subject_person_id: p_MXTUw2Xig2Hj8DbsUhc8Nj
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
        - id: cs_PMVT5CA2hFyBuKr5tQPG1H
          claim_id: c_xYgTFgeuqnwrboCA1Di2SL
          source_id: s_SUQC1f1L4uHKb59hPucjwm
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

# 王歡岳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王歡岳 | accepted |
| birth.date | 582年 | accepted |
| death.date | 648年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王歡岳（CBDB 142283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142283&o=json)
