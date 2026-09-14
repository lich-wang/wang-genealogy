---
schema: wang-person/v1
id: p_kPEXS9YKCdHtELaPsm78vE
status: active
merged_into: null
display_name: 王朝弼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q3Wz3NKuR2t8rNrDTM8mLp
        subject_person_id: p_kPEXS9YKCdHtELaPsm78vE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_orSScmeucF9dcj1N424FTz
          claim_id: c_q3Wz3NKuR2t8rNrDTM8mLp
          source_id: s_zRWTF6QbroRbwoAkJfv8KD
          stance: supports
          locator: CBDB:282730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282730）
          source: &a1
            id: s_zRWTF6QbroRbwoAkJfv8KD
            source_type: api_record
            title: 中国历代人物传记资料库：王朝弼（CBDB 282730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282730&o=json
            external_identifier: CBDB:282730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.104Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2d6LmTAJpDViKjCu1SoPJ5
        subject_person_id: p_kPEXS9YKCdHtELaPsm78vE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝弼，明人物。正德十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 282730）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qtslGnhCey2nLnlqckTni6
          claim_id: c_2d6LmTAJpDViKjCu1SoPJ5
          source_id: s_zRWTF6QbroRbwoAkJfv8KD
          stance: supports
          locator: CBDB:282730
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
  other:
    - claim:
        id: c_JouubX_n2TC2jmSBw1BKC9
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kPEXS9YKCdHtELaPsm78vE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kT-FiUcAiSiX9g85uLzSAs
          claim_id: c_JouubX_n2TC2jmSBw1BKC9
          source_id: s_c9Utcn2GTCPe5vaZBMFrB-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202059 王朝瑬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_c9Utcn2GTCPe5vaZBMFrB-
            source_type: api_record
            title: 中国历代人物传记资料库：王朝弼（CBDB 282730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282730&o=json
            external_identifier: CBDB:282730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ARBsKDMivmjbBTxJiQz7Aa
        status: active
        display_name: 王朝瑬
        merged_into_person_id: null
---

# 王朝弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝弼 | accepted |
| bio.summary | 王朝弼，明人物。正德十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 282730） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_ARBsKDMivmjbBTxJiQz7Aa | 王朝瑬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝弼（CBDB 282730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282730&o=json)
