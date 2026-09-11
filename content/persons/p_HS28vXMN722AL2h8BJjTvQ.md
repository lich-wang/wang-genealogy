---
schema: wang-person/v1
id: p_HS28vXMN722AL2h8BJjTvQ
status: active
merged_into: null
display_name: 王朝襄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DX9gpVTaKR2BbpXtq8Eyes
        subject_person_id: p_HS28vXMN722AL2h8BJjTvQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝襄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bYgRM9dy4Pr2bBY2RB1E73
          claim_id: c_DX9gpVTaKR2BbpXtq8Eyes
          source_id: s_4N5Hf9LGd3DKyqb8ALuz4f
          stance: supports
          locator: CBDB:638642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638642）
          source: &a1
            id: s_4N5Hf9LGd3DKyqb8ALuz4f
            source_type: api_record
            title: 中国历代人物传记资料库：王朝襄（CBDB 638642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638642&o=json
            external_identifier: CBDB:638642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_462omD2ipb58juDXy1CDg9
        subject_person_id: p_HS28vXMN722AL2h8BJjTvQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝襄，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 638642）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9GPL0H4GxDRT_wgNBV47Ox
          claim_id: c_462omD2ipb58juDXy1CDg9
          source_id: s_4N5Hf9LGd3DKyqb8ALuz4f
          stance: supports
          locator: CBDB:638642
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

# 王朝襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝襄 | accepted |
| bio.summary | 王朝襄，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 638642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝襄（CBDB 638642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638642&o=json)
