---
schema: wang-person/v1
id: p_SQbqrU6uRV1rZFhGVtQz9b
status: active
merged_into: null
display_name: 王稶
cbdb_id: 261015
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zU6ryKG2ADxhLpyXn9GRMx
        subject_person_id: p_SQbqrU6uRV1rZFhGVtQz9b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稶，明人物。中国历代人物传记资料库（CBDB）以人物编号 261015 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_wPGSXoYa2K2Llvzfkk_ijK
          claim_id: c_zU6ryKG2ADxhLpyXn9GRMx
          source_id: s_sng5qohNtGDs2t4ziUWfPZ
          stance: supports
          locator: CBDB:261015
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sng5qohNtGDs2t4ziUWfPZ
            source_type: api_record
            title: 中国历代人物传记资料库：王稶（CBDB 261015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261015&o=json
            external_identifier: CBDB:261015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zn67JFbXS6xV8cJQFgCjxx
        subject_person_id: p_SQbqrU6uRV1rZFhGVtQz9b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WoTn94k819MNgioqf5qB9f
          claim_id: c_zn67JFbXS6xV8cJQFgCjxx
          source_id: s_sng5qohNtGDs2t4ziUWfPZ
          stance: supports
          locator: CBDB:261015
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_sng5qohNtGDs2t4ziUWfPZ
            source_type: api_record
            title: 中国历代人物传记资料库：王稶（CBDB 261015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261015&o=json
            external_identifier: CBDB:261015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_bP16IwHZPOzORV8IGf42pi
        subject_person_id: p_SQbqrU6uRV1rZFhGVtQz9b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WfV9B4ZNGa1u8RHNsdFJs6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ax6rsQpdS_0QzUmygF4HCe
          claim_id: c_bP16IwHZPOzORV8IGf42pi
          source_id: s_sng5qohNtGDs2t4ziUWfPZ
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WfV9B4ZNGa1u8RHNsdFJs6
        status: active
        display_name: 王瑩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王稶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王稶，明人物。中国历代人物传记资料库（CBDB）以人物编号 261015 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王稶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WfV9B4ZNGa1u8RHNsdFJs6 | 王瑩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稶（CBDB 261015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261015&o=json)
