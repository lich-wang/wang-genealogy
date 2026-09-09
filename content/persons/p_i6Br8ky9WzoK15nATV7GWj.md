---
schema: wang-person/v1
id: p_i6Br8ky9WzoK15nATV7GWj
status: active
merged_into: null
display_name: 王朝勝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_USP83Jxsv4g8aGEKj7hkHX
        subject_person_id: p_i6Br8ky9WzoK15nATV7GWj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝勝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zzBDW4oPNJpkFTiNHqsnMP
          claim_id: c_USP83Jxsv4g8aGEKj7hkHX
          source_id: s_oypCxzwsDntMyjf2KzS3ME
          stance: supports
          locator: CBDB:69386
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69386）
          source: &a1
            id: s_oypCxzwsDntMyjf2KzS3ME
            source_type: api_record
            title: 中国历代人物传记资料库：王朝勝（CBDB 69386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69386&o=json
            external_identifier: CBDB:69386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.115Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GeE4mznUetNF5tpvqzXSPG
        subject_person_id: p_i6Br8ky9WzoK15nATV7GWj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1863年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xa5ZsA5HKiRCoSraZUHu2U
          claim_id: c_GeE4mznUetNF5tpvqzXSPG
          source_id: s_oypCxzwsDntMyjf2KzS3ME
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
        id: c_XVfyJqv7uMLUX1aQMz5YzG
        subject_person_id: p_i6Br8ky9WzoK15nATV7GWj
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
        - id: cs_zpf717hRQ2sDuHGhPNUJHm
          claim_id: c_XVfyJqv7uMLUX1aQMz5YzG
          source_id: s_oypCxzwsDntMyjf2KzS3ME
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

# 王朝勝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝勝 | accepted |
| death.date | 1863年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝勝（CBDB 69386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69386&o=json)
