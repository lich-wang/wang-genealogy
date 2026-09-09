---
schema: wang-person/v1
id: p_QLgwLiCECiE1p8mSDqA755
status: active
merged_into: null
display_name: 王嘉言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4uzjdefLKW6QL4rxdnz44L
        subject_person_id: p_QLgwLiCECiE1p8mSDqA755
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J1k6e4j7qiFvHR77o9zQqY
          claim_id: c_4uzjdefLKW6QL4rxdnz44L
          source_id: s_P5x6oTuKpVnaEe2bHCeJXy
          stance: supports
          locator: CBDB:479102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479102）
          source: &a1
            id: s_P5x6oTuKpVnaEe2bHCeJXy
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 479102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479102&o=json
            external_identifier: CBDB:479102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eMKLjUPUyU8bENkTXLD1f4
        subject_person_id: p_QLgwLiCECiE1p8mSDqA755
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5fWjNGgQ7HDzzotZqeVNEj
          claim_id: c_eMKLjUPUyU8bENkTXLD1f4
          source_id: s_P5x6oTuKpVnaEe2bHCeJXy
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

# 王嘉言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉言 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉言（CBDB 479102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479102&o=json)
