---
schema: wang-person/v1
id: p_XqFzP2HT1fnv6EsejBDm7i
status: active
merged_into: null
display_name: 王才
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3pHR8bbXMHPL22mAt6GzRE
        subject_person_id: p_XqFzP2HT1fnv6EsejBDm7i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3cAtQvG76yL6822cfMGkhG
          claim_id: c_3pHR8bbXMHPL22mAt6GzRE
          source_id: s_r1qjUx4zzNHZaaqaLUEKv5
          stance: supports
          locator: CBDB:335613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335613）
          source: &a1
            id: s_r1qjUx4zzNHZaaqaLUEKv5
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 335613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335613&o=json
            external_identifier: CBDB:335613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SLwAyb2bGoH8jN7XUQCHkh
        subject_person_id: p_XqFzP2HT1fnv6EsejBDm7i
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
        - id: cs_54qWRNkP8D5M8VPuv1TXvD
          claim_id: c_SLwAyb2bGoH8jN7XUQCHkh
          source_id: s_r1qjUx4zzNHZaaqaLUEKv5
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
        id: c_9Q6FjLBtU_cNGDW2cCzhVH
        subject_person_id: p_XqFzP2HT1fnv6EsejBDm7i
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mJFG2VmWYuWZQLFEyB56Dh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nVumfDf-FK0nYXEUBJEmh5
          claim_id: c_9Q6FjLBtU_cNGDW2cCzhVH
          source_id: s_r1qjUx4zzNHZaaqaLUEKv5
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百一十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mJFG2VmWYuWZQLFEyB56Dh
        status: active
        display_name: 王來召
        merged_into_person_id: null
  other: []
---

# 王才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王才 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_mJFG2VmWYuWZQLFEyB56Dh | 王來召 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 335613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335613&o=json)
