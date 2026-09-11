---
schema: wang-person/v1
id: p_3yCSR27oiW5NCm7ErZYvAN
status: active
merged_into: null
display_name: 林氏
revision: 1
cbdb_id: 255525
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yXdINubQFm82jDAkrh4a21
        subject_person_id: p_3yCSR27oiW5NCm7ErZYvAN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林氏，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 255525）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q98I6Jtgh8UxJkc7P3eYcE
          claim_id: c_yXdINubQFm82jDAkrh4a21
          source_id: s_JoAVSj0BjODDfjPJFKI4cx
          stance: supports
          locator: CBDB:255525
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JoAVSj0BjODDfjPJFKI4cx
            source_type: api_record
            title: 中国历代人物传记资料库：林氏(王衡妻)（CBDB 255525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255525&o=json
            external_identifier: CBDB:255525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b7b0t2jbqeG5znOS0huPX0
        subject_person_id: p_3yCSR27oiW5NCm7ErZYvAN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Up1ebzSetA8Pbnhy-Yyx35
          claim_id: c_b7b0t2jbqeG5znOS0huPX0
          source_id: s_JoAVSj0BjODDfjPJFKI4cx
          stance: supports
          locator: CBDB:255525
          quotation: null
          interpretation_note: CBDB 明确记录的王衡配偶
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
        id: c_dogCNmQY4nfg5DNE1L_wbY
        subject_person_id: p_KL6pD2p9SR6r7j4F89boFc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3yCSR27oiW5NCm7ErZYvAN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4FwPdMk-clLMneQgewXa3z
          claim_id: c_dogCNmQY4nfg5DNE1L_wbY
          source_id: s_JoAVSj0BjODDfjPJFKI4cx
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KL6pD2p9SR6r7j4F89boFc
        status: active
        display_name: 王衡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 林氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 林氏，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 255525） | accepted |
| name.primary | 林氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KL6pD2p9SR6r7j4F89boFc | 王衡 | accepted |

## 外部来源

- [中国历代人物传记资料库：林氏(王衡妻)（CBDB 255525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255525&o=json)
