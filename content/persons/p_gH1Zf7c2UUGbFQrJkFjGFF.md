---
schema: wang-person/v1
id: p_gH1Zf7c2UUGbFQrJkFjGFF
status: active
merged_into: null
display_name: 王延
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_527UiWutwNu9M53bhGJRb6
        subject_person_id: p_gH1Zf7c2UUGbFQrJkFjGFF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oWtr4q1ASj2527NjaLH9J8
          claim_id: c_527UiWutwNu9M53bhGJRb6
          source_id: s_5v4wCMyi325BG89pQcnfzM
          stance: supports
          locator: CBDB:139481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139481）
          source: &a1
            id: s_5v4wCMyi325BG89pQcnfzM
            source_type: api_record
            title: 中国历代人物传记资料库：王延（CBDB 139481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139481&o=json
            external_identifier: CBDB:139481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RZP63Kbdvt7NEGTqpn2Bo5
        subject_person_id: p_gH1Zf7c2UUGbFQrJkFjGFF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 601年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_veNzKAbZd2asGfvGGZEb4q
          claim_id: c_RZP63Kbdvt7NEGTqpn2Bo5
          source_id: s_5v4wCMyi325BG89pQcnfzM
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
        id: c_heYvdmaQBCdEKQfY4VMkik
        subject_person_id: p_gH1Zf7c2UUGbFQrJkFjGFF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 666年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gaLZAFUBnPLLtEGFrCNesn
          claim_id: c_heYvdmaQBCdEKQfY4VMkik
          source_id: s_5v4wCMyi325BG89pQcnfzM
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
        id: c_bgB5nTH5EZwBBGWv877iK1
        subject_person_id: p_gH1Zf7c2UUGbFQrJkFjGFF
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
        - id: cs_pSHVKQw2fT5Zq5GtDEhTHi
          claim_id: c_bgB5nTH5EZwBBGWv877iK1
          source_id: s_5v4wCMyi325BG89pQcnfzM
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
        id: c_Y1anHprIyyhmm2xKOHfG4S
        subject_person_id: p_5m89y2Q5Np1HJ8k52qc2BP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gH1Zf7c2UUGbFQrJkFjGFF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sRFwWhjoxIYKZO7Qw-cud1
          claim_id: c_Y1anHprIyyhmm2xKOHfG4S
          source_id: s_NiifEoo4N68bVVqGqUw5G5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 2：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NiifEoo4N68bVVqGqUw5G5
            source_type: api_record
            title: 中国历代人物传记资料库：王則（CBDB 148120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148120&o=json
            external_identifier: CBDB:148120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5m89y2Q5Np1HJ8k52qc2BP
        status: active
        display_name: 王則
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延 | accepted |
| birth.date | 601年 | accepted |
| death.date | 666年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5m89y2Q5Np1HJ8k52qc2BP | 王則 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延（CBDB 139481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139481&o=json)
- [中国历代人物传记资料库：王則（CBDB 148120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148120&o=json)
