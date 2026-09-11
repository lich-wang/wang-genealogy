---
schema: wang-person/v1
id: p_yGVRzEDFLJcJZEY8g7gZEn
status: active
merged_into: null
display_name: 王天秀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c4Uhi5N82o8umQqNPHrnzn
        subject_person_id: p_yGVRzEDFLJcJZEY8g7gZEn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iaBRbqNbjpsT53hD69TY1N
          claim_id: c_c4Uhi5N82o8umQqNPHrnzn
          source_id: s_LHDhNPoHRddvWYsuDLjDDQ
          stance: supports
          locator: CBDB:636937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636937）
          source: &a1
            id: s_LHDhNPoHRddvWYsuDLjDDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王天秀（CBDB 636937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636937&o=json
            external_identifier: CBDB:636937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VQ6FSe1uqwsajJZKWCZCEj
        subject_person_id: p_yGVRzEDFLJcJZEY8g7gZEn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天秀，清人物。籍贯定襄，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 636937）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qov8nZcHQ0u7nzA4j5ORdj
          claim_id: c_VQ6FSe1uqwsajJZKWCZCEj
          source_id: s_LHDhNPoHRddvWYsuDLjDDQ
          stance: supports
          locator: CBDB:636937
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

# 王天秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天秀 | accepted |
| bio.summary | 王天秀，清人物。籍贯定襄，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 636937） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天秀（CBDB 636937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636937&o=json)
