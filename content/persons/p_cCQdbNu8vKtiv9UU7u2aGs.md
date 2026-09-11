---
schema: wang-person/v1
id: p_cCQdbNu8vKtiv9UU7u2aGs
status: active
merged_into: null
display_name: 王彥暉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eg6NwrQ8L3qpL37YCqUH9w
        subject_person_id: p_cCQdbNu8vKtiv9UU7u2aGs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥暉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5HbJyKbb6r9ZKhFDvutJu2
          claim_id: c_eg6NwrQ8L3qpL37YCqUH9w
          source_id: s_vD79f2Zb6WmViZFvP6p8Ym
          stance: supports
          locator: CBDB:248742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248742）
          source: &a1
            id: s_vD79f2Zb6WmViZFvP6p8Ym
            source_type: api_record
            title: 中国历代人物传记资料库：王彥暉（CBDB 248742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248742&o=json
            external_identifier: CBDB:248742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JD2gUFSoZGVPwrAhjpG5R2
        subject_person_id: p_cCQdbNu8vKtiv9UU7u2aGs
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
        - id: cs_JJmFAkaZa1y8DW2nJKJbT1
          claim_id: c_JD2gUFSoZGVPwrAhjpG5R2
          source_id: s_vD79f2Zb6WmViZFvP6p8Ym
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
        id: c_eRDIwMGOv6eKKb0Bz7_ZMj
        subject_person_id: p_cCQdbNu8vKtiv9UU7u2aGs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3BqLdv5ornEQLqdPoknpXE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7zPiNuhIVExiv7T8oOtlM7
          claim_id: c_eRDIwMGOv6eKKb0Bz7_ZMj
          source_id: s_7w1N5HRLcjZW1QnPCRLxtB
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7w1N5HRLcjZW1QnPCRLxtB
            source_type: api_record
            title: 中国历代人物传记资料库：王屏（CBDB 199995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199995&o=json
            external_identifier: CBDB:199995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3BqLdv5ornEQLqdPoknpXE
        status: active
        display_name: 王屏
        merged_into_person_id: null
    - claim:
        id: c_2RAMWYB1iQKUpieCllc31G
        subject_person_id: p_cCQdbNu8vKtiv9UU7u2aGs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xG6Uatb4hvJpHFBwk8TY1u
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F6rRygS2hEIKyQMe8QGUtf
          claim_id: c_2RAMWYB1iQKUpieCllc31G
          source_id: s_vD79f2Zb6WmViZFvP6p8Ym
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xG6Uatb4hvJpHFBwk8TY1u
        status: active
        display_name: 王祐
        merged_into_person_id: null
  other: []
---

# 王彥暉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥暉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3BqLdv5ornEQLqdPoknpXE | 王屏 | accepted |
| descendants | p_xG6Uatb4hvJpHFBwk8TY1u | 王祐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王屏（CBDB 199995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199995&o=json)
- [中国历代人物传记资料库：王彥暉（CBDB 248742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248742&o=json)
