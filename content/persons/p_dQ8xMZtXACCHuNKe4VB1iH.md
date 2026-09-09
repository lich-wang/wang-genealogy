---
schema: wang-person/v1
id: p_dQ8xMZtXACCHuNKe4VB1iH
status: active
merged_into: null
display_name: 王泉之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QEFqSDFhwKf5pT9tdwJV4X
        subject_person_id: p_dQ8xMZtXACCHuNKe4VB1iH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泉之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2nctsT9Lt2Q9o51aRuJc76
          claim_id: c_QEFqSDFhwKf5pT9tdwJV4X
          source_id: s_tzUWNHJ1Lu7cQV2v1586L4
          stance: supports
          locator: CBDB:71894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71894）
          source: &a1
            id: s_tzUWNHJ1Lu7cQV2v1586L4
            source_type: api_record
            title: 中国历代人物传记资料库：王泉之（CBDB 71894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71894&o=json
            external_identifier: CBDB:71894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_w7gPNHbvniYpxgvDcVuaqL
        subject_person_id: p_dQ8xMZtXACCHuNKe4VB1iH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1763年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oL4drKCiUoLJcgfmcegZfX
          claim_id: c_w7gPNHbvniYpxgvDcVuaqL
          source_id: s_tzUWNHJ1Lu7cQV2v1586L4
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
        id: c_P5nQpmv1E7jiBKtD2NBfrG
        subject_person_id: p_dQ8xMZtXACCHuNKe4VB1iH
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
        - id: cs_iNkx2BFnGGpuyGP9ScaKv4
          claim_id: c_P5nQpmv1E7jiBKtD2NBfrG
          source_id: s_tzUWNHJ1Lu7cQV2v1586L4
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

# 王泉之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泉之 | accepted |
| birth.date | 1763年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泉之（CBDB 71894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71894&o=json)
