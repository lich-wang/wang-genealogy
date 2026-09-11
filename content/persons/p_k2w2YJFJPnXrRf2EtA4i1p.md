---
schema: wang-person/v1
id: p_k2w2YJFJPnXrRf2EtA4i1p
status: active
merged_into: null
display_name: 王濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LHBNZCUAxnHgbXAHsyULGB
        subject_person_id: p_k2w2YJFJPnXrRf2EtA4i1p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t4gQn79oQUNNtkL5GK6Wo1
          claim_id: c_LHBNZCUAxnHgbXAHsyULGB
          source_id: s_xrW7yhp9qHy4Vrxj898jHB
          stance: supports
          locator: CBDB:489285
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489285）
          source: &a1
            id: s_xrW7yhp9qHy4Vrxj898jHB
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 489285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489285&o=json
            external_identifier: CBDB:489285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.032Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rJHfvj3ZaipacErRsQ8vmX
        subject_person_id: p_k2w2YJFJPnXrRf2EtA4i1p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王濟，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任教諭。（中国历代人物传记资料库 CBDB 489285）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZBRID_0HtSggvSkalbpK_6
          claim_id: c_rJHfvj3ZaipacErRsQ8vmX
          source_id: s_xrW7yhp9qHy4Vrxj898jHB
          stance: supports
          locator: CBDB:489285
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

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | 王濟，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任教諭。（中国历代人物传记资料库 CBDB 489285） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 489285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489285&o=json)
