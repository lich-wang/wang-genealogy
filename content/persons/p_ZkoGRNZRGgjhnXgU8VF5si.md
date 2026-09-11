---
schema: wang-person/v1
id: p_ZkoGRNZRGgjhnXgU8VF5si
status: active
merged_into: null
display_name: 王為
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oAKiFU4FF7rECTvGSnMZ3y
        subject_person_id: p_ZkoGRNZRGgjhnXgU8VF5si
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王為
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vsn6GoA69TrvGJm2NeZUvu
          claim_id: c_oAKiFU4FF7rECTvGSnMZ3y
          source_id: s_S8N3wrTjLo9X6bq2GDHztN
          stance: supports
          locator: CBDB:466817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466817）
          source: &a1
            id: s_S8N3wrTjLo9X6bq2GDHztN
            source_type: api_record
            title: 中国历代人物传记资料库：王為（CBDB 466817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466817&o=json
            external_identifier: CBDB:466817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sZW74EU1K7rA4y6mH1vJpa
        subject_person_id: p_ZkoGRNZRGgjhnXgU8VF5si
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王為，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 466817）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BNLqB-giN0Nl0AI56MH9CM
          claim_id: c_sZW74EU1K7rA4y6mH1vJpa
          source_id: s_S8N3wrTjLo9X6bq2GDHztN
          stance: supports
          locator: CBDB:466817
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王為

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王為 | accepted |
| bio.summary | 王為，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 466817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王為（CBDB 466817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466817&o=json)
