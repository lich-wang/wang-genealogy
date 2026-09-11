---
schema: wang-person/v1
id: p_S2RcTmmbpVJ8Ry9uKi5cCH
status: active
merged_into: null
display_name: 王振
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P2FPCxyfqxq9nAkfC3LtjG
        subject_person_id: p_S2RcTmmbpVJ8Ry9uKi5cCH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1T7oahYuNYP9nVaFRAed9J
          claim_id: c_P2FPCxyfqxq9nAkfC3LtjG
          source_id: s_UUuvzTzfqS4EP1mF5NoqzA
          stance: supports
          locator: CBDB:126644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126644）
          source: &a1
            id: s_UUuvzTzfqS4EP1mF5NoqzA
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 126644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126644&o=json
            external_identifier: CBDB:126644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wxZV7PiGHuNgoffWV4yfF5
        subject_person_id: p_S2RcTmmbpVJ8Ry9uKi5cCH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振，明人物。籍贯蔚州，身份为宦官。（中国历代人物传记资料库 CBDB 126644）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ycz09zZkGZNuGiD2NwK2UG
          claim_id: c_wxZV7PiGHuNgoffWV4yfF5
          source_id: s_UUuvzTzfqS4EP1mF5NoqzA
          stance: supports
          locator: CBDB:126644
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

# 王振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振 | accepted |
| bio.summary | 王振，明人物。籍贯蔚州，身份为宦官。（中国历代人物传记资料库 CBDB 126644） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振（CBDB 126644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126644&o=json)
