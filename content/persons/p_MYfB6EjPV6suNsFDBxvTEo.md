---
schema: wang-person/v1
id: p_MYfB6EjPV6suNsFDBxvTEo
status: active
merged_into: null
display_name: 王鼎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zScvf9RQYYkXSJ2Kue4huC
        subject_person_id: p_MYfB6EjPV6suNsFDBxvTEo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mXZR4QkhhNMMtf4QFiey7w
          claim_id: c_zScvf9RQYYkXSJ2Kue4huC
          source_id: s_72YDoZhdfpvDNv8DapQzAA
          stance: supports
          locator: CBDB:550870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550870）
          source: &a1
            id: s_72YDoZhdfpvDNv8DapQzAA
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 550870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550870&o=json
            external_identifier: CBDB:550870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iAnFYqC2bVsrgQrNAiYP8p
        subject_person_id: p_MYfB6EjPV6suNsFDBxvTEo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，清人物。籍贯蘇州府，入仕邑庠生。（中国历代人物传记资料库 CBDB 550870）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ep1RtDh1Eq386TLqro9-f2
          claim_id: c_iAnFYqC2bVsrgQrNAiYP8p
          source_id: s_72YDoZhdfpvDNv8DapQzAA
          stance: supports
          locator: CBDB:550870
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oa8rAH11Ovs9tIcZpfnoKB
        subject_person_id: p_UQEEqtuYzcUvSGyTq4Y74D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MYfB6EjPV6suNsFDBxvTEo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rFQUIlqRn57rN7G55mFdmW
          claim_id: c_oa8rAH11Ovs9tIcZpfnoKB
          source_id: s_72YDoZhdfpvDNv8DapQzAA
          stance: supports
          locator: 滸墅關志，Igid=176462：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UQEEqtuYzcUvSGyTq4Y74D
        status: active
        display_name: 王宗源
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，清人物。籍贯蘇州府，入仕邑庠生。（中国历代人物传记资料库 CBDB 550870） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UQEEqtuYzcUvSGyTq4Y74D | 王宗源 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 550870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550870&o=json)
