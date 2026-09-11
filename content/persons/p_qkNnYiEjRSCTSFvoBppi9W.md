---
schema: wang-person/v1
id: p_qkNnYiEjRSCTSFvoBppi9W
status: active
merged_into: null
display_name: 王瑗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FnXKNPyAoAC6nZFLBQ4fsu
        subject_person_id: p_qkNnYiEjRSCTSFvoBppi9W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U48KySBStMadrL5vUW5Yv1
          claim_id: c_FnXKNPyAoAC6nZFLBQ4fsu
          source_id: s_Q2Pz9ftzAJRc69LqaYhBVL
          stance: supports
          locator: CBDB:120614
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120614）
          source: &a1
            id: s_Q2Pz9ftzAJRc69LqaYhBVL
            source_type: api_record
            title: 中国历代人物传记资料库：王瑗（CBDB 120614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120614&o=json
            external_identifier: CBDB:120614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TG2XUL47RcjYFAfGLaAQ4A
        subject_person_id: p_qkNnYiEjRSCTSFvoBppi9W
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
        - id: cs_E2MLYPX7xLb59sypWigcEt
          claim_id: c_TG2XUL47RcjYFAfGLaAQ4A
          source_id: s_Q2Pz9ftzAJRc69LqaYhBVL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RQsCzvYLc1vO28QUKEbSTG
        subject_person_id: p_aHKUYiw3rsbWPr9u72yJ8e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qkNnYiEjRSCTSFvoBppi9W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YwplBOO1degR6j06ZpE9Ma
          claim_id: c_RQsCzvYLc1vO28QUKEbSTG
          source_id: s_Q2Pz9ftzAJRc69LqaYhBVL
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3578, HuWenKai #245：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aHKUYiw3rsbWPr9u72yJ8e
        status: active
        display_name: 王子良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2ZULYWUd6QyDK8hQ8AeoQ0
        subject_person_id: p_qkNnYiEjRSCTSFvoBppi9W
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sm7i9P1h7hiaefR6mdQRc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ipnJXlXB_HAOzBFTJuOPhM
          claim_id: c_2ZULYWUd6QyDK8hQ8AeoQ0
          source_id: s_KI8LfxrSqXeDyhsX4iUvmQ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3578, HuWenKai #245：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KI8LfxrSqXeDyhsX4iUvmQ
            source_type: api_record
            title: 中国历代人物传记资料库：黃瑞瑜（CBDB 120599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120599&o=json
            external_identifier: CBDB:120599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sm7i9P1h7hiaefR6mdQRc6
        status: active
        display_name: 黃瑞瑜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王瑗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑗 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aHKUYiw3rsbWPr9u72yJ8e | 王子良 | accepted |
| spouses | p_sm7i9P1h7hiaefR6mdQRc6 | 黃瑞瑜 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃瑞瑜（CBDB 120599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120599&o=json)
- [中国历代人物传记资料库：王瑗（CBDB 120614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120614&o=json)
