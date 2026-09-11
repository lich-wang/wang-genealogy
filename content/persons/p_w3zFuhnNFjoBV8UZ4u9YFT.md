---
schema: wang-person/v1
id: p_w3zFuhnNFjoBV8UZ4u9YFT
status: active
merged_into: null
display_name: 王亮臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oz6TuUB5HsgBu83sTvUbfa
        subject_person_id: p_w3zFuhnNFjoBV8UZ4u9YFT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YHdg6yNghBhmhtdwQRihAM
          claim_id: c_oz6TuUB5HsgBu83sTvUbfa
          source_id: s_6ix1HMxkCKhhbX7hn8HbvB
          stance: supports
          locator: CBDB:635868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635868）
          source: &a1
            id: s_6ix1HMxkCKhhbX7hn8HbvB
            source_type: api_record
            title: 中国历代人物传记资料库：王亮臣（CBDB 635868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635868&o=json
            external_identifier: CBDB:635868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JAVL1P4eXpokmikEpyT1Np
        subject_person_id: p_w3zFuhnNFjoBV8UZ4u9YFT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮臣，清人物。籍贯貴陽府，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 635868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vbsM44wilncIBuab5MIUwt
          claim_id: c_JAVL1P4eXpokmikEpyT1Np
          source_id: s_6ix1HMxkCKhhbX7hn8HbvB
          stance: supports
          locator: CBDB:635868
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

# 王亮臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮臣 | accepted |
| bio.summary | 王亮臣，清人物。籍贯貴陽府，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 635868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亮臣（CBDB 635868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635868&o=json)
