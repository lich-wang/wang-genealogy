---
schema: wang-person/v1
id: p_BoQ3bxPTXeG24V1AJeLzEL
status: active
merged_into: null
display_name: 王沂若
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NU9bMrxA3KVdCJSzLJD3zu
        subject_person_id: p_BoQ3bxPTXeG24V1AJeLzEL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂若
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aqQ793CR6hXdbxgsiPnKrT
          claim_id: c_NU9bMrxA3KVdCJSzLJD3zu
          source_id: s_iZzws7ey8SoQwoXQxk9z5Q
          stance: supports
          locator: CBDB:551503
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551503）
          source: &a1
            id: s_iZzws7ey8SoQwoXQxk9z5Q
            source_type: api_record
            title: 中国历代人物传记资料库：王沂若（CBDB 551503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551503&o=json
            external_identifier: CBDB:551503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_spu3gYXMVRg3ZLTa6tZ8En
        subject_person_id: p_BoQ3bxPTXeG24V1AJeLzEL
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
        - id: cs_sM1HiKpWNzxe5QYd4J3YAK
          claim_id: c_spu3gYXMVRg3ZLTa6tZ8En
          source_id: s_iZzws7ey8SoQwoXQxk9z5Q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FbP5KYDk-t9rs2UKDK3cCN
        subject_person_id: p_BoQ3bxPTXeG24V1AJeLzEL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vMrpuYoGovfAHAbszUSEaq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KXCerkWwV-0yVSmLJ6eNK9
          claim_id: c_FbP5KYDk-t9rs2UKDK3cCN
          source_id: s_iZzws7ey8SoQwoXQxk9z5Q
          stance: supports
          locator: 南陽府志，lgid=878671：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vMrpuYoGovfAHAbszUSEaq
        status: active
        display_name: 王模
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沂若

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沂若 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vMrpuYoGovfAHAbszUSEaq | 王模 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沂若（CBDB 551503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551503&o=json)
