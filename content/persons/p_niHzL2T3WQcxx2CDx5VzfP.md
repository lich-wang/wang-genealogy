---
schema: wang-person/v1
id: p_niHzL2T3WQcxx2CDx5VzfP
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 265224
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XrpZ6Gg9EMdTQlS9uBkmWR
        subject_person_id: p_niHzL2T3WQcxx2CDx5VzfP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_elaCCBwGgmmG3tg9f53tqW
          claim_id: c_XrpZ6Gg9EMdTQlS9uBkmWR
          source_id: s_6Btsk_QAMfh4Z9Q8hd0sSA
          stance: supports
          locator: CBDB:265224
          quotation: null
          interpretation_note: CBDB 明确记录的王時配偶
          source: &a1
            id: s_6Btsk_QAMfh4Z9Q8hd0sSA
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王時妻)（CBDB 265224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265224&o=json
            external_identifier: CBDB:265224
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
        id: c_802desuIDnAjEtx7mmgeeE
        subject_person_id: p_5vDjPyewsQNr1vDc9fypfb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_niHzL2T3WQcxx2CDx5VzfP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZJQGemuI2sPTwHAnymtnNo
          claim_id: c_802desuIDnAjEtx7mmgeeE
          source_id: s_6Btsk_QAMfh4Z9Q8hd0sSA
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第五十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5vDjPyewsQNr1vDc9fypfb
        status: active
        display_name: 王時
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5vDjPyewsQNr1vDc9fypfb | 王時 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王時妻)（CBDB 265224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265224&o=json)
