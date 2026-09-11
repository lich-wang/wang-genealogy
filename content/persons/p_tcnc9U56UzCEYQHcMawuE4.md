---
schema: wang-person/v1
id: p_tcnc9U56UzCEYQHcMawuE4
status: active
merged_into: null
display_name: 王十朋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dSM64YHV38zA4MDLipxqmz
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王十朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FtkKWJSpA6QNPhfrchAcMb
          claim_id: c_dSM64YHV38zA4MDLipxqmz
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
          stance: supports
          locator: CBDB:10598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10598）
          source: &a1
            id: s_7HzyayY9Q2afFnRxZAR4YR
            source_type: api_record
            title: 中国历代人物传记资料库：王十朋（CBDB 10598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10598&o=json
            external_identifier: CBDB:10598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gnz7isdJW5WSMmP7wRHcv5
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1112年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jk71QGRPN3XxCjgnMFcuQ7
          claim_id: c_gnz7isdJW5WSMmP7wRHcv5
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
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
        id: c_pN6U9RGyhMCeTuQis6YrW7
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1171年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BTwLkCBiT9pKx47Z5bU6oR
          claim_id: c_pN6U9RGyhMCeTuQis6YrW7
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
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
        id: c_jmQ9yM8N1hoqVn1J54MxnR
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7wd2u6HdJL8CKyVqNtihsA
          claim_id: c_jmQ9yM8N1hoqVn1J54MxnR
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
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
        id: c_jEKAbKE2JJar2VKbwMOFhg
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_N1cFqf5V8zqrnZsPC2aixb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3b9VNJKnJtreYsDgsFcZp5
          claim_id: c_jEKAbKE2JJar2VKbwMOFhg
          source_id: s_t3d7KDAwC8AJRR1EMI9Go8
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1347;1349：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t3d7KDAwC8AJRR1EMI9Go8
            source_type: api_record
            title: 中国历代人物传记资料库：賈氏(王十朋妻)（CBDB 5173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5173&o=json
            external_identifier: CBDB:5173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N1cFqf5V8zqrnZsPC2aixb
        status: active
        display_name: 賈氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王十朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王十朋 | accepted |
| birth.date | 1112年 | accepted |
| death.date | 1171年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_N1cFqf5V8zqrnZsPC2aixb | 賈氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：賈氏(王十朋妻)（CBDB 5173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5173&o=json)
- [中国历代人物传记资料库：王十朋（CBDB 10598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10598&o=json)
