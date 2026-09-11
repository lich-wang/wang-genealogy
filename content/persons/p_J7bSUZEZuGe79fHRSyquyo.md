---
schema: wang-person/v1
id: p_J7bSUZEZuGe79fHRSyquyo
status: active
merged_into: null
display_name: 王敏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HuwM8c3cjeFMbPfhvTndJ9
        subject_person_id: p_J7bSUZEZuGe79fHRSyquyo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9sRSFhjhU5dkxWtnWAVA8d
          claim_id: c_HuwM8c3cjeFMbPfhvTndJ9
          source_id: s_qKK2YGbCouMZeUn3MMYhke
          stance: supports
          locator: CBDB:139235
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139235）
          source: &a1
            id: s_qKK2YGbCouMZeUn3MMYhke
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 139235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139235&o=json
            external_identifier: CBDB:139235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.396Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YN4L5yFqdz5ahKpDVPvxRh
        subject_person_id: p_J7bSUZEZuGe79fHRSyquyo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 636年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kGtFkUmiCNT4NM6HtR5dHL
          claim_id: c_YN4L5yFqdz5ahKpDVPvxRh
          source_id: s_qKK2YGbCouMZeUn3MMYhke
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
        id: c_A5xDBZg6qpbC8H3Py65spS
        subject_person_id: p_J7bSUZEZuGe79fHRSyquyo
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
        - id: cs_zUMj2vM37TGWb4Pi53MpVN
          claim_id: c_A5xDBZg6qpbC8H3Py65spS
          source_id: s_qKK2YGbCouMZeUn3MMYhke
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
        id: c_HxDQVlX7AiMfRAsjmAZtgq
        subject_person_id: p_BHPQz82Qh1quPmXFSc24Gv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J7bSUZEZuGe79fHRSyquyo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iRu7aJOkk4kj6dWRZCkOLo
          claim_id: c_HxDQVlX7AiMfRAsjmAZtgq
          source_id: s_gy5iCRTmgCF9KzhSdT8LJS
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 168：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gy5iCRTmgCF9KzhSdT8LJS
            source_type: api_record
            title: 中国历代人物传记资料库：王穆（CBDB 147691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147691&o=json
            external_identifier: CBDB:147691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BHPQz82Qh1quPmXFSc24Gv
        status: active
        display_name: 王穆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| death.date | 636年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BHPQz82Qh1quPmXFSc24Gv | 王穆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 139235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139235&o=json)
- [中国历代人物传记资料库：王穆（CBDB 147691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147691&o=json)
