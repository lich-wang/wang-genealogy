---
schema: wang-person/v1
id: p_RfRv97Z1pxJbb55x6o4qmF
status: active
merged_into: null
display_name: 王泰寧
cbdb_id: 269142
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9QwnATSD8f5BFumL2yFWrE
        subject_person_id: p_RfRv97Z1pxJbb55x6o4qmF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰寧，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 269142）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eJLIqXmSPrFdb9T56H-ZpB
          claim_id: c_9QwnATSD8f5BFumL2yFWrE
          source_id: s_rfT8XuG7QSG6P7gbXUiRNS
          stance: supports
          locator: CBDB:269142
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rfT8XuG7QSG6P7gbXUiRNS
            source_type: api_record
            title: 中国历代人物传记资料库：王泰寧（CBDB 269142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269142&o=json
            external_identifier: CBDB:269142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_otm1JDD7KcWWC2GBi72XjD
        subject_person_id: p_RfRv97Z1pxJbb55x6o4qmF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C2XNLBNWJ95fcgozV6BPuL
          claim_id: c_otm1JDD7KcWWC2GBi72XjD
          source_id: s_rfT8XuG7QSG6P7gbXUiRNS
          stance: supports
          locator: CBDB:269142
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_awJEtPB7ViPUMcqbcb_hdE
        subject_person_id: p_RfRv97Z1pxJbb55x6o4qmF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_83Q-CNUrsv1kX9eQuu4zQg
          claim_id: c_awJEtPB7ViPUMcqbcb_hdE
          source_id: s_rfT8XuG7QSG6P7gbXUiRNS
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百三十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rfT8XuG7QSG6P7gbXUiRNS
            source_type: api_record
            title: 中国历代人物传记资料库：王泰寧（CBDB 269142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269142&o=json
            external_identifier: CBDB:269142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_w2z816UY6mM4xzeNHAgB83
        status: active
        display_name: 王渙
        merged_into_person_id: null
  other: []
---

# 王泰寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王泰寧，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 269142） | accepted |
| name.primary | 王泰寧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_w2z816UY6mM4xzeNHAgB83 | 王渙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰寧（CBDB 269142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269142&o=json)
