---
schema: wang-person/v1
id: p_ThouKVYR6CM9MTyzqzNxoL
status: active
merged_into: null
display_name: 王濤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yppsS4Xn8FbA81XSmakGwr
        subject_person_id: p_ThouKVYR6CM9MTyzqzNxoL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YfrrzbESshu5fhtvK5t3p5
          claim_id: c_yppsS4Xn8FbA81XSmakGwr
          source_id: s_23a8v17cd3Xv454Vdi2fnD
          stance: supports
          locator: CBDB:61246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61246）
          source: &a1
            id: s_23a8v17cd3Xv454Vdi2fnD
            source_type: api_record
            title: 中国历代人物传记资料库：王濤（CBDB 61246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61246&o=json
            external_identifier: CBDB:61246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NWFj6piAxy9hzKaXLgs4bD
        subject_person_id: p_ThouKVYR6CM9MTyzqzNxoL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濤，清人物。籍贯浙江省，入仕武舉人。（中国历代人物传记资料库 CBDB 61246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_75AHuGpx2cmTSl-3yRgh6f
          claim_id: c_NWFj6piAxy9hzKaXLgs4bD
          source_id: s_23a8v17cd3Xv454Vdi2fnD
          stance: supports
          locator: CBDB:61246
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

# 王濤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濤 | accepted |
| bio.summary | 王濤，清人物。籍贯浙江省，入仕武舉人。（中国历代人物传记资料库 CBDB 61246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濤（CBDB 61246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61246&o=json)
