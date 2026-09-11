---
schema: wang-person/v1
id: p_X6KBjJ3QVg5qxe2UjPbFFv
status: active
merged_into: null
display_name: 王惠蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mXRE4JnVZdzBz9FURXPHkh
        subject_person_id: p_X6KBjJ3QVg5qxe2UjPbFFv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hjtK3627U28BhaqhDRYf6x
          claim_id: c_mXRE4JnVZdzBz9FURXPHkh
          source_id: s_vpBCXxHV85cG1AyWLH9DER
          stance: supports
          locator: CBDB:637903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637903）
          source: &a1
            id: s_vpBCXxHV85cG1AyWLH9DER
            source_type: api_record
            title: 中国历代人物传记资料库：王惠蘭（CBDB 637903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637903&o=json
            external_identifier: CBDB:637903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XUdeKoki2weyGpCENDuEXB
        subject_person_id: p_X6KBjJ3QVg5qxe2UjPbFFv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠蘭，清人物。籍贯長清，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 637903）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0CtQteYaztDxXjmGOB5loT
          claim_id: c_XUdeKoki2weyGpCENDuEXB
          source_id: s_vpBCXxHV85cG1AyWLH9DER
          stance: supports
          locator: CBDB:637903
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

# 王惠蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠蘭 | accepted |
| bio.summary | 王惠蘭，清人物。籍贯長清，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 637903） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惠蘭（CBDB 637903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637903&o=json)
