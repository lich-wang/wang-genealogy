---
schema: wang-person/v1
id: p_NHJFL7U9K5yapGkB8YJLRX
status: active
merged_into: null
display_name: 王庚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5JBGdENbBz8NQQ1EpaGPwS
        subject_person_id: p_NHJFL7U9K5yapGkB8YJLRX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D5RgAQ3Zfg3wJKbA9KUtP5
          claim_id: c_5JBGdENbBz8NQQ1EpaGPwS
          source_id: s_YFzU6h9fExcHgE69NHFCyC
          stance: supports
          locator: CBDB:576101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576101）
          source: &a1
            id: s_YFzU6h9fExcHgE69NHFCyC
            source_type: api_record
            title: 中国历代人物传记资料库：王庚（CBDB 576101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576101&o=json
            external_identifier: CBDB:576101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nhUrFTzK5H3We8NyfZrrJ1
        subject_person_id: p_NHJFL7U9K5yapGkB8YJLRX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚，清人物。籍贯巫山，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576101）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8kCFuUsdFU6WhWyoMBbNxH
          claim_id: c_nhUrFTzK5H3We8NyfZrrJ1
          source_id: s_YFzU6h9fExcHgE69NHFCyC
          stance: supports
          locator: CBDB:576101
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

# 王庚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庚 | accepted |
| bio.summary | 王庚，清人物。籍贯巫山，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576101） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庚（CBDB 576101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576101&o=json)
