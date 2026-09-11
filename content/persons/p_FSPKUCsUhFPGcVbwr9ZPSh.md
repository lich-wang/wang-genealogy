---
schema: wang-person/v1
id: p_FSPKUCsUhFPGcVbwr9ZPSh
status: active
merged_into: null
display_name: 王得與
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EH1PGPP5uc2rAirwPxkqet
        subject_person_id: p_FSPKUCsUhFPGcVbwr9ZPSh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得與
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FsxTYTD8VNRPqSbUrw9Wqp
          claim_id: c_EH1PGPP5uc2rAirwPxkqet
          source_id: s_TCVw33SNvv2NfoH6NHEHyL
          stance: supports
          locator: CBDB:695611
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695611）
          source: &a1
            id: s_TCVw33SNvv2NfoH6NHEHyL
            source_type: api_record
            title: 中国历代人物传记资料库：王得與（CBDB 695611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695611&o=json
            external_identifier: CBDB:695611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1cFkiFPo3i1C8tdyqBCCQr
        subject_person_id: p_FSPKUCsUhFPGcVbwr9ZPSh
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
        - id: cs_jPrEa8jGPWxZFVre244Kju
          claim_id: c_1cFkiFPo3i1C8tdyqBCCQr
          source_id: s_TCVw33SNvv2NfoH6NHEHyL
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
  spouses: []
  ancestors:
    - claim:
        id: c_7mLO0H5MREoa3rNN4lHADk
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FSPKUCsUhFPGcVbwr9ZPSh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rT9_LW4jRAvXIxJKIdaxkO
          claim_id: c_7mLO0H5MREoa3rNN4lHADk
          source_id: s_TCVw33SNvv2NfoH6NHEHyL
          stance: supports
          locator: 鄖溪集，右侍禁贈工部侍郎王公墓志銘：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tmq6Wnq1CjinFj62NTxvnd
        status: active
        display_name: 王师颜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王得與

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得與 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_tmq6Wnq1CjinFj62NTxvnd | 王师颜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得與（CBDB 695611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695611&o=json)
