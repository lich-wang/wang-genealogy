---
schema: wang-person/v1
id: p_fUCadLiuJmMioCibnWapb3
status: active
merged_into: null
display_name: 顧氏
revision: 1
cbdb_id: 262607
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_86gkt6aU5eNzYeva5GJNvf
        subject_person_id: p_fUCadLiuJmMioCibnWapb3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 顧氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Kj1lI5olfHeht2uUr3J5f
          claim_id: c_86gkt6aU5eNzYeva5GJNvf
          source_id: s_QFVyBy0WkWEV6M7zJk9lTG
          stance: supports
          locator: CBDB:262607
          quotation: null
          interpretation_note: CBDB 明确记录的王俸配偶
          source: &a1
            id: s_QFVyBy0WkWEV6M7zJk9lTG
            source_type: api_record
            title: 中国历代人物传记资料库：顧氏(王俸妻)（CBDB 262607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262607&o=json
            external_identifier: CBDB:262607
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
        id: c_qfX7jF8Bfze8teQjMwT6y9
        subject_person_id: p_2ivdyuT2PUd95aURm25j3Y
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fUCadLiuJmMioCibnWapb3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oAa8JfZOYORfQ1irT-v_8G
          claim_id: c_qfX7jF8Bfze8teQjMwT6y9
          source_id: s_QFVyBy0WkWEV6M7zJk9lTG
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第八十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2ivdyuT2PUd95aURm25j3Y
        status: active
        display_name: 王俸
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 顧氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 顧氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2ivdyuT2PUd95aURm25j3Y | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：顧氏(王俸妻)（CBDB 262607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262607&o=json)
