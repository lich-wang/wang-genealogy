---
schema: wang-person/v1
id: p_YoyuyLrgCBssnRVXc9A6KY
status: active
merged_into: null
display_name: 王克銘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZkqzU8qH2bt5WAef4g6JAJ
        subject_person_id: p_YoyuyLrgCBssnRVXc9A6KY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tLs2HRywfTrXk51HzeQUTY
          claim_id: c_ZkqzU8qH2bt5WAef4g6JAJ
          source_id: s_6ADXMDeiSGBKPt6vgpYZqk
          stance: supports
          locator: CBDB:256024
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256024）
          source: &a1
            id: s_6ADXMDeiSGBKPt6vgpYZqk
            source_type: api_record
            title: 中国历代人物传记资料库：王克銘（CBDB 256024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256024&o=json
            external_identifier: CBDB:256024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.373Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J13e1nkBNbg75rpbZZbkob
        subject_person_id: p_YoyuyLrgCBssnRVXc9A6KY
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
        - id: cs_3Cbr9FZ26EArNmLzCethRv
          claim_id: c_J13e1nkBNbg75rpbZZbkob
          source_id: s_6ADXMDeiSGBKPt6vgpYZqk
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
        id: c_tdaTXuz4udCQSMmlcSUXre
        subject_person_id: p_YoyuyLrgCBssnRVXc9A6KY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q746PBZNycHf9YN5GVT1MS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cf1ZDQ2eYPNfVITT7v1GHH
          claim_id: c_tdaTXuz4udCQSMmlcSUXre
          source_id: s_6ADXMDeiSGBKPt6vgpYZqk
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第四十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q746PBZNycHf9YN5GVT1MS
        status: active
        display_name: 王璇
        merged_into_person_id: null
  other: []
---

# 王克銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克銘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Q746PBZNycHf9YN5GVT1MS | 王璇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克銘（CBDB 256024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256024&o=json)
