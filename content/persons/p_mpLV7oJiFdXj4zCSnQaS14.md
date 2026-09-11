---
schema: wang-person/v1
id: p_mpLV7oJiFdXj4zCSnQaS14
status: active
merged_into: null
display_name: 王勉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBmF1bVkxVCr1KzFDcwNi2
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QGQZAzH2GsPvqrgmBxTsf2
          claim_id: c_kBmF1bVkxVCr1KzFDcwNi2
          source_id: s_zryi2LkK33o2BwF2L2reos
          stance: supports
          locator: CBDB:237318
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237318）
          source: &a1
            id: s_zryi2LkK33o2BwF2L2reos
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 237318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237318&o=json
            external_identifier: CBDB:237318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A5Exk2YquzCU3sB3nudzJP
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
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
        - id: cs_RT7G2Kc5syPPs8DegikUTK
          claim_id: c_A5Exk2YquzCU3sB3nudzJP
          source_id: s_zryi2LkK33o2BwF2L2reos
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
        id: c_4MhEusLXJ-34bDNoelPb5F
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TvjN1nga4vdBGSvpaM82jn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H_6_XPkzbNiVU-xEL0iheu
          claim_id: c_4MhEusLXJ-34bDNoelPb5F
          source_id: s_zryi2LkK33o2BwF2L2reos
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第四十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TvjN1nga4vdBGSvpaM82jn
        status: active
        display_name: 王彧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TvjN1nga4vdBGSvpaM82jn | 王彧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勉（CBDB 237318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237318&o=json)
