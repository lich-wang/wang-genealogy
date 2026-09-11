---
schema: wang-person/v1
id: p_wZwmi9zAhfauE72DJjXzGE
status: active
merged_into: null
display_name: 王步衢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rskXngmByC1FZZCRu9GZXr
        subject_person_id: p_wZwmi9zAhfauE72DJjXzGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王步衢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x7jqKt9oTHN4fFEcSsPV2W
          claim_id: c_rskXngmByC1FZZCRu9GZXr
          source_id: s_wftBeU7rSR8p5t7sBGmJoi
          stance: supports
          locator: CBDB:638916
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638916）
          source: &a1
            id: s_wftBeU7rSR8p5t7sBGmJoi
            source_type: api_record
            title: 中国历代人物传记资料库：王步衢（CBDB 638916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638916&o=json
            external_identifier: CBDB:638916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Znwb9H19ygDPYL2WBFUyZH
        subject_person_id: p_wZwmi9zAhfauE72DJjXzGE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王步衢，清人物。籍贯漢中府，入仕鄉貢舉人，曾任學正、訓導。（中国历代人物传记资料库 CBDB 638916）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1PE8UQWILlzsGuF846_J3t
          claim_id: c_Znwb9H19ygDPYL2WBFUyZH
          source_id: s_wftBeU7rSR8p5t7sBGmJoi
          stance: supports
          locator: CBDB:638916
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

# 王步衢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王步衢 | accepted |
| bio.summary | 王步衢，清人物。籍贯漢中府，入仕鄉貢舉人，曾任學正、訓導。（中国历代人物传记资料库 CBDB 638916） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王步衢（CBDB 638916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638916&o=json)
