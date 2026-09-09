---
schema: wang-person/v1
id: p_gts1oBkBfzpZCKCuwVN44E
status: active
merged_into: null
display_name: 王培恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NiZ8ctD1LWXAT8eDDGH7ty
        subject_person_id: p_gts1oBkBfzpZCKCuwVN44E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D9R84S1X5ExpmmuTBPZ1pG
          claim_id: c_NiZ8ctD1LWXAT8eDDGH7ty
          source_id: s_NGFTqFi6V6KEufpxWXesaL
          stance: supports
          locator: CBDB:636722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636722）
          source: &a1
            id: s_NGFTqFi6V6KEufpxWXesaL
            source_type: api_record
            title: 中国历代人物传记资料库：王培恩（CBDB 636722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636722&o=json
            external_identifier: CBDB:636722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EVAfriemJ8dE875S14tK6u
        subject_person_id: p_gts1oBkBfzpZCKCuwVN44E
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
        - id: cs_nt3RBATvG9WdPhcjedYyzw
          claim_id: c_EVAfriemJ8dE875S14tK6u
          source_id: s_NGFTqFi6V6KEufpxWXesaL
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

# 王培恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王培恩 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王培恩（CBDB 636722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636722&o=json)
