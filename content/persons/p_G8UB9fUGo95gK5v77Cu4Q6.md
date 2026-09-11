---
schema: wang-person/v1
id: p_G8UB9fUGo95gK5v77Cu4Q6
status: active
merged_into: null
display_name: 王機
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_729rAbY3ua3mNULt6hqrq2
        subject_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mAUzVD8vDrpWCQNU5DwTFX
          claim_id: c_729rAbY3ua3mNULt6hqrq2
          source_id: s_D8dDpacficMiYsJ44XxbBo
          stance: supports
          locator: CBDB:200214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200214）
          source: &a1
            id: s_D8dDpacficMiYsJ44XxbBo
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 200214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200214&o=json
            external_identifier: CBDB:200214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nT28HBH8GGTuzDzKwXMFNp
        subject_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1447年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pwtDJnbw7J6gb22QmBy176
          claim_id: c_nT28HBH8GGTuzDzKwXMFNp
          source_id: s_D8dDpacficMiYsJ44XxbBo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NdxRcYc6rNjVkY7kuPmQu4
        subject_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
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
        - id: cs_8cs3N5RozdeNyo2bQdhA6Q
          claim_id: c_NdxRcYc6rNjVkY7kuPmQu4
          source_id: s_D8dDpacficMiYsJ44XxbBo
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
        id: c_0PeANNmbwVMMNedYYdI5QA
        subject_person_id: p_h8sJHgEUaQHScKxtt1BkuB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0iOkwIpe9V6SaeM0b4tQzX
          claim_id: c_0PeANNmbwVMMNedYYdI5QA
          source_id: s_D8dDpacficMiYsJ44XxbBo
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第二十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_h8sJHgEUaQHScKxtt1BkuB
        status: active
        display_name: 王宣清
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oxcM1wnOIJhaCNXDXADDoG
        subject_person_id: p_P3kCAftKu9Diu16RUgNNEE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XVJ_ph-TANuD3LgqejQ1qe
          claim_id: c_oxcM1wnOIJhaCNXDXADDoG
          source_id: s_D8dDpacficMiYsJ44XxbBo
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第二十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P3kCAftKu9Diu16RUgNNEE
        status: active
        display_name: 王伯儲
        merged_into_person_id: null
    - claim:
        id: c_XNqPZjWuCljXZZ9NBvpUZO
        subject_person_id: p_UFdLLZo5Ts9VJEAG5Gmb5P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vdSUpoDlXsIX2A0uoYcoId
          claim_id: c_XNqPZjWuCljXZZ9NBvpUZO
          source_id: s_D8dDpacficMiYsJ44XxbBo
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第二十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UFdLLZo5Ts9VJEAG5Gmb5P
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王機 | accepted |
| birth.date | 1447年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_h8sJHgEUaQHScKxtt1BkuB | 王宣清 | accepted |
| ancestors | p_P3kCAftKu9Diu16RUgNNEE | 王伯儲 | accepted |
| ancestors | p_UFdLLZo5Ts9VJEAG5Gmb5P | 王鉞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王機（CBDB 200214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200214&o=json)
