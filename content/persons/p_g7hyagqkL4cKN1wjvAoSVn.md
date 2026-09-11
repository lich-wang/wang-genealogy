---
schema: wang-person/v1
id: p_g7hyagqkL4cKN1wjvAoSVn
status: active
merged_into: null
display_name: 王伸漢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TsZrxBjdjYMMWmrHxe3AbL
        subject_person_id: p_g7hyagqkL4cKN1wjvAoSVn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸漢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6R5LLPrhG71AogQX3FAojE
          claim_id: c_TsZrxBjdjYMMWmrHxe3AbL
          source_id: s_1nTQcyrd67QfvHKFVuSdAz
          stance: supports
          locator: CBDB:635983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635983）
          source: &a1
            id: s_1nTQcyrd67QfvHKFVuSdAz
            source_type: api_record
            title: 中国历代人物传记资料库：王伸漢（CBDB 635983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635983&o=json
            external_identifier: CBDB:635983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PLBUG7GHYPbB8hN6RoMyEp
        subject_person_id: p_g7hyagqkL4cKN1wjvAoSVn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸漢，清人物。籍贯渭南，入仕監生，曾任典史、知縣。（中国历代人物传记资料库 CBDB 635983）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wlk1MG1nBD3wl3_g4WG9MY
          claim_id: c_PLBUG7GHYPbB8hN6RoMyEp
          source_id: s_1nTQcyrd67QfvHKFVuSdAz
          stance: supports
          locator: CBDB:635983
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

# 王伸漢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伸漢 | accepted |
| bio.summary | 王伸漢，清人物。籍贯渭南，入仕監生，曾任典史、知縣。（中国历代人物传记资料库 CBDB 635983） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伸漢（CBDB 635983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635983&o=json)
