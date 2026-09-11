---
schema: wang-person/v1
id: p_Lcw5fK3UvDYCU67Rrjmu43
status: active
merged_into: null
display_name: 王建業
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kvd5V6qtB7p4MSGbi1ueTL
        subject_person_id: p_Lcw5fK3UvDYCU67Rrjmu43
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qpgTtKdFHxs2AwwfVjE1hb
          claim_id: c_Kvd5V6qtB7p4MSGbi1ueTL
          source_id: s_sMLjjxsKz2ky3WFtLWQVQX
          stance: supports
          locator: CBDB:637593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637593）
          source: &a1
            id: s_sMLjjxsKz2ky3WFtLWQVQX
            source_type: api_record
            title: 中国历代人物传记资料库：王建業（CBDB 637593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637593&o=json
            external_identifier: CBDB:637593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fYM92yzzKMfmZstAUckJPd
        subject_person_id: p_Lcw5fK3UvDYCU67Rrjmu43
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建業，清人物。籍贯雲夢，入仕廩貢生，曾任知州。（中国历代人物传记资料库 CBDB 637593）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FkGJeURGTy_DT8pQDZwnDY
          claim_id: c_fYM92yzzKMfmZstAUckJPd
          source_id: s_sMLjjxsKz2ky3WFtLWQVQX
          stance: supports
          locator: CBDB:637593
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

# 王建業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建業 | accepted |
| bio.summary | 王建業，清人物。籍贯雲夢，入仕廩貢生，曾任知州。（中国历代人物传记资料库 CBDB 637593） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建業（CBDB 637593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637593&o=json)
