---
schema: wang-person/v1
id: p_5uJFSeCvpKSFCArxHJyW4T
status: active
merged_into: null
display_name: 董氏
revision: 1
cbdb_id: 444965
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SWCh9b-kSevabRRH78Lt64
        subject_person_id: p_5uJFSeCvpKSFCArxHJyW4T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 董氏，唐人物。曾任芳儀。（中国历代人物传记资料库 CBDB 444965）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ljQ6KnhNaZb-NcjfUHKBV9
          claim_id: c_SWCh9b-kSevabRRH78Lt64
          source_id: s_uPNsrJkZttJ_k-OiSYFTx5
          stance: supports
          locator: CBDB:444965
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uPNsrJkZttJ_k-OiSYFTx5
            source_type: api_record
            title: 中国历代人物传记资料库：董氏(唐玄宗嬪妃)（CBDB 444965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444965&o=json
            external_identifier: CBDB:444965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q1ty7aVsgT2J0tZ50eXaTg
        subject_person_id: p_5uJFSeCvpKSFCArxHJyW4T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 董氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TdL72fxxSeM8sIN-fGmeBi
          claim_id: c_Q1ty7aVsgT2J0tZ50eXaTg
          source_id: s_uPNsrJkZttJ_k-OiSYFTx5
          stance: supports
          locator: CBDB:444965
          quotation: null
          interpretation_note: CBDB 明确记录的唐玄宗配偶
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
        id: c_n6DBlj7huL7LhDQE5WX_Gz
        subject_person_id: p_cikw8dsZq2pT5MWXyzDmm3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5uJFSeCvpKSFCArxHJyW4T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v0c9M1TbblbsNQcpwB6WsT
          claim_id: c_n6DBlj7huL7LhDQE5WX_Gz
          source_id: s_uPNsrJkZttJ_k-OiSYFTx5
          stance: supports
          locator: 新唐書，3659：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cikw8dsZq2pT5MWXyzDmm3
        status: active
        display_name: 唐玄宗
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 董氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 董氏，唐人物。曾任芳儀。（中国历代人物传记资料库 CBDB 444965） | accepted |
| name.primary | 董氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cikw8dsZq2pT5MWXyzDmm3 | 唐玄宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：董氏(唐玄宗嬪妃)（CBDB 444965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444965&o=json)
