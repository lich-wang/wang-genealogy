---
schema: wang-person/v1
id: p_mzBo2x37huH7NUFrM2LB8v
status: active
merged_into: null
display_name: 王安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BmeHVebELrHpySsz1Xy4hN
        subject_person_id: p_mzBo2x37huH7NUFrM2LB8v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XKdN7YQCjLrpGJFsH3452q
          claim_id: c_BmeHVebELrHpySsz1Xy4hN
          source_id: s_DzJB6kFU1Gp5Ts5BQtYCsF
          stance: supports
          locator: CBDB:249821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249821）
          source: &a1
            id: s_DzJB6kFU1Gp5Ts5BQtYCsF
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 249821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249821&o=json
            external_identifier: CBDB:249821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_opfSsUAVXD8t7v71RQEngf
        subject_person_id: p_mzBo2x37huH7NUFrM2LB8v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安，明人物。成化十一年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 249821）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5dLxUPK-_tkb6LAw8tyI15
          claim_id: c_opfSsUAVXD8t7v71RQEngf
          source_id: s_DzJB6kFU1Gp5Ts5BQtYCsF
          stance: supports
          locator: CBDB:249821
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
  descendants: []
  other: []
---

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | 王安，明人物。成化十一年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 249821） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 249821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249821&o=json)
