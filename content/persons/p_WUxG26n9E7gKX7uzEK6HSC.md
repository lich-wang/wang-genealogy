---
schema: wang-person/v1
id: p_WUxG26n9E7gKX7uzEK6HSC
status: active
merged_into: null
display_name: 王育榞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9tSea4kNkjtfBeDJPyRi3V
        subject_person_id: p_WUxG26n9E7gKX7uzEK6HSC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育榞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FynYcANEhedPwv6UWG3dfZ
          claim_id: c_9tSea4kNkjtfBeDJPyRi3V
          source_id: s_4wSQ3A7zW6hFP2z2ZbSBa4
          stance: supports
          locator: CBDB:71788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71788）
          source: &a1
            id: s_4wSQ3A7zW6hFP2z2ZbSBa4
            source_type: api_record
            title: 中国历代人物传记资料库：王育榞（CBDB 71788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71788&o=json
            external_identifier: CBDB:71788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pQvkcSZo3VcW7iD2ZYKsDQ
        subject_person_id: p_WUxG26n9E7gKX7uzEK6HSC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1699年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7nUs4EfxL4WX2SG676pQVN
          claim_id: c_pQvkcSZo3VcW7iD2ZYKsDQ
          source_id: s_4wSQ3A7zW6hFP2z2ZbSBa4
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
        id: c_vVWjoVNUEG22yt6cPoQeen
        subject_person_id: p_WUxG26n9E7gKX7uzEK6HSC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育榞（生于1699年），清人物。籍贯猗氏。（中国历代人物传记资料库 CBDB 71788）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lfAtvhxMgKoTRl5dbYd0rz
          claim_id: c_vVWjoVNUEG22yt6cPoQeen
          source_id: s_4wSQ3A7zW6hFP2z2ZbSBa4
          stance: supports
          locator: CBDB:71788
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

# 王育榞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王育榞 | accepted |
| birth.date | 1699年 | accepted |
| bio.summary | 王育榞（生于1699年），清人物。籍贯猗氏。（中国历代人物传记资料库 CBDB 71788） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王育榞（CBDB 71788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71788&o=json)
