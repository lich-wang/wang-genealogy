---
schema: wang-person/v1
id: p_V7yvTvzLSWZD34rKuFZ6kq
status: active
merged_into: null
display_name: 王成羲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ArWcr6d9zaFJpXpxbe1K4j
        subject_person_id: p_V7yvTvzLSWZD34rKuFZ6kq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成羲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QFX3UAT611pjBDtPpBQu7q
          claim_id: c_ArWcr6d9zaFJpXpxbe1K4j
          source_id: s_KB8gmfKGsgWR353Dq47Cad
          stance: supports
          locator: CBDB:638047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638047）
          source: &a1
            id: s_KB8gmfKGsgWR353Dq47Cad
            source_type: api_record
            title: 中国历代人物传记资料库：王成羲（CBDB 638047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638047&o=json
            external_identifier: CBDB:638047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZNKVDg95yQNZvRV93dSaFj
        subject_person_id: p_V7yvTvzLSWZD34rKuFZ6kq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成羲，清人物。籍贯韓城，入仕進士，曾任郎中。（中国历代人物传记资料库 CBDB 638047）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mKx_prBy7aWcVR9KGbSg43
          claim_id: c_ZNKVDg95yQNZvRV93dSaFj
          source_id: s_KB8gmfKGsgWR353Dq47Cad
          stance: supports
          locator: CBDB:638047
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

# 王成羲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成羲 | accepted |
| bio.summary | 王成羲，清人物。籍贯韓城，入仕進士，曾任郎中。（中国历代人物传记资料库 CBDB 638047） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成羲（CBDB 638047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638047&o=json)
