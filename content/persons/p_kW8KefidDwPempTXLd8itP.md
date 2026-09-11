---
schema: wang-person/v1
id: p_kW8KefidDwPempTXLd8itP
status: active
merged_into: null
display_name: 王鍾九
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GCfHUPCPEoE8akYHLGXRmy
        subject_person_id: p_kW8KefidDwPempTXLd8itP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾九
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JMFqQYdjPEkWm6bd6cJE2V
          claim_id: c_GCfHUPCPEoE8akYHLGXRmy
          source_id: s_B2UFqMiKfx41DtA9hv29fy
          stance: supports
          locator: CBDB:640666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640666）
          source: &a1
            id: s_B2UFqMiKfx41DtA9hv29fy
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾九（CBDB 640666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640666&o=json
            external_identifier: CBDB:640666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gj7KDHCTQxMC6C1wLrVXbL
        subject_person_id: p_kW8KefidDwPempTXLd8itP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾九，清人物。籍贯登州府，入仕附貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640666）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WKGCcfwFKKby6D-S3M-bj-
          claim_id: c_Gj7KDHCTQxMC6C1wLrVXbL
          source_id: s_B2UFqMiKfx41DtA9hv29fy
          stance: supports
          locator: CBDB:640666
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

# 王鍾九

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾九 | accepted |
| bio.summary | 王鍾九，清人物。籍贯登州府，入仕附貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640666） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾九（CBDB 640666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640666&o=json)
