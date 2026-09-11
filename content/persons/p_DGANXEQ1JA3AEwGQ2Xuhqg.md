---
schema: wang-person/v1
id: p_DGANXEQ1JA3AEwGQ2Xuhqg
status: active
merged_into: null
display_name: 王日華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7MrSiWFfFPtErfXDzjTxBX
        subject_person_id: p_DGANXEQ1JA3AEwGQ2Xuhqg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_arwbP8NTS4KmHwJFgMNfx2
          claim_id: c_7MrSiWFfFPtErfXDzjTxBX
          source_id: s_jX93yugFGETEdoAwtTq2HY
          stance: supports
          locator: CBDB:638338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638338）
          source: &a1
            id: s_jX93yugFGETEdoAwtTq2HY
            source_type: api_record
            title: 中国历代人物传记资料库：王日華（CBDB 638338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638338&o=json
            external_identifier: CBDB:638338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rRf3FG82XPHyyGK4cknweC
        subject_person_id: p_DGANXEQ1JA3AEwGQ2Xuhqg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王日華，清人物。籍贯東陽，入仕貢生: 拔貢，曾任訓導、復設教諭。（中国历代人物传记资料库 CBDB 638338）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wOM4DGCj6o2mCaKjyMTIEk
          claim_id: c_rRf3FG82XPHyyGK4cknweC
          source_id: s_jX93yugFGETEdoAwtTq2HY
          stance: supports
          locator: CBDB:638338
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

# 王日華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日華 | accepted |
| bio.summary | 王日華，清人物。籍贯東陽，入仕貢生: 拔貢，曾任訓導、復設教諭。（中国历代人物传记资料库 CBDB 638338） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王日華（CBDB 638338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638338&o=json)
