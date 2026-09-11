---
schema: wang-person/v1
id: p_6e5n3vfAdWxuDaRkJDj1gr
status: active
merged_into: null
display_name: 高氏
revision: 1
cbdb_id: 252677
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YRk7x_GQgULQY36XJxQwA7
        subject_person_id: p_6e5n3vfAdWxuDaRkJDj1gr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VxuP5upI6hG0JorRTsHtX
          claim_id: c_YRk7x_GQgULQY36XJxQwA7
          source_id: s_4Gqmp4AbwWdo0JOkI1V_sr
          stance: supports
          locator: CBDB:252677
          quotation: null
          interpretation_note: CBDB 明确记录的王和配偶
          source: &a1
            id: s_4Gqmp4AbwWdo0JOkI1V_sr
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(王和妻)（CBDB 252677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252677&o=json
            external_identifier: CBDB:252677
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
        id: c_hg1Aze9cBplAHczt6SvAtb
        subject_person_id: p_Ar8Jm82UPjkwQTQshe4Qjp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6e5n3vfAdWxuDaRkJDj1gr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qSF9Jj5CwR2B35pIJ_8xdP
          claim_id: c_hg1Aze9cBplAHczt6SvAtb
          source_id: s_4Gqmp4AbwWdo0JOkI1V_sr
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ar8Jm82UPjkwQTQshe4Qjp
        status: active
        display_name: 王和
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 高氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 高氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Ar8Jm82UPjkwQTQshe4Qjp | 王和 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(王和妻)（CBDB 252677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252677&o=json)
