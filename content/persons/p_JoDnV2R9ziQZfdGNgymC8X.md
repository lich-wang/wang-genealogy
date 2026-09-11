---
schema: wang-person/v1
id: p_JoDnV2R9ziQZfdGNgymC8X
status: active
merged_into: null
display_name: 王鳳儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5cpUZSeSacjEyiz4KwKBTM
        subject_person_id: p_JoDnV2R9ziQZfdGNgymC8X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ahiGudhrLUsGSBBA8VPZjS
          claim_id: c_5cpUZSeSacjEyiz4KwKBTM
          source_id: s_JuexrAwRjz62Eo3SmpyZH6
          stance: supports
          locator: CBDB:280413
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280413）
          source: &a1
            id: s_JuexrAwRjz62Eo3SmpyZH6
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳儀（CBDB 280413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280413&o=json
            external_identifier: CBDB:280413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7dsuTE4LnvPzG8e7LYWwWi
        subject_person_id: p_JoDnV2R9ziQZfdGNgymC8X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳儀，明人物。正德十二年進士，籍贯莆田，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 280413）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sTy9hMzhXf0Tx5Q9q9n-Gk
          claim_id: c_7dsuTE4LnvPzG8e7LYWwWi
          source_id: s_JuexrAwRjz62Eo3SmpyZH6
          stance: supports
          locator: CBDB:280413
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

# 王鳳儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳儀 | accepted |
| bio.summary | 王鳳儀，明人物。正德十二年進士，籍贯莆田，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 280413） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳儀（CBDB 280413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280413&o=json)
