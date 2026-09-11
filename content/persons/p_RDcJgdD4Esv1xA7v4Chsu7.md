---
schema: wang-person/v1
id: p_RDcJgdD4Esv1xA7v4Chsu7
status: active
merged_into: null
display_name: 王祁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DMjLHT64JG3pXhgbViYeh7
        subject_person_id: p_RDcJgdD4Esv1xA7v4Chsu7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jY3vK1inYCGsf6odFi4qPw
          claim_id: c_DMjLHT64JG3pXhgbViYeh7
          source_id: s_v2uVpfyDprE2S4YtFczfq4
          stance: supports
          locator: CBDB:698647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698647）
          source: &a1
            id: s_v2uVpfyDprE2S4YtFczfq4
            source_type: api_record
            title: 中国历代人物传记资料库：王祁（CBDB 698647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698647&o=json
            external_identifier: CBDB:698647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_81B4nfshDHnWoDYn1XzeHG
        subject_person_id: p_RDcJgdD4Esv1xA7v4Chsu7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祁，明人物。籍贯金壇。（中国历代人物传记资料库 CBDB 698647）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1yI3hvY9L6AEl0PA43CuhB
          claim_id: c_81B4nfshDHnWoDYn1XzeHG
          source_id: s_v2uVpfyDprE2S4YtFczfq4
          stance: supports
          locator: CBDB:698647
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

# 王祁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祁 | accepted |
| bio.summary | 王祁，明人物。籍贯金壇。（中国历代人物传记资料库 CBDB 698647） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祁（CBDB 698647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698647&o=json)
