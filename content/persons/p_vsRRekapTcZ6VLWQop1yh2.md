---
schema: wang-person/v1
id: p_vsRRekapTcZ6VLWQop1yh2
status: active
merged_into: null
display_name: 孫氏
revision: 1
cbdb_id: 512893
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jxfl-CfqPZFQFi9g01axwp
        subject_person_id: p_vsRRekapTcZ6VLWQop1yh2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OZZDLTE4XXBGVAQmqp3_RA
          claim_id: c_jxfl-CfqPZFQFi9g01axwp
          source_id: s_CqTLkPqbXxwoaCU1zUoAi0
          stance: supports
          locator: CBDB:512893
          quotation: null
          interpretation_note: CBDB 明确记录的王思哲配偶
          source: &a1
            id: s_CqTLkPqbXxwoaCU1zUoAi0
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王思哲妻)（CBDB 512893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512893&o=json
            external_identifier: CBDB:512893
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
        id: c_ARETZlwyQJJu35I_FhPHQ3
        subject_person_id: p_TmbAJFMcbhV7yE49pkPE3j
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vsRRekapTcZ6VLWQop1yh2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hB5Svn-sqMWB0QmK0_Oka5
          claim_id: c_ARETZlwyQJJu35I_FhPHQ3
          source_id: s_CqTLkPqbXxwoaCU1zUoAi0
          stance: supports
          locator: 天津衛志，lgid=24694：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TmbAJFMcbhV7yE49pkPE3j
        status: active
        display_name: 王思哲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_TmbAJFMcbhV7yE49pkPE3j | 王思哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王思哲妻)（CBDB 512893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512893&o=json)
