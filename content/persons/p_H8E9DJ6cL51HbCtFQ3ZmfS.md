---
schema: wang-person/v1
id: p_H8E9DJ6cL51HbCtFQ3ZmfS
status: active
merged_into: null
display_name: 王楩
cbdb_id: 328400
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G1Q8aY81FX113qZ9Rdn8Gr
        subject_person_id: p_H8E9DJ6cL51HbCtFQ3ZmfS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楩，明人物。嘉靖四十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 328400）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2cUxX1Vm8TCuZaHOs0YpcE
          claim_id: c_G1Q8aY81FX113qZ9Rdn8Gr
          source_id: s_Emp29mDtZv6H5yX6QBkXN7
          stance: supports
          locator: CBDB:328400
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Emp29mDtZv6H5yX6QBkXN7
            source_type: api_record
            title: 中国历代人物传记资料库：王楩（CBDB 328400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328400&o=json
            external_identifier: CBDB:328400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FXafVEfsoJD4XjeBWCHPik
        subject_person_id: p_H8E9DJ6cL51HbCtFQ3ZmfS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3KKcYv5Ltb8bERXa1FiTBM
          claim_id: c_FXafVEfsoJD4XjeBWCHPik
          source_id: s_Emp29mDtZv6H5yX6QBkXN7
          stance: supports
          locator: CBDB:328400
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Cclo6lkTizaflkBRX_l6sJ
        subject_person_id: p_H8E9DJ6cL51HbCtFQ3ZmfS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2X56zUa2MYrGErZu5r54un
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_94q-0QGbBfloUHqRb2Dff0
          claim_id: c_Cclo6lkTizaflkBRX_l6sJ
          source_id: s_vJrdW9xMquKxDLAjo4S8K1
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百一十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vJrdW9xMquKxDLAjo4S8K1
            source_type: api_record
            title: 中国历代人物传记资料库：王爕（CBDB 205106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205106&o=json
            external_identifier: CBDB:205106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2X56zUa2MYrGErZu5r54un
        status: active
        display_name: 王爕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王楩，明人物。嘉靖四十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 328400） | accepted |
| name.primary | 王楩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2X56zUa2MYrGErZu5r54un | 王爕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楩（CBDB 328400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328400&o=json)
- [中国历代人物传记资料库：王爕（CBDB 205106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205106&o=json)
