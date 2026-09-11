---
schema: wang-person/v1
id: p_GxDL9ejJ5dxwKNZ9PCmbaa
status: active
merged_into: null
display_name: 王宏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YZFSrgquMmuv7rUWx1DPoN
        subject_person_id: p_GxDL9ejJ5dxwKNZ9PCmbaa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PCtJRW6bSaeaGegtQXNUFJ
          claim_id: c_YZFSrgquMmuv7rUWx1DPoN
          source_id: s_c1p5GFMDx6PegFKePfxQfX
          stance: supports
          locator: CBDB:292738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292738）
          source: &a1
            id: s_c1p5GFMDx6PegFKePfxQfX
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 292738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292738&o=json
            external_identifier: CBDB:292738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FioDWW2RjfrwJ8ueNQZqKi
        subject_person_id: p_GxDL9ejJ5dxwKNZ9PCmbaa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3jsfNGmJXzRvmbCZdU3bsN
          claim_id: c_FioDWW2RjfrwJ8ueNQZqKi
          source_id: s_c1p5GFMDx6PegFKePfxQfX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_CK0rCwiySbTm182j4j3u1h
        subject_person_id: p_GxDL9ejJ5dxwKNZ9PCmbaa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g10Bd-Jy1Csrf5AvFi5sC0
          claim_id: c_CK0rCwiySbTm182j4j3u1h
          source_id: s_c1p5GFMDx6PegFKePfxQfX
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gyNUeFDDZGNowk91dtAr1B
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
  other: []
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_gyNUeFDDZGNowk91dtAr1B | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 292738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292738&o=json)
