---
schema: wang-person/v1
id: p_BRSHCGJx7rSTibdx7DdBf6
status: active
merged_into: null
display_name: 王書壇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KJmYSSzLG9BQVnd5CXCXMN
        subject_person_id: p_BRSHCGJx7rSTibdx7DdBf6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王書壇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mRJfXXF5u9UvDUZPkKdfg3
          claim_id: c_KJmYSSzLG9BQVnd5CXCXMN
          source_id: s_qCLikUAiccxDG1tU4c3yid
          stance: supports
          locator: CBDB:638539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638539）
          source: &a1
            id: s_qCLikUAiccxDG1tU4c3yid
            source_type: api_record
            title: 中国历代人物传记资料库：王書壇（CBDB 638539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638539&o=json
            external_identifier: CBDB:638539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AC17PPQh3FRtYc6rWZeY75
        subject_person_id: p_BRSHCGJx7rSTibdx7DdBf6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王書壇，清人物。籍贯衡州府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638539）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VxL3eaUq_va51KNbXhd295
          claim_id: c_AC17PPQh3FRtYc6rWZeY75
          source_id: s_qCLikUAiccxDG1tU4c3yid
          stance: supports
          locator: CBDB:638539
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

# 王書壇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王書壇 | accepted |
| bio.summary | 王書壇，清人物。籍贯衡州府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638539） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王書壇（CBDB 638539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638539&o=json)
