---
schema: wang-person/v1
id: p_cTNHybKxFsGeSXUqJF9nK2
status: active
merged_into: null
display_name: 王冕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7fcPfQPvAkCmovDC2cCUJT
        subject_person_id: p_cTNHybKxFsGeSXUqJF9nK2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qaN4A9td33m95E3C6CiFgH
          claim_id: c_7fcPfQPvAkCmovDC2cCUJT
          source_id: s_iNvvwFf6H4tNkz6r25L73U
          stance: supports
          locator: CBDB:287773
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287773）
          source: &a1
            id: s_iNvvwFf6H4tNkz6r25L73U
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 287773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287773&o=json
            external_identifier: CBDB:287773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bMKgYWFydiiaC7cz69QFwX
        subject_person_id: p_cTNHybKxFsGeSXUqJF9nK2
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
        - id: cs_j5DqL3G2jkGrUn4aHRx78G
          claim_id: c_bMKgYWFydiiaC7cz69QFwX
          source_id: s_iNvvwFf6H4tNkz6r25L73U
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QcV6Vc9EEXkY04SrpVLClO
        subject_person_id: p_cTNHybKxFsGeSXUqJF9nK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bzVqsVzDtPALBqgyiMTGcs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lghiFyvzNLGVm2VtO56cjU
          claim_id: c_QcV6Vc9EEXkY04SrpVLClO
          source_id: s_CqGjwbz29mF71uer51qoya
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CqGjwbz29mF71uer51qoya
            source_type: api_record
            title: 中国历代人物传记资料库：王表（CBDB 126567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126567&o=json
            external_identifier: CBDB:126567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bzVqsVzDtPALBqgyiMTGcs
        status: active
        display_name: 王表
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bzVqsVzDtPALBqgyiMTGcs | 王表 | accepted |

## 外部来源

- [中国历代人物传记资料库：王表（CBDB 126567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126567&o=json)
- [中国历代人物传记资料库：王冕（CBDB 287773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287773&o=json)
