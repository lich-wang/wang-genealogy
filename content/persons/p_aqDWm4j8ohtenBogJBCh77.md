---
schema: wang-person/v1
id: p_aqDWm4j8ohtenBogJBCh77
status: active
merged_into: null
display_name: 王學洙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5zUq2xCgg3APtoJ8FcELZf
        subject_person_id: p_aqDWm4j8ohtenBogJBCh77
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學洙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NfqHGoc8rYzACGdBK1MqMu
          claim_id: c_5zUq2xCgg3APtoJ8FcELZf
          source_id: s_iUW3pFWP4vUgBDGsV75n6w
          stance: supports
          locator: CBDB:637041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637041）
          source: &a1
            id: s_iUW3pFWP4vUgBDGsV75n6w
            source_type: api_record
            title: 中国历代人物传记资料库：王學洙（CBDB 637041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637041&o=json
            external_identifier: CBDB:637041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZaJf4Akc82hcUw1LGa82Zo
        subject_person_id: p_aqDWm4j8ohtenBogJBCh77
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學洙，清人物。籍贯西安，曾任訓導。（中国历代人物传记资料库 CBDB 637041）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cWDiSOe_bRnRjq_u0chjEY
          claim_id: c_ZaJf4Akc82hcUw1LGa82Zo
          source_id: s_iUW3pFWP4vUgBDGsV75n6w
          stance: supports
          locator: CBDB:637041
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

# 王學洙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學洙 | accepted |
| bio.summary | 王學洙，清人物。籍贯西安，曾任訓導。（中国历代人物传记资料库 CBDB 637041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學洙（CBDB 637041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637041&o=json)
