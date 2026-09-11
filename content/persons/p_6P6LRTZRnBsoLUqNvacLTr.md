---
schema: wang-person/v1
id: p_6P6LRTZRnBsoLUqNvacLTr
status: active
merged_into: null
display_name: 王宗濤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wo1gE5Cu3GebeoVL3rWjtQ
        subject_person_id: p_6P6LRTZRnBsoLUqNvacLTr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗濤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jYTjDvgzeweuA77YrFJ2rb
          claim_id: c_Wo1gE5Cu3GebeoVL3rWjtQ
          source_id: s_FBeZQ9AKXwmvjR1AUgi9Ad
          stance: supports
          locator: CBDB:637110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637110）
          source: &a1
            id: s_FBeZQ9AKXwmvjR1AUgi9Ad
            source_type: api_record
            title: 中国历代人物传记资料库：王宗濤（CBDB 637110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637110&o=json
            external_identifier: CBDB:637110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_antHidLncPN4FkiQxJP8rk
        subject_person_id: p_6P6LRTZRnBsoLUqNvacLTr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗濤，清人物。籍贯宛平，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Soe-zEoye15m_1Ov4HUDZ
          claim_id: c_antHidLncPN4FkiQxJP8rk
          source_id: s_FBeZQ9AKXwmvjR1AUgi9Ad
          stance: supports
          locator: CBDB:637110
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

# 王宗濤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗濤 | accepted |
| bio.summary | 王宗濤，清人物。籍贯宛平，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637110） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗濤（CBDB 637110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637110&o=json)
