---
schema: wang-person/v1
id: p_ShM3z8ns9MGqsS2SF6TR5B
status: active
merged_into: null
display_name: 王時阜
cbdb_id: 288160
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vVtbSztpxzNdmT7KEkr7UG
        subject_person_id: p_ShM3z8ns9MGqsS2SF6TR5B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時阜，明人物。嘉靖八年進士，曾任管軍百戶。（中国历代人物传记资料库 CBDB 288160）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VHQZdFIn6y4pigosh_0X3y
          claim_id: c_vVtbSztpxzNdmT7KEkr7UG
          source_id: s_H6qqJCiC79p9w49RTqJsBr
          stance: supports
          locator: CBDB:288160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_H6qqJCiC79p9w49RTqJsBr
            source_type: api_record
            title: 中国历代人物传记资料库：王時阜（CBDB 288160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288160&o=json
            external_identifier: CBDB:288160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1GveMBUSmmTEikC6QLnTak
        subject_person_id: p_ShM3z8ns9MGqsS2SF6TR5B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時阜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Hb5e2fy3EbQ46aHa1tXzHT
          claim_id: c_1GveMBUSmmTEikC6QLnTak
          source_id: s_H6qqJCiC79p9w49RTqJsBr
          stance: supports
          locator: CBDB:288160
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_QWOVv1IqfcHmncbhSs7MDc
        subject_person_id: p_ShM3z8ns9MGqsS2SF6TR5B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_B8unMbh7dYqs1NQhhGC4Lt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RG9Jv3XjbcQaSwzAtaeTrg
          claim_id: c_QWOVv1IqfcHmncbhSs7MDc
          source_id: s_H6qqJCiC79p9w49RTqJsBr
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第七十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H6qqJCiC79p9w49RTqJsBr
            source_type: api_record
            title: 中国历代人物传记资料库：王時阜（CBDB 288160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288160&o=json
            external_identifier: CBDB:288160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_B8unMbh7dYqs1NQhhGC4Lt
        status: active
        display_name: 王仲錦
        merged_into_person_id: null
  other: []
---

# 王時阜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時阜，明人物。嘉靖八年進士，曾任管軍百戶。（中国历代人物传记资料库 CBDB 288160） | accepted |
| name.primary | 王時阜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_B8unMbh7dYqs1NQhhGC4Lt | 王仲錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時阜（CBDB 288160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288160&o=json)
