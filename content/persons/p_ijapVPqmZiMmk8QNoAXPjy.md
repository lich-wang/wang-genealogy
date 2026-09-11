---
schema: wang-person/v1
id: p_ijapVPqmZiMmk8QNoAXPjy
status: active
merged_into: null
display_name: 王鼎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iu6BNYHd5PfciHk7MxZvvv
        subject_person_id: p_ijapVPqmZiMmk8QNoAXPjy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qL7tyC4HQJxq9AdNWEP7XU
          claim_id: c_iu6BNYHd5PfciHk7MxZvvv
          source_id: s_2CDqHE5qeD4R81BxekctEH
          stance: supports
          locator: CBDB:304453
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304453）
          source: &a1
            id: s_2CDqHE5qeD4R81BxekctEH
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 304453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304453&o=json
            external_identifier: CBDB:304453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L9vGD7i2j12KMmrdjK8KGN
        subject_person_id: p_ijapVPqmZiMmk8QNoAXPjy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 304453）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CRkVX-SvCyz3g77w9AM0vv
          claim_id: c_L9vGD7i2j12KMmrdjK8KGN
          source_id: s_2CDqHE5qeD4R81BxekctEH
          stance: supports
          locator: CBDB:304453
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
        id: c_dkbLVSu6qjfRekcglfiAIE
        subject_person_id: p_ijapVPqmZiMmk8QNoAXPjy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JuthQI0kPOp6dxgTlkkuan
          claim_id: c_dkbLVSu6qjfRekcglfiAIE
          source_id: s_2CDqHE5qeD4R81BxekctEH
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        status: active
        display_name: 王材
        merged_into_person_id: null
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 304453） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_H4Uy6ApLcV6Le6pdH8Y4bo | 王材 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 304453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304453&o=json)
