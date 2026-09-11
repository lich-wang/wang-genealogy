---
schema: wang-person/v1
id: p_kK6q5ZyB46nbch9D2dp3YD
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 37754
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r-QZtDxvgkEPYcd2lMPL6z
        subject_person_id: p_kK6q5ZyB46nbch9D2dp3YD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDvMXo0pffgdNRc0dOedw0
          claim_id: c_r-QZtDxvgkEPYcd2lMPL6z
          source_id: s_TDR8Fgk8DVyINzEDxi0ojx
          stance: supports
          locator: CBDB:37754
          quotation: null
          interpretation_note: CBDB 明确记录的王發配偶
          source: &a1
            id: s_TDR8Fgk8DVyINzEDxi0ojx
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王發妻)（CBDB 37754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37754&o=json
            external_identifier: CBDB:37754
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
        id: c_Q2W7QGFw9tWFzR0JCLQ671
        subject_person_id: p_BKktkDBxZW36NWWhLLkpwH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kK6q5ZyB46nbch9D2dp3YD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7pEB1L8GUjOAYl6pKKJxgo
          claim_id: c_Q2W7QGFw9tWFzR0JCLQ671
          source_id: s_TDR8Fgk8DVyINzEDxi0ojx
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BKktkDBxZW36NWWhLLkpwH
        status: active
        display_name: 王發
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BKktkDBxZW36NWWhLLkpwH | 王發 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王發妻)（CBDB 37754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37754&o=json)
