---
schema: wang-person/v1
id: p_8tmDtQYvtDtjwtGJDJXeNU
status: active
merged_into: null
display_name: 王材信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p6jc3tzo9ux6uGiNfYPHPZ
        subject_person_id: p_8tmDtQYvtDtjwtGJDJXeNU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9VLxiTo8U5KNiAPWdQ87zM
          claim_id: c_p6jc3tzo9ux6uGiNfYPHPZ
          source_id: s_vp1BY49sMD4Mka3yCc3Htq
          stance: supports
          locator: CBDB:527017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527017）
          source: &a1
            id: s_vp1BY49sMD4Mka3yCc3Htq
            source_type: api_record
            title: 中国历代人物传记资料库：王材信（CBDB 527017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527017&o=json
            external_identifier: CBDB:527017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b9AUutBGPC3khKYxEDXm3E
        subject_person_id: p_8tmDtQYvtDtjwtGJDJXeNU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bW1LQvE3sw8G4Jbt1JwWk9
          claim_id: c_b9AUutBGPC3khKYxEDXm3E
          source_id: s_vp1BY49sMD4Mka3yCc3Htq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ggsI3GajhTcng6WQUF_nq3
        subject_person_id: p_zjQMXTGNWTchLi9wmdCnEK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8tmDtQYvtDtjwtGJDJXeNU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sXAL13CKAkyE8bGA-KcNug
          claim_id: c_ggsI3GajhTcng6WQUF_nq3
          source_id: s_vp1BY49sMD4Mka3yCc3Htq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13179：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zjQMXTGNWTchLi9wmdCnEK
        status: active
        display_name: 王澤宏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王材信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材信 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zjQMXTGNWTchLi9wmdCnEK | 王澤宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王材信（CBDB 527017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527017&o=json)
