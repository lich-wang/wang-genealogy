---
schema: wang-person/v1
id: p_bYKo7Lp1C6o8xTjHiYS2Hb
status: active
merged_into: null
display_name: 王垚興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BX54i2NpEFd6ap2WwCPSv
        subject_person_id: p_bYKo7Lp1C6o8xTjHiYS2Hb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垚興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dz3MbhMaQVFp6r3AahU6rq
          claim_id: c_7BX54i2NpEFd6ap2WwCPSv
          source_id: s_6yaRNdGRXLqLc4vYvzon41
          stance: supports
          locator: CBDB:636700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636700）
          source: &a1
            id: s_6yaRNdGRXLqLc4vYvzon41
            source_type: api_record
            title: 中国历代人物传记资料库：王垚興（CBDB 636700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636700&o=json
            external_identifier: CBDB:636700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BUqgAne1qcp3DoRqoc9Tet
        subject_person_id: p_bYKo7Lp1C6o8xTjHiYS2Hb
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
        - id: cs_EEVFFEXBwXDpH1sSWTP5j2
          claim_id: c_BUqgAne1qcp3DoRqoc9Tet
          source_id: s_6yaRNdGRXLqLc4vYvzon41
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

# 王垚興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垚興 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王垚興（CBDB 636700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636700&o=json)
