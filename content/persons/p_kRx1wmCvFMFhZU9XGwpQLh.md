---
schema: wang-person/v1
id: p_kRx1wmCvFMFhZU9XGwpQLh
status: active
merged_into: null
display_name: 王貞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C7rH49En2bVrCrA6C49nQp
        subject_person_id: p_kRx1wmCvFMFhZU9XGwpQLh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uqBopiokFTasvE5jwavb6C
          claim_id: c_C7rH49En2bVrCrA6C49nQp
          source_id: s_NGjw8TELY93XFBLzg8BLSN
          stance: supports
          locator: CBDB:148323
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148323）
          source: &a1
            id: s_NGjw8TELY93XFBLzg8BLSN
            source_type: api_record
            title: 中国历代人物传记资料库：王貞（CBDB 148323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148323&o=json
            external_identifier: CBDB:148323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_djxUrT8BhbueHmD8m97bga
        subject_person_id: p_kRx1wmCvFMFhZU9XGwpQLh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞，史料所见人物。本项目依据《中国历代人物传记资料库：王貞（CBDB 148323）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JSCgtiXrxh5xP-tfVDxtMi
          claim_id: c_djxUrT8BhbueHmD8m97bga
          source_id: s_NGjw8TELY93XFBLzg8BLSN
          stance: supports
          locator: CBDB:148323
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FIQi1PJFcAsM_HD9P-6eEF
        subject_person_id: p_73BYSHgsPmraMPb3gp86dP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kRx1wmCvFMFhZU9XGwpQLh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tp__jG4VD15KzZFgQrtKnm
          claim_id: c_FIQi1PJFcAsM_HD9P-6eEF
          source_id: s_NGjw8TELY93XFBLzg8BLSN
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zongzhang 10：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_73BYSHgsPmraMPb3gp86dP
        status: active
        display_name: 王贊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞 | accepted |
| bio.summary | 王貞，史料所见人物。本项目依据《中国历代人物传记资料库：王貞（CBDB 148323）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_73BYSHgsPmraMPb3gp86dP | 王贊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貞（CBDB 148323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148323&o=json)
