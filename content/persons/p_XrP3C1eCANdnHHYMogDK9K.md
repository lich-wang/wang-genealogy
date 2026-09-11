---
schema: wang-person/v1
id: p_XrP3C1eCANdnHHYMogDK9K
status: active
merged_into: null
display_name: 王寅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jX61zERsAA8HYKnMM6zzqP
        subject_person_id: p_XrP3C1eCANdnHHYMogDK9K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6m5yQ54BFnft1TA6WUya7L
          claim_id: c_jX61zERsAA8HYKnMM6zzqP
          source_id: s_QEkxsdkZfeNqphBP5WGUG1
          stance: supports
          locator: CBDB:38012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38012）
          source: &a1
            id: s_QEkxsdkZfeNqphBP5WGUG1
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 38012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38012&o=json
            external_identifier: CBDB:38012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_77Qqd1ZxZ3VKHXBaWts7gH
        subject_person_id: p_XrP3C1eCANdnHHYMogDK9K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅，宋人物。籍贯江州。（中国历代人物传记资料库 CBDB 38012）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1UGegqu2CLAoJSaOWx_q8j
          claim_id: c_77Qqd1ZxZ3VKHXBaWts7gH
          source_id: s_QEkxsdkZfeNqphBP5WGUG1
          stance: supports
          locator: CBDB:38012
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

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| bio.summary | 王寅，宋人物。籍贯江州。（中国历代人物传记资料库 CBDB 38012） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寅（CBDB 38012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38012&o=json)
