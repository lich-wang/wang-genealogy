---
schema: wang-person/v1
id: p_17iFZ1jdT8TPiQ1KScjNMT
status: active
merged_into: null
display_name: 王璵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GvN38xRKizChaBEaSsTxcn
        subject_person_id: p_17iFZ1jdT8TPiQ1KScjNMT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YHPBfSBZCKR4wM8Se14H6r
          claim_id: c_GvN38xRKizChaBEaSsTxcn
          source_id: s_xHXet61ou16TH6nPyvB6p1
          stance: supports
          locator: CBDB:380551
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380551）
          source: &a1
            id: s_xHXet61ou16TH6nPyvB6p1
            source_type: api_record
            title: 中国历代人物传记资料库：王璵（CBDB 380551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380551&o=json
            external_identifier: CBDB:380551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DExdAYwUr6TYitFSK5Fn7u
        subject_person_id: p_17iFZ1jdT8TPiQ1KScjNMT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璵，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380551）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SGAKDwrIg6oBIw8t9GQFQi
          claim_id: c_DExdAYwUr6TYitFSK5Fn7u
          source_id: s_xHXet61ou16TH6nPyvB6p1
          stance: supports
          locator: CBDB:380551
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

# 王璵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璵 | accepted |
| bio.summary | 王璵，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380551） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璵（CBDB 380551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380551&o=json)
