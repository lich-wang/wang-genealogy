---
schema: wang-person/v1
id: p_fQ5Buk421CUuiAxyk4ogFo
status: active
merged_into: null
display_name: 王茂怡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xt5rJVWZwDknQL7vRQ72m1
        subject_person_id: p_fQ5Buk421CUuiAxyk4ogFo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UfvxqJLLGfPFwJj9ZDqPC8
          claim_id: c_xt5rJVWZwDknQL7vRQ72m1
          source_id: s_qeG9o7wSVDqarvMicZUZAa
          stance: supports
          locator: CBDB:703799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703799）
          source: &a1
            id: s_qeG9o7wSVDqarvMicZUZAa
            source_type: api_record
            title: 中国历代人物传记资料库：王茂怡（CBDB 703799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703799&o=json
            external_identifier: CBDB:703799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CGGMobPgUxveoPi4TTrFDE
        subject_person_id: p_fQ5Buk421CUuiAxyk4ogFo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂怡，清人物。曾任奉直大夫。（中国历代人物传记资料库 CBDB 703799）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QbiyIffg79GwW1tbu8qweQ
          claim_id: c_CGGMobPgUxveoPi4TTrFDE
          source_id: s_qeG9o7wSVDqarvMicZUZAa
          stance: supports
          locator: CBDB:703799
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TyR4Za8durpAx3cSrfyWTP
        subject_person_id: p_iC9eyW5EGTjEu2z7hi9uMs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fQ5Buk421CUuiAxyk4ogFo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aUHoxFcAGto0dsCZysHppl
          claim_id: c_TyR4Za8durpAx3cSrfyWTP
          source_id: s_qeG9o7wSVDqarvMicZUZAa
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iC9eyW5EGTjEu2z7hi9uMs
        status: active
        display_name: 王士階
        merged_into_person_id: null
  children:
    - claim:
        id: c_Vp4xx1-KlR4kf8LwtxV-DZ
        subject_person_id: p_fQ5Buk421CUuiAxyk4ogFo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PZ5QGmBiXkdeYy8tBcE7VF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-uc65RWLHUSJHAAeXpvNig
          claim_id: c_Vp4xx1-KlR4kf8LwtxV-DZ
          source_id: s_qeG9o7wSVDqarvMicZUZAa
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PZ5QGmBiXkdeYy8tBcE7VF
        status: active
        display_name: 王恭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王茂怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂怡 | accepted |
| bio.summary | 王茂怡，清人物。曾任奉直大夫。（中国历代人物传记资料库 CBDB 703799） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iC9eyW5EGTjEu2z7hi9uMs | 王士階 | accepted |
| children | p_PZ5QGmBiXkdeYy8tBcE7VF | 王恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂怡（CBDB 703799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703799&o=json)
