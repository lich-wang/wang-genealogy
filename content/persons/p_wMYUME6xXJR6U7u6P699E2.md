---
schema: wang-person/v1
id: p_wMYUME6xXJR6U7u6P699E2
status: active
merged_into: null
display_name: 周氏
revision: 1
cbdb_id: 231090
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4K4TJRpcRPL79CrTDWCj7i
        subject_person_id: p_wMYUME6xXJR6U7u6P699E2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231090）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__MenWrBliXVRFiEzSgxOGQ
          claim_id: c_4K4TJRpcRPL79CrTDWCj7i
          source_id: s_LFCluG3WC1UC__mlOfX0fF
          stance: supports
          locator: CBDB:231090
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LFCluG3WC1UC__mlOfX0fF
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王用妻)（CBDB 231090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231090&o=json
            external_identifier: CBDB:231090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dHkBcuwQXAe3ohiCDurito
        subject_person_id: p_wMYUME6xXJR6U7u6P699E2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oBCzaJbuERFBmvolqnYUSt
          claim_id: c_dHkBcuwQXAe3ohiCDurito
          source_id: s_LFCluG3WC1UC__mlOfX0fF
          stance: supports
          locator: CBDB:231090
          quotation: null
          interpretation_note: CBDB 明确记录的王用配偶
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
        id: c_kgvnVZqmtLUH45_0Clrt6O
        subject_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wMYUME6xXJR6U7u6P699E2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nusZNlgRt0PHbwd2QIwRaL
          claim_id: c_kgvnVZqmtLUH45_0Clrt6O
          source_id: s_LFCluG3WC1UC__mlOfX0fF
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9Ebxw9nqUzpjPj6LJw3JKY
        status: active
        display_name: 王用
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 周氏，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231090） | accepted |
| name.primary | 周氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9Ebxw9nqUzpjPj6LJw3JKY | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：周氏(王用妻)（CBDB 231090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231090&o=json)
