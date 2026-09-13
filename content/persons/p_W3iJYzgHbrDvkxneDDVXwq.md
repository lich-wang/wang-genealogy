---
schema: wang-person/v1
id: p_W3iJYzgHbrDvkxneDDVXwq
status: active
merged_into: null
display_name: 王汝徵
cbdb_id: 326517
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hf4BMKZeUwA8EJr2Fi19oG
        subject_person_id: p_W3iJYzgHbrDvkxneDDVXwq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝徵，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326517）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GDuMdlRwTKFPTq_9LuGgDM
          claim_id: c_hf4BMKZeUwA8EJr2Fi19oG
          source_id: s_5Ptmuzu8heDqdT7j9KzrQ8
          stance: supports
          locator: CBDB:326517
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5Ptmuzu8heDqdT7j9KzrQ8
            source_type: api_record
            title: 中国历代人物传记资料库：王汝徵（CBDB 326517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326517&o=json
            external_identifier: CBDB:326517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RULu72eVzSm3bu26jTZD38
        subject_person_id: p_W3iJYzgHbrDvkxneDDVXwq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BShUVWSZW2suDC4Ru4ar1G
          claim_id: c_RULu72eVzSm3bu26jTZD38
          source_id: s_5Ptmuzu8heDqdT7j9KzrQ8
          stance: supports
          locator: CBDB:326517
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_-GKmA2wLLPGtQTtWh00iIz
        subject_person_id: p_W3iJYzgHbrDvkxneDDVXwq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uHZ14yn10mwMwH2qFUdc3N
          claim_id: c_-GKmA2wLLPGtQTtWh00iIz
          source_id: s_3p6BBfq8bjfMZEGQHAGUKU
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第二十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3p6BBfq8bjfMZEGQHAGUKU
            source_type: api_record
            title: 中国历代人物传记资料库：王廷輔（CBDB 204965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204965&o=json
            external_identifier: CBDB:204965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7x8JYYpfNVCNz7epCoiZPm
        status: active
        display_name: 王廷輔
        merged_into_person_id: null
  other: []
---

# 王汝徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝徵，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326517） | accepted |
| name.primary | 王汝徵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7x8JYYpfNVCNz7epCoiZPm | 王廷輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝徵（CBDB 326517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326517&o=json)
- [中国历代人物传记资料库：王廷輔（CBDB 204965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204965&o=json)
