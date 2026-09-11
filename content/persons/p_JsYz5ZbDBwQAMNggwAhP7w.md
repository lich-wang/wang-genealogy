---
schema: wang-person/v1
id: p_JsYz5ZbDBwQAMNggwAhP7w
status: active
merged_into: null
display_name: 王斌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vdz2QT6jeS8b5uM91Rq2TP
        subject_person_id: p_JsYz5ZbDBwQAMNggwAhP7w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ncrQ8cE612X42ueC9r6pCM
          claim_id: c_Vdz2QT6jeS8b5uM91Rq2TP
          source_id: s_G8hvh1LJTkqJ8F2yJZ5o5a
          stance: supports
          locator: CBDB:240552
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240552）
          source: &a1
            id: s_G8hvh1LJTkqJ8F2yJZ5o5a
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 240552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240552&o=json
            external_identifier: CBDB:240552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CmBHTrC9LkXcwNsNFs7LcT
        subject_person_id: p_JsYz5ZbDBwQAMNggwAhP7w
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
        - id: cs_ctxqrg3mZLtA4FSnnXW2PK
          claim_id: c_CmBHTrC9LkXcwNsNFs7LcT
          source_id: s_G8hvh1LJTkqJ8F2yJZ5o5a
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
        id: c_XT6lYd-AlkXoS5VY8kjASg
        subject_person_id: p_JsYz5ZbDBwQAMNggwAhP7w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZhoCANDJsNDr2hcDPbA4tV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7ZjWwHhO-0WYhx3S3k8m4f
          claim_id: c_XT6lYd-AlkXoS5VY8kjASg
          source_id: s_G8hvh1LJTkqJ8F2yJZ5o5a
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第二甲第三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZhoCANDJsNDr2hcDPbA4tV
        status: active
        display_name: 王勤
        merged_into_person_id: null
  other: []
---

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ZhoCANDJsNDr2hcDPbA4tV | 王勤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 240552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240552&o=json)
