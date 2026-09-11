---
schema: wang-person/v1
id: p_mHUVFwXaeQu7J56UWrCMvF
status: active
merged_into: null
display_name: 王勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7D3D25SXEp6pQgLSbeCnV7
        subject_person_id: p_mHUVFwXaeQu7J56UWrCMvF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8yBZFFY8F4A7XTJPDTMCxs
          claim_id: c_7D3D25SXEp6pQgLSbeCnV7
          source_id: s_NeyLB965hB8gvNtQ2Qq4rz
          stance: supports
          locator: CBDB:100954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100954）
          source: &a1
            id: s_NeyLB965hB8gvNtQ2Qq4rz
            source_type: api_record
            title: 中国历代人物传记资料库：王勳（CBDB 100954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100954&o=json
            external_identifier: CBDB:100954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.597Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PvRRyTjuqMTU7NFwi6jvaz
        subject_person_id: p_mHUVFwXaeQu7J56UWrCMvF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1259年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LepXpXc7DnTCrYnC4pYbDi
          claim_id: c_PvRRyTjuqMTU7NFwi6jvaz
          source_id: s_NeyLB965hB8gvNtQ2Qq4rz
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
        id: c_WhSSFAnibj6879RH49QXn4
        subject_person_id: p_mHUVFwXaeQu7J56UWrCMvF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1335年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sdF1qaGrKHazDuwWawhQeC
          claim_id: c_WhSSFAnibj6879RH49QXn4
          source_id: s_NeyLB965hB8gvNtQ2Qq4rz
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
        id: c_Mm7iiqxJzrAsWH3wjccBSH
        subject_person_id: p_mHUVFwXaeQu7J56UWrCMvF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳（1259年—1335年），元人物。籍贯開化，身份为書院山長，曾任諸路總管府儒學教授、縣學教諭、書院山長。（中国历代人物传记资料库 CBDB 100954）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_un6ayL2sYMj5uhtv1znOY-
          claim_id: c_Mm7iiqxJzrAsWH3wjccBSH
          source_id: s_NeyLB965hB8gvNtQ2Qq4rz
          stance: supports
          locator: CBDB:100954
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

# 王勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勳 | accepted |
| birth.date | 1259年 | accepted |
| death.date | 1335年 | accepted |
| bio.summary | 王勳（1259年—1335年），元人物。籍贯開化，身份为書院山長，曾任諸路總管府儒學教授、縣學教諭、書院山長。（中国历代人物传记资料库 CBDB 100954） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勳（CBDB 100954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100954&o=json)
