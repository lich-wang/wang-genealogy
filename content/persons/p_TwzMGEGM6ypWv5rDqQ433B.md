---
schema: wang-person/v1
id: p_TwzMGEGM6ypWv5rDqQ433B
status: active
merged_into: null
display_name: 王瑬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4R96Ceq43EVJFpJRVBHyPe
        subject_person_id: p_TwzMGEGM6ypWv5rDqQ433B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7kiPK48AHQWPq64V88fsHS
          claim_id: c_4R96Ceq43EVJFpJRVBHyPe
          source_id: s_44gvPcH135rPh8iKhs1BbJ
          stance: supports
          locator: CBDB:71274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71274）
          source: &a1
            id: s_44gvPcH135rPh8iKhs1BbJ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑬（CBDB 71274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71274&o=json
            external_identifier: CBDB:71274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XBGzGA5qgz546vqkHmTx6A
        subject_person_id: p_TwzMGEGM6ypWv5rDqQ433B
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1786年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zSxcwFAv4pRQMsyacmTLaS
          claim_id: c_XBGzGA5qgz546vqkHmTx6A
          source_id: s_44gvPcH135rPh8iKhs1BbJ
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
        id: c_v8RjYbuCYuzmVFX6iA4RjX
        subject_person_id: p_TwzMGEGM6ypWv5rDqQ433B
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1843年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mFEc2x2gF1AcmYYdYAFAhc
          claim_id: c_v8RjYbuCYuzmVFX6iA4RjX
          source_id: s_44gvPcH135rPh8iKhs1BbJ
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
        id: c_yh2T9AU5y4oTTpD7TFMr5X
        subject_person_id: p_TwzMGEGM6ypWv5rDqQ433B
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
        - id: cs_SfGf57krZyfubjK1E1k9XZ
          claim_id: c_yh2T9AU5y4oTTpD7TFMr5X
          source_id: s_44gvPcH135rPh8iKhs1BbJ
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

# 王瑬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑬 | accepted |
| birth.date | 1786年 | accepted |
| death.date | 1843年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑬（CBDB 71274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71274&o=json)
