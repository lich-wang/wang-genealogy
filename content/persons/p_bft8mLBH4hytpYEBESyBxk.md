---
schema: wang-person/v1
id: p_bft8mLBH4hytpYEBESyBxk
status: active
merged_into: null
display_name: 王存禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4g4E3sYR5pND4eXkjuGiEZ
        subject_person_id: p_bft8mLBH4hytpYEBESyBxk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2KcYzSFLiQPcUQDvo1y8Mf
          claim_id: c_4g4E3sYR5pND4eXkjuGiEZ
          source_id: s_ArMfVPR3LYh15xERd7UxKD
          stance: supports
          locator: CBDB:637002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637002）
          source: &a1
            id: s_ArMfVPR3LYh15xERd7UxKD
            source_type: api_record
            title: 中国历代人物传记资料库：王存禮（CBDB 637002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637002&o=json
            external_identifier: CBDB:637002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eVrmtK1Xg3BZ1kFuhxwJBM
        subject_person_id: p_bft8mLBH4hytpYEBESyBxk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存禮，清人物。籍贯鳳翔，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637002）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V0w8-MHc5xOYbCvg40r5Bv
          claim_id: c_eVrmtK1Xg3BZ1kFuhxwJBM
          source_id: s_ArMfVPR3LYh15xERd7UxKD
          stance: supports
          locator: CBDB:637002
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

# 王存禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存禮 | accepted |
| bio.summary | 王存禮，清人物。籍贯鳳翔，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637002） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王存禮（CBDB 637002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637002&o=json)
