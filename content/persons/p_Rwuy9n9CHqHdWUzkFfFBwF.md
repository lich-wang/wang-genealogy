---
schema: wang-person/v1
id: p_Rwuy9n9CHqHdWUzkFfFBwF
status: active
merged_into: null
display_name: 王煦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4k632gnSHgRp9rJk7Qf3xt
        subject_person_id: p_Rwuy9n9CHqHdWUzkFfFBwF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BUs5TwC6bHoSWoWK7QZJKx
          claim_id: c_4k632gnSHgRp9rJk7Qf3xt
          source_id: s_o3Lu1dByLHb62fD9MLN7F7
          stance: supports
          locator: CBDB:321404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321404）
          source: &a1
            id: s_o3Lu1dByLHb62fD9MLN7F7
            source_type: api_record
            title: 中国历代人物传记资料库：王煦（CBDB 321404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321404&o=json
            external_identifier: CBDB:321404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.094Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A55sMvwsVH6n6MMwQH79WJ
        subject_person_id: p_Rwuy9n9CHqHdWUzkFfFBwF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦，明人物。嘉靖三十五年進士，曾任知縣。（中国历代人物传记资料库 CBDB 321404）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qCz8BgA4BKv3b2Pe35wC_h
          claim_id: c_A55sMvwsVH6n6MMwQH79WJ
          source_id: s_o3Lu1dByLHb62fD9MLN7F7
          stance: supports
          locator: CBDB:321404
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
        id: c_UTAnL4eBYlLXCT8u0xjN6j
        subject_person_id: p_Rwuy9n9CHqHdWUzkFfFBwF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eEwtWQbZ0dfO0xtKEChdz3
          claim_id: c_UTAnL4eBYlLXCT8u0xjN6j
          source_id: s_2wGjdALaD45tx6N97DN7RH
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百三十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2wGjdALaD45tx6N97DN7RH
            source_type: api_record
            title: 中国历代人物传记资料库：王同倫（CBDB 204603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204603&o=json
            external_identifier: CBDB:204603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jxJb77T2SQUuZWU7nrgLP5
        status: active
        display_name: 王同倫
        merged_into_person_id: null
  other: []
---

# 王煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煦 | accepted |
| bio.summary | 王煦，明人物。嘉靖三十五年進士，曾任知縣。（中国历代人物传记资料库 CBDB 321404） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_jxJb77T2SQUuZWU7nrgLP5 | 王同倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同倫（CBDB 204603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204603&o=json)
- [中国历代人物传记资料库：王煦（CBDB 321404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321404&o=json)
