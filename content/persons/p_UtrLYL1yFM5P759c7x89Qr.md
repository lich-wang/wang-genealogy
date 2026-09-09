---
schema: wang-person/v1
id: p_UtrLYL1yFM5P759c7x89Qr
status: active
merged_into: null
display_name: 王瓖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JvMwDB9yYAHpVV2sZUcfUm
        subject_person_id: p_UtrLYL1yFM5P759c7x89Qr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MiBkSx4FUhfSunEYQMtCbF
          claim_id: c_JvMwDB9yYAHpVV2sZUcfUm
          source_id: s_7MEZnrCNJ86Z4VMVH6LN7J
          stance: supports
          locator: CBDB:10124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10124）
          source: &a1
            id: s_7MEZnrCNJ86Z4VMVH6LN7J
            source_type: api_record
            title: 中国历代人物传记资料库：王瓖（CBDB 10124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10124&o=json
            external_identifier: CBDB:10124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SFrXsLnTJiN8e2GFk9uPLn
        subject_person_id: p_UtrLYL1yFM5P759c7x89Qr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NXB5s3iL4G6gBmSVeB3hzQ
          claim_id: c_SFrXsLnTJiN8e2GFk9uPLn
          source_id: s_7MEZnrCNJ86Z4VMVH6LN7J
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

# 王瓖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓖 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓖（CBDB 10124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10124&o=json)
