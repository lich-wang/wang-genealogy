---
schema: wang-person/v1
id: p_MPKDCVoTw3ezXKDrH5XZgB
status: active
merged_into: null
display_name: 王希俊
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uLGKU85FAhcHB8jhKEBF7B
        subject_person_id: p_MPKDCVoTw3ezXKDrH5XZgB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RVjPPAKeFqrKykrGzLPKFA
          claim_id: c_uLGKU85FAhcHB8jhKEBF7B
          source_id: s_r7gxJVGiWM2hWjQZmg4VuE
          stance: supports
          locator: CBDB:140519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140519）
          source: &a1
            id: s_r7gxJVGiWM2hWjQZmg4VuE
            source_type: api_record
            title: 中国历代人物传记资料库：王希俊（CBDB 140519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140519&o=json
            external_identifier: CBDB:140519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GYzoXidsX6NBmvUAEYL7C6
        subject_person_id: p_MPKDCVoTw3ezXKDrH5XZgB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 680年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w649mK86TPVwRvJfWEq336
          claim_id: c_GYzoXidsX6NBmvUAEYL7C6
          source_id: s_r7gxJVGiWM2hWjQZmg4VuE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NMP6VhLyCQ4ZwNp12624EG
        subject_person_id: p_MPKDCVoTw3ezXKDrH5XZgB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 732年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LkNqRiy6ofgHh8JsfbjHVk
          claim_id: c_NMP6VhLyCQ4ZwNp12624EG
          source_id: s_r7gxJVGiWM2hWjQZmg4VuE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JpnGVDgFp72zk3C7SpPyGm
        subject_person_id: p_MPKDCVoTw3ezXKDrH5XZgB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RgtidCNM4xXTEsw2PjvUgw
          claim_id: c_JpnGVDgFp72zk3C7SpPyGm
          source_id: s_r7gxJVGiWM2hWjQZmg4VuE
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
        id: c_szhVYFX2rm1zqmQ2FrRHvF
        subject_person_id: p_oj4YCBq7WzwEGyAQvPxBEo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MPKDCVoTw3ezXKDrH5XZgB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cxu8PpwuwTTop3iMgwS0Nt
          claim_id: c_szhVYFX2rm1zqmQ2FrRHvF
          source_id: s_r7gxJVGiWM2hWjQZmg4VuE
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 345：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oj4YCBq7WzwEGyAQvPxBEo
        status: active
        display_name: 王履貞
        merged_into_person_id: null
  children:
    - claim:
        id: c_k3BqnsBV9XHZGgVwRFjfjL
        subject_person_id: p_MPKDCVoTw3ezXKDrH5XZgB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A3UBftvcv8pqxG7C1kJFXP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b1cgaDq5qCrEFD5cUmRJOM
          claim_id: c_k3BqnsBV9XHZGgVwRFjfjL
          source_id: s_QEfF7tS7cuj8uNpgxEDwBK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 345：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QEfF7tS7cuj8uNpgxEDwBK
            source_type: api_record
            title: 中国历代人物传记资料库：王瑱（CBDB 152417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152417&o=json
            external_identifier: CBDB:152417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A3UBftvcv8pqxG7C1kJFXP
        status: active
        display_name: 王瑱
        merged_into_person_id: null
    - claim:
        id: c_X0bJPxq_TLqqjZ-J4xehNo
        subject_person_id: p_MPKDCVoTw3ezXKDrH5XZgB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YPo3GsDwCchR7VPXKzBjUe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7TUjIH1ob4cgNOqyr7stXY
          claim_id: c_X0bJPxq_TLqqjZ-J4xehNo
          source_id: s_r7gxJVGiWM2hWjQZmg4VuE
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 345：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YPo3GsDwCchR7VPXKzBjUe
        status: active
        display_name: 王珽
        merged_into_person_id: null
    - claim:
        id: c_to6a9nb2rc37xWG7-cgwvh
        subject_person_id: p_MPKDCVoTw3ezXKDrH5XZgB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PbvuePrA2559TTXG2H13x8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LCQcdpAVdF0c0hszwRjbkS
          claim_id: c_to6a9nb2rc37xWG7-cgwvh
          source_id: s_sZQ28WxxHgSK5hgKL5UEXW
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 345：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sZQ28WxxHgSK5hgKL5UEXW
            source_type: api_record
            title: 中国历代人物传记资料库：王九娘（CBDB 152415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152415&o=json
            external_identifier: CBDB:152415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_PbvuePrA2559TTXG2H13x8
        status: active
        display_name: 王九娘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希俊 | accepted |
| birth.date | 680年 | accepted |
| death.date | 732年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oj4YCBq7WzwEGyAQvPxBEo | 王履貞 | accepted |
| children | p_A3UBftvcv8pqxG7C1kJFXP | 王瑱 | accepted |
| children | p_YPo3GsDwCchR7VPXKzBjUe | 王珽 | accepted |
| children | p_PbvuePrA2559TTXG2H13x8 | 王九娘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九娘（CBDB 152415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152415&o=json)
- [中国历代人物传记资料库：王瑱（CBDB 152417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152417&o=json)
- [中国历代人物传记资料库：王希俊（CBDB 140519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140519&o=json)
