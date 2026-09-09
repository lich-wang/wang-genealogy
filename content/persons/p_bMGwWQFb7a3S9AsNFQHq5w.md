---
schema: wang-person/v1
id: p_bMGwWQFb7a3S9AsNFQHq5w
status: active
merged_into: null
display_name: 王英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yJKbiX8n7igBbg2kNh9QNV
        subject_person_id: p_bMGwWQFb7a3S9AsNFQHq5w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xSpJh6UpvpmtwiK4Q395TL
          claim_id: c_yJKbiX8n7igBbg2kNh9QNV
          source_id: s_15qce7SRcTSEB2Pj7cqFoF
          stance: supports
          locator: CBDB:66848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66848）
          source: &a1
            id: s_15qce7SRcTSEB2Pj7cqFoF
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 66848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66848&o=json
            external_identifier: CBDB:66848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_26xu4BJAERnqNCEFB4yzEi
        subject_person_id: p_bMGwWQFb7a3S9AsNFQHq5w
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1376年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rf1uWsPmTe6mpLgTDdQ3Dm
          claim_id: c_26xu4BJAERnqNCEFB4yzEi
          source_id: s_15qce7SRcTSEB2Pj7cqFoF
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
        id: c_QdCYYuhjNtnq6msJwZNQaq
        subject_person_id: p_bMGwWQFb7a3S9AsNFQHq5w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TvhHHJHDeLVfmuc5LNV9vF
          claim_id: c_QdCYYuhjNtnq6msJwZNQaq
          source_id: s_15qce7SRcTSEB2Pj7cqFoF
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
        id: c_TLFPrgMfgkart3ZdhBcU3v
        subject_person_id: p_bMGwWQFb7a3S9AsNFQHq5w
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
        - id: cs_CpDKy2TDe7Caw7sQApB248
          claim_id: c_TLFPrgMfgkart3ZdhBcU3v
          source_id: s_15qce7SRcTSEB2Pj7cqFoF
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

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| birth.date | 1376年 | accepted |
| death.date | 1450年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 66848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66848&o=json)
