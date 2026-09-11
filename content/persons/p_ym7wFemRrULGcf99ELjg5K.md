---
schema: wang-person/v1
id: p_ym7wFemRrULGcf99ELjg5K
status: active
merged_into: null
display_name: 王克修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iHTUPNdaANHrJhdqTQ25no
        subject_person_id: p_ym7wFemRrULGcf99ELjg5K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KzvU8LawkJdGysqQuyBPRA
          claim_id: c_iHTUPNdaANHrJhdqTQ25no
          source_id: s_G9ajDCZkXJBT7xixmB2H9S
          stance: supports
          locator: CBDB:101195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101195）
          source: &a1
            id: s_G9ajDCZkXJBT7xixmB2H9S
            source_type: api_record
            title: 中国历代人物传记资料库：王克修（CBDB 101195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101195&o=json
            external_identifier: CBDB:101195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q8YYYte4GRcUqxQEzzSq1W
        subject_person_id: p_ym7wFemRrULGcf99ELjg5K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克修，元人物。籍贯高唐，曾任祕書監校書郎、祕書監著作佐郎。（中国历代人物传记资料库 CBDB 101195）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oAnZyb8Yr5dV4NyywwCgwr
          claim_id: c_q8YYYte4GRcUqxQEzzSq1W
          source_id: s_G9ajDCZkXJBT7xixmB2H9S
          stance: supports
          locator: CBDB:101195
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

# 王克修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克修 | accepted |
| bio.summary | 王克修，元人物。籍贯高唐，曾任祕書監校書郎、祕書監著作佐郎。（中国历代人物传记资料库 CBDB 101195） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克修（CBDB 101195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101195&o=json)
