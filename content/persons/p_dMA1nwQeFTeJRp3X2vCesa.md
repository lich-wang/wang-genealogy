---
schema: wang-person/v1
id: p_dMA1nwQeFTeJRp3X2vCesa
status: active
merged_into: null
display_name: 王安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qqeoqExMSy3K3nU8Eg77ho
        subject_person_id: p_dMA1nwQeFTeJRp3X2vCesa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aaZY8DDsWp6ebeJYDgDs6t
          claim_id: c_qqeoqExMSy3K3nU8Eg77ho
          source_id: s_pFV7t1LPQncE2cJCbr3mk5
          stance: supports
          locator: CBDB:573435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573435）
          source: &a1
            id: s_pFV7t1LPQncE2cJCbr3mk5
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 573435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573435&o=json
            external_identifier: CBDB:573435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T8WmZaPM3tR356Dgepe1vH
        subject_person_id: p_dMA1nwQeFTeJRp3X2vCesa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3EdA3oCvyjDU68KrQ6u8X3
          claim_id: c_T8WmZaPM3tR356Dgepe1vH
          source_id: s_pFV7t1LPQncE2cJCbr3mk5
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

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 573435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573435&o=json)
