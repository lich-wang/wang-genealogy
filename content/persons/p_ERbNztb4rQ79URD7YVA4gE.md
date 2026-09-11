---
schema: wang-person/v1
id: p_ERbNztb4rQ79URD7YVA4gE
status: active
merged_into: null
display_name: 王椿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o8eqegPZ6SHRNMpomhgNMk
        subject_person_id: p_ERbNztb4rQ79URD7YVA4gE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aCdj8cjNJVhja4R2YjY7oY
          claim_id: c_o8eqegPZ6SHRNMpomhgNMk
          source_id: s_4W4YFZarBSdascGuARJq7i
          stance: supports
          locator: CBDB:491941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491941）
          source: &a1
            id: s_4W4YFZarBSdascGuARJq7i
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 491941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491941&o=json
            external_identifier: CBDB:491941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8XoFteFqJW9ZLYLe6Ad9AE
        subject_person_id: p_ERbNztb4rQ79URD7YVA4gE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 491941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_is-K-8nZuZ-GAyJO1U3Ixc
          claim_id: c_8XoFteFqJW9ZLYLe6Ad9AE
          source_id: s_4W4YFZarBSdascGuARJq7i
          stance: supports
          locator: CBDB:491941
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

# 王椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王椿 | accepted |
| bio.summary | 王椿，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 491941） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 491941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491941&o=json)
