---
schema: wang-person/v1
id: p_HuX9ZC3Z1HFKhxKLEPM5Jc
status: active
merged_into: null
display_name: 王獻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cJtqKWhXJ7N87p3yGZ8YDT
        subject_person_id: p_HuX9ZC3Z1HFKhxKLEPM5Jc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ArzvVREG45pAg2JbNY5oUr
          claim_id: c_cJtqKWhXJ7N87p3yGZ8YDT
          source_id: s_ByHQMKLcwRSHVABr5hRTvV
          stance: supports
          locator: CBDB:126876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126876）
          source: &a1
            id: s_ByHQMKLcwRSHVABr5hRTvV
            source_type: api_record
            title: 中国历代人物传记资料库：王獻（CBDB 126876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126876&o=json
            external_identifier: CBDB:126876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UxsqBKJXJTk6tPAD6aS7N2
        subject_person_id: p_HuX9ZC3Z1HFKhxKLEPM5Jc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1487年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_khxR694PqM9WtRTLyBqKaw
          claim_id: c_UxsqBKJXJTk6tPAD6aS7N2
          source_id: s_ByHQMKLcwRSHVABr5hRTvV
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
        id: c_5tD6A4Bgwp3kQYdFa3ErQz
        subject_person_id: p_HuX9ZC3Z1HFKhxKLEPM5Jc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1547年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJY6GdNWScQwkwRMZo4V2M
          claim_id: c_5tD6A4Bgwp3kQYdFa3ErQz
          source_id: s_ByHQMKLcwRSHVABr5hRTvV
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
        id: c_eFL3EkTaA7RKqqNbqhoahd
        subject_person_id: p_HuX9ZC3Z1HFKhxKLEPM5Jc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻（1487年—1547年），明人物。籍贯咸寧。（中国历代人物传记资料库 CBDB 126876）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gMolPntXslGStRQKxy7W2N
          claim_id: c_eFL3EkTaA7RKqqNbqhoahd
          source_id: s_ByHQMKLcwRSHVABr5hRTvV
          stance: supports
          locator: CBDB:126876
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

# 王獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻 | accepted |
| birth.date | 1487年 | accepted |
| death.date | 1547年 | accepted |
| bio.summary | 王獻（1487年—1547年），明人物。籍贯咸寧。（中国历代人物传记资料库 CBDB 126876） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獻（CBDB 126876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126876&o=json)
