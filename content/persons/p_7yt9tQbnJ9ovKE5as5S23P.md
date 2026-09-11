---
schema: wang-person/v1
id: p_7yt9tQbnJ9ovKE5as5S23P
status: active
merged_into: null
display_name: 趙昂
revision: 1
cbdb_id: 135216
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_57JbHQRMr5lExadpMoGNtd
        subject_person_id: p_7yt9tQbnJ9ovKE5as5S23P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙昂
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nVqy8tbte1siDfM7450LLd
          claim_id: c_57JbHQRMr5lExadpMoGNtd
          source_id: s_BnzN8IIhF7wIfg984jMYjW
          stance: supports
          locator: CBDB:135216
          quotation: null
          interpretation_note: CBDB 明确记录的王異配偶
          source: &a1
            id: s_BnzN8IIhF7wIfg984jMYjW
            source_type: api_record
            title: 中国历代人物传记资料库：趙昂（CBDB 135216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135216&o=json
            external_identifier: CBDB:135216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_eHi5sanZlIGz117ed67muc
        subject_person_id: p_7UAG6sq97TnpsKtpTo2R2T
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7yt9tQbnJ9ovKE5as5S23P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6B2wQJ-07XNO6lyf0Kv_n
          claim_id: c_eHi5sanZlIGz117ed67muc
          source_id: s_BnzN8IIhF7wIfg984jMYjW
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3204：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7UAG6sq97TnpsKtpTo2R2T
        status: active
        display_name: 王異
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 趙昂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7UAG6sq97TnpsKtpTo2R2T | 王異 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙昂（CBDB 135216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135216&o=json)
