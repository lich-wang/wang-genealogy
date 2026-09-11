---
schema: wang-person/v1
id: p_NUN9V2WpcJELAKS3hvUbxx
status: active
merged_into: null
display_name: 王瑞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uaoPqtT1sP8kdDZDeXgdjo
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vP5C2LwVPGC94P9rWZ8K6v
          claim_id: c_uaoPqtT1sP8kdDZDeXgdjo
          source_id: s_zjyME1KpDFD2t6hpRmnWEe
          stance: supports
          locator: CBDB:279876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279876）
          source: &a1
            id: s_zjyME1KpDFD2t6hpRmnWEe
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 279876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279876&o=json
            external_identifier: CBDB:279876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mz9zkE8ePsFv8Y4xMsQzSD
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞，明人物。正德十二年進士，籍贯曹州。（中国历代人物传记资料库 CBDB 279876）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H4MJXN4dys4iVQUA9axjkq
          claim_id: c_mz9zkE8ePsFv8Y4xMsQzSD
          source_id: s_zjyME1KpDFD2t6hpRmnWEe
          stance: supports
          locator: CBDB:279876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_k72CkhfDxJJb829bsFCcgj
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HkNX6H623Y1z9EYnBdcJJC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h5QYsIG5JTPSRKby-x7cOb
          claim_id: c_k72CkhfDxJJb829bsFCcgj
          source_id: s_zjyME1KpDFD2t6hpRmnWEe
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HkNX6H623Y1z9EYnBdcJJC
        status: active
        display_name: 王三錫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞 | accepted |
| bio.summary | 王瑞，明人物。正德十二年進士，籍贯曹州。（中国历代人物传记资料库 CBDB 279876） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HkNX6H623Y1z9EYnBdcJJC | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑞（CBDB 279876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279876&o=json)
