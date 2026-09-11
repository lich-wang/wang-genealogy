---
schema: wang-person/v1
id: p_sJw3vXAdXzHuC5w1Shag9M
status: active
merged_into: null
display_name: 王靖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m6LDKmiQiQ8zhqArae9NJc
        subject_person_id: p_sJw3vXAdXzHuC5w1Shag9M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_se1Bd6tLSALVs2PacLfjJw
          claim_id: c_m6LDKmiQiQ8zhqArae9NJc
          source_id: s_4UsyaZwExZCKvBdxo6Ntto
          stance: supports
          locator: CBDB:210326
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210326）
          source: &a1
            id: s_4UsyaZwExZCKvBdxo6Ntto
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 210326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210326&o=json
            external_identifier: CBDB:210326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rPPFy7nmfrRf1RyP76p92Q
        subject_person_id: p_sJw3vXAdXzHuC5w1Shag9M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖，明人物。天順八年進士，籍贯潮陽，曾任戶部主事。（中国历代人物传记资料库 CBDB 210326）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Iz5AJ8d8Bnu7zC6w44MorB
          claim_id: c_rPPFy7nmfrRf1RyP76p92Q
          source_id: s_4UsyaZwExZCKvBdxo6Ntto
          stance: supports
          locator: CBDB:210326
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8-ru1XsGKrgfmyLIM0n93g
        subject_person_id: p_sJw3vXAdXzHuC5w1Shag9M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A7pYYvCPv8mtUqCwSLePSw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0CYbw8dpkorurZfNBxnpuU
          claim_id: c_8-ru1XsGKrgfmyLIM0n93g
          source_id: s_4UsyaZwExZCKvBdxo6Ntto
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A7pYYvCPv8mtUqCwSLePSw
        status: active
        display_name: 王銓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靖 | accepted |
| bio.summary | 王靖，明人物。天順八年進士，籍贯潮陽，曾任戶部主事。（中国历代人物传记资料库 CBDB 210326） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_A7pYYvCPv8mtUqCwSLePSw | 王銓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靖（CBDB 210326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210326&o=json)
