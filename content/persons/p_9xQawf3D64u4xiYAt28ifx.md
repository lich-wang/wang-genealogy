---
schema: wang-person/v1
id: p_9xQawf3D64u4xiYAt28ifx
status: active
merged_into: null
display_name: 王懷瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RPJPKXH12BqhVbGiSSKAwe
        subject_person_id: p_9xQawf3D64u4xiYAt28ifx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_22Rb1d8eR1NR64NmYmY9Wf
          claim_id: c_RPJPKXH12BqhVbGiSSKAwe
          source_id: s_GzbroBBoybY1Q6F6nphRQ6
          stance: supports
          locator: CBDB:638025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638025）
          source: &a1
            id: s_GzbroBBoybY1Q6F6nphRQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王懷瑜（CBDB 638025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638025&o=json
            external_identifier: CBDB:638025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EN1ahL2qxEU6zr6HMfuSvN
        subject_person_id: p_9xQawf3D64u4xiYAt28ifx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王懷瑜，清人物。籍贯濟南府，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 638025）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GWBRY0xUAFtxr6sm1OxrzR
          claim_id: c_EN1ahL2qxEU6zr6HMfuSvN
          source_id: s_GzbroBBoybY1Q6F6nphRQ6
          stance: supports
          locator: CBDB:638025
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

# 王懷瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷瑜 | accepted |
| bio.summary | 王懷瑜，清人物。籍贯濟南府，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 638025） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懷瑜（CBDB 638025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638025&o=json)
