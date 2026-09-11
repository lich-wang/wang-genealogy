---
schema: wang-person/v1
id: p_c4dQAmoU591Gmsc9M6ooR4
status: active
merged_into: null
display_name: 王昇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sj8wQVNSTKxL5WpuuK1CyZ
        subject_person_id: p_c4dQAmoU591Gmsc9M6ooR4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ssi8NFjuXWg363qYE9QFG5
          claim_id: c_sj8wQVNSTKxL5WpuuK1CyZ
          source_id: s_vmA9Jvhzhdpu24BAF5bTaz
          stance: supports
          locator: CBDB:294201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294201）
          source: &a1
            id: s_vmA9Jvhzhdpu24BAF5bTaz
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 294201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294201&o=json
            external_identifier: CBDB:294201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GUE1xv9Vzg1Ed2eATFtN3m
        subject_person_id: p_c4dQAmoU591Gmsc9M6ooR4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 294201）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GjTRTFVHpSR2hOmWAbSPax
          claim_id: c_GUE1xv9Vzg1Ed2eATFtN3m
          source_id: s_vmA9Jvhzhdpu24BAF5bTaz
          stance: supports
          locator: CBDB:294201
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
        id: c_7pC1tHabqxBs--WJEWwXGn
        subject_person_id: p_c4dQAmoU591Gmsc9M6ooR4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sLhnC92rQu1PepE5sPJ3EL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qSAOzm5rboWqeUrvTmc6ry
          claim_id: c_7pC1tHabqxBs--WJEWwXGn
          source_id: s_vmA9Jvhzhdpu24BAF5bTaz
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sLhnC92rQu1PepE5sPJ3EL
        status: active
        display_name: 王弘道
        merged_into_person_id: null
  other: []
---

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | 王昇，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 294201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sLhnC92rQu1PepE5sPJ3EL | 王弘道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 294201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294201&o=json)
