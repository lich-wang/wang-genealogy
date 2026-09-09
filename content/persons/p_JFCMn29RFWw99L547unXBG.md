---
schema: wang-person/v1
id: p_JFCMn29RFWw99L547unXBG
status: active
merged_into: null
display_name: 王養浩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xgBaLJ56BjH5mz8HU6FQBR
        subject_person_id: p_JFCMn29RFWw99L547unXBG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DBy8ZEjgriSncXqZJWbsKi
          claim_id: c_xgBaLJ56BjH5mz8HU6FQBR
          source_id: s_VEQu8DNf1mjbhX7V8M8uW9
          stance: supports
          locator: CBDB:203320
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203320）
          source: &a1
            id: s_VEQu8DNf1mjbhX7V8M8uW9
            source_type: api_record
            title: 中国历代人物传记资料库：王養浩（CBDB 203320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203320&o=json
            external_identifier: CBDB:203320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wNcFQFpPwhHqzoPj7QWq18
        subject_person_id: p_JFCMn29RFWw99L547unXBG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pcmD3h6M9HU4pDC6bELRsg
          claim_id: c_wNcFQFpPwhHqzoPj7QWq18
          source_id: s_VEQu8DNf1mjbhX7V8M8uW9
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
        id: c_6FGPMavrbDLD4HPbHjY73N
        subject_person_id: p_JFCMn29RFWw99L547unXBG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y9PBMauXtvs3ZEJFic5XYJ
          claim_id: c_6FGPMavrbDLD4HPbHjY73N
          source_id: s_VEQu8DNf1mjbhX7V8M8uW9
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

# 王養浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養浩 | accepted |
| birth.date | 1506年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王養浩（CBDB 203320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203320&o=json)
