---
schema: wang-person/v1
id: p_PFAhy5DeN8TrMCHHyKTGNK
status: active
merged_into: null
display_name: 王獎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VVykgN7K8aGmmBdkZdvVwW
        subject_person_id: p_PFAhy5DeN8TrMCHHyKTGNK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LXzj2BozuoZAH4EDnWKfik
          claim_id: c_VVykgN7K8aGmmBdkZdvVwW
          source_id: s_LsBVVgQZ37d8NJBV3TS2x7
          stance: supports
          locator: CBDB:148707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148707）
          source: &a1
            id: s_LsBVVgQZ37d8NJBV3TS2x7
            source_type: api_record
            title: 中国历代人物传记资料库：王獎（CBDB 148707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148707&o=json
            external_identifier: CBDB:148707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9E4gJmUN5LnNbVXmuk4BGr
        subject_person_id: p_PFAhy5DeN8TrMCHHyKTGNK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獎，唐人物。籍贯北芒山，曾任齊王。（中国历代人物传记资料库 CBDB 148707）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y6AL7yRtAadMMQwFglICSm
          claim_id: c_9E4gJmUN5LnNbVXmuk4BGr
          source_id: s_LsBVVgQZ37d8NJBV3TS2x7
          stance: supports
          locator: CBDB:148707
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UBEoDEGhZEYfHE8EXH8pyB
        subject_person_id: p_PFAhy5DeN8TrMCHHyKTGNK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eiYNhoFHbSoqLPmP4X3HPw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MpJywxtpxDwdMXieGtlyEP
          claim_id: c_UBEoDEGhZEYfHE8EXH8pyB
          source_id: s_a1m9dbAawAMyuFH6eQPFjk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 93：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a1m9dbAawAMyuFH6eQPFjk
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 139670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139670&o=json
            external_identifier: CBDB:139670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eiYNhoFHbSoqLPmP4X3HPw
        status: active
        display_name: 王儉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王獎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獎 | accepted |
| bio.summary | 王獎，唐人物。籍贯北芒山，曾任齊王。（中国历代人物传记资料库 CBDB 148707） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eiYNhoFHbSoqLPmP4X3HPw | 王儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儉（CBDB 139670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139670&o=json)
- [中国历代人物传记资料库：王獎（CBDB 148707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148707&o=json)
