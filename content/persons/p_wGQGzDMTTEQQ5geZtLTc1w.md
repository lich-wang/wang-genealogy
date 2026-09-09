---
schema: wang-person/v1
id: p_wGQGzDMTTEQQ5geZtLTc1w
status: active
merged_into: null
display_name: 王遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_76NSPjb4KmgYJo4FUD4bd4
        subject_person_id: p_wGQGzDMTTEQQ5geZtLTc1w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PmoCnkJrxaVsdrUBDi8bc4
          claim_id: c_76NSPjb4KmgYJo4FUD4bd4
          source_id: s_6wGGY2fKxE9Ho49aKeAynT
          stance: supports
          locator: CBDB:186147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186147）
          source: &a1
            id: s_6wGGY2fKxE9Ho49aKeAynT
            source_type: api_record
            title: 中国历代人物传记资料库：王遠（CBDB 186147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186147&o=json
            external_identifier: CBDB:186147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6xakTaVEQJi8FvESj6wvGt
        subject_person_id: p_wGQGzDMTTEQQ5geZtLTc1w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 910年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w23wrvNJSTB8KGcHwpgrg2
          claim_id: c_6xakTaVEQJi8FvESj6wvGt
          source_id: s_6wGGY2fKxE9Ho49aKeAynT
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
        id: c_L7GYcNRsJA5y6Pq6pcRJV1
        subject_person_id: p_wGQGzDMTTEQQ5geZtLTc1w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wD3mDczsqN6iRrzqKqehai
          claim_id: c_L7GYcNRsJA5y6Pq6pcRJV1
          source_id: s_6wGGY2fKxE9Ho49aKeAynT
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

# 王遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遠 | accepted |
| death.date | 910年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遠（CBDB 186147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186147&o=json)
