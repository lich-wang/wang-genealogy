---
schema: wang-person/v1
id: p_BkJTtmgexaTB7x5RPTuyq7
status: active
merged_into: null
display_name: 侯氏
revision: 1
cbdb_id: 262433
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rGwLdQGvF74iKqqnTv_1oS
        subject_person_id: p_BkJTtmgexaTB7x5RPTuyq7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 侯氏，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 262433）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wLkimsMOZiU3j4J5v5fMav
          claim_id: c_rGwLdQGvF74iKqqnTv_1oS
          source_id: s_L3nfm2q3FFfXSgKalqzeo4
          stance: supports
          locator: CBDB:262433
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L3nfm2q3FFfXSgKalqzeo4
            source_type: api_record
            title: 中国历代人物传记资料库：侯氏(王綸妻)（CBDB 262433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262433&o=json
            external_identifier: CBDB:262433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TsXUdcSTa37lpsKDeo92WE
        subject_person_id: p_BkJTtmgexaTB7x5RPTuyq7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 侯氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OcR4iCs0cK6dgWMIMKmtrM
          claim_id: c_TsXUdcSTa37lpsKDeo92WE
          source_id: s_L3nfm2q3FFfXSgKalqzeo4
          stance: supports
          locator: CBDB:262433
          quotation: null
          interpretation_note: CBDB 明确记录的王綸配偶
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
        id: c_UcrBlo-fxGlHw45ypvOa2j
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BkJTtmgexaTB7x5RPTuyq7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JlJ1xjNMJM_zuLvIeMHnoN
          claim_id: c_UcrBlo-fxGlHw45ypvOa2j
          source_id: s_L3nfm2q3FFfXSgKalqzeo4
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4rX1RM4YkpctdzscWgdRsh
        status: active
        display_name: 王綸
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 侯氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 侯氏，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 262433） | accepted |
| name.primary | 侯氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4rX1RM4YkpctdzscWgdRsh | 王綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：侯氏(王綸妻)（CBDB 262433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262433&o=json)
