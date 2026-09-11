---
schema: wang-person/v1
id: p_3f5WDEWtgrCu7tTKaAywBo
status: active
merged_into: null
display_name: 王嚮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wuLUzGy7Ho7ZPNDQFqjiYK
        subject_person_id: p_3f5WDEWtgrCu7tTKaAywBo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嚮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_epp85Kc1Q2u9yDHiJ9xzp4
          claim_id: c_wuLUzGy7Ho7ZPNDQFqjiYK
          source_id: s_ZnkuX6yJYcCU45BR1QxCeJ
          stance: supports
          locator: CBDB:45827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45827）
          source: &a1
            id: s_ZnkuX6yJYcCU45BR1QxCeJ
            source_type: api_record
            title: 中国历代人物传记资料库：王嚮（CBDB 45827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45827&o=json
            external_identifier: CBDB:45827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fx8mnWcRZvmfzKwPpUdvV5
        subject_person_id: p_3f5WDEWtgrCu7tTKaAywBo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嚮，宋人物。籍贯南城。（中国历代人物传记资料库 CBDB 45827）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-T-AA34egQ03UatmU1RdAS
          claim_id: c_fx8mnWcRZvmfzKwPpUdvV5
          source_id: s_ZnkuX6yJYcCU45BR1QxCeJ
          stance: supports
          locator: CBDB:45827
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

# 王嚮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嚮 | accepted |
| bio.summary | 王嚮，宋人物。籍贯南城。（中国历代人物传记资料库 CBDB 45827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嚮（CBDB 45827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45827&o=json)
