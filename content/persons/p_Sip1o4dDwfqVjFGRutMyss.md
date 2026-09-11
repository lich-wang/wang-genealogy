---
schema: wang-person/v1
id: p_Sip1o4dDwfqVjFGRutMyss
status: active
merged_into: null
display_name: 王伯昌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w8rb6ycqrzU3ryLjPngyuj
        subject_person_id: p_Sip1o4dDwfqVjFGRutMyss
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1EenttGc5u6EeGQwR9FSV5
          claim_id: c_w8rb6ycqrzU3ryLjPngyuj
          source_id: s_UiBXaDbues5CkyeD5oTFCD
          stance: supports
          locator: CBDB:30488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30488）
          source: &a1
            id: s_UiBXaDbues5CkyeD5oTFCD
            source_type: api_record
            title: 中国历代人物传记资料库：王伯昌（CBDB 30488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30488&o=json
            external_identifier: CBDB:30488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cQij8fLrSxyKW5QL7JBHqD
        subject_person_id: p_Sip1o4dDwfqVjFGRutMyss
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯昌，宋人物。籍贯石埭，曾任中散大夫。（中国历代人物传记资料库 CBDB 30488）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3bfedA9rEjJl5KbG4mTdA-
          claim_id: c_cQij8fLrSxyKW5QL7JBHqD
          source_id: s_UiBXaDbues5CkyeD5oTFCD
          stance: supports
          locator: CBDB:30488
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
  ancestors:
    - claim:
        id: c_Bk3DmEiUjLUUBgVX-nx4CQ
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Sip1o4dDwfqVjFGRutMyss
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sbDUWrzoSo_2dI7GnZj5Zk
          claim_id: c_Bk3DmEiUjLUUBgVX-nx4CQ
          source_id: s_UiBXaDbues5CkyeD5oTFCD
          stance: supports
          locator: CBDB 双向互证（祖父 王鎡 ⇄ 孫 王伯昌）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_zGcbQEDDUm5Y71RMcWUTgh
        status: active
        display_name: 王鎡
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王伯昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯昌 | accepted |
| bio.summary | 王伯昌，宋人物。籍贯石埭，曾任中散大夫。（中国历代人物传记资料库 CBDB 30488） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_zGcbQEDDUm5Y71RMcWUTgh | 王鎡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯昌（CBDB 30488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30488&o=json)
