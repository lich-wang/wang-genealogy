---
schema: wang-person/v1
id: p_1LRyyxGzPo2B3xWcqzSXqP
status: active
merged_into: null
display_name: 王衍治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_64Ft8C8R1Re1eGbb4y8Qq9
        subject_person_id: p_1LRyyxGzPo2B3xWcqzSXqP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jTz8WXHY8y6QQ2E28ZhKHH
          claim_id: c_64Ft8C8R1Re1eGbb4y8Qq9
          source_id: s_hA3gsAv4TLFE4JF77E7wdw
          stance: supports
          locator: CBDB:574510
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574510）
          source: &a1
            id: s_hA3gsAv4TLFE4JF77E7wdw
            source_type: api_record
            title: 中国历代人物传记资料库：王衍治（CBDB 574510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574510&o=json
            external_identifier: CBDB:574510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3SvTC7LoTrLbNezRooTqAq
        subject_person_id: p_1LRyyxGzPo2B3xWcqzSXqP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍治，明人物。籍贯廣濟，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 574510）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UL91qfikrFJXzxfnPVhXtj
          claim_id: c_3SvTC7LoTrLbNezRooTqAq
          source_id: s_hA3gsAv4TLFE4JF77E7wdw
          stance: supports
          locator: CBDB:574510
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

# 王衍治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍治 | accepted |
| bio.summary | 王衍治，明人物。籍贯廣濟，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 574510） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衍治（CBDB 574510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574510&o=json)
