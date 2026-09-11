---
schema: wang-person/v1
id: p_sNVij7JUenEgzfczV7NsLd
status: active
merged_into: null
display_name: 王念典
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JUFfx5Rv2brq2rCng4nwFt
        subject_person_id: p_sNVij7JUenEgzfczV7NsLd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念典
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bbtcWZ9gVSFAVqTB5Md2Yq
          claim_id: c_JUFfx5Rv2brq2rCng4nwFt
          source_id: s_CrWCT36XMKkA5C8u4cKXHm
          stance: supports
          locator: CBDB:637789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637789）
          source: &a1
            id: s_CrWCT36XMKkA5C8u4cKXHm
            source_type: api_record
            title: 中国历代人物传记资料库：王念典（CBDB 637789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637789&o=json
            external_identifier: CBDB:637789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fHQPq4GmdFT8z4wJgGBHtA
        subject_person_id: p_sNVij7JUenEgzfczV7NsLd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念典，清人物。籍贯皋蘭，曾任典史。（中国历代人物传记资料库 CBDB 637789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_76_ee3C9fW8a12uMstoRxl
          claim_id: c_fHQPq4GmdFT8z4wJgGBHtA
          source_id: s_CrWCT36XMKkA5C8u4cKXHm
          stance: supports
          locator: CBDB:637789
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

# 王念典

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王念典 | accepted |
| bio.summary | 王念典，清人物。籍贯皋蘭，曾任典史。（中国历代人物传记资料库 CBDB 637789） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王念典（CBDB 637789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637789&o=json)
