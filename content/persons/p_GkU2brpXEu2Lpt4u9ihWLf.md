---
schema: wang-person/v1
id: p_GkU2brpXEu2Lpt4u9ihWLf
status: active
merged_into: null
display_name: 王仲選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HGKsF3ciivBEhsPYRuzhtd
        subject_person_id: p_GkU2brpXEu2Lpt4u9ihWLf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QR416KQNDhF32J3Bewp8RW
          claim_id: c_HGKsF3ciivBEhsPYRuzhtd
          source_id: s_fontkJoHRAXNbtd625ztRp
          stance: supports
          locator: CBDB:71580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71580）
          source: &a1
            id: s_fontkJoHRAXNbtd625ztRp
            source_type: api_record
            title: 中国历代人物传记资料库：王仲選（CBDB 71580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71580&o=json
            external_identifier: CBDB:71580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.763Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r7Lp7ps1x1DAmBrJWihT9b
        subject_person_id: p_GkU2brpXEu2Lpt4u9ihWLf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1808年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cc5658QZPRdpgjRch1D6mK
          claim_id: c_r7Lp7ps1x1DAmBrJWihT9b
          source_id: s_fontkJoHRAXNbtd625ztRp
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
        id: c_AnyWFDuKX7KckinCKDYD3Q
        subject_person_id: p_GkU2brpXEu2Lpt4u9ihWLf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲選（生于1808年），清人物。籍贯漢軍鑲白旗。（中国历代人物传记资料库 CBDB 71580）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xJrDvNHB5GfEGREmaqzBuH
          claim_id: c_AnyWFDuKX7KckinCKDYD3Q
          source_id: s_fontkJoHRAXNbtd625ztRp
          stance: supports
          locator: CBDB:71580
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

# 王仲選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲選 | accepted |
| birth.date | 1808年 | accepted |
| bio.summary | 王仲選（生于1808年），清人物。籍贯漢軍鑲白旗。（中国历代人物传记资料库 CBDB 71580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲選（CBDB 71580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71580&o=json)
