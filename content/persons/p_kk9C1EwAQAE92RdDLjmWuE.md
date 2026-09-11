---
schema: wang-person/v1
id: p_kk9C1EwAQAE92RdDLjmWuE
status: active
merged_into: null
display_name: 王弼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KAT4EK1sHNh2vmCdy1csUp
        subject_person_id: p_kk9C1EwAQAE92RdDLjmWuE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ai33bAAcYSZwP7MGNhtAh7
          claim_id: c_KAT4EK1sHNh2vmCdy1csUp
          source_id: s_gQC81mAJ1X462UffQ66gw7
          stance: supports
          locator: CBDB:331282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331282）
          source: &a1
            id: s_gQC81mAJ1X462UffQ66gw7
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 331282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331282&o=json
            external_identifier: CBDB:331282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V2FGNKM4mDhBWCEAgwDUpM
        subject_person_id: p_kk9C1EwAQAE92RdDLjmWuE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331282）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ssZoU6rF_okgWPuR1ZwYYD
          claim_id: c_V2FGNKM4mDhBWCEAgwDUpM
          source_id: s_gQC81mAJ1X462UffQ66gw7
          stance: supports
          locator: CBDB:331282
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
        id: c_jkwP-m7ocPe8R0usWvzapk
        subject_person_id: p_kk9C1EwAQAE92RdDLjmWuE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2AHmF8AUPM19K8SgoBBTUY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lRqqSE4nmLPDbmAM_q75hL
          claim_id: c_jkwP-m7ocPe8R0usWvzapk
          source_id: s_gQC81mAJ1X462UffQ66gw7
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第九十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2AHmF8AUPM19K8SgoBBTUY
        status: active
        display_name: 王貽德
        merged_into_person_id: null
  other: []
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | 王弼，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331282） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2AHmF8AUPM19K8SgoBBTUY | 王貽德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 331282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331282&o=json)
