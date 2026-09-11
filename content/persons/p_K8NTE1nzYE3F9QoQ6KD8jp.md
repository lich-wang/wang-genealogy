---
schema: wang-person/v1
id: p_K8NTE1nzYE3F9QoQ6KD8jp
status: active
merged_into: null
display_name: 王德藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7bcfkzzg8i9WeqtXVFT4aC
        subject_person_id: p_K8NTE1nzYE3F9QoQ6KD8jp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SVpZFZckKJky1vJWFE13Qw
          claim_id: c_7bcfkzzg8i9WeqtXVFT4aC
          source_id: s_5dqf2dAVxfjWEYdVNg5hum
          stance: supports
          locator: CBDB:637712
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637712）
          source: &a1
            id: s_5dqf2dAVxfjWEYdVNg5hum
            source_type: api_record
            title: 中国历代人物传记资料库：王德藩（CBDB 637712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637712&o=json
            external_identifier: CBDB:637712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XH6Dscf8RdeDqHzaHe21xn
        subject_person_id: p_K8NTE1nzYE3F9QoQ6KD8jp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王德藩，清人物。籍贯宜昌府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 637712）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hLGc1np4CI_Tz4rV2SxcJy
          claim_id: c_XH6Dscf8RdeDqHzaHe21xn
          source_id: s_5dqf2dAVxfjWEYdVNg5hum
          stance: supports
          locator: CBDB:637712
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

# 王德藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德藩 | accepted |
| bio.summary | 王德藩，清人物。籍贯宜昌府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 637712） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德藩（CBDB 637712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637712&o=json)
