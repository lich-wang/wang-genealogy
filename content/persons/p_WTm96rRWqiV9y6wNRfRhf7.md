---
schema: wang-person/v1
id: p_WTm96rRWqiV9y6wNRfRhf7
status: active
merged_into: null
display_name: 王元春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m4KqKnM7iBdpc2iR6BVGr9
        subject_person_id: p_WTm96rRWqiV9y6wNRfRhf7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2c3NEtAHeX4GZVXUWxsfD3
          claim_id: c_m4KqKnM7iBdpc2iR6BVGr9
          source_id: s_X1AzyAHNyw1W7HZ1t8L4Yo
          stance: supports
          locator: CBDB:38019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38019）
          source: &a1
            id: s_X1AzyAHNyw1W7HZ1t8L4Yo
            source_type: api_record
            title: 中国历代人物传记资料库：王元春（CBDB 38019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38019&o=json
            external_identifier: CBDB:38019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wd17tPHmxDtUxZfmsCw8CS
        subject_person_id: p_WTm96rRWqiV9y6wNRfRhf7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元春，宋人物。籍贯邵陽，身份为史學家，入仕進士，曾任少卿、駙馬都尉、中大夫。（中国历代人物传记资料库 CBDB 38019）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b6C03Vl35PqQESmwyqwivh
          claim_id: c_wd17tPHmxDtUxZfmsCw8CS
          source_id: s_X1AzyAHNyw1W7HZ1t8L4Yo
          stance: supports
          locator: CBDB:38019
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

# 王元春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元春 | accepted |
| bio.summary | 王元春，宋人物。籍贯邵陽，身份为史學家，入仕進士，曾任少卿、駙馬都尉、中大夫。（中国历代人物传记资料库 CBDB 38019） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元春（CBDB 38019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38019&o=json)
