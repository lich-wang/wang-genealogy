---
schema: wang-person/v1
id: p_LH6CM5YTifPRrk32UPBNz6
status: active
merged_into: null
display_name: 王星聯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o9mHyNverqi26Sv3TCYj5A
        subject_person_id: p_LH6CM5YTifPRrk32UPBNz6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星聯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RRShCX7dPhaCG6FcQdybDc
          claim_id: c_o9mHyNverqi26Sv3TCYj5A
          source_id: s_DqyPvYUn46Nw8rLKGkL8WK
          stance: supports
          locator: CBDB:638402
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638402）
          source: &a1
            id: s_DqyPvYUn46Nw8rLKGkL8WK
            source_type: api_record
            title: 中国历代人物传记资料库：王星聯（CBDB 638402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638402&o=json
            external_identifier: CBDB:638402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8B8iqw8bJCzPznJowKFaWg
        subject_person_id: p_LH6CM5YTifPRrk32UPBNz6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星聯，清人物。籍贯杭州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638402）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y1ChzDuXdnF19EDDNd-HJk
          claim_id: c_8B8iqw8bJCzPznJowKFaWg
          source_id: s_DqyPvYUn46Nw8rLKGkL8WK
          stance: supports
          locator: CBDB:638402
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

# 王星聯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王星聯 | accepted |
| bio.summary | 王星聯，清人物。籍贯杭州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638402） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王星聯（CBDB 638402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638402&o=json)
