---
schema: wang-person/v1
id: p_6RXDLLM6sg158etGji2Ajt
status: active
merged_into: null
display_name: 王震
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qcDhtDJvoGYPi4SHHmF7tn
        subject_person_id: p_6RXDLLM6sg158etGji2Ajt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2nxQDzdEfKa6ZkDLhLnMeU
          claim_id: c_qcDhtDJvoGYPi4SHHmF7tn
          source_id: s_aQPEiFDKhXewR97dFD4wYj
          stance: supports
          locator: CBDB:140259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140259）
          source: &a1
            id: s_aQPEiFDKhXewR97dFD4wYj
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 140259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140259&o=json
            external_identifier: CBDB:140259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_q14gKKajJ2URbfBefLQE1Y
        subject_person_id: p_6RXDLLM6sg158etGji2Ajt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 649年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sgsdoumAfbrCo67vjPyTcR
          claim_id: c_q14gKKajJ2URbfBefLQE1Y
          source_id: s_aQPEiFDKhXewR97dFD4wYj
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
        id: c_w2AAXYJh7m1Kn7HP4t96HQ
        subject_person_id: p_6RXDLLM6sg158etGji2Ajt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 707年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zzahuTFfS657DgPNBZDx1F
          claim_id: c_w2AAXYJh7m1Kn7HP4t96HQ
          source_id: s_aQPEiFDKhXewR97dFD4wYj
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
        id: c_wXhoLz14SuoQ36BizErTjt
        subject_person_id: p_6RXDLLM6sg158etGji2Ajt
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
        - id: cs_kmFeDgv3vyqt6a76r9dMB6
          claim_id: c_wXhoLz14SuoQ36BizErTjt
          source_id: s_aQPEiFDKhXewR97dFD4wYj
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
        id: c_-XeV-xFjpJMcwgSjtCsnac
        subject_person_id: p_ZBSqCJ2UQvXiJRMKwjXZvU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6RXDLLM6sg158etGji2Ajt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FI8cEmaI9xXUbbGwLrPLML
          claim_id: c_-XeV-xFjpJMcwgSjtCsnac
          source_id: s_aQPEiFDKhXewR97dFD4wYj
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 32：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZBSqCJ2UQvXiJRMKwjXZvU
        status: active
        display_name: 王師順
        merged_into_person_id: null
  children:
    - claim:
        id: c_lmVSz5orEXQvYiEX1uWkjc
        subject_person_id: p_6RXDLLM6sg158etGji2Ajt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GdMD2U5cMXJm7vvjZhwJqE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VLjgoYnSM-3bXRBWG_P9tp
          claim_id: c_lmVSz5orEXQvYiEX1uWkjc
          source_id: s_aQPEiFDKhXewR97dFD4wYj
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 32：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GdMD2U5cMXJm7vvjZhwJqE
        status: active
        display_name: 王仲玄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| birth.date | 649年 | accepted |
| death.date | 707年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZBSqCJ2UQvXiJRMKwjXZvU | 王師順 | accepted |
| children | p_GdMD2U5cMXJm7vvjZhwJqE | 王仲玄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王震（CBDB 140259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140259&o=json)
