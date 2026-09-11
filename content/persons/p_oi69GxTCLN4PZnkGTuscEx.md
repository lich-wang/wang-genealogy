---
schema: wang-person/v1
id: p_oi69GxTCLN4PZnkGTuscEx
status: active
merged_into: null
display_name: 王經
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j3h2WRrQWhFo8Pqr2TNpF5
        subject_person_id: p_oi69GxTCLN4PZnkGTuscEx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DuxA1wpqp4ERWmwtYuQa3b
          claim_id: c_j3h2WRrQWhFo8Pqr2TNpF5
          source_id: s_rKw8Zpp1wzx52DHGZ9mHvb
          stance: supports
          locator: CBDB:230464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230464）
          source: &a1
            id: s_rKw8Zpp1wzx52DHGZ9mHvb
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 230464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230464&o=json
            external_identifier: CBDB:230464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N7JmB5899psAAiJP2Qx95s
        subject_person_id: p_oi69GxTCLN4PZnkGTuscEx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經，明人物。萬曆丙戌科進士進士，籍贯霑化。（中国历代人物传记资料库 CBDB 230464）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EYgZ5GlovQXl-R7h_NpDd6
          claim_id: c_N7JmB5899psAAiJP2Qx95s
          source_id: s_rKw8Zpp1wzx52DHGZ9mHvb
          stance: supports
          locator: CBDB:230464
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_s2NEv3k2kVZZlAXXtdhHcK
        subject_person_id: p_oi69GxTCLN4PZnkGTuscEx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W5zx3veyZyjG5gBNh4mu99
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aOEkY1ZFzEhxyw38Wv0ei8
          claim_id: c_s2NEv3k2kVZZlAXXtdhHcK
          source_id: s_rKw8Zpp1wzx52DHGZ9mHvb
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百五十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W5zx3veyZyjG5gBNh4mu99
        status: active
        display_name: 王道正
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | 王經，明人物。萬曆丙戌科進士進士，籍贯霑化。（中国历代人物传记资料库 CBDB 230464） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_W5zx3veyZyjG5gBNh4mu99 | 王道正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 230464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230464&o=json)
