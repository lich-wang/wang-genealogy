---
schema: wang-person/v1
id: p_759gQ6cw7FgPtU8mfynXJG
status: active
merged_into: null
display_name: 王瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_31vC1VSmGVnK78HP4amNNu
        subject_person_id: p_759gQ6cw7FgPtU8mfynXJG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e8VBTGaHT9qopAdSE1Fnrr
          claim_id: c_31vC1VSmGVnK78HP4amNNu
          source_id: s_yS7yD2EKgASzzy34Cua3AX
          stance: supports
          locator: CBDB:639425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639425）
          source: &a1
            id: s_yS7yD2EKgASzzy34Cua3AX
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 639425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639425&o=json
            external_identifier: CBDB:639425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oZiUT5oc2rn6fK7VMsFDHv
        subject_person_id: p_759gQ6cw7FgPtU8mfynXJG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜，清人物。籍贯汝州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639425）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3RaTPhTO_1405y7cGiwPqY
          claim_id: c_oZiUT5oc2rn6fK7VMsFDHv
          source_id: s_yS7yD2EKgASzzy34Cua3AX
          stance: supports
          locator: CBDB:639425
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

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| bio.summary | 王瑜，清人物。籍贯汝州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639425） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 639425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639425&o=json)
