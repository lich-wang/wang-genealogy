---
schema: wang-person/v1
id: p_d3nRYvH1xi9VN679vmf6RE
status: active
merged_into: null
display_name: 王嗣宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zPJoyDMBhjBnax5BtaAaDW
        subject_person_id: p_d3nRYvH1xi9VN679vmf6RE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pyeLiaHi6ivCT6trA1mzEk
          claim_id: c_zPJoyDMBhjBnax5BtaAaDW
          source_id: s_cfus795Deus9EhK2FP4dAW
          stance: supports
          locator: CBDB:309929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309929）
          source: &a1
            id: s_cfus795Deus9EhK2FP4dAW
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣宗（CBDB 309929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309929&o=json
            external_identifier: CBDB:309929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jbYn6761fxenomBQu1KL4c
        subject_person_id: p_d3nRYvH1xi9VN679vmf6RE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣宗，明人物。天順四年進士。（中国历代人物传记资料库 CBDB 309929）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rLyGjr4q0RO_A0ko-MxQ55
          claim_id: c_jbYn6761fxenomBQu1KL4c
          source_id: s_cfus795Deus9EhK2FP4dAW
          stance: supports
          locator: CBDB:309929
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_Y6EwOvw320bCDA9jtYoqTs
        subject_person_id: p_d3nRYvH1xi9VN679vmf6RE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p1Msp5rc3AakyZwdUtPZ0g
          claim_id: c_Y6EwOvw320bCDA9jtYoqTs
          source_id: s_cfus795Deus9EhK2FP4dAW
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EL3MrLTYLivcbMQDRsPBD7
        status: active
        display_name: 王徽
        merged_into_person_id: null
  other: []
---

# 王嗣宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣宗 | accepted |
| bio.summary | 王嗣宗，明人物。天順四年進士。（中国历代人物传记资料库 CBDB 309929） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_EL3MrLTYLivcbMQDRsPBD7 | 王徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣宗（CBDB 309929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309929&o=json)
