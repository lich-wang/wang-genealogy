---
schema: wang-person/v1
id: p_A6xH7iVMde3cv7dNfhArzP
status: active
merged_into: null
display_name: 王嶷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RR33Cn6eTLbVhPvQygkzGg
        subject_person_id: p_A6xH7iVMde3cv7dNfhArzP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jGXQUhprL9ACa1jWsK3ZnX
          claim_id: c_RR33Cn6eTLbVhPvQygkzGg
          source_id: s_HuMnEXk79NmUyS9qppy4Kk
          stance: supports
          locator: CBDB:483406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483406）
          source: &a1
            id: s_HuMnEXk79NmUyS9qppy4Kk
            source_type: api_record
            title: 中国历代人物传记资料库：王嶷（CBDB 483406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483406&o=json
            external_identifier: CBDB:483406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Dg5QBGNBFRqcNx5Q7sGCn
        subject_person_id: p_A6xH7iVMde3cv7dNfhArzP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶷，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 483406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G8lInWqD_7OU8kxl8SkRiQ
          claim_id: c_8Dg5QBGNBFRqcNx5Q7sGCn
          source_id: s_HuMnEXk79NmUyS9qppy4Kk
          stance: supports
          locator: CBDB:483406
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

# 王嶷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶷 | accepted |
| bio.summary | 王嶷，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 483406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嶷（CBDB 483406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483406&o=json)
