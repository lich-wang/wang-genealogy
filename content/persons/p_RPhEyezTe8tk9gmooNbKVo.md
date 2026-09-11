---
schema: wang-person/v1
id: p_RPhEyezTe8tk9gmooNbKVo
status: active
merged_into: null
display_name: 王齊海
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4NK5cqgZTfkYBpQZ2tfs6C
        subject_person_id: p_RPhEyezTe8tk9gmooNbKVo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊海
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wn4ivLnJCHLDwHY3Wp9GJG
          claim_id: c_4NK5cqgZTfkYBpQZ2tfs6C
          source_id: s_7yENBwDrobuRh3VuPexE2v
          stance: supports
          locator: CBDB:71609
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71609）
          source: &a1
            id: s_7yENBwDrobuRh3VuPexE2v
            source_type: api_record
            title: 中国历代人物传记资料库：王齊海（CBDB 71609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71609&o=json
            external_identifier: CBDB:71609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eqUmgzGGhhJmEumzKyMFf3
        subject_person_id: p_RPhEyezTe8tk9gmooNbKVo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZR9TzuQ3Q7VCFU8e71qwWt
          claim_id: c_eqUmgzGGhhJmEumzKyMFf3
          source_id: s_7yENBwDrobuRh3VuPexE2v
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
        id: c_oqwqwyALPtXEawfaHmV7Tk
        subject_person_id: p_RPhEyezTe8tk9gmooNbKVo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊海（生于1835年），清人物。籍贯羅田。（中国历代人物传记资料库 CBDB 71609）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F8h6iKFpjOezkQQl6v9CIB
          claim_id: c_oqwqwyALPtXEawfaHmV7Tk
          source_id: s_7yENBwDrobuRh3VuPexE2v
          stance: supports
          locator: CBDB:71609
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

# 王齊海

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王齊海 | accepted |
| birth.date | 1835年 | accepted |
| bio.summary | 王齊海（生于1835年），清人物。籍贯羅田。（中国历代人物传记资料库 CBDB 71609） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王齊海（CBDB 71609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71609&o=json)
