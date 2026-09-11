---
schema: wang-person/v1
id: p_Jzb5KE6MqsnDSu8jzwyzK9
status: active
merged_into: null
display_name: 王造
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aMGocQcQVo8m8gBZxCv4pY
        subject_person_id: p_Jzb5KE6MqsnDSu8jzwyzK9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王造
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iv7ABodSEuzCCMmbyq6QeD
          claim_id: c_aMGocQcQVo8m8gBZxCv4pY
          source_id: s_fpXCf5fmmoyTTJ3CYWjXkj
          stance: supports
          locator: CBDB:501765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501765）
          source: &a1
            id: s_fpXCf5fmmoyTTJ3CYWjXkj
            source_type: api_record
            title: 中国历代人物传记资料库：王造（CBDB 501765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501765&o=json
            external_identifier: CBDB:501765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2DVLBQAgBeJxLP2bJmfZRZ
        subject_person_id: p_Jzb5KE6MqsnDSu8jzwyzK9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王造，明人物。入仕鄉貢舉人，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 501765）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9mM63Uhgn10ldMn2nVmHK8
          claim_id: c_2DVLBQAgBeJxLP2bJmfZRZ
          source_id: s_fpXCf5fmmoyTTJ3CYWjXkj
          stance: supports
          locator: CBDB:501765
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

# 王造

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王造 | accepted |
| bio.summary | 王造，明人物。入仕鄉貢舉人，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 501765） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王造（CBDB 501765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501765&o=json)
