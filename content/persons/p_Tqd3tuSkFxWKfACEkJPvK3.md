---
schema: wang-person/v1
id: p_Tqd3tuSkFxWKfACEkJPvK3
status: active
merged_into: null
display_name: 王立奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aALNMZdT6RA6FKZd1xjmMR
        subject_person_id: p_Tqd3tuSkFxWKfACEkJPvK3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BD8vVETCu79oApdyUNFKuN
          claim_id: c_aALNMZdT6RA6FKZd1xjmMR
          source_id: s_FYC3DoUXtcqRkUSLp1C7BQ
          stance: supports
          locator: CBDB:639690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639690）
          source: &a1
            id: s_FYC3DoUXtcqRkUSLp1C7BQ
            source_type: api_record
            title: 中国历代人物传记资料库：王立奎（CBDB 639690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639690&o=json
            external_identifier: CBDB:639690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B19fiTgaa9AKw1Pn5Mf3dV
        subject_person_id: p_Tqd3tuSkFxWKfACEkJPvK3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立奎，清人物。籍贯安徽省，入仕武童，曾任中軍守備。（中国历代人物传记资料库 CBDB 639690）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IYr9uw8cJ4bg6q6uYLmSZP
          claim_id: c_B19fiTgaa9AKw1Pn5Mf3dV
          source_id: s_FYC3DoUXtcqRkUSLp1C7BQ
          stance: supports
          locator: CBDB:639690
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

# 王立奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立奎 | accepted |
| bio.summary | 王立奎，清人物。籍贯安徽省，入仕武童，曾任中軍守備。（中国历代人物传记资料库 CBDB 639690） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立奎（CBDB 639690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639690&o=json)
