---
schema: wang-person/v1
id: p_jvgz3A7AzJv3t1CB85yysf
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 134687
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fJpaJ8nOO2Ko-bT91jc8gm
        subject_person_id: p_jvgz3A7AzJv3t1CB85yysf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6dgvPKfGtxs-wVL2KAw0cR
          claim_id: c_fJpaJ8nOO2Ko-bT91jc8gm
          source_id: s_T7rUG90apqgh0ZDwSkdhWp
          stance: supports
          locator: CBDB:134687
          quotation: null
          interpretation_note: CBDB 明确记录的王叔英配偶
          source: &a1
            id: s_T7rUG90apqgh0ZDwSkdhWp
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王叔英妻)（CBDB 134687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134687&o=json
            external_identifier: CBDB:134687
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
        id: c_o_Byj1jImx92YTJ-fXOfzQ
        subject_person_id: p_7Q2CpnM1CnJzE4L1HaSRUD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jvgz3A7AzJv3t1CB85yysf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WZMjigFgcLneVj4OIBZqLr
          claim_id: c_o_Byj1jImx92YTJ-fXOfzQ
          source_id: s_T7rUG90apqgh0ZDwSkdhWp
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2015：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7Q2CpnM1CnJzE4L1HaSRUD
        status: active
        display_name: 王叔英
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7Q2CpnM1CnJzE4L1HaSRUD | 王叔英 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王叔英妻)（CBDB 134687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134687&o=json)
