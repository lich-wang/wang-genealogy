---
schema: wang-person/v1
id: p_KyJs8Cy6DYd8Pcu7cEkerN
status: active
merged_into: null
display_name: 王堃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZyW6UwmkhMRq7YD3Kp2JCL
        subject_person_id: p_KyJs8Cy6DYd8Pcu7cEkerN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bDvWk38EnWmigzAfs2cdEe
          claim_id: c_ZyW6UwmkhMRq7YD3Kp2JCL
          source_id: s_uxQCf1zeFWQ7zTJ6Fj87pz
          stance: supports
          locator: CBDB:341526
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341526）
          source: &a1
            id: s_uxQCf1zeFWQ7zTJ6Fj87pz
            source_type: api_record
            title: 中国历代人物传记资料库：王堃（CBDB 341526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341526&o=json
            external_identifier: CBDB:341526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5ueF3izMDRsxfAz4wLgZcT
        subject_person_id: p_KyJs8Cy6DYd8Pcu7cEkerN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堃，清人物。明清進士進士，籍贯宛平，入仕進士，曾任禮部員外郎、鄉試考官。（中国历代人物传记资料库 CBDB 341526）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2VAMjE7voFmKzMFgP3EDu-
          claim_id: c_5ueF3izMDRsxfAz4wLgZcT
          source_id: s_uxQCf1zeFWQ7zTJ6Fj87pz
          stance: supports
          locator: CBDB:341526
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

# 王堃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堃 | accepted |
| bio.summary | 王堃，清人物。明清進士進士，籍贯宛平，入仕進士，曾任禮部員外郎、鄉試考官。（中国历代人物传记资料库 CBDB 341526） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堃（CBDB 341526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341526&o=json)
