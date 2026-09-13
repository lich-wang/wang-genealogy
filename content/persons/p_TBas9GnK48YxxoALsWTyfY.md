---
schema: wang-person/v1
id: p_TBas9GnK48YxxoALsWTyfY
status: active
merged_into: null
display_name: 王政魁
cbdb_id: 414717
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FR3gpHLj3mSKSrLkfAzLG1
        subject_person_id: p_TBas9GnK48YxxoALsWTyfY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政魁，明人物。曾任通判。（中国历代人物传记资料库 CBDB 414717）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Nb_ArCydQaryIehapQsX-h
          claim_id: c_FR3gpHLj3mSKSrLkfAzLG1
          source_id: s_w7B4UYHLjSrcDbcRrXCLaq
          stance: supports
          locator: CBDB:414717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_w7B4UYHLjSrcDbcRrXCLaq
            source_type: api_record
            title: 中国历代人物传记资料库：王政魁（CBDB 414717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414717&o=json
            external_identifier: CBDB:414717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:38.799Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_666NCuqSQZVDexLyCp1nAb
        subject_person_id: p_TBas9GnK48YxxoALsWTyfY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1Ebi1xVBLQP95n1PDyJkU1
          claim_id: c_666NCuqSQZVDexLyCp1nAb
          source_id: s_w7B4UYHLjSrcDbcRrXCLaq
          stance: supports
          locator: CBDB:414717
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5701-5800）｜历史性依据：CBDB 朝代 = 明
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

# 王政魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王政魁，明人物。曾任通判。（中国历代人物传记资料库 CBDB 414717） | accepted |
| name.primary | 王政魁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政魁（CBDB 414717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414717&o=json)
