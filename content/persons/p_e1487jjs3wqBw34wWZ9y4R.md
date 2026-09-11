---
schema: wang-person/v1
id: p_e1487jjs3wqBw34wWZ9y4R
status: active
merged_into: null
display_name: 浦蓮
revision: 1
cbdb_id: 70265
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_0UOdzq48cSN7GXF4jP_YC8
        subject_person_id: p_e1487jjs3wqBw34wWZ9y4R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 浦蓮
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aEI9czcCk88JRJEJJG528Q
          claim_id: c_0UOdzq48cSN7GXF4jP_YC8
          source_id: s_M3g3XIe-npkgV2zePohLgk
          stance: supports
          locator: CBDB:70265
          quotation: null
          interpretation_note: CBDB 明确记录的王文溥配偶
          source: &a1
            id: s_M3g3XIe-npkgV2zePohLgk
            source_type: api_record
            title: 中国历代人物传记资料库：浦蓮（CBDB 70265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70265&o=json
            external_identifier: CBDB:70265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_xRNl0pWyXareJdwsmielxn
        subject_person_id: p_yudA6ZEw2iJN85eNtCgZcR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_e1487jjs3wqBw34wWZ9y4R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dLQt52gsdlnXmGS4fLzenk
          claim_id: c_xRNl0pWyXareJdwsmielxn
          source_id: s_M3g3XIe-npkgV2zePohLgk
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1476, HuWenKai #485：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yudA6ZEw2iJN85eNtCgZcR
        status: active
        display_name: 王文溥
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 浦蓮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 浦蓮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_yudA6ZEw2iJN85eNtCgZcR | 王文溥 | accepted |

## 外部来源

- [中国历代人物传记资料库：浦蓮（CBDB 70265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70265&o=json)
