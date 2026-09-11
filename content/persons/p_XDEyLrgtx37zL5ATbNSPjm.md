---
schema: wang-person/v1
id: p_XDEyLrgtx37zL5ATbNSPjm
status: active
merged_into: null
display_name: 王承德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6imswwv1xPpoWQquv1Hvdd
        subject_person_id: p_XDEyLrgtx37zL5ATbNSPjm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RTU8AYJFBWKYwBrK1NNcJf
          claim_id: c_6imswwv1xPpoWQquv1Hvdd
          source_id: s_DP7XpP3pf1Yu7u3Dnry2z8
          stance: supports
          locator: CBDB:638075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638075）
          source: &a1
            id: s_DP7XpP3pf1Yu7u3Dnry2z8
            source_type: api_record
            title: 中国历代人物传记资料库：王承德（CBDB 638075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638075&o=json
            external_identifier: CBDB:638075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2bzkYnu5jDyKpi9g6PBbFx
        subject_person_id: p_XDEyLrgtx37zL5ATbNSPjm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承德，清人物。籍贯甘肅省，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 638075）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XbZQ2L6hZHfWz5bS8nkhEG
          claim_id: c_2bzkYnu5jDyKpi9g6PBbFx
          source_id: s_DP7XpP3pf1Yu7u3Dnry2z8
          stance: supports
          locator: CBDB:638075
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

# 王承德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承德 | accepted |
| bio.summary | 王承德，清人物。籍贯甘肅省，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 638075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承德（CBDB 638075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638075&o=json)
