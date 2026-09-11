---
schema: wang-person/v1
id: p_j1LNHe7GQKbCTtvADAFCah
status: active
merged_into: null
display_name: 王琯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dfZk33CJQwJGyxYemiG538
        subject_person_id: p_j1LNHe7GQKbCTtvADAFCah
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_84i8B5jjJtCECe6oWKSPEX
          claim_id: c_dfZk33CJQwJGyxYemiG538
          source_id: s_38SmJ15cgqG7KUs5KiXPe3
          stance: supports
          locator: CBDB:71206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71206）
          source: &a1
            id: s_38SmJ15cgqG7KUs5KiXPe3
            source_type: api_record
            title: 中国历代人物传记资料库：王琯（CBDB 71206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71206&o=json
            external_identifier: CBDB:71206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VAdKLD6qN3n3LZP7kA2C5N
        subject_person_id: p_j1LNHe7GQKbCTtvADAFCah
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1640年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SozAMgfiJoFmGXk21nkMwo
          claim_id: c_VAdKLD6qN3n3LZP7kA2C5N
          source_id: s_38SmJ15cgqG7KUs5KiXPe3
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
        id: c_GpsqxcA6uenS4EkvJQsvFf
        subject_person_id: p_j1LNHe7GQKbCTtvADAFCah
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琯（生于1640年），清人物。籍贯交河。（中国历代人物传记资料库 CBDB 71206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bI_HoJN2AN9yQJqCVx2HAy
          claim_id: c_GpsqxcA6uenS4EkvJQsvFf
          source_id: s_38SmJ15cgqG7KUs5KiXPe3
          stance: supports
          locator: CBDB:71206
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

# 王琯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琯 | accepted |
| birth.date | 1640年 | accepted |
| bio.summary | 王琯（生于1640年），清人物。籍贯交河。（中国历代人物传记资料库 CBDB 71206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琯（CBDB 71206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71206&o=json)
