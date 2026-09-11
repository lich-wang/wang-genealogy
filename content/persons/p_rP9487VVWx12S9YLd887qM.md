---
schema: wang-person/v1
id: p_rP9487VVWx12S9YLd887qM
status: active
merged_into: null
display_name: 賈氏
revision: 1
cbdb_id: 37846
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ibLwxaAlvtzQHQSNMCj8Dx
        subject_person_id: p_rP9487VVWx12S9YLd887qM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 賈氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BtEeknzWIX2nyKuf0pq_Yo
          claim_id: c_ibLwxaAlvtzQHQSNMCj8Dx
          source_id: s_bUEbU0XiTPIsB1zuOrKl5g
          stance: supports
          locator: CBDB:37846
          quotation: null
          interpretation_note: CBDB 明确记录的王衜配偶
          source: &a1
            id: s_bUEbU0XiTPIsB1zuOrKl5g
            source_type: api_record
            title: 中国历代人物传记资料库：賈氏(王衜妻)（CBDB 37846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37846&o=json
            external_identifier: CBDB:37846
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
        id: c_wr-A_sIXQv7OY5Pr7kd7Vl
        subject_person_id: p_JR5BeKFHjyY5p6yqfVc1XZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rP9487VVWx12S9YLd887qM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ehUITDncglveOdW3Qe48Io
          claim_id: c_wr-A_sIXQv7OY5Pr7kd7Vl
          source_id: s_bUEbU0XiTPIsB1zuOrKl5g
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JR5BeKFHjyY5p6yqfVc1XZ
        status: active
        display_name: 王衜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 賈氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 賈氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_JR5BeKFHjyY5p6yqfVc1XZ | 王衜 | accepted |

## 外部来源

- [中国历代人物传记资料库：賈氏(王衜妻)（CBDB 37846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37846&o=json)
