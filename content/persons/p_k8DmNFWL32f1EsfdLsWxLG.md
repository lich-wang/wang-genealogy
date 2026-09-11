---
schema: wang-person/v1
id: p_k8DmNFWL32f1EsfdLsWxLG
status: active
merged_into: null
display_name: 王彥成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SubN7kTeESryyPAgLbnW4U
        subject_person_id: p_k8DmNFWL32f1EsfdLsWxLG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YE5eSmMQNgpZK8ZMu9rjQN
          claim_id: c_SubN7kTeESryyPAgLbnW4U
          source_id: s_4EjqbA6BFZ7a38tPguryhZ
          stance: supports
          locator: CBDB:121264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121264）
          source: &a1
            id: s_4EjqbA6BFZ7a38tPguryhZ
            source_type: api_record
            title: 中国历代人物传记资料库：王彥成（CBDB 121264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121264&o=json
            external_identifier: CBDB:121264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KtKUAJ3h6pPoccKaVcxVaW
        subject_person_id: p_k8DmNFWL32f1EsfdLsWxLG
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
        - id: cs_fN7CryKqmznLMev1C4nbZr
          claim_id: c_KtKUAJ3h6pPoccKaVcxVaW
          source_id: s_4EjqbA6BFZ7a38tPguryhZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_bH2JNHc4deceTsPU0YKmr9
        subject_person_id: p_k8DmNFWL32f1EsfdLsWxLG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1HcDUbq4v1bR39sKXytYRa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tSRUkEao-sgNzPvbYB99ZA
          claim_id: c_bH2JNHc4deceTsPU0YKmr9
          source_id: s_jaU0joGqd2CIqV1Nvvlcj8
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4287：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jaU0joGqd2CIqV1Nvvlcj8
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王彥成妻)（CBDB 121261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121261&o=json
            external_identifier: CBDB:121261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1HcDUbq4v1bR39sKXytYRa
        status: active
        display_name: 周氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王彥成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥成 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1HcDUbq4v1bR39sKXytYRa | 周氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥成（CBDB 121264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121264&o=json)
- [中国历代人物传记资料库：周氏(王彥成妻)（CBDB 121261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121261&o=json)
