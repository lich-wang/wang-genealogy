---
schema: wang-person/v1
id: p_iZ1s2ZuGvhTd4EXAvXUyws
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 689299
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Es2FHyhY4tZrn-gInXi1Tn
        subject_person_id: p_iZ1s2ZuGvhTd4EXAvXUyws
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
        - id: cs_abcJb_6jUfq9xMJ851IEFA
          claim_id: c_Es2FHyhY4tZrn-gInXi1Tn
          source_id: s_1cDCzqQupnAg-z_08invpW
          stance: supports
          locator: CBDB:689299
          quotation: null
          interpretation_note: CBDB 明确记录的王審瓊配偶
          source: &a1
            id: s_1cDCzqQupnAg-z_08invpW
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王審瓊妻)（CBDB 689299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689299&o=json
            external_identifier: CBDB:689299
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
        id: c_R6f1g9NDqUyYS-xBYCQX35
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iZ1s2ZuGvhTd4EXAvXUyws
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__axV5UmOMvHN80P8BFei9s
          claim_id: c_R6f1g9NDqUyYS-xBYCQX35
          source_id: s_1cDCzqQupnAg-z_08invpW
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s2Ci3S96sKz8q9W2YdX1pM
        status: active
        display_name: 王審瓊
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
| spouses | p_s2Ci3S96sKz8q9W2YdX1pM | 王審瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王審瓊妻)（CBDB 689299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689299&o=json)
