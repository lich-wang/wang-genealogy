---
schema: wang-person/v1
id: p_oHjd3b6siEDgtPecmkw4GX
status: active
merged_into: null
display_name: 王應第
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z9SXsaFZK1TURGRweqStid
        subject_person_id: p_oHjd3b6siEDgtPecmkw4GX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應第
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2P2DAZExgfD1JyNTEMgEgq
          claim_id: c_z9SXsaFZK1TURGRweqStid
          source_id: s_W7y93gVbAucf21yYwqn4HX
          stance: supports
          locator: CBDB:526975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526975）
          source: &a1
            id: s_W7y93gVbAucf21yYwqn4HX
            source_type: api_record
            title: 中国历代人物传记资料库：王應第（CBDB 526975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526975&o=json
            external_identifier: CBDB:526975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b6ye49BN27GHGngh6dC5qA
        subject_person_id: p_oHjd3b6siEDgtPecmkw4GX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bNw2MzZ5SeXkPJKgadrM3J
          claim_id: c_b6ye49BN27GHGngh6dC5qA
          source_id: s_W7y93gVbAucf21yYwqn4HX
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
        id: c_b38nmBi-CtJPZ11xktBpvG
        subject_person_id: p_oHjd3b6siEDgtPecmkw4GX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NhKpLdQq12fLo7PXnhALiH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YhjoEXBGt1h6Y79G8sD83m
          claim_id: c_b38nmBi-CtJPZ11xktBpvG
          source_id: s_9fSEUnJ5P4ELEHB2GR8Xzn
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13155：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9fSEUnJ5P4ELEHB2GR8Xzn
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 69445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69445&o=json
            external_identifier: CBDB:69445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NhKpLdQq12fLo7PXnhALiH
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應第

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應第 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NhKpLdQq12fLo7PXnhALiH | 王鉞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應第（CBDB 526975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526975&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 69445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69445&o=json)
