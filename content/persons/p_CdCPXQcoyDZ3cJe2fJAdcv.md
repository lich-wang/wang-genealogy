---
schema: wang-person/v1
id: p_CdCPXQcoyDZ3cJe2fJAdcv
status: active
merged_into: null
display_name: 王連三
cbdb_id: 61587
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U1iozuCnZ86oJVQSQt7CLc
        subject_person_id: p_CdCPXQcoyDZ3cJe2fJAdcv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王連三（生于1845年），清人物。籍贯鄧州，入仕恩蔭、蔭補，曾任軍統領、鎮總兵。（中国历代人物传记资料库 CBDB 61587）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_47eoKycccgPS3P1Hbn6vZ4
          claim_id: c_U1iozuCnZ86oJVQSQt7CLc
          source_id: s_D1sqK2YBg8KMB93QpbdXJ5
          stance: supports
          locator: CBDB:61587
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D1sqK2YBg8KMB93QpbdXJ5
            source_type: api_record
            title: 中国历代人物传记资料库：王連三（CBDB 61587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61587&o=json
            external_identifier: CBDB:61587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ngdQwzwZChcswwDBPYSPHt
        subject_person_id: p_CdCPXQcoyDZ3cJe2fJAdcv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1845年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1845-01-01
            latest: 1845-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kwMCaiyF1WHTTsM45CZJVM
          claim_id: c_ngdQwzwZChcswwDBPYSPHt
          source_id: s_D1sqK2YBg8KMB93QpbdXJ5
          stance: supports
          locator: CBDB:61587
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1845
          source:
            id: s_D1sqK2YBg8KMB93QpbdXJ5
            source_type: api_record
            title: 中国历代人物传记资料库：王連三（CBDB 61587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61587&o=json
            external_identifier: CBDB:61587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZcrD6HUf6f6YeXq35n1qZ7
        subject_person_id: p_CdCPXQcoyDZ3cJe2fJAdcv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王連三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H4KFoLPQUgVwx8YFKfG4vQ
          claim_id: c_ZcrD6HUf6f6YeXq35n1qZ7
          source_id: s_D1sqK2YBg8KMB93QpbdXJ5
          stance: supports
          locator: CBDB:61587
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1845
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

# 王連三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王連三（生于1845年），清人物。籍贯鄧州，入仕恩蔭、蔭補，曾任軍統領、鎮總兵。（中国历代人物传记资料库 CBDB 61587） | accepted |
| birth.date | 1845年 | accepted |
| name.primary | 王連三 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王連三（CBDB 61587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61587&o=json)
