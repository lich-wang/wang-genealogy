---
schema: wang-person/v1
id: p_yeDqUCDH4o1de5QMLEhDha
status: active
merged_into: null
display_name: 崔氏
revision: 1
cbdb_id: 696751
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zJ9SNRAiKxbG72t_eqmXmH
        subject_person_id: p_yeDqUCDH4o1de5QMLEhDha
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 崔氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XQ8id_oCjM08TtWCpY6lEi
          claim_id: c_zJ9SNRAiKxbG72t_eqmXmH
          source_id: s_knI8Tu8VeO0hIbrOPDxxvA
          stance: supports
          locator: CBDB:696751
          quotation: null
          interpretation_note: CBDB 明确记录的王觀配偶
          source: &a1
            id: s_knI8Tu8VeO0hIbrOPDxxvA
            source_type: api_record
            title: 中国历代人物传记资料库：崔氏(王觀妻)（CBDB 696751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696751&o=json
            external_identifier: CBDB:696751
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
        id: c_Qpg_GozRUe1HxLQaqtR1PL
        subject_person_id: p_777BoV7hppa5kKPVtAySxB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yeDqUCDH4o1de5QMLEhDha
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-IDEnQ447fb25YtXpXKrU2
          claim_id: c_Qpg_GozRUe1HxLQaqtR1PL
          source_id: s_knI8Tu8VeO0hIbrOPDxxvA
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，146 崔中正夫人賈氏墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_777BoV7hppa5kKPVtAySxB
        status: active
        display_name: 王觀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 崔氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 崔氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_777BoV7hppa5kKPVtAySxB | 王觀 | accepted |

## 外部来源

- [中国历代人物传记资料库：崔氏(王觀妻)（CBDB 696751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696751&o=json)
