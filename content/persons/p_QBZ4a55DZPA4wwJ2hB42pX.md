---
schema: wang-person/v1
id: p_QBZ4a55DZPA4wwJ2hB42pX
status: active
merged_into: null
display_name: 王轂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_biCWs87RDQNoy3thiewKSe
        subject_person_id: p_QBZ4a55DZPA4wwJ2hB42pX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2FydAUipSD5SQPiB41x2w8
          claim_id: c_biCWs87RDQNoy3thiewKSe
          source_id: s_NzzDx882tdXWhdNw1NC5VJ
          stance: supports
          locator: CBDB:36865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36865）
          source: &a1
            id: s_NzzDx882tdXWhdNw1NC5VJ
            source_type: api_record
            title: 中国历代人物传记资料库：王轂（CBDB 36865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36865&o=json
            external_identifier: CBDB:36865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hr1n7LLhEcYHt7CbT9799r
        subject_person_id: p_QBZ4a55DZPA4wwJ2hB42pX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轂，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 36865）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lO3MmbQSmodjIeMOQtHbT_
          claim_id: c_Hr1n7LLhEcYHt7CbT9799r
          source_id: s_NzzDx882tdXWhdNw1NC5VJ
          stance: supports
          locator: CBDB:36865
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Yu9ufpmuYHK_2_uzD762R-
        subject_person_id: p_7i6jUhtwwYvnVixPJQMhua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QBZ4a55DZPA4wwJ2hB42pX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y0U2n06I3hazrFGZ_p_7wC
          claim_id: c_Yu9ufpmuYHK_2_uzD762R-
          source_id: s__K5VEcgl-GSe79ALCnptqo
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7385）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s__K5VEcgl-GSe79ALCnptqo
            source_type: api_record
            title: 中国历代人物传记资料库：王轂（CBDB 36865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36865&o=json
            external_identifier: CBDB:36865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7i6jUhtwwYvnVixPJQMhua
        status: active
        display_name: 王元
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王轂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王轂 | accepted |
| bio.summary | 王轂，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 36865） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7i6jUhtwwYvnVixPJQMhua | 王元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王轂（CBDB 36865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36865&o=json)
