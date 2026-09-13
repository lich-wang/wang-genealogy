---
schema: wang-person/v1
id: p_4GbPExDFna3bpZBzyQEK5D
status: merged
merged_into: p_CqGGoAHd4xav6yj4gHyTHE
display_name: 王崇古
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GxQLZXGS8KTPwD5WqKDSQN
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6YyALHRGkGdqUi46BnqUar
          claim_id: c_GxQLZXGS8KTPwD5WqKDSQN
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
          stance: supports
          locator: CBDB:124981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124981）
          source: &a1
            id: s_MU5GnZoDbPu96obnw6Nc5Z
            source_type: api_record
            title: 中国历代人物传记资料库：王崇古（CBDB 124981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124981&o=json
            external_identifier: CBDB:124981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4rBsozfnJRd65ToAszw8W9
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tFicTwaKP7SgUZwWVTP7pF
          claim_id: c_4rBsozfnJRd65ToAszw8W9
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LsTimnG7ET1g91U9JRqvc4
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1588年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_axpJYj7KrmwwHeoh22vb48
          claim_id: c_LsTimnG7ET1g91U9JRqvc4
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GrejMpUrv67AisT629Ps17
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇古（1515年—1588年），明人物。籍贯蒲州，入仕進士，曾任兵備副使、按察使。（中国历代人物传记资料库 CBDB 124981）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w4JRFN8akfBCJgH5wLetWn
          claim_id: c_GrejMpUrv67AisT629Ps17
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
          stance: supports
          locator: CBDB:124981
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

# 王崇古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇古 | accepted |
| birth.date | 1515年 | accepted |
| death.date | 1588年 | accepted |
| bio.summary | 王崇古（1515年—1588年），明人物。籍贯蒲州，入仕進士，曾任兵備副使、按察使。（中国历代人物传记资料库 CBDB 124981） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇古（CBDB 124981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124981&o=json)
