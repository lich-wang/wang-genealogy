---
schema: wang-person/v1
id: p_HUSPKrBXifuCF7v36gLMRv
status: active
merged_into: null
display_name: 王和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C4hQF3EYvpWJgQx3i624mE
        subject_person_id: p_HUSPKrBXifuCF7v36gLMRv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yHHXDWgJQFYtdGq3uReQB3
          claim_id: c_C4hQF3EYvpWJgQx3i624mE
          source_id: s_5pNBMZCCE7fnqgJMS8xLdr
          stance: supports
          locator: CBDB:559852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（559852）
          source: &a1
            id: s_5pNBMZCCE7fnqgJMS8xLdr
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 559852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=559852&o=json
            external_identifier: CBDB:559852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cN9F2uoVLsBA67FU5N8NxQ
        subject_person_id: p_HUSPKrBXifuCF7v36gLMRv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王和，明人物。籍贯德興，入仕貢生: 選貢(優貢 after 1628)，曾任太常博士、知府、知縣。（中国历代人物传记资料库 CBDB 559852）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CPDjGcEnKkEvi5Q6HNwg21
          claim_id: c_cN9F2uoVLsBA67FU5N8NxQ
          source_id: s_5pNBMZCCE7fnqgJMS8xLdr
          stance: supports
          locator: CBDB:559852
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

# 王和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和 | accepted |
| bio.summary | 王和，明人物。籍贯德興，入仕貢生: 選貢(優貢 after 1628)，曾任太常博士、知府、知縣。（中国历代人物传记资料库 CBDB 559852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 559852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=559852&o=json)
