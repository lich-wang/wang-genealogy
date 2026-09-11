---
schema: wang-person/v1
id: p_ZCH3Bgv6Dpe7AkomeHGKhR
status: active
merged_into: null
display_name: 王安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8VF86PkzmxNTwD7y2Wv6ZS
        subject_person_id: p_ZCH3Bgv6Dpe7AkomeHGKhR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qdfMc3DXZ3tiMq6wEnSpAo
          claim_id: c_8VF86PkzmxNTwD7y2Wv6ZS
          source_id: s_CzGXHSiVwZH5BV5hMkcK6V
          stance: supports
          locator: CBDB:126506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126506）
          source: &a1
            id: s_CzGXHSiVwZH5BV5hMkcK6V
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 126506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126506&o=json
            external_identifier: CBDB:126506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4iVfHcyi2DP1BKEA15GB4E
        subject_person_id: p_ZCH3Bgv6Dpe7AkomeHGKhR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安，明人物。籍贯雄縣，身份为宦官。（中国历代人物传记资料库 CBDB 126506）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cvkjr5Yw6EnWpVvf97vIIi
          claim_id: c_4iVfHcyi2DP1BKEA15GB4E
          source_id: s_CzGXHSiVwZH5BV5hMkcK6V
          stance: supports
          locator: CBDB:126506
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

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | 王安，明人物。籍贯雄縣，身份为宦官。（中国历代人物传记资料库 CBDB 126506） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 126506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126506&o=json)
