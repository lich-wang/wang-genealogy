---
schema: wang-person/v1
id: p_SG9NgmPR3Yaeb99AmJbh38
status: active
merged_into: null
display_name: 王師
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JDcwJxisJFGd6cto8SXZYr
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_84SQKVL3H2iwCTtUNPByw7
          claim_id: c_JDcwJxisJFGd6cto8SXZYr
          source_id: s_6nS14JEXQgMJ3Jm3bXa72Q
          stance: supports
          locator: CBDB:56851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56851）
          source: &a1
            id: s_6nS14JEXQgMJ3Jm3bXa72Q
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 56851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56851&o=json
            external_identifier: CBDB:56851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1vTDgXUaJSMsmryBHdy3Zi
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1690年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQ1wZXwmVdVHF6B243FWP1
          claim_id: c_1vTDgXUaJSMsmryBHdy3Zi
          source_id: s_6nS14JEXQgMJ3Jm3bXa72Q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SaKVL3QUJDB99wDZi329UM
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1751年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6dQt7tDVNmP8YLD9w8DQiP
          claim_id: c_SaKVL3QUJDB99wDZi329UM
          source_id: s_6nS14JEXQgMJ3Jm3bXa72Q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KjkJucmNTrWprLtPhKWt7S
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師（1690年—1751年），清人物。明清進士進士，籍贯臨汾，入仕進士，曾任按察使、縣知縣、巡道。（中国历代人物传记资料库 CBDB 56851）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JJ0VBLgM2hBLH7on_lXdG5
          claim_id: c_KjkJucmNTrWprLtPhKWt7S
          source_id: s_6nS14JEXQgMJ3Jm3bXa72Q
          stance: supports
          locator: CBDB:56851
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Uo8BiWtvLjo4eO6x1-rk_2
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5RSxEJAu5VuwNpaediNpWE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oFElidvXT_JT0wkrVjfGIF
          claim_id: c_Uo8BiWtvLjo4eO6x1-rk_2
          source_id: s_6nS14JEXQgMJ3Jm3bXa72Q
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），45：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5RSxEJAu5VuwNpaediNpWE
        status: active
        display_name: 王孫武
        merged_into_person_id: null
    - claim:
        id: c_YD9DJ6p1NdTNtMor_0P5yM
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M6bmPyZ1Q1V2tN4jxPLfm7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ips5kzjjwcyz76-hVEr6IV
          claim_id: c_YD9DJ6p1NdTNtMor_0P5yM
          source_id: s_6nS14JEXQgMJ3Jm3bXa72Q
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），45：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_M6bmPyZ1Q1V2tN4jxPLfm7
        status: active
        display_name: 王紹武
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師 | accepted |
| birth.date | 1690年 | accepted |
| death.date | 1751年 | accepted |
| bio.summary | 王師（1690年—1751年），清人物。明清進士進士，籍贯臨汾，入仕進士，曾任按察使、縣知縣、巡道。（中国历代人物传记资料库 CBDB 56851） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5RSxEJAu5VuwNpaediNpWE | 王孫武 | accepted |
| children | p_M6bmPyZ1Q1V2tN4jxPLfm7 | 王紹武 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師（CBDB 56851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56851&o=json)
