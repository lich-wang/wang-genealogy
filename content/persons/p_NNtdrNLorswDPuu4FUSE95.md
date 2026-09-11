---
schema: wang-person/v1
id: p_NNtdrNLorswDPuu4FUSE95
status: active
merged_into: null
display_name: 王承玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_duzhHNWjjSc5aT47ukBZ19
        subject_person_id: p_NNtdrNLorswDPuu4FUSE95
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wZbDoJxXAjcdwNYMv2L6PY
          claim_id: c_duzhHNWjjSc5aT47ukBZ19
          source_id: s_3mt2D6DjtU3X1VABaVZyuJ
          stance: supports
          locator: CBDB:638096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638096）
          source: &a1
            id: s_3mt2D6DjtU3X1VABaVZyuJ
            source_type: api_record
            title: 中国历代人物传记资料库：王承玉（CBDB 638096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638096&o=json
            external_identifier: CBDB:638096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n5eCWfxQ35UMHkBDVUAYEh
        subject_person_id: p_NNtdrNLorswDPuu4FUSE95
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承玉，清人物。籍贯慈利，入仕監生，曾任州判。（中国历代人物传记资料库 CBDB 638096）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zquVHa97l168LHDAE7NAIP
          claim_id: c_n5eCWfxQ35UMHkBDVUAYEh
          source_id: s_3mt2D6DjtU3X1VABaVZyuJ
          stance: supports
          locator: CBDB:638096
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

# 王承玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承玉 | accepted |
| bio.summary | 王承玉，清人物。籍贯慈利，入仕監生，曾任州判。（中国历代人物传记资料库 CBDB 638096） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承玉（CBDB 638096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638096&o=json)
