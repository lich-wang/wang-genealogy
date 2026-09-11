---
schema: wang-person/v1
id: p_PAqG8WY4EUvTnWZgn92GKT
status: active
merged_into: null
display_name: 王洪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bJk921NdhN2Jd8cMfkm85S
        subject_person_id: p_PAqG8WY4EUvTnWZgn92GKT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v1PzBdxE1Y4JL6Vs2sDv1P
          claim_id: c_bJk921NdhN2Jd8cMfkm85S
          source_id: s_Bvp5NaJ8sRNHF18M6GajRE
          stance: supports
          locator: CBDB:39627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39627）
          source: &a1
            id: s_Bvp5NaJ8sRNHF18M6GajRE
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 39627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39627&o=json
            external_identifier: CBDB:39627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pgwpkcF6Gq1FT7rGvS6BQk
        subject_person_id: p_PAqG8WY4EUvTnWZgn92GKT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1151年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qEsatH79v39XQRDT7WY42P
          claim_id: c_pgwpkcF6Gq1FT7rGvS6BQk
          source_id: s_Bvp5NaJ8sRNHF18M6GajRE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MHb8Sv18i86dfyDJVbFCsv
        subject_person_id: p_PAqG8WY4EUvTnWZgn92GKT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1221年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKaYAtGcoz71GK1dio36Nm
          claim_id: c_MHb8Sv18i86dfyDJVbFCsv
          source_id: s_Bvp5NaJ8sRNHF18M6GajRE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BVDSjkPKpAwGYYJHco832e
        subject_person_id: p_PAqG8WY4EUvTnWZgn92GKT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪（1151年—1221年），宋人物。籍贯金壇，身份为鄉先生。（中国历代人物传记资料库 CBDB 39627）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BvzrDi__gxaL1I35xR0pNp
          claim_id: c_BVDSjkPKpAwGYYJHco832e
          source_id: s_Bvp5NaJ8sRNHF18M6GajRE
          stance: supports
          locator: CBDB:39627
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

# 王洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪 | accepted |
| birth.date | 1151年 | accepted |
| death.date | 1221年 | accepted |
| bio.summary | 王洪（1151年—1221年），宋人物。籍贯金壇，身份为鄉先生。（中国历代人物传记资料库 CBDB 39627） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洪（CBDB 39627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39627&o=json)
