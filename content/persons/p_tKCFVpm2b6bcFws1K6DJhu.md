---
schema: wang-person/v1
id: p_tKCFVpm2b6bcFws1K6DJhu
status: active
merged_into: null
display_name: 王毓濓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5tGSNk6h4zDwHY4yL4dMgN
        subject_person_id: p_tKCFVpm2b6bcFws1K6DJhu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓濓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GzyAM38TzxaSHx6s7kSFxL
          claim_id: c_5tGSNk6h4zDwHY4yL4dMgN
          source_id: s_xH7TnxvSbq3pjjW569s9PF
          stance: supports
          locator: CBDB:638955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638955）
          source: &a1
            id: s_xH7TnxvSbq3pjjW569s9PF
            source_type: api_record
            title: 中国历代人物传记资料库：王毓濓（CBDB 638955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638955&o=json
            external_identifier: CBDB:638955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_91aQ1dKg5tZPQZocan75a5
        subject_person_id: p_tKCFVpm2b6bcFws1K6DJhu
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
        - id: cs_Yc3C11RmEU5TPVBT5zALxi
          claim_id: c_91aQ1dKg5tZPQZocan75a5
          source_id: s_xH7TnxvSbq3pjjW569s9PF
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

# 王毓濓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓濓 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓濓（CBDB 638955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638955&o=json)
