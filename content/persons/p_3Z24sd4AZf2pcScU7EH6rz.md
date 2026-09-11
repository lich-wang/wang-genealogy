---
schema: wang-person/v1
id: p_3Z24sd4AZf2pcScU7EH6rz
status: active
merged_into: null
display_name: 王獻藎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zk7BBsBAx4Q9gk9zQa6c1Q
        subject_person_id: p_3Z24sd4AZf2pcScU7EH6rz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻藎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dBbp48vLzkMCHn6CPwfrXU
          claim_id: c_zk7BBsBAx4Q9gk9zQa6c1Q
          source_id: s_1UxshSkxgpxVQammPv9Hw8
          stance: supports
          locator: CBDB:550962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550962）
          source: &a1
            id: s_1UxshSkxgpxVQammPv9Hw8
            source_type: api_record
            title: 中国历代人物传记资料库：王獻藎（CBDB 550962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550962&o=json
            external_identifier: CBDB:550962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YurogTjgXs4MLrwTB9Cnq9
        subject_person_id: p_3Z24sd4AZf2pcScU7EH6rz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻藎，明人物。籍贯歙縣，身份为收徒講學。（中国历代人物传记资料库 CBDB 550962）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_52sM5N_fn3jX9DMumfV2GX
          claim_id: c_YurogTjgXs4MLrwTB9Cnq9
          source_id: s_1UxshSkxgpxVQammPv9Hw8
          stance: supports
          locator: CBDB:550962
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

# 王獻藎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻藎 | accepted |
| bio.summary | 王獻藎，明人物。籍贯歙縣，身份为收徒講學。（中国历代人物传记资料库 CBDB 550962） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獻藎（CBDB 550962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550962&o=json)
