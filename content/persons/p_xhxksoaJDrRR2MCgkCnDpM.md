---
schema: wang-person/v1
id: p_xhxksoaJDrRR2MCgkCnDpM
status: active
merged_into: null
display_name: 王克新
cbdb_id: 452908
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hzrTt9rJALsSgAvjx1ByDY
        subject_person_id: p_xhxksoaJDrRR2MCgkCnDpM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克新，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 452908）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qEjhnwOovEXHUyLfhPCfTi
          claim_id: c_hzrTt9rJALsSgAvjx1ByDY
          source_id: s_W6H919A4QD4hX6MJVS8Hwi
          stance: supports
          locator: CBDB:452908
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_W6H919A4QD4hX6MJVS8Hwi
            source_type: api_record
            title: 中国历代人物传记资料库：王克新（CBDB 452908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452908&o=json
            external_identifier: CBDB:452908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:13.763Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ww7MFFEhX7PUSmG87BYX96
        subject_person_id: p_xhxksoaJDrRR2MCgkCnDpM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AJoApWCEycBG2itxHrrgzf
          claim_id: c_Ww7MFFEhX7PUSmG87BYX96
          source_id: s_W6H919A4QD4hX6MJVS8Hwi
          stance: supports
          locator: CBDB:452908
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6601-6700）｜历史性依据：CBDB 朝代 = 明
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
  descendants: []
  other: []
---

# 王克新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王克新，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 452908） | accepted |
| name.primary | 王克新 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克新（CBDB 452908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452908&o=json)
