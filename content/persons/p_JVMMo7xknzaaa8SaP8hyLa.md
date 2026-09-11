---
schema: wang-person/v1
id: p_JVMMo7xknzaaa8SaP8hyLa
status: active
merged_into: null
display_name: 王用霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BnxCGndzUWNAWzyFKroRZE
        subject_person_id: p_JVMMo7xknzaaa8SaP8hyLa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_poKkJqKQLhNjsshg4BQJx2
          claim_id: c_BnxCGndzUWNAWzyFKroRZE
          source_id: s_N9sGCh9Q4DTqqciQGJMmK9
          stance: supports
          locator: CBDB:438959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（438959）
          source: &a1
            id: s_N9sGCh9Q4DTqqciQGJMmK9
            source_type: api_record
            title: 中国历代人物传记资料库：王用霖（CBDB 438959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438959&o=json
            external_identifier: CBDB:438959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zQRZ8PeeRoWWCfgZWfTJNd
        subject_person_id: p_JVMMo7xknzaaa8SaP8hyLa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王用霖，清人物。籍贯廣寧，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)。（中国历代人物传记资料库 CBDB 438959）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r1gyUK213rXGnbv9NPvE3k
          claim_id: c_zQRZ8PeeRoWWCfgZWfTJNd
          source_id: s_N9sGCh9Q4DTqqciQGJMmK9
          stance: supports
          locator: CBDB:438959
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

# 王用霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用霖 | accepted |
| bio.summary | 王用霖，清人物。籍贯廣寧，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)。（中国历代人物传记资料库 CBDB 438959） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用霖（CBDB 438959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438959&o=json)
