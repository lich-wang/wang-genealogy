---
schema: wang-person/v1
id: p_n67UDHKQ8B7G7ZBAdZTYxv
status: active
merged_into: null
display_name: 王本培
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3fhQmBgKjkruzganUsbesC
        subject_person_id: p_n67UDHKQ8B7G7ZBAdZTYxv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本培
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wzg1hLuYBN4XuMc2EeuV3u
          claim_id: c_3fhQmBgKjkruzganUsbesC
          source_id: s_mdCtgm9NAz4XDoWohG8Uvs
          stance: supports
          locator: CBDB:638655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638655）
          source: &a1
            id: s_mdCtgm9NAz4XDoWohG8Uvs
            source_type: api_record
            title: 中国历代人物传记资料库：王本培（CBDB 638655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638655&o=json
            external_identifier: CBDB:638655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jw7W3mQr7hbMXe9n3B1G3C
        subject_person_id: p_n67UDHKQ8B7G7ZBAdZTYxv
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
        - id: cs_dAEK4fCeV3BUC5EoTEcZUY
          claim_id: c_Jw7W3mQr7hbMXe9n3B1G3C
          source_id: s_mdCtgm9NAz4XDoWohG8Uvs
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

# 王本培

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本培 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本培（CBDB 638655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638655&o=json)
