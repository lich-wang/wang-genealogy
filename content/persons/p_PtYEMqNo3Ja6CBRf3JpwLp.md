---
schema: wang-person/v1
id: p_PtYEMqNo3Ja6CBRf3JpwLp
status: active
merged_into: null
display_name: 王希儁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cKTzoovxrjHPzUAUX9Rirz
        subject_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希儁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_psDemwJPCry8jEtZrQJN8C
          claim_id: c_cKTzoovxrjHPzUAUX9Rirz
          source_id: s_xrt4f93dp6af9Q6LA6B4bQ
          stance: supports
          locator: CBDB:160576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160576）
          source: &a1
            id: s_xrt4f93dp6af9Q6LA6B4bQ
            source_type: api_record
            title: 中国历代人物传记资料库：王希儁（CBDB 160576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160576&o=json
            external_identifier: CBDB:160576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_irr61P236DbxwGYnaDHot6
        subject_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
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
        - id: cs_DahEnVV2vGqtzZUKjTrxLR
          claim_id: c_irr61P236DbxwGYnaDHot6
          source_id: s_xrt4f93dp6af9Q6LA6B4bQ
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

# 王希儁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希儁 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希儁（CBDB 160576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160576&o=json)
