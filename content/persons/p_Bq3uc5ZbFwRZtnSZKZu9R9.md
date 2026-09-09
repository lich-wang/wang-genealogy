---
schema: wang-person/v1
id: p_Bq3uc5ZbFwRZtnSZKZu9R9
status: active
merged_into: null
display_name: 王思恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q3hX3xerpXs4Ji1pTi78Z5
        subject_person_id: p_Bq3uc5ZbFwRZtnSZKZu9R9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7FX1vCxP4CvC48N5Qa4QGB
          claim_id: c_q3hX3xerpXs4Ji1pTi78Z5
          source_id: s_MmveL59Kn9gVnJMpNDDScN
          stance: supports
          locator: CBDB:690435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690435）
          source: &a1
            id: s_MmveL59Kn9gVnJMpNDDScN
            source_type: api_record
            title: 中国历代人物传记资料库：王思恭（CBDB 690435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690435&o=json
            external_identifier: CBDB:690435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zXtMP3Q9CsbEGnd3DrU63p
        subject_person_id: p_Bq3uc5ZbFwRZtnSZKZu9R9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1242年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HFVo52V8fx3FnFTRLECPaH
          claim_id: c_zXtMP3Q9CsbEGnd3DrU63p
          source_id: s_MmveL59Kn9gVnJMpNDDScN
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
        id: c_Uf2CgCqhhCid3rzo2HiAzY
        subject_person_id: p_Bq3uc5ZbFwRZtnSZKZu9R9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1316年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uKXNSnTAZPTXsCsT8e6fyk
          claim_id: c_Uf2CgCqhhCid3rzo2HiAzY
          source_id: s_MmveL59Kn9gVnJMpNDDScN
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
        id: c_vaHvQxVQKme1FLGL1VeTfC
        subject_person_id: p_Bq3uc5ZbFwRZtnSZKZu9R9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qzAuSAYzhR5a686fE93CEV
          claim_id: c_vaHvQxVQKme1FLGL1VeTfC
          source_id: s_MmveL59Kn9gVnJMpNDDScN
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

# 王思恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思恭 | accepted |
| birth.date | 1242年 | accepted |
| death.date | 1316年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思恭（CBDB 690435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690435&o=json)
