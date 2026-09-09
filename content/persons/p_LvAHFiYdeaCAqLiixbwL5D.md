---
schema: wang-person/v1
id: p_LvAHFiYdeaCAqLiixbwL5D
status: active
merged_into: null
display_name: 王伸之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TFMUMxEqbEkfQJbp9VdnUW
        subject_person_id: p_LvAHFiYdeaCAqLiixbwL5D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S1Jr4vVDebGN93KNX6UKps
          claim_id: c_TFMUMxEqbEkfQJbp9VdnUW
          source_id: s_8VCKreGFM8cvr2DUmMH9Hh
          stance: supports
          locator: CBDB:413862
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（413862）
          source: &a1
            id: s_8VCKreGFM8cvr2DUmMH9Hh
            source_type: api_record
            title: 中国历代人物传记资料库：王伸之（CBDB 413862）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413862&o=json
            external_identifier: CBDB:413862
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D5GEhw4uvHULD2fCuQw2fU
        subject_person_id: p_LvAHFiYdeaCAqLiixbwL5D
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
        - id: cs_i9mQhp18CM2JR9VadHVopp
          claim_id: c_D5GEhw4uvHULD2fCuQw2fU
          source_id: s_8VCKreGFM8cvr2DUmMH9Hh
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

# 王伸之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伸之 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伸之（CBDB 413862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413862&o=json)
