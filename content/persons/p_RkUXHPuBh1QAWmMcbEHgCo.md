---
schema: wang-person/v1
id: p_RkUXHPuBh1QAWmMcbEHgCo
status: active
merged_into: null
display_name: 王純
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BjEjxLwwEvKvHKDN5BLwq
        subject_person_id: p_RkUXHPuBh1QAWmMcbEHgCo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3BcrRH6ThKcCa8aUUPdxCL
          claim_id: c_7BjEjxLwwEvKvHKDN5BLwq
          source_id: s_VN58FLi9L7sQ7Nce7eu94t
          stance: supports
          locator: CBDB:294535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294535）
          source: &a1
            id: s_VN58FLi9L7sQ7Nce7eu94t
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 294535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294535&o=json
            external_identifier: CBDB:294535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bgK5H7yGzf97qqu3A4Uobq
        subject_person_id: p_RkUXHPuBh1QAWmMcbEHgCo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 294535）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D9NsTQJSD7Tlx3KtakgG8p
          claim_id: c_bgK5H7yGzf97qqu3A4Uobq
          source_id: s_VN58FLi9L7sQ7Nce7eu94t
          stance: supports
          locator: CBDB:294535
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
  descendants:
    - claim:
        id: c_JSGLjUB3q0UbSV2W0Gg1B8
        subject_person_id: p_RkUXHPuBh1QAWmMcbEHgCo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fGoq2CSguwGs_IXjYGj33e
          claim_id: c_JSGLjUB3q0UbSV2W0Gg1B8
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KnMS3iSfMsUJhjJLWsaYyT
            source_type: api_record
            title: 中国历代人物传记资料库：王玉汝（CBDB 202795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json
            external_identifier: CBDB:202795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aJQ3escM6jBxZ8EP2idom6
        status: active
        display_name: 王玉汝
        merged_into_person_id: null
  other: []
---

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | 王純，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 294535） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aJQ3escM6jBxZ8EP2idom6 | 王玉汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 294535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294535&o=json)
- [中国历代人物传记资料库：王玉汝（CBDB 202795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json)
