---
schema: wang-person/v1
id: p_aG8FzuNz48CBLEy1C1BJLw
status: active
merged_into: null
display_name: 王恩錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nhm5zWvCTqWRj8H6iHPpSS
        subject_person_id: p_aG8FzuNz48CBLEy1C1BJLw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j34BRx2ZDGngAoFksuJ61U
          claim_id: c_Nhm5zWvCTqWRj8H6iHPpSS
          source_id: s_vPB3YZj8iauTHCNad1Z8Xc
          stance: supports
          locator: CBDB:637864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637864）
          source: &a1
            id: s_vPB3YZj8iauTHCNad1Z8Xc
            source_type: api_record
            title: 中国历代人物传记资料库：王恩錫（CBDB 637864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637864&o=json
            external_identifier: CBDB:637864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c6CxKMt237ptAYJsMVVRVF
        subject_person_id: p_aG8FzuNz48CBLEy1C1BJLw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩錫，清人物。籍贯江蘇省，入仕鄉貢舉人，曾任郎中。（中国历代人物传记资料库 CBDB 637864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nCa7tDwbcwAYRsarkDaEAk
          claim_id: c_c6CxKMt237ptAYJsMVVRVF
          source_id: s_vPB3YZj8iauTHCNad1Z8Xc
          stance: supports
          locator: CBDB:637864
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

# 王恩錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩錫 | accepted |
| bio.summary | 王恩錫，清人物。籍贯江蘇省，入仕鄉貢舉人，曾任郎中。（中国历代人物传记资料库 CBDB 637864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩錫（CBDB 637864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637864&o=json)
