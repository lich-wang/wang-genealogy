---
schema: wang-person/v1
id: p_hZcXPrk2hyFajKfDYEpicB
status: active
merged_into: null
display_name: 王國禎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GaDSjRVF6DFhB5w5qZiQ2c
        subject_person_id: p_hZcXPrk2hyFajKfDYEpicB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_shFLXvSdXXeBUX1MUaWLu1
          claim_id: c_GaDSjRVF6DFhB5w5qZiQ2c
          source_id: s_DcnGQQNdN1BLpvLrGYNN8G
          stance: supports
          locator: CBDB:71753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71753）
          source: &a1
            id: s_DcnGQQNdN1BLpvLrGYNN8G
            source_type: api_record
            title: 中国历代人物传记资料库：王國禎（CBDB 71753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71753&o=json
            external_identifier: CBDB:71753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4eQfQKABMmPh6S2qoPCxD3
        subject_person_id: p_hZcXPrk2hyFajKfDYEpicB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1617年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1DKhAGnk1QDF6iNtgamrdw
          claim_id: c_4eQfQKABMmPh6S2qoPCxD3
          source_id: s_DcnGQQNdN1BLpvLrGYNN8G
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ar4mfb6ngc1HCMd26mkY6N
        subject_person_id: p_hZcXPrk2hyFajKfDYEpicB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王國禎（生于1617年），清人物。籍贯齊河，入仕貢生: 歲貢、常貢、挨貢，曾任典史、訓導。（中国历代人物传记资料库 CBDB 71753）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sHK3GVFY9vVUqbZPAbgh4N
          claim_id: c_ar4mfb6ngc1HCMd26mkY6N
          source_id: s_DcnGQQNdN1BLpvLrGYNN8G
          stance: supports
          locator: CBDB:71753
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

# 王國禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國禎 | accepted |
| birth.date | 1617年 | accepted |
| bio.summary | 王國禎（生于1617年），清人物。籍贯齊河，入仕貢生: 歲貢、常貢、挨貢，曾任典史、訓導。（中国历代人物传记资料库 CBDB 71753） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國禎（CBDB 71753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71753&o=json)
