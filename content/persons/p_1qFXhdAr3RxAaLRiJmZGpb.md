---
schema: wang-person/v1
id: p_1qFXhdAr3RxAaLRiJmZGpb
status: active
merged_into: null
display_name: 王公培
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GGGdL2bxG26RXXJgVw4vWJ
        subject_person_id: p_1qFXhdAr3RxAaLRiJmZGpb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公培
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ggZiM4SMr19tS3dzSoPyMC
          claim_id: c_GGGdL2bxG26RXXJgVw4vWJ
          source_id: s_x2gHih2VLgD386mQaAjLwD
          stance: supports
          locator: CBDB:636320
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636320）
          source: &a1
            id: s_x2gHih2VLgD386mQaAjLwD
            source_type: api_record
            title: 中国历代人物传记资料库：王公培（CBDB 636320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636320&o=json
            external_identifier: CBDB:636320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S3jFMFUNYUQwi1ekArDFHu
        subject_person_id: p_1qFXhdAr3RxAaLRiJmZGpb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王公培，清人物。籍贯深澤，入仕貢生: 拔貢，曾任經歷。（中国历代人物传记资料库 CBDB 636320）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r5frS_ZdU2bI0pNxxLyivn
          claim_id: c_S3jFMFUNYUQwi1ekArDFHu
          source_id: s_x2gHih2VLgD386mQaAjLwD
          stance: supports
          locator: CBDB:636320
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公培

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公培 | accepted |
| bio.summary | 王公培，清人物。籍贯深澤，入仕貢生: 拔貢，曾任經歷。（中国历代人物传记资料库 CBDB 636320） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公培（CBDB 636320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636320&o=json)
